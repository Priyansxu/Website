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
        className="bg-[#686868] -mt-4 md:-mt-16 mb-4 sm:h-[3vh] md:h-[2vh] lg:h-[1vh] mx-0 md:mx-10"
        initial={{ 
          clipPath: "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)",
          filter: "blur(10px)",
          opacity: 0,
        }}
        animate={{ 
          clipPath: "polygon(15% 100%, 85% 100%, 100% 20%, 0% 20%)",
          filter: "blur(0px)",
          opacity: 1,
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{ height: "5vh" }}
      ></motion.div>
<div className="items-center justify-center"><h1 className="font-celtG text-9xl md:text-15xl lg:text-20xl align-center text-[#D4D5D9] -mx-4 md:-mx-9 w-full mt-8 py-6 rotate-180">Vengeance</h1> </div>
      <div className="pb-20 px-8">
        <motion.h1
          className="font-celtG text-4xl tracking-wide text-[#686868] bg-clip-text pb-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >Priyanshu G.
        </motion.h1>
        <motion.p
          className="mt-4 text-md md:text-2xl font-mono text-gray-600 backdrop-blur-md"
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
          <div className="absolute inset-0 backdrop-blur-lg p-6 z-10"></div>
          <Image
            src={Fluid}
            alt="Fluid"
            height={150}
            width={600}
            className="relative opacity-60 w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
}