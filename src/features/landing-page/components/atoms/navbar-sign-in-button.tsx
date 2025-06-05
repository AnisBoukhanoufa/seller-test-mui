// import { Link } from "react-router-dom";
import { Link } from "../../../../../renderer/Link";

function NavbarSignInButton() {
  return (
    <Link
      href="/sign-in"
      className={`px-6 py-2 transition-all duration-300
      border-2  rounded-full border-[var(--color-primary-green)] capitalize
      text-[var(--color-primary-green)]  hover:text-white 
      bg-transparent  hover:bg-[var(--color-primary-green)] font-medium`}
    >
      sign in
    </Link>
  );
}

export default NavbarSignInButton;
