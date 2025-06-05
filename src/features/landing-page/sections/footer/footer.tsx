import FooterCta from "../../components/molecules/footer-cta";
import FooterCopyright from "../../components/atoms/footer-copyright";
import FooterMission from "../../components/molecules/footer-mission";
import FooterServices from "../../components/molecules/footer-services";
import FooterSolutions from "../../components/molecules/footer-solutions";
import FooterContact from "../../components/molecules/footer-contact";

export default function Footer() {
  return (
    <footer className="container mx-auto flex flex-col gap-[var(--spacing-xl)]">
      <FooterCta />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 
        md:grid-cols-2 md:jusify-center md:items-center 
        lg:grid-cols-4 gap-8 lg:items-start  lg:gap-[var(--spacing-xl)]
        xl:gap-[var(--spacing-xxl)]
        ">
          <FooterMission />
          <FooterServices />
          <FooterSolutions />
          <FooterContact />
        </div>
      </div>
      <FooterCopyright />
    </footer>
  );
}
