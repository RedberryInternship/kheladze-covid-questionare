import Logo from "@/assets/logo.png";
import Start from "@/assets/start.png";
import Shadow from "@/assets/start-shadow.png";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const LandingPage = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-24 w-screen h-screen">
      <motion.img
        animate={{ width: 96 }}
        initial={{ width: 4000 }}
        transition={{ duration: 1 }}
        className="w-24"
        src={Logo}
      />
      <Link
        className="block text-3xl font-bold w-48 text-center break-normal relative"
        to="/identify"
      >
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <img src={Start} />
          <img
            className="absolute top-0 right-0.5 opacity-0 hover:opacity-100"
            src={Shadow}
          />
        </motion.div>
      </Link>
    </div>
  );
};

export default LandingPage;
