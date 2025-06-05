import "./testimonials.scss";
import Headline from "../../components/atoms/headline";
import TestimonialSlider from "../../components/organisms/testimonials-slides-show/testimonials-slides-show";
import SectionTitle from "../../components/atoms/section-title";
import BodyParagraph from "../../components/atoms/body-paragraph";
export default function Testimonials() {
  return (
    <section
      className="testimonials-section text-center 
    flex flex-col gap-[var(--spacing-m)] md:gap-[var(--spacing-xl)] 
    py-[60px]  justify-center "
    >
      <div className="flex flex-col container mx-auto gap-[var(--spacing-m)] md:gap-[var(--spacing-xl)] ">
        <div className="flex flex-col gap-2 md:gap-[30px]">
          <SectionTitle alignment={"center"} color={"white"}>
            testimonials
          </SectionTitle>
          <Headline color={"white"}>what our partners say</Headline>
        </div>
        <BodyParagraph color={"white"}>
          hear from e-commerce sellers and affiliates who’ve grown with COD
          Toop, experiencing firsthand the impact of our innovative solutions
        </BodyParagraph>
      </div>
      <TestimonialSlider />
    </section>
  );
}
