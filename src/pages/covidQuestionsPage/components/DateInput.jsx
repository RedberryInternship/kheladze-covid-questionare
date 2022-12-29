import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateInput = ({ name, placeholder, register, set, trigger }) => {
  const [startDate, setStartDate] = useState("");
  useEffect(() => {
    set(name, startDate);
    trigger && trigger(name);
  }, [startDate]);

  return (
    <>
      <input
        id={name}
        name={name}
        type="date"
        {...register}
        className="opacity-0"
      />
      <DatePicker
        placeholderText={placeholder.slice(0, 10)}
        className="h-12 border w-513 border-neutral-800 bg-inherit pl-5 placeholder:text-neutral-800 placeholder:text-lg"
        selected={startDate}
        dateFormat="dd/MM/yyyy"
        onChange={(date) => setStartDate(date)}
      />
    </>
  );
};

export default DateInput;
