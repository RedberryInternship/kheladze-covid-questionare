import Vaccination from "@/assets/vaccination.png";
import Animation from "@/assets/vaccination-anim.png";
const AnimatedImage = () => {
  return (
    <div className="absolute right-44 top-48">
      <div className="relative">
        <img className="z-10 sticky" src={Vaccination} />
        <img className="absolute left-8 -top-4 z-0" src={Animation} />
      </div>
    </div>
  );
};

export default AnimatedImage;
