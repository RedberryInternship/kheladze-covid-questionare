const Radio = ({ id, label, name, value }) => {
  return (
    <label htmlFor={id} className="radio-input-container">
      {label}
      <input type="radio" id={id} name={name} value={value} />
      <span className="checkmark"></span>
    </label>
  );
};

export default Radio;
