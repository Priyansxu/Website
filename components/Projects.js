import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FadeInStagger } from '../motions/effects';

export default function Projects() {
  const projectsRef = useRef(null);
  const isInView = useInView(projectsRef, { once: true });

  const projects = [
    {
      name: 'Vexel',
      description: 'An AI-powered Discord bot that helps with server moderation, automation, and more.',
    },
    {
      name: 'Project 2',
      description: 'Brief description of Project 2.',
    },
    {
      name: 'Project 3',
      description: 'Brief description of Project 3.',
    },
  ];

  return (
    <div ref={projectsRef} className="py-3 my-8 lg:my-10 m-4 bg-[#a5a5a5]/60 rounded-md shadow-xl">
      <h1 className="text-4xl text-black font-monaSans m-4">Projects</h1>
      <h5 className="text-sm md:text-xl lg:text-2xl text-left font-monaSansM m-4">
        Here are some projects I've worked on recently.
      </h5>
      <div className="m-3">
        <motion.div
          className="relative overflow-hidden bg-[#b6b6b6] rounded-md backdrop-blur-md z-30 py-4"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={FadeInStagger}
        >
          <div className="flex flex-col space-y-4">
            {projects.map((project, index) => (
              <div key={index} className="flex-none mx-4 p-4 bg-white rounded-md shadow-md">
                <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                <p className="text-md">{project.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}