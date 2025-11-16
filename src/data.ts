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
	"I'm a software developer currently working in Samsung Research Indonesia.",
	"Making a positive difference in people's lives through technology has always been cool to me, and I'm inspired to learn as much as I can to achieve that.",
	"Feel free to connect with me! (or not, up to you really)"
];

export const aboutParagraphs = [
	"I'm passionate with transforming abstract ideas into awesome technical projects, whether it is through techincal leadership, or through clean and maintainable software engineering.",
];

export const experienceData: Experience[] = [
	{
		title: "Software Engineer - Technical Lead",
		company: "Samsung Research Indonesia",
		description: [
			"Led a team of software engineers to develop and maintain server-side applications for Samsung's Smart TV platform at a global scale.",
		],
		skill: ["JavaScript", "Tizen SDK", "UI/UX Design", "Performance Optimization"],
		duration: "Sep 2024 - Present",
		link: "https://www.samsung.com/id/srin/",
	},
	{
		title: "Software Engineer",
		company: "Samsung Research Indonesia",
		description: [
			"Repsonsible for developing and maintaining server-side applications for Samsung's Smart TV platform.",
		],
		skill: ["JavaScript", "Tizen SDK", "UI/UX Design", "Performance Optimization"],
		duration: "Apr 2023 - Sep 2024",
		link: "https://www.samsung.com/id/srin/",
	},
];
