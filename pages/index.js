"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ElementX from "../public/element-x.png";
import Helmet from "../public/helmet.png";

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
          <div className="flex justify-center items-center relative mt-6">
     <div className="absolute inset-0 backdrop-blur-md p-4 z-20">
    </div>
            <Image
              src={ElementX}
              alt="Element"
              height={150}
              width={150}
              className="relative z-10"
            />
          </div>
        </section>
        <section className="mt-10 p-8">
         <div className="h-screen bg-gradient-to-br from-[#f5f5f5] to-[#d5d5d5] flex items-center justify-center">
      <div className="flex w-3/4 h-1/2">
        <div className="relative w-1/2 h-full">
          <Image
            src={helmet}
            alt="Helmet"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <p className="text-xl text-gray-700">
            This is a paragraph text that is displayed on the right side of the image. You can customize this text to include any content you like.
          </p>
        </div>
      </div>
    </div>
    </section>
      </main>
    </div>
  );
}