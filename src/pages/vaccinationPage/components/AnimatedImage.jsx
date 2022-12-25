import vaccination from "@/assets/vaccination.png";
import animation from "@/assets/vaccination-anim.png";
const AnimatedImage = () => {
  return (
    <div className="absolute right-44 top-48">
      <div className="relative">
        <img className="z-10 sticky" src={vaccination} />
        <img className="absolute left-8 -top-4 z-0" src={animation} />
      </div>
    </div>
  );
};

export default AnimatedImage;
