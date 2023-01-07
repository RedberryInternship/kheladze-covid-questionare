import Covid from "@/assets/covid-questions.png";
import Animation from "@/assets/covid-questions-anim.png";

import { motion } from "framer-motion";
const AnimatedImage = () => {
  return (
    <div className="absolute right-44 top-32">
      <div className="relative">
        <img className="z-10 sticky" src={Covid} />
        <motion.img
          animate={{ scale: 1, y: 256, x: -80 }}
          initial={{ scale: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute left-40 top-0 z-0"
          src={Animation}
        />
      </div>
    </div>
  );
};

export default AnimatedImage;
