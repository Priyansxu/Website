import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Helmet from "../public/helmet.png";
import { Paragraph, Letter, Img, Div } from "../motions/animationVariants";

const profileText =
  "Priyanshu Gupta, born in 2007. A passionate explorer of programming, graphic design, psychology, and space. Always pushing the boundaries of creativity.";

const Profile = () => {
  const profileRef = useRef(null);
  const isInView = useInView(profileRef, { once: true });

  return (
    <section ref={profileRef} className="flex flex-col my-4">
      <motion.div
        className="mx-4 md:mx-0 w-150 rounded-md md:rounded-none md:w-full h-85 md:h-90 flex bg-gradient-to-b from-[a5a5a5] via-neutral-300 to-[#cdcdcd] shadow-xl overflow-hidden backdrop-blur-md z-30"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={Div}
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
            className="py-4 mx-2"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={Paragraph}
          >
            {profileText.split("").map((char, index) => (
              <motion.span key={index} variants={Letter}>
                {char}
              </motion.span>
            ))}
          </motion.p>
        </div>
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
};

export default Profile;