import simulation from "../../../../assets-v1/benefits-icons/simulation.svg";
// import simulation from "assets-v1/benefits-icons/simulation.svg";
import am from "../../../../assets-v1/benefits-icons/am.svg";
import realTime from "../../../../assets-v1/benefits-icons/real-time.svg";
import warehousing from "../../../../assets-v1/benefits-icons/warehousing.svg";
import SingleBenefit from "./single-benefit";
import { SingleBenefitType } from "../../types";

export default function BenefitsList() {
  const benefits: SingleBenefitType[] = [
    { text: "professional account manager", icon: am },
    { text: "automatic pricing simulators", icon: simulation },
    { text: "real-time tracking", icon: realTime },
    { text: "free warehousing", icon: warehousing },
  ];
  return (
    <ul className="flex flex-col gap-[var(--spacing-xs)] divide-y-1 divide-[var(--color-border)] text-left">
      {benefits.map((benefit) => (
        <SingleBenefit
          key={benefit.text}
          icon={benefit.icon}
          text={benefit.text}
        />
      ))}
    </ul>
  );
}
