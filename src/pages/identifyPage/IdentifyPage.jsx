import { Layout } from "@/components";

import { IdentifyForm, AnimatedImage } from "./components";

const IdentifyPage = () => {
  return (
    <Layout num={1}>
      <div className="flex justify-between">
        <IdentifyForm />
        <AnimatedImage />
      </div>
    </Layout>
  );
};

export default IdentifyPage;
