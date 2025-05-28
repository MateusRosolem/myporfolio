
export type Language = 'pt' | 'en';

export interface TranslatableString {
  [key: string]: string; // Allows { en: 'English', pt: 'Português' }
}

export interface TranslatableStringArray {
  [key: string]: string[];
}

export interface Project {
  id: string;
  title: TranslatableString;
  description: TranslatableString;
  imageUrl: string;
  technologies: string[]; // Technology names are generally not translated
  githubLink?: string;
  liveLink?: string;
}

export interface Skill {
  id:string;
  name: string; // Skill names like 'Java', 'React' usually remain untranslated
  category: TranslatableString; // Categories like 'Linguagem', 'Framework' will be translated
  icon?: React.ReactElement<{ className?: string }>;
}

export interface NavItem {
  name: TranslatableString;
  href: string;
}

export interface Experience {
  id: string;
  title: TranslatableString;
  company: string; // Company names usually remain untranslated
  companyLink?: string;
  period: string; // Period might need translation if it contains month names, or keep it simple
  description: TranslatableStringArray;
  logo?: React.ReactNode;
}
