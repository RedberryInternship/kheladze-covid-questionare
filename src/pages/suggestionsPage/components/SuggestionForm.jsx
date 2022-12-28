import { Radio, NavButtons } from "@/components";
import Left from "@/assets/left.png";

import { Link, useNavigate } from "react-router-dom";
import { useForm, useWatch } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const SuggestionForm = () => {
  const navigate = useNavigate();
  const schema = Yup.object({
    non_formal_meetings: Yup.string().required("სავალდებულო"),
    number_of_days_from_office: Yup.string().required("სავალდებულო"),
  });

  let defaultValues = JSON.parse(localStorage.getItem("suggestions"))
    ? JSON.parse(localStorage.getItem("suggestions"))
    : {};

  const {
    register,
    unregister,
    handleSubmit,
    formState: { errors },
    getValues,
    control,
  } = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(schema),
  });
  const onFormSubmit = (data) => {
    const vaccination = JSON.parse(localStorage.getItem("vaccination"));
    const identify = JSON.parse(localStorage.getItem("identify"));
    const covid = JSON.parse(localStorage.getItem("covid"));
    const completeData = {
      ...vaccination,
      ...identify,
      ...covid,
      ...data,
    };

    fetch("https://covid19.devtest.ge/api/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: completeData,
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    localStorage.clear();
    navigate("/thanks");
  };
  const onFormChange = () => {
    localStorage.setItem("suggestions", JSON.stringify(getValues()));
  };

  return (
    <form
      onChange={onFormChange}
      onSubmit={handleSubmit(onFormSubmit)}
      className="flex flex-col gap-11 mt-11 w-606 overflow-scroll h-750"
    >
      <div className="text-22">
        <p className=" mb-5">
          რედბერის მთავარი ღირებულება ჩვენი გუნდის თითოეული წევრია. გარემო,
          რომელსაც ჩვენი თანამშრომლები ქმნით, ბევრისთვის არის და ყოფილა წლების
          განმავლობაში მიზნებისთვის ერთად ბრძოლის მიზეზი, ბევრისთვის კი —
          ჩვენთან გადმოსვლის.
        </p>
        <p>
          პანდემიის პერიოდში ერთმანეთსაც იშვიათად ვნახულობთ პირისპირ და
          ყოველდღიური კომუნიკაციაც გაიშვიათდა.
        </p>
      </div>
      <div className="flex flex-col gap-5">
        <p
          className={`text-22 font-bold ${
            errors.non_formal_meetings && "text-orange-600"
          }`}
        >
          რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ შეხვედრები,
          სადაც ყველა სურვილისამებრ ჩაერთვება?*
        </p>
        <Radio
          name="non_formal_meetings"
          label="კვირაში ორჯერ"
          value="twice_a_week"
          id="twice_a_week"
          register={register("non_formal_meetings")}
        />
        <Radio
          name="non_formal_meetings"
          label="კვირაში ერთხელ"
          value="once_a_week"
          id="once_a_week"
          register={register("non_formal_meetings")}
        />
        <Radio
          name="non_formal_meetings"
          label="ორ კვირაში ერთხელ"
          value="once_in_a_two_weeks"
          id="once_in_a_two_weeks"
          register={register("non_formal_meetings")}
        />
        <Radio
          name="non_formal_meetings"
          label="თვეში ერთხელ"
          value="once_in_a_month"
          id="once_in_a_month"
          register={register("non_formal_meetings")}
        />
      </div>
      <div className="flex flex-col gap-5">
        <p
          className={`text-22 font-bold ${
            errors.number_of_days_from_office && "text-orange-600"
          }`}
        >
          კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*
        </p>
        <Radio
          name="number_of_days_from_office"
          label="0"
          value={0}
          id="0"
          register={register("number_of_days_from_office")}
        />
        <Radio
          name="number_of_days_from_office"
          label="1"
          value={1}
          id="1"
          register={register("number_of_days_from_office")}
        />
        <Radio
          name="number_of_days_from_office"
          label="2"
          value={2}
          id="2"
          register={register("number_of_days_from_office")}
        />
        <Radio
          name="number_of_days_from_office"
          label="3"
          value={3}
          id="3"
          register={register("number_of_days_from_office")}
        />
        <Radio
          name="number_of_days_from_office"
          label="4"
          value={4}
          id="4"
          register={register("number_of_days_from_office")}
        />
        <Radio
          name="number_of_days_from_office"
          label="5"
          value={5}
          id="5"
          register={register("number_of_days_from_office")}
        />
      </div>
      <div>
        <p className="text-22 font-bold mb-5">რას ფიქრობ ფიზიკურ შეკრებებზე?</p>
        <textarea
          {...register("what_about_meetings_in_live")}
          className="resize-none border border-neutral-800 bg-inherit h-44 w-full"
          name="what_about_meetings_in_live"
        />
      </div>

      <div>
        <p className="text-22 font-bold mb-5">
          რას ფიქრობ არსებულ გარემოზე: რა მოგწონს, რას დაამატებდი, რას შეცვლიდი?
        </p>
        <textarea
          {...register("tell_us_your_opinion_about_us")}
          className="resize-none border border-neutral-800 bg-inherit h-44 w-full"
          name="tell_us_your_opinion_about_us"
        />
      </div>
      <div className="self-end border w-44">
        <button
          type="submit"
          className="bg-cyan-700 w-full h-14 text-lg tracking-wider font-bold text-white rounded-3xl"
        >
          დასრულება
        </button>
      </div>
      <NavButtons>
        <Link to="/vaccination">
          <img src={Left} />
        </Link>
      </NavButtons>
    </form>
  );
};

export default SuggestionForm;
