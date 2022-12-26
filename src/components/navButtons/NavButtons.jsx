const NavButtons = ({ children }) => {
  return (
    <div className="w-screen absolute left-0 bottom-28 flex justify-center gap-28 z-40">
      {children}
    </div>
  );
};

export default NavButtons;
