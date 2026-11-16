export interface Experience {
  organization: string;
  organizationUrl: string;
  role: string;
  startDate: string;
  endDate: string;
  summary: string;
}

export interface Education {
  institution: string;
  qualification: string;
  startDate: string;
  endDate: string;
}

export const experience: Experience[] = [
  {
    organization: 'P3 Group',
    organizationUrl: 'https://www.p3-group.com',
    role: 'Embedded Engineer',
    startDate: 'TODO: Add start date',
    endDate: 'Present',
    summary: 'TODO: Add role responsibilities and achievements',
  },
];

export const education: Education[] = [];

export const resumePdfUrl: string | null = null;
