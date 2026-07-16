export type CaseImage = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export type CaseLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type CaseMetaItem = {
  label: string;
  value: string | string[];
};

export type CaseHeroData = {
  eyebrow?: string;
  title: string;
  description: string;

  background: string;
  mobile: string;
  divider: string;

  role: string | string[];
  tools: string[];
  type: string;
};

export type CaseChallengeData = {
  eyebrow?: string;
  title: string;
  description: string;
  goals?: string[];
  image?: CaseImage;
};

export type CaseResearchItem = {
  title: string;
  description?: string;
  image?: CaseImage;
};

export type CaseResearchData = {
  eyebrow?: string;
  title: string;
  description?: string;
  items: CaseResearchItem[];
};

export type CaseProcessStep = {
  title: string;
  description: string;
  image?: CaseImage;
};

export type CaseProcessData = {
  eyebrow?: string;
  title: string;
  description?: string;
  steps: CaseProcessStep[];
};

export type CaseHighlight = {
  title: string;
  description: string;
  image?: CaseImage;
};

export type CaseDesignHighlightsData = {
  eyebrow?: string;
  title: string;
  description?: string;
  highlights: CaseHighlight[];
};

export type CasePlatformScreen = {
  title: string;
  description?: string;
  image: CaseImage;
};

export type CasePlatformData = {
  eyebrow?: string;
  title: string;
  description?: string;
  screens: CasePlatformScreen[];
};

export type CaseTechnology = {
  name: string;
  description?: string;
  icon?: CaseImage;
};

export type CaseImplementationData = {
  eyebrow?: string;
  title: string;
  description?: string;
  technologies: CaseTechnology[];
  features?: string[];
};

export type CaseReflectionData = {
  eyebrow?: string;
  title: string;
  description?: string;
  learned?: string[];
  challenges?: string[];
  improvements?: string[];
};

export type CaseNavigationProject = {
  slug: string;
  title: string;
  image?: CaseImage;
};

export type CaseNavigationData = {
  previous?: CaseNavigationProject;
  next?: CaseNavigationProject;
};

export type CaseStudy = {
  slug: string;

  hero: CaseHeroData;

  challenge?: CaseChallengeData;
  research?: CaseResearchData;
  process?: CaseProcessData;
  designHighlights?: CaseDesignHighlightsData;
  platform?: CasePlatformData;
  implementation?: CaseImplementationData;
  reflection?: CaseReflectionData;
  navigation?: CaseNavigationData;
};
