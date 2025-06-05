import ServicesCard from "../../molecules/services-card";
// import { SingleServiceType } from "@/features/landing-page/types";
import { SingleServiceType } from "../../../types";

type ServiceProps = {
  services: SingleServiceType[];
};
export default function Services({ services }: ServiceProps) {
  return (
    <div className="justify-center grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-[var(--spacing-s)]">
      {services.map((service) => (
        <ServicesCard
          key={service.title + service.text}
          icon={service.icon}
          title={service.title}
          text={service.text}
          phoneIcon={service.phoneIcon}
        />
      ))}
    </div>
  );
}
