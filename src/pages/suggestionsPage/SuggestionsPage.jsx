import Layout from "@/components/Layout";
import NavButtons from "@/components/NavButtons";
import Left from "@/assets/left.png";
import AnimatedImage from "./components/AnimatedImage";
import SuggestionForm from "./components/SuggestionForm";
import { Link } from "react-router-dom";

const SuggestionsPage = () => {
  return (
    <Layout>
      <SuggestionForm />
      <AnimatedImage />
      <NavButtons>
        <Link to="/vaccination">
          <img src={Left} />
        </Link>
      </NavButtons>
    </Layout>
  );
};

export default SuggestionsPage;
