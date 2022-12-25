import Radio from "@/components/Radio";

const SuggestionForm = () => {
  return (
    <form className="flex flex-col gap-11 mt-11 w-606 overflow-scroll h-750">
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
        <p className="text-22 font-bold">
          რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ შეხვედრები,
          სადაც ყველა სურვილისამებრ ჩაერთვება?*
        </p>
        <Radio
          name="non_formal_meetings"
          label="კვირაში ორჯერ"
          value="twice_a_week"
          id="twice_a_week"
        />
        <Radio
          name="non_formal_meetings"
          label="კვირაში ერთხელ"
          value="once_a_week"
          id="once_a_week"
        />
        <Radio
          name="non_formal_meetings"
          label="ორ კვირაში ერთხელ"
          value="once_in_a_two_weeks"
          id="once_in_a_two_weeks"
        />
        <Radio
          name="non_formal_meetings"
          label="თვეში ერთხელ"
          value="once_in_a_month"
          id="once_in_a_month"
        />
      </div>
      <div className="flex flex-col gap-5">
        <p className="text-22 font-bold">
          კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*
        </p>
        <Radio name="number_of_days_from_office" label="0" value={0} id="0" />
        <Radio name="number_of_days_from_office" label="1" value={1} id="1" />
        <Radio name="number_of_days_from_office" label="2" value={2} id="2" />
        <Radio name="number_of_days_from_office" label="3" value={3} id="3" />
        <Radio name="number_of_days_from_office" label="4" value={4} id="4" />
        <Radio name="number_of_days_from_office" label="5" value={5} id="5" />
      </div>
      <div>
        <p className="text-22 font-bold mb-5">რას ფიქრობ ფიზიკურ შეკრებებზე?</p>
        <textarea
          className="resize-none border border-neutral-800 bg-inherit h-44 w-full"
          name="what_about_meetings_in_live"
        />
      </div>

      <div>
        <p className="text-22 font-bold mb-5">
          რას ფიქრობ არსებულ გარემოზე: რა მოგწონს, რას დაამატებდი, რას შეცვლიდი?
        </p>
        <textarea
          className="resize-none border border-neutral-800 bg-inherit h-44 w-full"
          name="tell_us_your_opinion_about_us"
        />
      </div>
      <div className="self-end border w-44">
        <button className="bg-cyan-700 w-full h-14 text-lg tracking-wider font-bold text-white rounded-3xl">
          დასრულება
        </button>
      </div>
    </form>
  );
};

export default SuggestionForm;
