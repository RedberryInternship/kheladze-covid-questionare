import Right from "@/assets/right.png";
import Left from "@/assets/left.png";

import { Layout, NavButtons } from "@/components";
import AnimatedImage from "./components/AnimatedImage";
import CovidForm from "./components/CovidForm";
import { Link } from "react-router-dom";

const CovidQuestionsPage = () => {
  return (
    <Layout>
      <div className="flex justify-between">
        <CovidForm />
        <AnimatedImage />
      </div>
      <NavButtons>
        <Link to="/identify">
          <img src={Left} />
        </Link>
        <Link to="/vaccination">
          <img src={Right} />
        </Link>
      </NavButtons>
    </Layout>
  );
};

export default CovidQuestionsPage;
