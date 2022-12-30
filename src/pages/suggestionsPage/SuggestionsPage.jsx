import { Layout } from "@/components";
import AnimatedImage from "./components/AnimatedImage";
import SuggestionForm from "./components/SuggestionForm";

const SuggestionsPage = () => {
  return (
    <Layout num={4}>
      <SuggestionForm />
      <AnimatedImage />
    </Layout>
  );
};

export default SuggestionsPage;
