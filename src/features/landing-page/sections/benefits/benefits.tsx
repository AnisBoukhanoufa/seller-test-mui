import Headline from "../../components/atoms/headline";
import SectionTitle from "../../components/atoms/section-title";
import BenefitsImage from "../../components/atoms/benefits-image";
import BenefitsList from "../../components/molecules/benefits-list";

export default function Benefits() {
  return (
    <section
      id="benefits"
      className="container mx-auto flex justify-between 
    flex-col lg:flex-row 
   gap-[var(--spacing-m)] sm:gap-[var(--spacing-l)] xl:gap-0 
    items-center lg:items-start  
    text-center lg:text-left"
    >
      <div className="left-side flex-1 flex flex-col gap-[var(--spacing-m)] sm:gap-[var(--spacing-xl)] sm:gap-[var(--spacing-xxs)] ">
        <SectionTitle alignment={"side"}>benefits</SectionTitle>
        <div className="flex flex-col gap-[var(--spacing-m)]">
          <Headline>efficiency at every stage of your business</Headline>
          <BenefitsList />
        </div>
      </div>
      <div className="right-side hidden flex-1 sm:flex justify-end ">
        <BenefitsImage />
      </div>
    </section>
  );
}
