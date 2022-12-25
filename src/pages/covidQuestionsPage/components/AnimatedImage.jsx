import covid from "@/assets/covid-questions.png";
import animation from "@/assets/covid-questions-anim.png";
const AnimatedImage = () => {
  return (
    <div className="absolute right-44 top-32">
      <div className="relative">
        <img className="z-10 sticky" src={covid} />
        <img className="absolute left-20 top-64 z-0" src={animation} />
      </div>
    </div>
  );
};

export default AnimatedImage;
