import { notFound } from "next/navigation";
import { redirects, getRedirect } from "@/content/redirects";
import GoRedirect from "./GoRedirect";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return redirects.map((r) => ({ slug: r.slug }));
}

export default async function GoPage({ params }: Props) {
  const { slug } = await params;
  const item = getRedirect(slug);

  if (!item) notFound();

  return <GoRedirect target={item.target} />;
}
