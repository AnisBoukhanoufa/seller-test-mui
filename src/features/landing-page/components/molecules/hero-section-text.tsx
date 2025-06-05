import BigTitle from "../atoms/big-title";
import HeroText from "../atoms/hero-section-paragraph";

export default function HeroSectionText() {
  return (
    <div
      className="relative container mt-16 sm:mt-12 mx-auto flex flex-col
       gap-4 sm:gap-8 items-center z-10"
    >
      <div>
        <BigTitle>automate your business &</BigTitle>
        <BigTitle>
          <span className="text-[var(--color-primary-green)] text-2xl sm:text-[64px] font-bold">
            just start
          </span>
        </BigTitle>
      </div>  
      <div>
        <HeroText />
      </div>
    </div>
  );
}
