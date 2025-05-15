export interface HeroSectionType {
  id: string;
  title: string;
  description?: string; // Description is optional
  imageUrl?: string; // Image URL is optional
}

export interface WhoWeAreSectionType {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface MissionAndVisionSectionType {
  id: string;
  mission: string;
  vision: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface LeadersSectionType {
  id: string;
  username: string;
  description: string;
  imageUrl: string;
  createdAt: Date;
  updatedAt: Date;
}
export interface NewsType {
  id: string;
  title: string;
  content: string;
  caption: string;
  slug: string;
  featuredImageUrl: string;
  createdAt: string; // Or Date, if you want to parse it as a Date object
}

export interface FaqType {
  id: string;
  question: string;
  answer: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface PageType {
  id: string;
  title: string;
  description?: string;
  featuredImageUrl?: string;
  pageName: string;
  createdAt: Date;
  updatedAt: Date;
}
