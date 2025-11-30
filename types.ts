export interface TeamMember {
  name: string;
  role: string;
  skills: string[];
  image: string;
  links: {
    linkedin?: string;
    github?: string;
    portfolio?: string;
  };
}

export enum RoadmapStatus {
  COMPLETED = 'Completed',
  IN_PROGRESS = 'In Progress',
  PLANNED = 'Planned'
}

export interface RoadmapItem {
  phase: string;
  title: string;
  description: string;
  status: RoadmapStatus;
  date: string;
}

export interface TransactionAnalysis {
  merchantName: string;
  category: string;
  subCategory: string;
  isSubscription: boolean;
  sentiment: string;
  confidenceScore: number;
}
