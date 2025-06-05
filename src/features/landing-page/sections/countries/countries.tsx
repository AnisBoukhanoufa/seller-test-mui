import Headline from "../../components/atoms/headline";
import BodyParagraph from "../../components/atoms/body-paragraph";
import SectionTitle from "../../components/atoms/section-title";
import CountriesImage from "../../components/atoms/countries-image";

export default function Countries() {
  return (
    <section
    id="countries"
      className="container mx-auto flex justify-between 
    flex-col lg:flex-row 
    gap-[var(--spacing-l)] xl:gap-0 
    items-center lg:items-start  
    text-center lg:text-left"
    >
      <div className="inline-block lg:hidden">
        <SectionTitle alignment={"side"}>countries</SectionTitle>
      </div>
      <div className="left-side flex-1 flex justify-start ">
        <CountriesImage />
      </div>
      <div className="right-side flex-1 flex flex-col gap-[var(--spacing-xxs)]">
        <div className="hidden lg:inline-block">
          <SectionTitle alignment={"side"}>countries</SectionTitle>
        </div>
        <div className="flex flex-col gap-[var(--spacing-m)]">
          <Headline>scale your business in the gulf countries</Headline>
          <BodyParagraph>
            we deliver full e-commerce solutions for businesses entering the
            Gulf market. From sourcing to cod, we streamline your operations so
            you can focus on growth and Expand confidently in the Gulf
            countries.
          </BodyParagraph>
        </div>
      </div>
    </section>
  );
}
