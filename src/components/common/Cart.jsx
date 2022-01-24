import { BsPlusLg } from "react-icons/bs";
import ScrollAnimation from "react-animate-on-scroll";

const Cart = () => {
  return (
    <div
      style={{
        backgroundImage: `url("img-slider-01.jpeg")`,
      }}
      className="w-96 h-96  shadow-xl relative"
    >
      <div className="relative w-full h-full">
        <div
          className="absolute bg-sky-900 z-10 w-32 h-28 right-0 top-1/4"
          style={{ clipPath: "polygon(0 53%, 100% 100%, 100% 0)" }}
        >
          <ScrollAnimation
            animateIn="zoomIn"
            duration={0.5}
            delay={1000}
            className="w-full flex items-center justify-end pt-10 px-6"
          >
            <BsPlusLg className="text-white w-8 h-8" />
          </ScrollAnimation>
        </div>
        <div
          className="w-full h-full bg-white p-8 flex items-end"
          style={{ clipPath: "polygon(0 65%, 100% 28%, 100% 100%, 0% 100%)" }}
        >
          <div>
            <h2 className="text-red-500 text-xl font-bold mb-3">
              HRBC Recruting
            </h2>
            <p className="text-sm">
              Synergistically evolve 2.0 technologies rather than just in time
              initiatives. Quickly deploy strategic networks with compelling
              e-business...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
