const Input = ({ name, type, label, placeholder, register }) => {
  return (
    <div className="flex flex-col w-513 ">
      <label className="font-bold text-2xl h-10" htmlFor={name}>
        {label}
      </label>
      <input
        className={`h-12 border border-neutral-800 bg-inherit pl-5 placeholder:text-neutral-800 placeholder:text-lg `}
        id={name}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
