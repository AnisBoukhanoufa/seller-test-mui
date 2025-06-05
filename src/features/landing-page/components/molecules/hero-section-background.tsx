// import logoWhite from "assets-v1/logo-white.svg";
import HeroCircle from "../hero-circle/hero-circle";
export default function HeroSectionBackground() {
  return (
    <>
      {/* <img
        src={logoWhite}
        alt="logo"
        width={700}
        className="masked-logo top-[25%] sm:hidden z-0 "
      /> */}
      <div className="background-container top-0 z-[-1] absolute w-screen overflow-hidden h-screen lg:h-screen  sm:h-vh">
        <div className="background-circle "></div>
        <HeroCircle
          showDot={false}
          classes={
            "hidden sm:inline-block sm:top-[-20vw] lg:top-[-25vw] left-1/2 -translate-x-1/2 "
          }
        />
        <HeroCircle
          showDot={true}
          classes={
            "hidden sm:inline-block sm:top-[15vw] lg:top-[20vw] left-1/2 -translate-x-1/2"
          }
        />
      </div>
    </>
  );
}
