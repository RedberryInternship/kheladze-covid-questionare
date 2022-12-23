import { Route, Routes } from "react-router-dom";

import CovidQuestionsPage from "./pages/covidQuestionsPage/CovidQuestionsPage";
import IdentifyPage from "./pages/identifyPage/identifyPage";
import LandingPage from "./pages/landingPage/LandingPage";
import SuggestionsPage from "./pages/suggestionsPage/suggestionsPage";
import NotFound from "./pages/notFound/NotFound";
import Thanks from "./pages/thanks/thanks";
import VaccinationPage from "./pages/vaccinationPage/vaccinationPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/identify" element={<IdentifyPage />} />
      <Route path="/covid-questions" element={<CovidQuestionsPage />} />
      <Route path="/vaccination" element={<VaccinationPage />} />
      <Route path="/suggestions" element={<SuggestionsPage />} />
      <Route path="/thanks" element={<Thanks />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
