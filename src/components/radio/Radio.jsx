const Radio = ({ id, label, name, value, register }) => {
  return (
    <label htmlFor={id} className="radio-input-container">
      {label}
      <input type="radio" id={id} name={name} value={value} {...register} />
      <span className="checkmark"></span>
    </label>
  );
};

export default Radio;
