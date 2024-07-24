"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const paragraphVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.4,
    },
  },
};

export default function Page() {
  const paragraphText =
    "Welcome to the futuristic profile of Priyanshu. Here, you will find information about my projects, skills, and contact details.";

  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      rotate: [0, 10, -10, 0],
      transition: { duration: 2, repeat: Infinity, repeatType: "reverse" },
    });
  }, [controls]);

  return (
    <div className="min-h-screen font-mono bg-gradient-to-br from-[#f5f5f5] via-[#e5e5e5] to-[#d5d5d5] text-black">
      <main className="pt-20 relative">
        <section className="p-8 text-center relative">
          <motion.h1
            className="text-4xl font-bold text-black bg-clip-text relative z-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            style={{ filter: "drop-shadow(0 0 10px #000)" }}
          >
            Priyanshu
          </motion.h1>
          <motion.p
            className="mt-4 text-lg font-mono text-gray-600 relative z-10"
            initial="hidden"
            animate="visible"
            variants={paragraphVariants}
          >
            {paragraphText.split("").map((char, index) => (
              <motion.span key={index} variants={letterVariants}>
                {char}
              </motion.span>
            ))}
          </motion.p>
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-[#ff79c6] to-transparent z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          />
        </section>
        <section className="p-8">
          <motion.div
            className="mb-8 p-6 bg-gradient-to-br from-[#f5f5f5] via-[#e5e5e5] to-[#d5d5d5] border-[#ccc] rounded-lg border shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="flex justify-between items-center mb-2">
              <div className="text-sm text-gray-600">Jul 1, 2023</div>
            </div>
            <h2 className="text-2xl font-bold text-black">unkey.dev</h2>
            <p className="mt-2 font-mono text-gray-600">
              Unkey is an open source API Key management solution. It allows you to create, manage and validate API Keys
              for your users. It's built with security and speed in mind.
            </p>
          </motion.div>
          <motion.div
            className="p-6 bg-gradient-to-br from-[#f5f5f5] via-[#e5e5e5] to-[#d5d5d5] border-[#ccc] rounded-lg border shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className="flex justify-between items-center mb-2">
              <div className="text-sm text-gray-600">Apr 1, 2023</div>
            </div>
            <h2 className="text-2xl font-bold text-black">planetfall.io</h2>
            <p className="mt-2 font-mono text-gray-600">
              I'm building a SAAS providing global latency monitoring for your APIs and websites from edge locations
              around the world. Have you ever wondered how fast your API is in any part of the world? Planetfall allows
              you to find out and monitor it continuously.
            </p>
          </motion.div>
        </section>
      </main>
    </div>
  );
}