import Layout from "@/components/Layout";
import NavButtons from "@/components/NavButtons";

import Right from "@/assets/right.png";
import Left from "@/assets/left.png";

import VaccinationForm from "./components/VaccinationForm";
import AnimatedImage from "./components/AnimatedImage";

import { Link } from "react-router-dom";
const VaccinationPage = () => {
  return (
    <Layout>
      <VaccinationForm />
      <AnimatedImage />
      <NavButtons>
        <Link to="/covid-questions">
          <img src={Left} />
        </Link>
        <Link to="/suggestions">
          <img src={Right} />
        </Link>
      </NavButtons>
    </Layout>
  );
};

export default VaccinationPage;
