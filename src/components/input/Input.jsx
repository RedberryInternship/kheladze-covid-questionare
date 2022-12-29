const Input = ({ name, type, label, placeholder, register, blur, error }) => {
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
        {...register}
        onBlur={blur ? () => blur(name) : null}
      />
      <p className="h-5 text-orange-600">{error}</p>
    </div>
  );
};

export default Input;
