import { motion } from "framer-motion";
import Image from "next/image";
import Fluid from "../public/fluid.png";
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
            <div className="absolute inset-0 backdrop-blur-sm p-6 z-20"></div>
            <Image
              src={Fluid}
              alt="Fluid"
              height={150}
              width={600}
              className="relative z-10 w-full max-w-md"
            />
          </div>
        </section>
     <section className="my-6 mx-4 md:mx15">
<div className="max-w-md mx-auto sm:max-w-lg md:max-w-lg lg:max-w-xl xl:max-w-2xl flex bg-gradient-to-br from-[#a5a5a5] via-[#959595] to-[#858585] border border-gradient-to-br from-[#cdcdcd] via-[#dcdcdc] to-[#e0e0e0] rounded shadow-md overflow-hidden">
      <div className="flex-none w-1/3">
        <Image 
          src={Helmet}
          alt="Helmet"
          className="object-cover h-full w-full"
        />
      </div>
      <div className="flex-grow p-4 text-sm justify-center text-center">
        <p className="my-4 pt-4">
          Your paragraph content goes here. This text will be aligned to the right of the image.
        </p>
      </div>
    </div> 
  </section>
      </main>
    </div>
  );
}