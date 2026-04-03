import { readFileSync, writeFileSync, readdirSync } from "fs";
import { join, basename } from "path";

const ROOT = "e:/cod/kazino-online-ozbek";

// Filename → slug mapping
function fileToSlug(filename, locale) {
  const name = basename(filename, ".txt");
  if (locale === "uz") return name.replace(/-sharhi$/, "");
  if (locale === "ru") return name.replace(/-обзор$/, "").replace(/обзор$/, "");
  return name;
}

// Pros/cons label patterns (uz + ru)
const PROS_LABELS = /^(Kuchli tomonlar|Afzalliklar|Ijobiy tomonlar|Сильные стороны|Преимущества|Плюсы|Достоинства)\s*:?\s*$/i;
const CONS_LABELS = /^(Zaif tomonlar|Kamchiliklar|Salbiy tomonlar|Слабые стороны|Недостатки|Минусы|Недостатки)\s*:?\s*$/i;
// Tip/advice label patterns
const TIP_LABELS = /^(Amaliy tavsiya|Xulosa|Muhim|Eslatma|Практический|Краткий вывод|Важно|Совет|Примечание|Итог)\s*[:：]/i;

// Is this line a standalone "label" ending with colon (not too long)?
function isLabel(line) {
  const trimmed = line.trim();
  return (
    trimmed.length > 2 &&
    trimmed.length < 90 &&
    trimmed.endsWith(":") &&
    !trimmed.startsWith("-") &&
    !trimmed.startsWith("<") &&
    !trimmed.startsWith("#")
  );
}

// Convert inline markdown: **bold**, [text](url)
function convertInline(text) {
  text = text.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2">$1</a>'
  );
  text = text.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  return text;
}

// Convert section body markdown+html → clean HTML with article-body classes
function mdToHtml(text) {
  const lines = text.split("\n");
  const out = [];

  // State
  let inUl = false;
  let inTable = false;
  let tableBuffer = [];
  let pendingLabel = null;   // label line waiting to see if followed by bullets
  let pendingLabelType = "neutral"; // "pros" | "cons" | "neutral"
  let tipBuffer = [];        // for tip callout (single line tip after TIP_LABELS)
  let inTip = false;

  const flushUl = () => {
    if (inUl) {
      out.push("</ul>");
      if (pendingLabel !== null) {
        // close callout if we were in one
        if (pendingLabelType === "pros") out.push("</div></div>");
        else if (pendingLabelType === "cons") out.push("</div></div>");
        else {
          // neutral label + list — no extra wrapper
        }
        pendingLabel = null;
        pendingLabelType = "neutral";
      }
      inUl = false;
    }
  };

  const flushTable = () => {
    if (inTable) {
      const tableHtml = tableBuffer.join("\n");
      out.push(`<div class="table-overflow">${tableHtml}</div>`);
      tableBuffer = [];
      inTable = false;
    }
  };

  const flushPendingLabel = () => {
    if (pendingLabel !== null) {
      out.push(`<p class="article-label">${convertInline(pendingLabel)}</p>`);
      pendingLabel = null;
      pendingLabelType = "neutral";
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const raw = lines[i];
    const line = raw.trimEnd();

    // ── HTML table (may span multiple lines) ──────────────────────────
    if (line.trim().startsWith("<table")) {
      flushUl();
      flushPendingLabel();
      inTable = true;
      tableBuffer.push(line);
      if (line.includes("</table>")) { flushTable(); }
      continue;
    }
    if (inTable) {
      tableBuffer.push(line);
      if (line.includes("</table>")) { flushTable(); }
      continue;
    }

    // ── H3 ────────────────────────────────────────────────────────────
    if (line.startsWith("### ")) {
      flushUl();
      flushPendingLabel();
      const heading = convertInline(line.slice(4).trim());
      out.push(`<h3>${heading}</h3>`);
      continue;
    }

    // ── Bullet list item ──────────────────────────────────────────────
    if (line.match(/^[-•]\s+/)) {
      if (!inUl) {
        // Decide if we open a callout or plain ul
        if (pendingLabel !== null) {
          if (pendingLabelType === "pros") {
            out.push(`<div class="callout-pros"><div class="callout-title">${convertInline(pendingLabel)}</div><ul>`);
          } else if (pendingLabelType === "cons") {
            out.push(`<div class="callout-cons"><div class="callout-title">${convertInline(pendingLabel)}</div><ul>`);
          } else {
            out.push(`<p class="article-label">${convertInline(pendingLabel)}</p><ul>`);
          }
          pendingLabel = null;
        } else {
          out.push("<ul>");
        }
        inUl = true;
      }
      const item = convertInline(line.replace(/^[-•]\s+/, "").trim());
      out.push(`<li>${item}</li>`);
      continue;
    }

    // ── Non-bullet line: flush any open list ─────────────────────────
    flushUl();

    // ── Empty line ────────────────────────────────────────────────────
    if (line.trim() === "") {
      // Don't emit anything — just a spacer
      continue;
    }

    // ── Check for PROS label ──────────────────────────────────────────
    if (PROS_LABELS.test(line.trim())) {
      flushPendingLabel();
      pendingLabel = line.trim().replace(/:$/, "");
      pendingLabelType = "pros";
      continue;
    }

    // ── Check for CONS label ──────────────────────────────────────────
    if (CONS_LABELS.test(line.trim())) {
      flushPendingLabel();
      pendingLabel = line.trim().replace(/:$/, "");
      pendingLabelType = "cons";
      continue;
    }

    // ── Check for TIP label (inline tip pattern "Amaliy tavsiya: text") ──
    const tipMatch = line.trim().match(/^(Amaliy tavsiya|Xulosa qilib|Краткий вывод|Практический вывод|Практический минимум|Практически|Важно отметить)[\s:]+(.*)/i);
    if (tipMatch && line.trim().length < 400) {
      flushPendingLabel();
      const tipContent = convertInline(
        `<strong>${tipMatch[1]}:</strong> ${tipMatch[2].trim()}`
      );
      out.push(`<div class="callout-tip">${tipContent}</div>`);
      continue;
    }

    // ── Generic label line ending with ":" ────────────────────────────
    if (isLabel(line.trim())) {
      flushPendingLabel();
      pendingLabel = line.trim().replace(/:$/, "");
      pendingLabelType = "neutral";
      continue;
    }

    // ── Regular paragraph ─────────────────────────────────────────────
    flushPendingLabel();
    const converted = convertInline(line.trim());
    if (converted) {
      out.push(`<p>${converted}</p>`);
    }
  }

  flushUl();
  flushTable();
  flushPendingLabel();

  return out.join("\n");
}

// ── Parse a single text file ──────────────────────────────────────────
function parseArticle(filePath) {
  const content = readFileSync(filePath, "utf-8");
  const lines = content.split("\n");

  let metaTitle = "";
  let metaDescription = "";
  let sections = [];
  let currentSection = null;
  let currentLines = [];

  for (const line of lines) {
    const titleMatch = line.match(/^\*\*Title:\*\*\s*(.+)/);
    if (titleMatch) { metaTitle = titleMatch[1].trim(); continue; }

    const descMatch = line.match(/^\s*\*\*Description:\*\*\s*(.+)/);
    if (descMatch) { metaDescription = descMatch[1].trim(); continue; }

    // Skip H1
    if (line.startsWith("# ") && !line.startsWith("## ")) continue;

    // New H2 section
    if (line.startsWith("## ")) {
      if (currentSection !== null) {
        currentSection.bodyHtml = mdToHtml(currentLines.join("\n"));
        sections.push(currentSection);
      }
      const heading = line.slice(3).trim();
      const id = slugify(heading);
      currentSection = { id, heading, bodyHtml: "" };
      currentLines = [];
      continue;
    }

    if (currentSection !== null) {
      currentLines.push(line);
    }
  }

  if (currentSection !== null) {
    currentSection.bodyHtml = mdToHtml(currentLines.join("\n"));
    sections.push(currentSection);
  }

  return { metaTitle, metaDescription, sections };
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 50);
}

