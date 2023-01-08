import { Layout } from "@/components";
import { VaccinationForm, AnimatedImage } from "./components";

const VaccinationPage = () => {
  return (
    <Layout num={3}>
      <VaccinationForm />
      <AnimatedImage />
    </Layout>
  );
};

export default VaccinationPage;
