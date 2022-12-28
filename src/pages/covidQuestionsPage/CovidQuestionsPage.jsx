import { Layout } from "@/components";
import AnimatedImage from "./components/AnimatedImage";
import CovidForm from "./components/CovidForm";

const CovidQuestionsPage = () => {
  return (
    <Layout>
      <div className="flex justify-between">
        <CovidForm />
        <AnimatedImage />
      </div>
    </Layout>
  );
};

export default CovidQuestionsPage;
