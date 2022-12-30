import { Radio, Input, NavButtons } from "@/components";
import Right from "@/assets/right.png";
import Left from "@/assets/left.png";

import { Link, useNavigate } from "react-router-dom";
import { useForm, useWatch } from "react-hook-form";
import DateInput from "./DateInput";

const CovidForm = () => {
  const navigate = useNavigate();

  let defaultValues = JSON.parse(localStorage.getItem("covid"))
    ? JSON.parse(localStorage.getItem("covid"))
    : {};
  const {
    register,
    unregister,
    handleSubmit,
    formState: { errors },
    getValues,
    trigger,
    setValue,
    setError,
    control,
  } = useForm({
    defaultValues: defaultValues,
  });
  const watchCovid = useWatch({
    control,
    name: "had_covid",
  });
  const watchAntibody = useWatch({
    control,
    name: "had_antibody_test",
  });

  const validate = () => {
    let errorObj = {};
    const { had_covid, had_antibody_test, covid_sickness_date } = getValues();
    if (!had_covid) {
      setError("had_covid", { message: "სავალდებულო" });
      errorObj.had_covid = { message: "სავალდებულო" };
    }

    if (had_covid === "yes" && had_antibody_test === null) {
      setError("had_antibody_test", { message: "სავალდებულო" });
      errorObj.had_antibody_test = { message: "სავალდებულო" };
    } else if (had_covid !== "yes") {
      unregister("had_antibody_test");
      unregister("covid_sickness_date");
      unregister("test_date");
      unregister("number");
    }

    if (
      had_covid === "yes" &&
      had_antibody_test === "false" &&
      covid_sickness_date?.length === 0
    ) {
      setError("covid_sickness_date", { message: "სავალდებულო" });
      errorObj.covid_sickness_date = { message: "სავალდებულო" };
    }

    if (had_covid === "yes" && had_antibody_test === "false") {
      unregister("test_date");
      unregister("number");
    } else if (had_covid === "yes" && had_antibody_test === "true") {
      unregister("covid_sickness_date");
    }

    return errorObj;
  };

  const onFormSubmit = (data) => {
    const errorObj = validate();

    const { had_antibody_test, had_covid, ...testDate_number } = data;

    if (watchAntibody === "true") {
      let antibodies = null;
      if (testDate_number.test_date) {
        antibodies = { test_date: testDate_number.test_date };
      }
      localStorage.setItem(
        "covid",
        JSON.stringify({
          had_antibody_test,
          had_covid,
          antibodies: antibodies,
        })
      );
    } else {
      localStorage.setItem("covid", JSON.stringify(data));
    }
    Object.keys(errorObj).length === 0 ? navigate("/vaccination") : null;
  };

  const onFormChange = () => {
    validate();
    localStorage.setItem("covid", JSON.stringify(getValues()));
  };

  const hadCovid = (
    <div className="flex flex-col gap-6 mt-10">
      <p
        className={`text-2xl font-bold ${
          errors.had_covid ? "text-orange-600" : ""
        }`}
      >
        გაქვს გადატანილი Covid-19?*
      </p>
      <Radio
        name="had_covid"
        id="yes"
        value="yes"
        label="კი"
        register={register("had_covid")}
      />
      <Radio
        name="had_covid"
        id="no"
        value="no"
        label="არა"
        register={register("had_covid")}
      />
      <Radio
        name="had_covid"
        id="have_right_now"
        value="have_right_now"
        label="ახლა მაქვს"
        register={register("had_covid")}
      />
    </div>
  );
  const hadAntibodyTest = (
    <div className="flex flex-col gap-6">
      <p
        className={`text-2xl font-bold ${
          errors.had_antibody_test ? "text-orange-600" : ""
        }`}
      >
        ანტისხეულების ტესტი გაქვს გაკეთებული?*
      </p>
      <Radio
        name="had_antibody_test"
        id="test_yes"
        value={true}
        label="კი"
        register={watchCovid === "yes" ? register("had_antibody_test") : null}
      />
      <Radio
        name="had_antibody_test"
        id="test_no"
        value={false}
        label="არა"
        register={watchCovid === "yes" ? register("had_antibody_test") : null}
      />
    </div>
  );
  const covidSicknessDate = (
    <div>
      <p
        className={`text-2xl font-bold ${
          errors.covid_sickness_date ? "text-orange-600" : ""
        }`}
      >
        მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) <br /> როდის გქონდა Covid-19*
      </p>
      <DateInput
        name="covid_sickness_date"
        placeholder={
          defaultValues.covid_sickness_date
            ? defaultValues.covid_sickness_date
            : "დდ/თთ/წწ"
        }
        trigger={trigger}
        set={setValue}
        register={
          watchAntibody === "false" ? register("covid_sickness_date") : null
        }
      />
    </div>
  );
  const antibodies = (
    <div>
      <p className="text-2xl font-bold">
        თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი <br /> რიცხვი და
        ანტისხეულების რაოდენობა*
      </p>
      <DateInput
        name="test_date"
        placeholder={
          defaultValues.test_date ? defaultValues.test_date : "რიცხვი"
        }
        set={setValue}
        register={watchAntibody === "false" ? register("test_date") : null}
      />
      <Input
        name="number"
        type="number"
        placeholder="ანტისხეულების რაოდენობა"
        register={watchAntibody === "true" ? register("number") : null}
      />
    </div>
  );

  return (
    <form
      onSubmit={handleSubmit(onFormSubmit)}
      onChange={onFormChange}
      className="flex flex-col gap-11"
    >
      {hadCovid}
      {watchCovid === "yes" ? hadAntibodyTest : null}
      {watchAntibody === "true" ? antibodies : null}
      {watchAntibody === "false" ? covidSicknessDate : null}
      <NavButtons>
        <Link to="/identify">
          <img src={Left} />
        </Link>
        <button type="submit">
          <img src={Right} />
        </button>
      </NavButtons>
    </form>
  );
};

export default CovidForm;
