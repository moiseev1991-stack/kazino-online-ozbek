import Image from "next/image";
import type { InfoPage } from "@/content/pages-info";
import Breadcrumbs from "./Breadcrumbs";

interface InfoPageTemplateProps {
  page: InfoPage;
}

const IMAGE_MARKER = /^\[IMAGE:([^|]+)\|([^\]]+)\]$/;

export default function InfoPageTemplate({ page }: InfoPageTemplateProps) {
  const paragraphs = page.body.split("\n\n").filter(Boolean);

  return (
    <div className="bg-white">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumbs items={page.breadcrumbs} />

      <h1 className="text-3xl font-bold text-gray-900 mb-6">{page.heading}</h1>

      <div className="prose prose-blue max-w-none">
        {paragraphs.map((para, index) => {
          const imageMatch = para.match(IMAGE_MARKER);
          if (imageMatch) {
            const [, src, alt] = imageMatch;
            return (
              <div key={index} className="my-6 flex justify-center">
                <Image
                  src={src}
                  alt={alt}
                  width={480}
                  height={600}
                  className="rounded-xl border border-gray-200 shadow-md h-auto max-w-full"
                />
              </div>
            );
          }
          if (para.startsWith("**") && para.endsWith("**")) {
            return (
              <h2 key={index} className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                {para.replace(/\*\*/g, "")}
              </h2>
            );
          }
          if (para.startsWith("**")) {
            const parts = para.split("**");
            return (
              <div key={index} className="mb-4">
                {parts.map((part, i) =>
                  i % 2 === 1 ? (
                    <strong key={i}>{part}</strong>
                  ) : (
                    <span key={i}>{part}</span>
                  )
                )}
              </div>
            );
          }
          return (
            <p key={index} className="text-gray-600 leading-relaxed mb-4">
              {para}
            </p>
          );
        })}
      </div>
    </div>
    </div>
  );
}
