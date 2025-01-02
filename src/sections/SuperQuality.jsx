import { shoe8 } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
  return (
    <section
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
      id="about-me"
    >
      <div className="flex flex-col flex-1">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide You
          <span className="text-coral-red"> Super</span>
          <span className="text-coral-red"> Quality</span> Shoes
        </h2>

        <p className="info-text mt-6 lg:max-w-lg">
          Experience the pinnacle of craftsmanship with our Nike shoes, designed
          for ultimate comfort, durability, and style. Our products are designed
          to elevate your experience, providing you with unmatched quality,
          innovation, and a touch of elegance.
        </p>
        <p className="info-text mt-6 lg:max-w-lg">
          Our dedication to detail and excellence ensures your satisfaction with
          every step you take.
        </p>
        <div className="mt-11">
          <Button label="View Product" />
        </div>
      </div>

      <div className="flex flex-1 justify-center items-center">
        <img
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
