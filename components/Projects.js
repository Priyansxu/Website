import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FadeInStagger } from '../motions/effects';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

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
      name: 'Project 2',
      description: 'Brief description of Project 2.',
      link: '#',
      github: '#',
    },
    {
      name: 'Project 3',
      description: 'Brief description of Project 3.',
      link: '#',
      github: '#',
    },
  ];

  return (
    <motion.div
      ref={projectsRef}
      className="py-3 my-8 lg:my-10 m-4 bg-gradient-to-b from-[#D6D7D9] to-[#D1D2D4] rounded-md border-2 border-[#D3D4D6] shadow-xl"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={FadeInStagger}
    >
      <h1 className="text-4xl text-black/60 font-monaSans m-4">Projects</h1>
      <h5 className="text-sm md:text-xl lg:text-2xl text-left font-monaSansM m-4">
        Here are some projects I've worked on recently.
      </h5>
      <div className="flex flex-col space-y-4 m-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative flex-none mx-3 p-4 rounded-md shadow-md bg-gradient-to-br from-[#E2E3E5] to-[#D6D7D9]"
          >
            <div className="absolute top-2 right-2 flex space-x-2">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt className="text-4xl bg-[#a5a5a5]/30 p-2 rounded-full" />
              </a>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-4xl bg-[#a5a5a5]/30 p-2 rounded-full" />
              </a>
            </div>
            <h3 className="text-xl font-bold mb-2">{project.name}</h3>
            <p className="text-md">{project.description}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}