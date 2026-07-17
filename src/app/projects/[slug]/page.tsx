import { notFound } from "next/navigation";
import { CaseHero } from "@/components/case/CaseHero/CaseHero";
import CaseChallenge from "@/components/case/CaseChallenge/CaseChallenge";

import { caseStudies, getCaseStudyBySlug } from "@/data/caseStudies";

type CaseStudyPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return caseStudies.map((caseStudy) => ({
    slug: caseStudy.slug,
  }));
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <main>
      <CaseHero data={caseStudy.hero} />

      <CaseChallenge data={caseStudy.challenge} />
    </main>
  );
}
