import { Link } from "../../../../../renderer/Link";


function NavbarSignUpButton() {
  return (
    <Link
      href="/sign-up"
      className={`px-6 py-2 
      border-2  rounded-full border-white capitalize
      text-[var(--color-primary-blue)]   
      bg-white   font-medium`}
    >
      sign up
    </Link>
  );
}

export default NavbarSignUpButton;
