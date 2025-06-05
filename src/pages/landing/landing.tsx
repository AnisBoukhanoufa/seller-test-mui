import Countries from "features/landing-page/sections/countries/countries";
import Footer from "features/landing-page/sections/footer/footer";
import HeroSection from "features/landing-page/sections/hero-section/hero-section";
import OurCompany from "features/landing-page/sections/our-company/our-company";
import OurServices from "features/landing-page/sections/our-services";
import Testimonials from "features/landing-page/sections/testimonials/testimonials";
import Benefits from "features/landing-page/sections/benefits/benefits";

export default function Landing() {
  return (
    <main
      className="flex  flex-col 
    gap-[var(--spacing-xl)] sm:gap-[var(--spacing-xxl)]
     bg-[var(--color-light-blue-bg)] "
    >
      <HeroSection />
      <OurCompany />
      <OurServices />
      <Benefits />
      <Countries />
      <Testimonials />
      <Footer />
    </main>
  );
}
