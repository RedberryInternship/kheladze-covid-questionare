import { Radio, NavButtons } from "@/components";
import Right from "@/assets/right.png";
import Left from "@/assets/left.png";
import { useFormSchema } from "@/hooks";

import { useNavigate, Link } from "react-router-dom";
import { useWatch } from "react-hook-form";
import * as Yup from "yup";

const VaccinationForm = () => {
  const navigate = useNavigate();
  const schema = Yup.object({
    had_vaccine: Yup.string().required("სავალდებულო"),
  }).when(({ had_vaccine }) => {
    if (had_vaccine === "true") {
      return Yup.object({
        vaccination_stage: Yup.string().required("სავალდებულო"),
      });
    } else if (had_vaccine === "false") {
      return Yup.object({ i_am_waiting: Yup.string().required("სავალდებულო") });
    }
  });

  let defaultValues = JSON.parse(localStorage.getItem("vaccination"))
    ? JSON.parse(localStorage.getItem("vaccination"))
    : {};

  const {
    register,
    unregister,
    handleSubmit,
    formState: { errors },
    getValues,
    control,
  } = useFormSchema(defaultValues, schema);
  const watchVaccine = useWatch({
    control,
    name: "had_vaccine",
  });

  const watchStage = useWatch({
    control,
    name: "vaccination_stage",
  });
  const watchWaiting = useWatch({
    control,
    name: "i_am_waiting",
  });

  const hadVaccine = (
    <div className="flex flex-col gap-5 mt-11">
      <div className="text-2xl h-16 font-bold">
        უკვე აცრილი ხარ?*
        <p className="text-orange-600">
          {errors.had_vaccine ? "სავალდებულო" : null}
        </p>
      </div>
      <Radio
        name="had_vaccine"
        value={true}
        id="had_yes"
        label="კი"
        register={register("had_vaccine")}
      />
      <Radio
        name="had_vaccine"
        value={false}
        id="had_no"
        label="არა"
        register={register("had_vaccine")}
      />
    </div>
  );
  const goToRegister = (
    <div className="ml-9">
      <p className="text-xl mt-10">
        რომ არ გადადო,
        <br /> ბარემ ახლავე დარეგისტრირდი
      </p>
      <a className="text-cyan-600" href="https://booking.moh.gov.ge/">
        https://booking.moh.gov.ge/
      </a>
    </div>
  );

  const vaccinationStage = (
    <>
      <div className="mt-14 flex flex-col gap-4">
        <div className="text-2xl h-16 font-bold">
          აირჩიე რა ეტაპზე ხარ*
          <p className="text-orange-600">
            {errors.vaccination_stage ? "სავალდებულო" : null}
          </p>
        </div>
        <Radio
          name="vaccination_stage"
          value="first_dosage_and_registered_on_the_second"
          label="პირველი დოზა და დარეგისტრირებული ვარ მეორეზე"
          id="first_dosage"
          register={watchVaccine === "true" && register("vaccination_stage")}
        />
        <Radio
          name="vaccination_stage"
          value="fully_vaccinated"
          label="სრულიად აცრილი ვარ"
          id="fully"
          register={watchVaccine === "true" && register("vaccination_stage")}
        />
        <Radio
          name="vaccination_stage"
          label="პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე"
          value="first_dosage_and_not_registered_yet"
          id="second_dosage"
          register={watchVaccine === "true" && register("vaccination_stage")}
        />
      </div>
      {watchStage === "first_dosage_and_not_registered_yet" && goToRegister}
    </>
  );

  const vaccineLink = (
    <p className="mt-10 ml-9 text-cyan-600 text-xl">
      👉 https://booking.moh.gov.ge/
    </p>
  );
  const protocol = (
    <div className="mt-10 w-513 ml-9">
      <p className="text-xl">
        ახალი პროტოკოლით კოვიდის გადატანიდან 1 თვის შემდეგ შეგიძლიათ ვაქცინის
        გაკეთება.
      </p>
      <p className="mt-5 text-xl">
        👉 რეგისტრაციის ბმული
        <a href="https://booking.moh.gov.ge/"> https://booking.moh.gov.ge/</a>
      </p>
    </div>
  );

  const waiting = (
    <>
      <div className="mt-14 flex flex-col gap-4">
        <div className="text-2xl h-16 font-bold">
          რას ელოდები?*
          <p className="text-orange-600">
            {errors.i_am_waiting ? "სავალდებულო" : null}
          </p>
        </div>
        <Radio
          name="i_am_waiting"
          label="დარეგისტრირებული ვარ და ველოდები რიცხვს"
          value="registered_and_waiting"
          id="registered_and_waiting"
          register={watchVaccine === "false" && register("i_am_waiting")}
        />
        <Radio
          name="i_am_waiting"
          label="არ ვგეგმავ"
          value="not_planning"
          id="not_planning"
          register={watchVaccine === "false" && register("i_am_waiting")}
        />
        <Radio
          name="i_am_waiting"
          label="გადატანილი მაქვს და ვგეგმავ აცრას"
          value="had_covid_and_planning_to_be_vaccinated"
          id="had_covid_and_planning_to_be_vaccinated"
          register={watchVaccine === "false" && register("i_am_waiting")}
        />
      </div>
      {watchWaiting === "not_planning" && vaccineLink}
      {watchWaiting === "had_covid_and_planning_to_be_vaccinated" && protocol}
    </>
  );
  const onFormSubmit = (data) => {
    localStorage.setItem("vaccination", JSON.stringify(data));
    navigate("/suggestions");
  };
  const onFormChange = () => {
    if (watchVaccine === "false") {
      unregister("vaccination_stage");
    } else if (watchVaccine === "true") {
      unregister("i_am_waiting");
    }
    localStorage.setItem("vaccination", JSON.stringify(getValues()));
  };

  return (
    <form onChange={onFormChange} onSubmit={handleSubmit(onFormSubmit)}>
      {hadVaccine}
      {watchVaccine === "true" && vaccinationStage}
      {watchVaccine === "false" && waiting}
      <NavButtons>
        <Link to="/covid-questions">
          <img src={Left} />
        </Link>
        <button type="submit">
          <img src={Right} />
        </button>
      </NavButtons>
    </form>
  );
};

export default VaccinationForm;
