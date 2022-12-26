import Redberry from "@/assets/redberry.png";
import { motion } from "framer-motion";

const Layout = ({ children }) => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="w-screen pl-48 pr-48 z-20"
    >
      <div className="border-b border-neutral-800 flex justify-between items-end">
        <img src={Redberry} className="pt-24 pb-6" />
        <span className="pb-6 text-4xl font-bold">1/4</span>
      </div>
      {children}
    </motion.div>
  );
};

export default Layout;
