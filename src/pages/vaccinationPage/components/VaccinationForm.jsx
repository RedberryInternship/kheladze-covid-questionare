import Radio from "@/components/Radio";

const VaccinationForm = () => {
  const hadVaccine = (
    <div className="flex flex-col gap-5 mt-11">
      <p className="text-2xl font-bold ">უკვე აცრილი ხარ?*</p>
      <Radio name="had_vaccine" value={true} id="had_yes" label="კი" />
      <Radio name="had_vaccine" value={false} id="had_no" label="არა" />
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
        <p className="text-2xl font-bold ">აირჩიე რა ეტაპზე ხარ*</p>
        <Radio
          name="vaccination_stage"
          value="first_dosage_and_registered_on_the_second"
          label="პირველი დოზა და დარეგისტრირებული ვარ მეორეზე"
          id="first_dosage"
        />
        <Radio
          name="vaccination_stage"
          value="fully_vaccinated"
          label="სრულიად აცრილი ვარ"
          id="fully"
        />
        <Radio
          name="vaccination_stage"
          label="პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე"
          value="first_dosage_and_not_registered_yet"
          id="second_dosage"
        />
      </div>
      {goToRegister}
    </>
  );

  const vaccineLink = (
    <p className="mt-10 text-cyan-600 text-xl">
      👉 https://booking.moh.gov.ge/
    </p>
  );
  const protocol = (
    <div>
      <p className="text-xl">
        ახალი პროტოკოლით კოვიდის გადატანიდან 1 თვის შემდეგ შეგიძლიათ ვაქცინის
        გაკეთება.
      </p>
      <p className="mt-5 text-xl">
        👉 რეგისტრაციის ბმული
        <a href="https://booking.moh.gov.ge/">https://booking.moh.gov.ge/</a>
      </p>
    </div>
  );

  const waiting = (
    <>
      <div className="mt-14 flex flex-col gap-4">
        <p className="text-2xl font-bold ">რას ელოდები?*</p>
        <Radio
          name="i_am_waiting"
          label="დარეგისტრირებული ვარ და ველოდები რიცხვს"
          value="registered_and_waiting"
          id="registered_and_waiting"
        />
        <Radio
          name="i_am_waiting"
          label="არ ვგეგმავ"
          value="not_planning"
          id="not_planning"
        />
        <Radio
          name="i_am_waiting"
          label="გადატანილი მაქვს და ვგეგმავ აცრას"
          value="had_covid_and_planning_to_be_vaccinated"
          id="had_covid_and_planning_to_be_vaccinated"
        />
      </div>
    </>
  );
  return (
    <form>
      {hadVaccine}
      {waiting}
    </form>
  );
};

export default VaccinationForm;
