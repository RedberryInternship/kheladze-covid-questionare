import Vaccination from "@/assets/vaccination.png";
import Animation from "@/assets/vaccination-anim.png";

import { motion } from "framer-motion";
const AnimatedImage = () => {
  return (
    <div className="absolute right-44 top-48">
      <div className="relative">
        <img className="z-10 sticky" src={Vaccination} />
        <motion.img
          animate={{ scale: 1, y: -92, x: 72 }}
          initial={{ scale: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute -left-10 top-20 z-0"
          src={Animation}
        />
      </div>
    </div>
  );
};

export default AnimatedImage;
