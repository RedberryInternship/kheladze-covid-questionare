import identify from "@/assets/identify.png";
import animation from "@/assets/identify-anim.png";

const AnimatedImage = () => {
  return (
    <div className="absolute right-40 top-24">
      <div className="relative">
        <img className="z-10 sticky" src={identify} />
        <img className="absolute left-32 top-56 z-0" src={animation} />
      </div>
    </div>
  );
};

export default AnimatedImage;
