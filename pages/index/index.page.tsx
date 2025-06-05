import Benefits from "../../src/features/landing-page/sections/benefits/benefits";
import Countries from "../../src/features/landing-page/sections/countries/countries";
import Footer from "../../src/features/landing-page/sections/footer/footer";
import HeroSection from "../../src/features/landing-page/sections/hero-section/hero-section";
import OurCompany from "../../src/features/landing-page/sections/our-company/our-company";
import OurServices from "../../src/features/landing-page/sections/our-services";
import Testimonials from "../../src/features/landing-page/sections/testimonials/testimonials";

function Page() {
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

export { Page };
