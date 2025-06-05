import { Link } from "../../../../../../renderer/Link";
import "./hero-section-get-started-button.scss";

function HeroGetStartedButton() {
  return (
    <Link
      href="/sign-up"
      className={` hero-get-start-button  mt-5 *
         font-medium text-sm  sm:text-2xl
      border-2  rounded-full border-[var(--color-primary-green)] 
      capitalize z-10
      `}
    >
      <span className="btn-get-started initial ">get started</span>
      <span className=" btn-get-started hover ">get started</span>
    </Link>
  );
}

export default HeroGetStartedButton;
