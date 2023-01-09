import { Input, NavButtons } from "@/components";
import Line from "@/assets/lin.png";
import Right from "@/assets/right.png";
import { useFormSchema } from "@/hooks";

import * as Yup from "yup";

import { useNavigate } from "react-router-dom";

const IdentifyForm = () => {
  const navigate = useNavigate();
  const schema = Yup.object({
    first_name: Yup.string()
      .min(2, "სახელი უნდა შედგებოდეს მინიმუმ 2 სიმბოლოსგან")
      .required("სავალდებულო"),
    last_name: Yup.string()
      .min(2, "გვარი უნდა შედგებოდეს მინიმუმ 2 სიმბოლოსგან")
      .required("სავალდებულო"),
    email: Yup.string()
      .matches("@redberry.ge", "გამოიყენეთ რედბერის მეილი")
      .required("სავალდებულო"),
  });

  let defaultValues = JSON.parse(localStorage.getItem("identify"))
    ? JSON.parse(localStorage.getItem("identify"))
    : { first_name: "", last_name: "", email: "" };

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    trigger,
  } = useFormSchema(defaultValues, schema);

  const onFormSubmit = (data) => {
    console.log(data, errors);
    navigate("/covid-questions");
  };
  const onFormChange = () => {
    localStorage.setItem("identify", JSON.stringify(getValues()));
  };
  const onInputBlur = (inputName) => {
    trigger(inputName);
  };

  return (
    <form
      onChange={() => onFormChange()}
      onSubmit={handleSubmit(onFormSubmit)}
      className="flex flex-col gap-6 pt-12"
    >
      <Input
        label="სახელი*"
        name="first_name"
        type="text"
        placeholder="იოსებ"
        register={register("first_name")}
        blur={(name) => onInputBlur(name)}
        error={errors.first_name ? errors.first_name.message : ""}
      />
      <Input
        label="გვარი*"
        name="last_name"
        type="text"
        placeholder="ჯუღაშვილი"
        register={register("last_name")}
        blur={(name) => onInputBlur(name)}
        error={errors.last_name ? errors.last_name.message : ""}
      />
      <Input
        label="მეილი*"
        name="email"
        type="email"
        placeholder="fbi@redberry.ge"
        register={register("email")}
        blur={(name) => onInputBlur(name)}
        error={errors.email ? errors.email.message : ""}
      />

      <p className="w-80 text-zinc-600 text-base font-bold mt-16">
        <img className="h-111 w-60 mb-5" src={Line} />
        *-ით მონიშნული ველების შევსება სავალდებულოა
      </p>

      <NavButtons>
        <button type="submit">
          <img src={Right} />
        </button>
      </NavButtons>
    </form>
  );
};

export default IdentifyForm;
