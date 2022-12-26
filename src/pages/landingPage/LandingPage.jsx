import Logo from "@/assets/logo.png";

import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-24 w-screen h-screen">
      <img className="w-24" src={Logo} />
      <Link
        className="block text-3xl font-bold w-48 text-center break-normal"
        to="/identify"
      >
        კითხვარის დაწყება
      </Link>
    </div>
  );
};

export default LandingPage;
