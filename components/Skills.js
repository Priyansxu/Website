import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaPython, FaJs, FaReact } from 'react-icons/fa';
import { RiTailwindCssFill, RiNextjsFill } from 'react-icons/ri';
import { FadeInStagger } from '../motions/effects';

export default function Skills() {
  const skillsRef = useRef(null);
  const isInView = useInView(skillsRef, { once: true });

  const icons = [
    { name: 'Python', icon: <FaPython className="text-6xl" /> },
    { name: 'JavaScript', icon: <FaJs className="text-6xl" /> },
    { name: 'Tailwind CSS', icon: <RiTailwindCssFill className="text-6xl" /> },
    { name: 'Next.js', icon: <RiNextjsFill className="text-6xl" /> },
    { name: 'React', icon: <FaReact className="text-6xl" /> },
  ];

  return (
    <div ref={skillsRef} className="py-3 my-8 lg:my-10 m-4 bg-[#a5a5a5]/60 rounded-md shadow-xl">
      <h1 className="text-4xl text-black font-monaSans m-4">Skills</h1>
      <h5 className="text-sm text-left font-monaSansM m-4">
        Here are some languages and frameworks I've learnt in a year.
      </h5>
      <div className="m-3">
        <motion.div
          className="relative overflow-hidden bg-[#b6b6b6] rounded-md py-4"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={FadeInStagger}
        >
          <div className="flex w-[200%] animate-scroll">
            {icons.map((icon, index) => (
              <div key={index} className="flex-none mx-4">
                {icon.icon}
              </div>
            ))}
            {icons.map((icon, index) => (
              <div key={index + icons.length} className="flex-none mx-4">
                {icon.icon}
              </div>
            ))}
          </div>
            {icons.map((icon, index) => (
              <div key={index + icons.length} className="flex-none mx-4">
                {icon.icon}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}