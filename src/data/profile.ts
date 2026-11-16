export interface ContactLink {
  id: 'linkedin' | 'github' | 'youtube';
  label: string;
  url: string;
}

export const profile = {
  name: 'Cundaneswara Reddy',
  title: 'Embedded Engineer',
  tagline:
    'I am passionately seeking a challenging and growth-oriented opportunity in Embedded Technology where I can leverage my technical skills and continuously grow through learning and teamwork.',
  location: 'TODO: Add location',
  contactLinks: [
    {
      id: 'linkedin',
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/cundaneswara-reddy',
    },
    {
      id: 'github',
      label: 'GitHub',
      url: 'https://github.com/Cundanreddy',
    },
    {
      id: 'youtube',
      label: 'YouTube',
      url: 'https://www.youtube.com/@cundanreddy',
    },
  ] satisfies ContactLink[],
} as const;
