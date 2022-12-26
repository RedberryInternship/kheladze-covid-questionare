import Suggestions from "@/assets/suggestions.png";
import Animation from "@/assets/suggestions-anim.png";

import { motion } from "framer-motion";
const AnimatedImage = () => {
  return (
    <div className="absolute right-64 top-52">
      <div className="relative">
        <img className="z-10 sticky" src={Suggestions} />
        <motion.img
          animate={{ scale: 1, y: 64, x: 96 }}
          initial={{ scale: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute left-0 top-0 z-0"
          src={Animation}
        />
      </div>
    </div>
  );
};

export default AnimatedImage;
