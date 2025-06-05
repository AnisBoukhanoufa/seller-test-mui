import "./hero-section.scss";
import Navbar from "../../components/organisms/navbar";
import HeroSectionText from "../../components/molecules/hero-section-text";
import HeroGetStartedButton from "../../components/atoms/hero-section-get-started-button/hero-section-get-started-button";
import Laptop from "../../components/organisms/laptop/laptop";
import HeroSectionBackground from "../../components/molecules/hero-section-background";

export default function HeroSection() {
  return (
    <section className="flex flex-col pt-5 md:pt-12 hero-section overflow-hidden items-center justify-center z-10">
      <Navbar />
      <HeroSectionText />
      <HeroGetStartedButton />
      <Laptop />
      <HeroSectionBackground />
    </section>
  );
}
