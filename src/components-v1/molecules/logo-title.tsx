import logo from "assets-v1/logo-text-horizontal.svg";
import { Link } from "react-router-dom";

export default function LogoTitle() {
  return (
    <Link to={"/"} className="flex gap-4 justify-center md:justify-start w-full">
      <img src={logo} className="max-h-[42px] "  alt={"logo codtoop"} />
    </Link>
  );
}