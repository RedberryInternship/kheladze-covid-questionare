import { Input } from "@/components";
import Line from "@/assets/lin.png";

const IdentifyForm = () => {
  return (
    <form className="flex flex-col gap-11 pt-12">
      <Input
        label="სახელი*"
        name="first_name"
        type="text"
        placeholder="იოსებ"
      />
      <Input
        label="გვარი*"
        name="last_name"
        type="text"
        placeholder="ჯუღაშვილი"
      />
      <Input
        label="მეილი*"
        name="email"
        type="email"
        placeholder="fbi@redberry.ge"
      />
      <p className="w-80 text-zinc-600 text-base font-bold mt-16">
        <img className="h-111 w-60 mb-5" src={Line} />
        *-ით მონიშნული ველების შევსება სავალდებულოა
      </p>
    </form>
  );
};

export default IdentifyForm;
