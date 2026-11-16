export interface Skill {
  name: string;
  level: number | null;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Programming',
    skills: [
      { name: 'C', level: null },
      { name: 'C++', level: null },
      { name: 'Python', level: null },
      { name: 'JavaScript', level: null },
      { name: 'Rust', level: null },
      { name: 'AssemblyScript', level: null },
    ],
  },
  {
    name: 'Systems and Tools',
    skills: [
      { name: 'Shell Scripting', level: null },
      { name: 'Windows Terminal', level: null },
      { name: 'Embedded Protocols (CAN, UART, I2C, SPI)', level: null },
      { name: 'API Documentation (Docs-as-Code)', level: null },
    ],
  },
];
