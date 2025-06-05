import { Collapse } from "@mui/material";
import NavbarSingleLink from "../atoms/navbar-single-link/navbar-single-link";

type NavbarDrawerProps = {
  onClick: () => void;
  open: boolean;
};

type linkType = {
  title: string;
  link: string;
  classes: string;
};
export default function NavbarDrawer({ open, onClick }: NavbarDrawerProps) {
  const links: linkType[] = [
    {
      title: "home",
      link: "#home",
      classes: "home",
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
    <Collapse className="xl:hidden z-10 relative" in={open} timeout={300}>
      <div className="w-full  rounded-b-[15px] bg-transparent text-white border-l border-r border-b border-white">
        <ul className="flex flex-col gap-2 py-4 px-6 ">
          {links.map((link) => (
            <NavbarSingleLink
              key={link.title + link.link}
              text={link.title}
              link={link.link}
              classes={link.classes}
              isDrawer={true}
              onClick={onClick}
            />
          ))}
        </ul>
      </div>
    </Collapse>
  );
}
