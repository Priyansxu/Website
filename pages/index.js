"use client";

import { motion } from "framer-motion";

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

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
    },
  },
};

export default function Page() {
  const paragraphText =
    "Welcome to the futuristic profile of Priyanshu. Here, you will find information about my projects, skills, and contact details.";

  return (
    <div className="min-h-screen font-mono bg-gradient-to-br from-[#f5f5f5] via-[#e5e5e5] to-[#d5d5d5] text-black">
      <main className="pt-20">
        <section className="p-8 text-center">
          <motion.h1
            className="text-4xl font-bold text-black bg-clip-text"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Priyanshu
          </motion.h1>
          <motion.p
            className="mt-4 text-lg font-mono text-gray-600"
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
        </section>
        <section className="p-8">
          <motion.div
            className="mb-8 p-6 bg-gradient-to-br from-[#f5f5f5] via-[#e5e5e5] to-[#d5d5d5] border-[#ccc] rounded-lg border shadow-lg transform transition-all"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
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
            className="p-6 bg-gradient-to-br from-[#f5f5f5] via-[#e5e5e5] to-[#d5d5d5] border-[#ccc] rounded-lg border shadow-lg transform transition-all"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
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