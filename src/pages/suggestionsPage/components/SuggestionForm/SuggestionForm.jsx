import { Radio, NavButtons } from "@/components";
import Left from "@/assets/left.png";
import { useFormSchema } from "@/hooks";

import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";

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
    handleSubmit,
    formState: { errors },
    getValues,
  } = useFormSchema(defaultValues, schema);
  const onFormSubmit = (data) => {
    const { had_vaccine, vaccination_stage, i_am_waiting } = JSON.parse(
      localStorage.getItem("vaccination")
    );

    const vaccine = had_vaccine === "true" ? true : false;
    const identify = JSON.parse(localStorage.getItem("identify"));
    const covid = JSON.parse(localStorage.getItem("covid"));
    const completeData = {
      had_vaccine: vaccine,
      vaccination_stage,
      i_am_waiting,
      ...identify,
      ...covid,
      ...data,
    };

    fetch("https://covid19.devtest.ge/api/create", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(completeData),
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
      className="flex flex-col gap-11 mt-11 w-606 overflow-auto h-750"
      id="scroll"
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
        <div className="text-2xl h-36 font-bold">
          რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ შეხვედრები,
          სადაც ყველა სურვილისამებრ ჩაერთვება?*
          <p className="text-orange-600">
            {errors.non_formal_meetings ? "სავალდებულო" : null}
          </p>
        </div>
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
        <div className="text-2xl h-20 font-bold">
          კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*
          <p className="text-orange-600">
            {errors.number_of_days_from_office ? "სავალდებულო" : null}
          </p>
        </div>
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
