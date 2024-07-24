"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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

  return (
    <div className="min-h-screen font-mono bg-gradient-to-br from-[#f5f5f5] via-[#e5e5e5] to-[#d5d5d5] text-black relative">
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
          <div className="relative mt-10">
            <div className="backdrop-blur-md bg-white/30 p-4 rounded-lg">
         
            </div>
            <div className="bottom-0 left-0 w-full h-64">
              <Image
                src="/element-x.png"
                alt="Element X"
                height={50}
                width={50}
                className="z-[-1]"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}