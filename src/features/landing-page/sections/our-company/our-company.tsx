import OurCompanyImage from "../../components/atoms/our-company-image";
import Headline from "../../components/atoms/headline";
import BodyParagraph from "../../components/atoms/body-paragraph";
import SectionTitle from "../../components/atoms/section-title";

import "./our-company.scss";
import OurCompanyMobile from "../../components/organisms/our-company-mobile/our-company-mobile";
export default function OurCompany() {
  return (
    <>
      <section
        className="hidden sm:flex container mx-auto justify-between 
      flex-col-reverse lg:flex-row 
      gap-[var(--spacing-m)] xl:gap-0 
      items-center lg:items-start  
      text-center lg:text-left"
      id="our-company"
      >
        <div className="left-side flex-1 flex justify-start">
          <OurCompanyImage />
        </div>
        <div className="right-side flex-1 flex flex-col gap-[var(--spacing-xxs)]">
          <SectionTitle alignment={"side"}>our company</SectionTitle>
          <div className="flex flex-col gap-[var(--spacing-m)]">
            <Headline>optimize your bussines</Headline>
            <BodyParagraph>
              COD TOOP is a company specialized in providing e-commerce
              solutions in the Gulf countries, starting from sourcing to cash on
              delivery (COD).
            </BodyParagraph>
          </div>
        </div>
      </section>
      <OurCompanyMobile />
    </>
  );
}
