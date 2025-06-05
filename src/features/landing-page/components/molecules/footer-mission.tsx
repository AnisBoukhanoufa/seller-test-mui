import FooterText from "../atoms/footer-text";

import CodToop from "./codtoop";
import SocialMedia from "./social-media";
export default function FooterMission() {
  return (
    <div className="space-y-4 flex flex-col gap-4">
      <CodToop />
      <FooterText>
        we excel in offering continuous guidance and support to sellers, from
        their initial steps until they become professional.
      </FooterText>
      <SocialMedia />
    </div>
  );
}
