import FooterCtaText from "../atoms/footer-cta-text";
import FooterCtaButton from "../atoms/footer-cta-button";

export default function FooterCta() {
  return (
    <div
      className="flex 
    flex-col md:flex-row   
    gap-[var(--spacing-m)] md:gap-0
    md:justify-between items-center 
    p-4 md:p-0
    md:px-12 md:py-6 xl:px-20 xl:py-10  
    rounded-[20px] md:rounded-[40px]
    bg-[var(--color-primary-blue)]"
    >
      <FooterCtaText>take your first step and just start</FooterCtaText>
      <FooterCtaButton> get started</FooterCtaButton>
    </div>
  );
}
