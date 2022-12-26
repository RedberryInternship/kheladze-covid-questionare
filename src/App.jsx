import { Route, Routes } from "react-router-dom";

import {
  LandingPage,
  IdentifyPage,
  CovidQuestionsPage,
  VaccinationPage,
  SuggestionsPage,
  Thanks,
  NotFound,
} from "./pages";

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
