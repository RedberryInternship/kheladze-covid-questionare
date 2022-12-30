import { Layout } from "@/components";

import VaccinationForm from "./components/VaccinationForm";
import AnimatedImage from "./components/AnimatedImage";

const VaccinationPage = () => {
  return (
    <Layout num={3}>
      <VaccinationForm />
      <AnimatedImage />
    </Layout>
  );
};

export default VaccinationPage;
