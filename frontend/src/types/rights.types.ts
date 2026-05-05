/**
 * Rights Types
 * Defines all TypeScript interfaces for LGBTQ+ rights information
 */

import { LucideIcon } from "lucide-react";

export interface RightDetail {
  icon: LucideIcon;
  title: string;
  description: string;
  colorBg: string;
  colorText: string;
  category: string;
  detailedInfo: {
    overview: string;
    protections: string[];
    applicableLaws: string[];
    whatToDo: string;
    resources: string[];
  };
}

export interface LawDetail {
  title: string;
  jurisdiction: string;
  type: string;
  summary: string;
  impact: string;
  year: string;
  fullExplanation: string;
  keyPoints: string[];
  whatItMeans: string;
  resources?: { name: string; url: string }[];
}

export interface TerminologyItem {
  term: string;
  full: string;
  definition: string;
  example?: string;
  legal: string;
}
