import { Layout } from "@/components";

import IdentifyForm from "./components/IdentifyForm";
import AnimatedImage from "./components/AnimatedImage";

const IdentifyPage = () => {
  return (
    <Layout>
      <div className="flex justify-between">
        <IdentifyForm />
        <AnimatedImage />
      </div>
    </Layout>
  );
};

export default IdentifyPage;
