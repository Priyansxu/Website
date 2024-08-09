import { motion } from "framer-motion";

export default function Shape() {
  return (
    <motion.div
      className="absolute top-0 left-0 w-full bg-black"
      initial={{ clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)" }}
      animate={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 60%, 85% 100%, 15% 100%, 0% 60%)" }}
      transition={{ duration: 2, ease: "easeInOut" }}
    ></motion.div>
  );
}