import Layout from "@/components/Layout";
import NavButtons from "@/components/NavButtons";

import IdentifyForm from "./components/IdentifyForm";
import AnimatedImage from "./components/AnimatedImage";

import right from "@/assets/right.png";
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
          <img src={right} />
        </Link>
      </NavButtons>
    </Layout>
  );
};

export default IdentifyPage;
