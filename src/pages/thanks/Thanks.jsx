import Star from "@/assets/star.png";
import ThanksImg from "@/assets/thanks.png";

import { motion } from "framer-motion";

const Thanks = () => {
  return (
    <div className="w-screen h-screen bg-neutral-800 flex flex-col justify-center items-center gap-7">
      <motion.img
        src={Star}
        animate={{ scale: 1, x: -200, width: 52 }}
        initial={{ scale: 0, width: 0 }}
        transition={{ duration: 0.5 }}
      />
      <motion.img
        src={ThanksImg}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
      />
      <motion.img
        src={Star}
        animate={{ x: 200, width: 32 }}
        initial={{ width: 0 }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );
};

export default Thanks;
