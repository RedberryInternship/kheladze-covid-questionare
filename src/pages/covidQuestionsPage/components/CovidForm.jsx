import Input from "@/components/Input";
import Radio from "@/components/Radio";

const CovidForm = () => {
  const hadCovid = (
    <div className="flex flex-col gap-6 mt-10">
      <p className="text-2xl font-bold">გაქვს გადატანილი Covid-19?*</p>
      <Radio name="had_covid" id="yes" value="yes" label="კი" />
      <Radio name="had_covid" id="no" value="no" label="არა" />
      <Radio name="had_covid" id="now" value="now" label="ახლა მაქვს" />
    </div>
  );
  const hadAntibodyTest = (
    <div className="flex flex-col gap-6">
      <p className="text-2xl font-bold">
        ანტისხეულების ტესტი გაქვს გაკეთებული?*
      </p>
      <Radio name="had_antibody_test" id="test_yes" value={true} label="კი" />
      <Radio name="had_antibody_test" id="test_no" value={false} label="არა" />
    </div>
  );
  const covidSicknessDate = (
    <div>
      <p className="text-2xl font-bold">
        მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) <br /> როდის გქონდა Covid-19*
      </p>
      <Input name="covid_sickness_date" id="covid_sickness_date" type="date" />
    </div>
  );
  const antibodies = (
    <div>
      <p className="text-2xl font-bold">
        თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი <br /> რიცხვი და
        ანტისხეულების რაოდენობა*
      </p>
      <Input id="test_date" name="test_date" type="date" placeholder="რიცხვი" />
      <Input
        name="number"
        type="number"
        placeholder="ანტისხეულების რაოდენობა"
      />
    </div>
  );
  return (
    <form className="flex flex-col gap-11">
      {hadCovid}
      {hadAntibodyTest}
      {covidSicknessDate}
    </form>
  );
};

export default CovidForm;