function escapeForTemplateLiteral(str) {
  return str.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");
}

// ── Generate TypeScript file for a locale ────────────────────────────
function generateTs(locale, dirPath) {
  const files = readdirSync(dirPath).filter((f) => f.endsWith(".txt"));
  const entries = [];

  for (const file of files) {
    const slug = fileToSlug(file, locale);
    const filePath = join(dirPath, file);
    const article = parseArticle(filePath);

    const sectionsStr = article.sections
      .map((s) => {
        const safeHtml = escapeForTemplateLiteral(s.bodyHtml);
        const safeHeading = s.heading.replace(/'/g, "\\'");
        return `    {
      id: '${s.id}',
      heading: '${safeHeading}',
      bodyHtml: \`${safeHtml}\`,
    }`;
      })
      .join(",\n");

    const safeTitle = escapeForTemplateLiteral(article.metaTitle);
    const safeDesc = escapeForTemplateLiteral(article.metaDescription);

    entries.push(`  '${slug}': {
    metaTitle: \`${safeTitle}\`,
    metaDescription: \`${safeDesc}\`,
    sections: [
${sectionsStr}
    ],
  }`);
  }

  const capLocale = locale.charAt(0).toUpperCase() + locale.slice(1);
  const ts = `// AUTO-GENERATED — do not edit manually
// Source: ${locale}/*.txt

export interface ArticleSection {
  id: string;
  heading: string;
  bodyHtml: string;
}

export interface ArticleContent {
  metaTitle: string;
  metaDescription: string;
  sections: ArticleSection[];
}

export const articles${capLocale}: Record<string, ArticleContent> = {
${entries.join(",\n")}
};

export function getArticle${capLocale}(slug: string): ArticleContent | undefined {
  return articles${capLocale}[slug];
}
`;

  const outPath = join(ROOT, "src/content", `articles-${locale}.ts`);
  writeFileSync(outPath, ts, "utf-8");
  console.log(`Written: ${outPath} (${files.length} brands)`);
}

generateTs("uz", join(ROOT, "uz"));
generateTs("ru", join(ROOT, "ru"));
console.log("Done!");
