import FooterTitle from "../atoms/footer-title";
import at from "../../../../assets-v1/contact-icons/at.svg";
import phone from "../../../../assets-v1/contact-icons/phone.svg";
import location from "../../../../assets-v1/contact-icons/location.svg";
import { t } from "i18next";
import FooterContactItem from "./footer-contact-item";

export default function FooterContact() {
  return (
    <div className="flex flex-col gap-6">
      <FooterTitle>contact</FooterTitle>
      <ul className="flex flex-col gap-2 text-gray-600 text-sm">
        <FooterContactItem
          icon={phone}
          alt="phone"
          text="+213 770 40 77 87"
          href="tel:+21377040787"
        />
        <FooterContactItem
          icon={location}
          alt="location"
          text={t("key-algeria-location")}
        />
        <FooterContactItem
          icon={at}
          alt="email"
          text="contact@codtoop.com"
          href="mailto:contact@codtoop.com"
        />
      </ul>
    </div>
  );
}
