import "./hero-section-laptop-float-text.scss";

type HeroSectionLaptopFloatTextProps = {
  shwoDots: boolean;
  text: string;
  classes: string;
  dotsClasses?: string;
};
export default function HeroSectionLaptopFloatText({
  shwoDots,
  text,
  classes,
  dotsClasses,
}: HeroSectionLaptopFloatTextProps) {
  return (
    <>
      <div
        className={`hidden sm:inline-block absolute   
      rounded-full capitalize 
      font-medium sm:text-sm md:text-lg lg:text-xl xl:text-2xl 
      animate-moveUpDown drop-shadow-[0_10px_10px_rgba(0,0,0,0.4)] ${classes}`}
      >
        {text}
        {shwoDots && (
          <>
            <div
              className={`${
                dotsClasses || ""
              } absolute bottom-[-22px] left-[-14px] h-6 w-6 rounded-full`}
            ></div>
            <div
              className={`${
                dotsClasses || ""
              } absolute bottom-[-34px] left-[-24px] h-3 w-3 rounded-full`}
            ></div>
          </>
        )}
      </div>
    </>
  );
}
