import { Layout } from "@/components";
import { AnimatedImage, CovidForm } from "./components";

const CovidQuestionsPage = () => {
  return (
    <Layout num={2}>
      <div className="flex justify-between">
        <CovidForm />
        <AnimatedImage />
      </div>
    </Layout>
  );
};

export default CovidQuestionsPage;
