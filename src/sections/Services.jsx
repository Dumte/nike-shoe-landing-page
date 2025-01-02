import ServiceCard from "../components/ServiceCard";
import { services } from "../constants";

const Services = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map((service) => (
        <div className="flex flex-col justify-between items-center">
          <ServiceCard key={service.label} {...service} />
        </div>
      ))}
    </section>
  );
};

export default Services;
