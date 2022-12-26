import { NavButtons, Layout } from "@/components";

import IdentifyForm from "./components/IdentifyForm";
import AnimatedImage from "./components/AnimatedImage";

import Right from "@/assets/right.png";
import { Link } from "react-router-dom";

const IdentifyPage = () => {
  return (
    <Layout>
      <div className="flex justify-between">
        <IdentifyForm />
        <AnimatedImage />
      </div>
      <NavButtons>
        <Link to="/covid-questions">
          <img src={Right} />
        </Link>
      </NavButtons>
    </Layout>
  );
};

export default IdentifyPage;
