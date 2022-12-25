import suggestions from "@/assets/suggestions.png";
import animation from "@/assets/suggestions-anim.png";
const AnimatedImage = () => {
  return (
    <div className="absolute right-64 top-52">
      <div className="relative">
        <img className="z-10 sticky" src={suggestions} />
        <img className="absolute left-24 top-16 z-0" src={animation} />
      </div>
    </div>
  );
};

export default AnimatedImage;
