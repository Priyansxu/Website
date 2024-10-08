import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FadeInStagger } from '../motions/effects';
import { FaLink, FaGithub } from 'react-icons/fa';

export default function Projects() {
  const projectsRef = useRef(null);
  const isInView = useInView(projectsRef, { once: true });

  const projects = [
    {
      name: 'Vexel',
      description: 'An AI-powered Discord bot that helps with server moderation, automation, and more.',
      link: '#',
      github: '#',
    },
    {
      name: 'Vexel',
      description: 'An AI-powered Discord bot that helps with server moderation, automation, and more.',
      link: '#',
      github: '#',
    },
    {
      name: 'Vexel',
      description: 'An AI-powered Discord bot that helps with server moderation, automation, and more.',
      link: '#',
      github: '#',
    },
  ];

  return (
    <motion.div
      ref={projectsRef}
      className="py-3 my-8 lg:my-10 m-4 bg-gradient-to-b from-[DEEFE3] to-[#D6D7D9] rounded-md border-2 border-[#D3D4D6] shadow-xl"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={FadeInStagger}
    >
      <h1 className="text-4xl text-black/60 font-monaSans m-4">Projects</h1>
      <h5 className="text-sm md:text-xl lg:text-2xl text-left font-monaSansM m-4">
        Here are some projects I've worked on recently.
      </h5>
      <div className="flex flex-col space-y-4 m-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative flex-none mx-2 p-4 rounded-md bg-gradient-to-br from-[#E2E3E5] to-[#D6D7D9] border border-[#D3D4D6]"
          >
            <div className="absolute top-2 right-2 flex space-x-2">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <FaLink className="text-3xl bg-[#a5a5a5]/30 p-1 rounded-full" />
              </a>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-3xl bg-[#a5a5a5]/30 p-1 rounded-full" />
              </a>
            </div>
            <h3 className="text-lg font-bold mb-2">{project.name}</h3>
            <p className="text-sm">{project.description}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}