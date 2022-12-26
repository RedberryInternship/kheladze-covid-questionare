import Suggestions from "@/assets/suggestions.png";
import Animation from "@/assets/suggestions-anim.png";
const AnimatedImage = () => {
  return (
    <div className="absolute right-64 top-52">
      <div className="relative">
        <img className="z-10 sticky" src={Suggestions} />
        <img className="absolute left-24 top-16 z-0" src={Animation} />
      </div>
    </div>
  );
};

export default AnimatedImage;
