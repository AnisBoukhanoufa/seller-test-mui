import { useState } from "react";
import NavbarLogo from "../atoms/navbar-logo";
import NavbarLinks from "../molecules/navbar-links/navbar-links";
import NavbarButtons from "../molecules/navbar-buttons/navbar-buttons";

import NavbarDrawer from "../molecules/navbar-drawer";
import NavbarMobileButton from "../atoms/navbar-mobile-button";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = (): void => {
    setOpen((prev) => !prev);
  };

  return (
    <header className="relative container mx-auto">
      <nav className="py-2 hero-section-navbar border-b xl:border-b-0 border-white flex justify-between items-center">
        <NavbarLogo />
        <NavbarLinks />
        <NavbarButtons />
        <NavbarMobileButton onClick={toggleMenu} open={open} />
      </nav>
      <NavbarDrawer open={open} onClick={toggleMenu} />
    </header>
  );
}
