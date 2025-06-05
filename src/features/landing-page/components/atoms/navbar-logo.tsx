import logoWhite from "../../../../assets-v1/logo-white.svg";
import logoTextHorizontal from "../../../../assets-v1/logo-text-horizontal.svg";
export default function NavbarLogo() {
  return (
    <div className="flex items-center gap-2 sm:gap-4">
      <img
        src={logoWhite}
        alt="logo"
        className="hidden xl:block icon h-[40px] w-[40px] xl:h-[60px] xl:w-[60px]"
      />
      <img
        src={logoTextHorizontal}
        alt="logo"
        className="block xl:hidden h-[40px]  object-contain"
        style={{
          filter: "brightness(0) invert(1)",
          maxWidth: "180px",
        }}
      />
    </div>
  );
}
