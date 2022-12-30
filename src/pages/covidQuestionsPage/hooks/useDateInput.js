import { useEffect, useState } from "react";

const useDateInput = (name, set, trigger) => {
  const [startDate, setStartDate] = useState("");
  useEffect(() => {
    set(name, startDate);
    trigger && trigger(name);
  }, [startDate]);
  return [startDate, setStartDate];
};

export default useDateInput;
