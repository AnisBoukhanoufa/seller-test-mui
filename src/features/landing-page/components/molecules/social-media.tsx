// import linkedIn from "assets-v1/social-media-icons/linked-in.svg";
import linkedIn from "../../../../assets-v1/social-media-icons/linked-in.svg";
import facebook from "../../../../assets-v1/social-media-icons/facebook.svg";
import instagram from "../../../../assets-v1/social-media-icons/instagram.svg";
import Icon from "../atoms/icon";
import { Link } from "../../../../../renderer/Link";
// import { Link } from "react-router-dom";

export default function SocialMedia() {
  return (
    <div className="flex gap-3">
      <Link
        to="https://www.linkedin.com/company/codtoop/posts/?feedView=all"
        target="_blank"
      >
        <Icon
          iconSize={"31px"}
          color={"transparent"}
          bgColor={"var(--color-primary-blue)"}
          borderColor={"var(--color-primary-blue)"}
          icon={linkedIn}
        />
      </Link>
      <Link to="https://www.instagram.com/cod.toop/" target="_blank">
        <Icon
          iconSize={"31px"}
          color={"transparent"}
          bgColor={"var(--color-primary-blue)"}
          borderColor={"var(--color-primary-blue)"}
          icon={instagram}
        />
      </Link>
      <Link
        to="https://www.facebook.com/p/COD-TOOP-100072392371272"
        target="_blank"
      >
        <Icon
          iconSize={"31px"}
          color={"transparent"}
          bgColor={"var(--color-primary-blue)"}
          borderColor={"var(--color-primary-blue)"}
          icon={facebook}
        />
      </Link>
    </div>
  );
}
