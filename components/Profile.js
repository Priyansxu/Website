import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";
import Helmet from "../public/helmet.png";
import { FadeInStagger, PopIn, BlurIn, SlideIn } from "../motions/effects";

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
  const [isRepeating, setIsRepeating] = useState(false);

  const handleNext = () => {
    const newIndex = (currentTextIndex + 1) % texts.length;
    setCurrentTextIndex(newIndex);
    setIsRepeating(newIndex === 0);
    setKey((prevKey) => prevKey + 1);
  };

  return (
    <section ref={profileRef} className="flex flex-col m-4 lg:mx-8 bg-[#DBDCDE] border-2 border-[#D3D4D6] rounded-md">
      <div className="p-4 -mb-2 bg-gradient-to-b from-[#DEDFE3] to-[#D6D7D9] rounded-md">
        <h1 className="text-4xl text-black/60 font-monaSans my-2">About me</h1>
      </div>
      <motion.div
        className="relative w-full rounded-md flex bg-gradient-to-br from-[#DBDCDE] to-[#D9DADC] shadow-lg overflow-hidden backdrop-blur-md z-30"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={SlideIn}
      >
        <motion.div
          className="flex-none w-1/3 lg:w-1/4 xl:w-1/5"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={BlurIn}
        >
          <Image
            src={Helmet}
            alt="Helmet"
            className="object-contain object-cover h-full w-full opacity-60"
          />
        </motion.div>
        <div className="flex-grow pr-4 text-xs md:text-2xl lg:text-3xl font-monaSansM flex items-center justify-center text-right">
          <motion.p
            key={key}
            className="py-4 mx-2"
            initial="hidden"
            animate="visible"
            variants={(currentTextIndex === 0 && !isRepeating) ? {} : FadeInStagger}
          >
            {texts[currentTextIndex].split("").map((char, index) => (
              <motion.span key={index} variants={(currentTextIndex === 0 && !isRepeating) ? {} : PopIn}>
                {char}
              </motion.span>
            ))}
          </motion.p>
        </div>
        <div
          className="absolute bottom-2 right-2 bg-buttonGray rounded-full p-2 cursor-pointer opacity-60"
          onClick={handleNext}
        >
          <FaChevronRight className="text-lg" />
        </div>
      </motion.div>
    </section>
  );
}