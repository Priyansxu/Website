import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Fluid from "../public/fluid.png";
import Helmet from "../public/helmet.png";
import ElementX from "../public/elementx.png";

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

const letterVariantsSecondSection = {
  hidden: { opacity: 0, y: -20, scale: 1.5 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
    },
  },
};

const imageVariants = {
  hidden: { filter: "blur(10px)" },
  visible: {
    filter: "blur(0px)",
    transition: {
      duration: 2,
    },
  },
};

const divVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

export default function Page() {
  const paragraphText =
    "Welcome to the futuristic profile of Priyanshu. Here, you will find information about my projects, skills, and contact details.";

  const secondSectionText =
    "Priyanshu Gupta, born in 2007. A passionate explorer of programming, graphic design, psychology, and space. Always pushing the boundaries of creativity.";

  const secondSectionRef = useRef(null);
  const isInView = useInView(secondSectionRef, { once: true });

  return (
    <div className="min-h-screen font-mono bg-gradient-to-br from-[#f5f5f5] via-[#e5e5e5] to-[#d5d5d5] text-black relative">
      <main className="pt-20">
        <section className="p-8 text-center">
          <motion.h1
            className="text-4xl font-bold text-black bg-clip-text pb-3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.1 }}
          >
            Priyanshu
          </motion.h1>
          <motion.p
            className="mt-4 text-lg font-spaceMono text-gray-600"
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
            <div className="absolute inset-0 backdrop-blur-md p-6 z-20"></div>
            <Image
              src={Fluid}
              alt="Fluid"
              height={150}
              width={600}
              className="relative opacity-70 z-10 w-full max-w-md"
            />
          </div>
        </section>

        <section ref={secondSectionRef} className="flex flex-col md:flex-row my-6 mx-4 md:mx-15 gap-2">
          <motion.div
            className="max-w-md mx-auto sm:max-w-lg md:max-w-lg lg:max-w-xl xl:max-w-2xl flex bg-gradient-to-b from-neutral-300 to-[#cdcdcd] border-black rounded shadow-md overflow-hidden w-150 h-85 md:w-100 md:h-60"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={divVariants}
          >
            <motion.div
              className="flex-none w-1/3"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={imageVariants}
            >
              <Image
                src={Helmet}
                alt="Helmet"
                className="object-cover h-full w-full"
              />
            </motion.div>
            <div className="flex-grow pr-4 text-black text-xs flex items-center justify-center">
              <motion.p
                className="my-2 py-4 mx-4"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={letterVariantsSecondSection}
              >
                {secondSectionText.split("").map((char, index) => (
                  <motion.span key={index} variants={letterVariantsSecondSection}>
                    {char}
                  </motion.span>
                ))}
              </motion.p>
            </div>
          </motion.div>
          <motion.div
            className="max-w-md mx-auto sm:max-w-lg md:max-w-lg lg:max-w-xl xl:max-w-2xl flex bg-gradient-to-b from-neutral-300 to-[#cdcdcd] border-black rounded shadow-md overflow-hidden w-150 h-85 md:w-100 md:h-60"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={divVariants}
          >
            <div className="flex-grow pl-4 text-black text-xs flex items-center justify-center">
              <motion.p
                className="my-2 py-4 mx-4"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={letterVariantsSecondSection}
              >
                {secondSectionText.split("").map((char, index) => (
                  <motion.span key={index} variants={letterVariantsSecondSection}>
                    {char}
                  </motion.span>
                ))}
              </motion.p>
            </div>
      <motion.div
              className="flex-none w-1/3"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={imageVariants}
            >
              <Image
                src={ElementX}
                alt="X"
                className="object-cover h-full w-full"
              />
            </motion.div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}