import type { Experience } from "./types";

export const personalInfo = {
	name: "Ardhan",
	fullName: "Ardhan Satya Pratama",
	username: "ardhan.dev",
	title: "Software Engineer",
	website: "https://ardhan.dev",
	email: "mailto:ardhan.s.pratama@gmail.com",
	linkedin: "https://www.linkedin.com/in/ardhan-p/",
	github: "https://github.com/ardhan-p",
};

export const heroParagraphs = [
	"I'm a software developer currently working at Samsung Research Indonesia.",
	"Making a positive difference in people's lives through technology has always been cool to me, and I'm inspired to learn as much as I can to achieve that.",
	"Feel free to connect with me! (or not, up to you really)"
];

export const experienceData: Experience[] = [
	{
		title: "Software Engineer - Technical Lead",
		location: "Jakarta, Indonesia",
		company: "Samsung Research Indonesia",
		description: [
			"Currently leading a team of 6 software engineers to develop and maintain 3 concurrent server-side applications for the Samsung Smart TV platform (Daily+, Now Brief, Privacy Center).",
			"Closely collaborating with cross-regional stakeholders in Korea and India, including product managers, designers, and DBA team to deliver high-quality software solutions that meet user requirements and business goals.",
			"Enabled agile practices within the team, facilitating sprint planning, bi-weekly stand-ups, and retrospectives that improved project predictability and the team's transparency.",
			"Standardized technical documentation process by incorporating architectural design records (ADRs) onto the core development flow, which was adopted by more than 5 development teams within the organization.",
			"Defined technical roadmap and AWS architecture for the team, ensuring on-time delivery of features while maintaining system reliability and scalability.",
			"Architected and implemented the migration of manually provisioned cloud resources to Infrastructure-as-Code (IaC) using AWS Cloud Development Kit (CDK) with TypeScript, improving deployment velocity and reducing manual errors.",
		],
		skill: ["Technical Project Leadership", "Infrastructure-as-Code", "AWS", "Spring Boot", "React"],
		duration: "Sep 2024 - Present",
		link: "https://www.samsung.com/id/srin/",
	},
	{
		title: "Software Engineer",
		company: "Samsung Research Indonesia",
		location: "Jakarta, Indonesia",
		description: [
			"Responsible for developing and maintaining the A/B testing platform for Samsung Smart TV servers.",
			"Part of the engineering team that developed a full-stack internal CMS using React and Spring Boot, enabling product teams to configure and launch A/B tests on Samsung Smart TV servers without developer intervention.",
			"Developed a core feature that reduces boilerplate A/B test configurations in the internal CMS app, reducing setup time for more than 10 key product teams.",
			"Implemented a subset of automated end-to-end (E2E) tests using Cypress for internal CMS app, reducing the time spent on manual regression testing by ~2 hours per release cycle.",
		],
		skill: ["AWS", "Spring Boot", "React", "Java", "TypeScript"],
		duration: "Apr 2023 - Sep 2024",
		link: "https://www.samsung.com/id/srin/",
	},
];
