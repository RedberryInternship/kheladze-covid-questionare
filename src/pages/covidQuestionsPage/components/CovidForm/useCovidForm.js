import { useForm } from "react-hook-form";

const useCovidForm = (defaultValues) => {
  return useForm({
    defaultValues: defaultValues,
  });
};

export default useCovidForm;
