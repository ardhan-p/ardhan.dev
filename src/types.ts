export type Project = {
  title: string;
  description: string;
  githubUrl: string;
  demoUrl?: string;
  skill: string[];
};

export type Experience = {
  title: string;
  company: string;
  description: string[];
  skill: string[];
  duration: string;
  link: string;
};

export type Certification = {
  title: string;
  description: string;
};

export type Contact = {
  title: string;
  url: string;
};