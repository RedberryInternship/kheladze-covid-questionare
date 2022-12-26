import Redberry from "@/assets/redberry.png";

const Layout = ({ children }) => {
  return (
    <div className="w-screen pl-48 pr-48 z-20">
      <div className="border-b border-neutral-800 flex justify-between items-end">
        <img src={Redberry} className="pt-24 pb-6" />
        <span className="pb-6 text-4xl font-bold">1/4</span>
      </div>
      {children}
    </div>
  );
};

export default Layout;
