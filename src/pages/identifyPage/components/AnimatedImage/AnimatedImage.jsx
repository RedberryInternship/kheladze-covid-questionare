import Identify from "@/assets/identify.png";
import Animation from "@/assets/identify-anim.png";
import { motion } from "framer-motion";
const AnimatedImage = () => {
  return (
    <div className="absolute right-40 top-24">
      <div className="relative">
        <img className="z-10 sticky" src={Identify} />
        <motion.img
          animate={{ scale: 1, x: 256, y: -160 }}
          initial={{ scale: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute -left-32 top-96 z-0"
          src={Animation}
        />
      </div>
    </div>
  );
};

export default AnimatedImage;
