import type { JSX } from "react";

export type Skill = {
  name: string;
  icon: JSX.Element;
};

export type Project = {
  title: string;
  description: string;
  githubUrl: string;
  demoUrl?: string;
  skill: Skill[];
};

export type Experience = {
  title: string;
  company: string;
  description: string[];
  duration: string;
  skill: Skill[];
};

export type Certification = {
  title: string;
  description: string;
};

export type Contact = {
  title: string;
  url: string;
};