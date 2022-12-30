import Logo from "@/assets/logo.png";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const LandingPage = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-24 w-screen h-screen">
      <motion.img
        animate={{ width: 96 }}
        initial={{ width: 4000 }}
        transition={{ duration: 0.5 }}
        className="w-24"
        src={Logo}
      />
      <Link
        className="block text-3xl font-bold w-48 text-center break-normal"
        to="/identify"
      >
        <motion.p
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ delay: 0.5, duration: 0.3 }}
        >
          კითხვარის დაწყება
        </motion.p>
      </Link>
    </div>
  );
};

export default LandingPage;
