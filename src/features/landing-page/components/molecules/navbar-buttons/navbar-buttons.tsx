import NavbarSignInButton from "../../atoms/navbar-sign-in-button";
import NavbarSignUpButton from "../../atoms/navbar-sign-up-button";

export default function NavbarButtons() {
  return (
    <div className=" gap-2 hidden xl:flex">
      <NavbarSignInButton />
      <NavbarSignUpButton />
    </div>
  );
}
