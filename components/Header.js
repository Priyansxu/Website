import { motion } from "framer-motion";
import Image from "next/image";
import Fluid from "../public/fluid.png";
import { FadeInStagger, BlurFadeIn } from "../motions/effects";

const paragraphText =
  "Welcome to the futuristic profile of Priyanshu. Here, you will find information about my projects, skills, and contact details.";

export default function Header() {
  return (
    <section className="relative text-center">
      <motion.div
  className="top-0 left-0 bg-black"
  initial={{ clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)" }}
  animate={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 40%, 80% 80%, 20% 80%, 0% 40%)" }}
  transition={{ duration: 2, ease: "easeInOut" }}
  style={{ height: "10vh" }}
></motion.div>

      <div className="p-6">
        <motion.h1
          className="text-4xl font-bold text-black bg-clip-text pb-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Priyanshu
        </motion.h1>
        <motion.p
          className="mt-4 text-lg font-spaceMono text-gray-600 backdrop-blur-md"
          initial="hidden"
          animate="visible"
          variants={FadeInStagger}
        >
          {paragraphText.split("").map((char, index) => (
            <motion.span key={index} variants={BlurFadeIn}>
              {char}
            </motion.span>
          ))}
        </motion.p>
        <div className="flex justify-center items-center relative mt-6">
          <div className="absolute inset-0 backdrop-blur-md p-6 z-10"></div>
          <Image
            src={Fluid}
            alt="Fluid"
            height={150}
            width={600}
            className="relative opacity-70 w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
}