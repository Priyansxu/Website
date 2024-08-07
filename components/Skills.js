import React from 'react';
import { FaPython, FaJs, FaReact } from 'react-icons/fa';
import { RiTailwindCssFill, RiNextjsFill } from 'react-icons/ri';

export default function Skills() {

const icons = [
  { name: 'Python', icon: <FaPython className="text-6xl" /> },
  { name: 'JavaScript', icon: <FaJs className="text-6xl" /> },
  { name: 'Tailwind CSS', icon: <RiTailwindCssFill className="text-6xl" /> },
  { name: 'Next.js', icon: <RiNextjsFill className="text-6xl" /> },
  { name: 'React', icon: <FaReact className="text-6xl" /> },
];

  return (
    <div className="py-3 m-4 bg-[#a5a5a5]/60 rounded-lg">
      <h1 className="text-4xl text-black font-monaSans m-4">Skills</h1>
      <h5 className="text-sm text-left font-monaSansM m-4">
        Here are some languages and frameworks I've learnt in a year.
      </h5>
      <div className=" m-3">
        <div className="relative overflow-hidden bg-gray-400 rounded-md py-4">
          <div className="flex animate-scroll">
            {icons.map((icon, index) => (
              <div key={index} className="flex-none mx-4">
                {icon.icon}
              </div>
            ))}
            {icons.map((icon, index) => (
              <div key={index} className="flex-none mx-4">
                {icon.icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}