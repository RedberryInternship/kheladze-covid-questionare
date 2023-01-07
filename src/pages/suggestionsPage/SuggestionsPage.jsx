import { Layout } from "@/components";
import { AnimatedImage, SuggestionForm } from "./components";

const SuggestionsPage = () => {
  return (
    <Layout num={4}>
      <SuggestionForm />
      <AnimatedImage />
    </Layout>
  );
};

export default SuggestionsPage;
