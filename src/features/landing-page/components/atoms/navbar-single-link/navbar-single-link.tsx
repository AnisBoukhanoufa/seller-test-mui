import "./navbar-single-link.scss";

type NavbarSingleLinkProps = {
  text: string;
  link: string;
  classes: string;
  isDrawer: boolean;
  onClick?: () => void;
};

export default function NavbarSingleLink({
  text,
  link,
  classes,
  isDrawer,
  onClick,
}: NavbarSingleLinkProps) {
  return isDrawer ? (
    <li
      onClick={onClick}
      className={`w-fit xl:text-2xl whitespace-nowrap
      font-light text-white hover:font-normal
        capitalize ${classes}`}
    >
      <a href={link} className="text-white landing-navbar-link">
        {text}
      </a>
    </li>
  ) : (
    <li
      className={`w-fit xl:text-2xl whitespace-nowrap
         font-light text-white hover:font-normal
           capitalize ${classes}`}
    >
      <a className="landing-navbar-link text-white" href={link}>
        {text}
      </a>
    </li>
  );
}
