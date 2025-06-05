import laptop from "../../../../../assets-v1/macbook.webp";
import phone from "../../../../../assets-v1/iphone.png";
import HeroSectionLaptopFloatText from "../../molecules/hero-section-laptop-float-text/hero-section-laptop-float-text";

export default function Laptop() {
  return (
    <>
      <div className="hidden sm:flex relative container  justify-center mt-8 ">
        <HeroSectionLaptopFloatText
          shwoDots={false}
          text={"data driven"}
          classes={
            "bg-white text-[var(--color-primary-blue)] top-[25%] left-[7%] px-10 py-2"
          }
        />
        <HeroSectionLaptopFloatText
          shwoDots={false}
          text={"Streamlined logistics"}
          classes={
            "bg-white text-[var(--color-primary-blue)] -top-[2%] left-[70%] px-4 py-2"
          }
        />
        <HeroSectionLaptopFloatText
          shwoDots={true}
          text={"live statistics"}
          classes={
            "bg-[var(--color-primary-blue)] text-white top-[30%] left-[75%] px-4 py-2"
          }
          dotsClasses={"bg-[var(--color-primary-blue)]"}
        />
        <img src={laptop} alt="logo" className="sm:w-full  lg:w-10/12" />
      </div>
      <div className="flex sm:hidden relative container z-10 justify-center mt-8 ">
        <img src={phone} alt="logo" className=" w-10/12 " />
      </div>
    </>
  );
}
