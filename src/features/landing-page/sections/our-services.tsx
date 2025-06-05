import SectionTitle from "../components/atoms/section-title";
import Services from "../components/organisms/services/services";
import sourcing from "../../../assets-v1/services-icons/sourcing.svg";
import cod from "../../../assets-v1/services-icons/cod.svg";
import callCenter from "../../../assets-v1/services-icons/call-center.svg";
import delivery from "../../../assets-v1/services-icons/delivery.svg";
import fullfilment from "../../../assets-v1/services-icons/fullfilment.svg";
import warehousing from "../../../assets-v1/services-icons/warhousing.svg";
import phoneSourcing from "../../../assets-v1/services-icons/sourcing-phone.svg";
import phoneCod from "../../../assets-v1/services-icons/cod-phone.svg";
import phoneCallCenter from "../../../assets-v1/services-icons/call-center-phone.svg";
import phoneDelivery from "../../../assets-v1/services-icons/delivery-phone.svg";
import phoneFullfilment from "../../../assets-v1/services-icons/fulfillment-phone.svg";
import phoneWarehousing from "../../../assets-v1/services-icons/warehousing-phone.svg";
import { SingleServiceType } from "../types";

export default function OurServices() {
  const services: SingleServiceType[] = [
    {
      icon: sourcing,
      title: "sourcing",
      text: "We are committed to sourcing high-quality products at excellent prices, ensuring their compatibility with trader’s expectations.",
      phoneIcon: phoneSourcing,
    },
    {
      icon: warehousing,
      title: "warehousing",
      text: "We provide professional storage services to keep products ready for efficient distribution from multiple points within each Gulf country.",
      phoneIcon: phoneWarehousing,
    },
    {
      icon: callCenter,
      title: "call center",
      text: "We offer professional customer service to confirm and follow up on orders before and after they leave the warehouse.",
      phoneIcon: phoneCallCenter,
    },
    {
      icon: fullfilment,
      title: "fulfillment",
      text: "We receive orders, prepare, pack, and label them, then ship and deliver them to customers to ensure a smooth and satisfying shopping experience.",
      phoneIcon: phoneFullfilment,
    },
    {
      icon: delivery,
      title: "delivery",
      text: "We provide fast and secure delivery services, ensuring that orders reach customers in all regions of the Gulf countries.",
      phoneIcon: phoneDelivery,
    },
    {
      icon: cod,
      title: "cash on delivery",
      text: "We offer cash on delivery services",
      phoneIcon: phoneCod,
    },
  ];
  return (
    <section
      id="our-services"
      className="flex container mx-auto justify-center flex-col gap-[var(--spacing-m)] sm:gap-[var(--spacing-xl)]"
    >
      <SectionTitle alignment={"center"}>our services</SectionTitle>
      <Services services={services} />
    </section>
  );
}
