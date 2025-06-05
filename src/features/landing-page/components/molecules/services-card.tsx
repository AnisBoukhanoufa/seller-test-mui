import Icon from "../atoms/icon";
import ServicesCardTitle from "../atoms/services-card-title";
import ServicesCardParagraph from "../atoms/services-card-paragraph";
import { SingleServiceType } from "../../types";

export default function ServicesCard({
  icon,
  title,
  text,
  phoneIcon,
}: SingleServiceType) {
  return (
    <>
      <div className="hidden sm:flex p-6 bg-white  flex-col border border-[var(--color-border)] rounded-[40px]  w-full gap-[var(--spacing-xl)]">
        <Icon
          iconSize={"60px"}
          color={"var(--color-secondary-green)"}
          bgColor={"white"}
          borderColor={"var(--color-border)"}
          icon={icon}
        />
        <div className="flex flex-col gap-[var(--spacing-xs)]">
          <ServicesCardTitle title={title} />
          <ServicesCardParagraph text={text} />
        </div>
      </div>
      <div className="flex sm:hidden  p-6 bg-white  flex-col  rounded-2xl w-[198px] h-[160px] gap-[var(--spacing-s)] drop-shadow justify-center items-center">
        <img src={phoneIcon} alt={"icon"} height={60} />

        <ServicesCardTitle title={title} />
      </div>
    </>
  );
}
