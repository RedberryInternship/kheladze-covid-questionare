import Identify from "@/assets/identify.png";
import Animation from "@/assets/identify-anim.png";

const AnimatedImage = () => {
  return (
    <div className="absolute right-40 top-24">
      <div className="relative">
        <img className="z-10 sticky" src={Identify} />
        <img className="absolute left-32 top-56 z-0" src={Animation} />
      </div>
    </div>
  );
};

export default AnimatedImage;
