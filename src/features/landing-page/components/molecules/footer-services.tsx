import FooterText from "../atoms/footer-text";
import FooterTitle from "../atoms/footer-title";
export default function FooterServices() {
  return (
    <div className="flex flex-col gap-6">
      <FooterTitle>services</FooterTitle>
      <ul className="flex flex-col gap-2 text-gray-600 text-sm">
        <li>
          <FooterText>sourcing</FooterText>
        </li>
        <li>
          <FooterText>warehousing & fulfillment</FooterText>
        </li>
        <li>
          <FooterText>shipping</FooterText>
        </li>
        <li>
          <FooterText>call center</FooterText>
        </li>
        <li>
          <FooterText>COD</FooterText>
        </li>
      </ul>
    </div>
  );
}
