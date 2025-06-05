import NavbarSingleLink from "../../atoms/navbar-single-link/navbar-single-link";

function NavbarLinks() {
  const links = [
    {
      title: "home",
      link: "#home",
      classes: "font-normal home",
    },
    {
      title: "our company",
      link: "#our-company",
      classes: "",
    },
    {
      title: "our services",
      link: "#our-services",
      classes: "",
    },
    {
      title: "benefit's",
      link: "#benefits",
      classes: "",
    },
    {
      title: "countries",
      link: "#countries",
      classes: "",
    },
  ];
  return (
    <ul className=" absolute left-1/2 transform -translate-x-1/2 gap-10 hidden xl:flex">
      {links.map((link) => (
        <NavbarSingleLink
          key={link.title + link.link}
          text={link.title}
          link={link.link}
          classes={link.classes}
          isDrawer={false}
        />
      ))}
    </ul>
  );
}

export default NavbarLinks;
