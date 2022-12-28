import { Layout } from "@/components";

import VaccinationForm from "./components/VaccinationForm";
import AnimatedImage from "./components/AnimatedImage";

const VaccinationPage = () => {
  return (
    <Layout>
      <VaccinationForm />
      <AnimatedImage />
    </Layout>
  );
};

export default VaccinationPage;
