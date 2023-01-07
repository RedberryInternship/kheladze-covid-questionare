import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const useFormSchema = (defaultValues, schema) => {
  return useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(schema),
  });
};

export default useFormSchema;
