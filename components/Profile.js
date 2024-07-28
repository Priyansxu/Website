import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";
import Helmet from "../public/helmet.png";
import { Paragraph, Letter, Img, Div } from "../motions/animationVariants";

const texts = [
  "Priyanshu Gupta, born in 2007. A passionate explorer of programming, graphic design, psychology, and space. Always pushing the boundaries of creativity.",
  "This is the first additional paragraph. It contains more information about my interests and hobbies.",
  "This is the second additional paragraph. Here you can learn more about my future goals and aspirations."
];

export default function Profile() {
  const profileRef = useRef(null);
  const isInView = useInView(profileRef, { once: true });
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [key, setKey] = useState(0);

  const handleNext = () => {
    setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    setKey((prevKey) => prevKey + 1); // To reset the animation
  };

  return (
    <section ref={profileRef} className="flex flex-col my-4">
      <motion.div
        className="mx-4 md:mx-0 w-150 rounded-md md:rounded-none md:w-full h-85 md:h-90 flex bg-gradient-to-b from-[a5a5a5] via-neutral-300 to-[#cdcdcd] shadow-xl overflow-hidden backdrop-blur-md z-30 cursor-pointer"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={Div}
        onClick={handleNext}
      >
        <motion.div
          className="flex-none w-1/3"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={Img}
        >
          <Image
            src={Helmet}
            alt="Helmet"
            className="object-contain object-cover h-full w-full opacity-60"
          />
        </motion.div>
        <div className="flex-grow pr-5 text-xs md:text-2xl flex items-center justify-center text-right">
          <motion.p
            key={key} // This ensures the animation restarts
            className="py-4 mx-2"
            initial="hidden"
            animate="visible"
            variants={Paragraph}
          >
            {texts[currentTextIndex].split("").map((char, index) => (
              <motion.span key={index} variants={Letter}>
                {char}
              </motion.span>
            ))}
          </motion.p>
        </div>
        <FaChevronRight className="text-2xl cursor-pointer" onClick={handleNext} />
      </motion.div>

      <motion.p
        className="p-6 mx-6 md:mx-8 my-7 md:my-10 font-celtG text-5xl md:text-7xl"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={Paragraph}
      >
        {"I'm Vengeance".split("").map((char, index) => (
          <motion.span key={index} variants={Letter}>
            {char}
          </motion.span>
        ))}
      </motion.p>
    </section>
  );
}