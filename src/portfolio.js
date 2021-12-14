import emoji from "react-easy-emoji";

export const greetings = {
	name: "Dinesh P",
	title: "Hi all, I'm Dinesh",
	description:
		"A passionate Full Stack Web Developer having experience in building Web applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks..",
	resumeLink: "https://drive.google.com/file/d/1X3lXodr_R72It8AAr3nJ6nKgRa1u3xnJ/view?usp=sharing",
};

export const openSource = {
	githubUserName: "Decode-dinesh",
};

export const contact = {};

export const socialLinks = {
	facebook: "#",
	instagram: "#",
	twitter: "#",
	github: "https://github.com/Decode-dinesh",
	linkedin: "https://www.linkedin.com/in/dinesh-p-37a773210/",
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
	skills: [
		emoji(
			"⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
		),
		emoji(
			"⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"
		),
		emoji(
			"⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
		),
	],

	softwareSkills: [
		{
			skillName: "html-5",
			fontAwesomeClassname: "vscode-icons:file-type-html",
		},
		{
			skillName: "css3",
			fontAwesomeClassname: "vscode-icons:file-type-css",
		},
		{
			skillName: "JavaScript",
			fontAwesomeClassname: "logos:javascript",
		},
		{
			skillName: "reactjs",
			fontAwesomeClassname: "vscode-icons:file-type-reactjs",
		},
		{
			skillName: "nodejs",
			fontAwesomeClassname: "logos:nodejs-icon",
		},	
		{
			skillName: "npm",
			fontAwesomeClassname: "vscode-icons:file-type-npm",
		},
		{
			skillName: "sql-database",
			fontAwesomeClassname: "vscode-icons:file-type-sql",
		},
		{
			skillName: "mongoDB",
			fontAwesomeClassname: "vscode-icons:file-type-mongo",
		},
		{
			skillName: "aws",
			fontAwesomeClassname: "logos:aws",
		},
		{
			skillName: "python",
			fontAwesomeClassname: "logos:python",
		},
		{
			skillName: "git",
			fontAwesomeClassname: "logos:git-icon",
		},
	
	],
};

export const SkillBars = [
	{
		Stack: "Frontend/Design", //Insert stack or technology you have experience in
		progressPercentage: "60", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "70",
	},
	{
		Stack: "Programming",
		progressPercentage: "60",
	},
];

export const educationInfo = [

		{
		schoolName: "Guvi Geeks",
		subHeader: "Software Developer",
		duration: "Jul 2021 - Present",
		desc: "Full Stack",
		descBullets: [
			"Trained on project based Full Stack Development program in MERN",
			"Designing backend development by building multi-user Web applications using NodeJs framework and MongoDb",
		],
	},
	
	{
		schoolName: "SRM University",
		subHeader: "Master of Science in Physics and nanotechnology",
		duration: "JUNE 2019 - May 2021",
		desc: "Project.",
		descBullets: [
			"Synthesis and characterization of Cobalt oxide/ nickel oxide",
			"NanoComposite prepared by co-precipitation",
		],
	},
	{
		schoolName: "St. Joseph's college Arts and Science",
		subHeader: "Bachelor of Science in Physics",
		duration: "July 2015 -  May 2018",
		desc: "Participated in College Programs.",
		descBullets: [
			"Received awards, won competition, volunteering, participating in sporting events, etc"
		],
	},


];


export const projects = [
	{
		name: "MyFlix",
		desc: "MyFlix is a full stack application to Watchlist & track movies and tv shows built using MongoDB, Express js, React, Nodejs",
		link: "https://sharp-kilby-5d3acf.netlify.app/",
	},
	{
		name: "My Desk",
		desc: "My Desk is a Ticket Management System Built using MongoDB Express js, Nodejs, React",
		github: "https://github.com/Decode-dinesh/mydesk-frontend.git",
		link:"https://reverent-morse-14dc2e.netlify.app/"
	},
	{
		name: "My Chat",
		desc: "My Chat is a Full Stack Chatting App. Uses Socket.io for real time communication and stores user details in encrypted format in Mongo DB Database.",
		github: "https://github.com/Decode-dinesh/mychat.git",
		link: "https://elated-williams-dfb4a2.netlify.app/",
	},
	{
		name: "Book My Show Clone",
		desc: "Book my Show application for login use no:123456789",
		link: "https://hungry-joliot-5685f6.netlify.app/",
	},
];


