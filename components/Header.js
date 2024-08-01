import { motion } from "framer-motion";
import Image from "next/image";
import Fluid from "../public/fluid.png";
import { Paragraph, Heading } from "../motions/animationVariants";

const paragraphText =
  "Welcome to the futuristic profile of Priyanshu. Here, you will find information about my projects, skills, and contact details.";

export default function Header() {
  return (
    <section className="p-8 text-center">
      <motion.h1
        className="text-4xl font-bold text-black bg-clip-text pb-3"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Priyanshu
      </motion.h1>
      <motion.p
        className="mt-4 text-lg font-spaceMono text-gray-600 backdrop-blur-md z-30"
        initial="hidden"
        animate="visible"
        variants={Paragraph}
      >
        {paragraphText.split("").map((char, index) => (
          <motion.span key={index} variants={Heading}>
            {char}
          </motion.span>
        ))}
      </motion.p>
      <div className="flex justify-center items-center relative mt-6">
        <div className="absolute inset-0 backdrop-blur-md p-6 z-30"></div>
        <Image
          src={Fluid}
          alt="Fluid"
          height={150}
          width={600}
          className="relative opacity-70 z-20 w-full max-w-md"
        />
      </div>
    <div className="mx-6 mt-5 bg-gray-800 rounded-md border border-gray-700 p-6">
    </div>
    </section>
  );
}