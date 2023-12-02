import React from "react";
import Image from "next/image";

const skills = [
	{ skill: "Data Structures" },
	{ skill: "Algorithms" },
	{ skill: "Problem solving" },
	{ skill: "Java" },
	{ skill: "Object Oriented Programming" },
	{ skill: "HTML" },
	{ skill: "CSS" },
	{ skill: "JavaScript" },
	{ skill: "TypeScript" },
	{ skill: "React" },
	{ skill: "Next.js" },
	{ skill: "Tailwind CSS" },
	{ skill: "Git" },
	{ skill: "GitHub" },
	{ skill: "MongoDB" },
	{ skill: "SQL Databases" },
	{ skill: "GraphQL" },
	{ skill: "Zod" },
	{ skill: "Authentication" },
	{ skill: "Docker" },
	{ skill: "Prisma" },
	{ skill: "Nodejs" },
	{ skill: "Expresss" },
	{ skill: "Next-auth" },
];

const AboutSection = () => {
	return (
		<section id="about">
			<div className="my-12 pb-12 md:pt-16 md:pb-48">
				<h1 className="text-center font-bold text-4xl">
					About Me
					<hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
				</h1>

				<div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
					<div className="md:w-1/2 ">
						<h1 className="text-center text-2xl font-bold mb-6 md:text-left">
							Get to know me!
						</h1>
						<p>
							Hi, my name is Prabhav and I am a{" "}
							<span className="font-bold">{"highly ambitious"}</span>,
							<span className="font-bold">{" self-motivated"}</span>, and
							<span className="font-bold">{" driven"}</span> software engineer
							based in India.
						</p>
						<br />
						<p>
							A passionate and versatile software developer specializing in both
							full-stack development and general software engineering. With a
							keen eye for detail and a commitment to delivering innovative
							solutions, I thrive in crafting end-to-end applications that
							seamlessly integrate front-end and back-end technologies. As a
							full-stack developer, I possess a comprehensive skill set, from
							designing captivating user interfaces using cutting-edge
							frameworks like React, to architecting robust server-side systems
							with technologies such as Node.js. My dedication to continuous
							learning allows me to adapt to evolving technologies, ensuring
							that I stay at the forefront of the dynamic software development
							landscape. Through my portfolio, I invite you to explore a
							collection of projects that showcase my proficiency in creating
							efficient, scalable, and user-centric software solutions. Join me
							on this exciting journey of transforming ideas into reality
							through code.
						</p>
						<br />
						<p>
							I believe that you should{" "}
							<span className="font-bold text-teal-500">
								never stop growing
							</span>{" "}
							and that&#39;s what I strive to do, I have a passion for
							technology and a desire to always push the limits of what is
							possible. I am excited to see where my career takes me and am
							always open to new opportunities. 🙂
						</p>
					</div>
					<div className="text-center md:w-1/2 md:text-left">
						<h1 className="text-2xl font-bold mb-6">My Skills</h1>
						<div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
							{skills.map((item, idx) => {
								return (
									<p
										key={idx}
										className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold">
										{item.skill}
									</p>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
