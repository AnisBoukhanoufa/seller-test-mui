import FooterText from "../atoms/footer-text";
import FooterTitle from "../atoms/footer-title";
export default function FooterSolutions() {
  return (
    <div className=" flex flex-col gap-6 ">
      <FooterTitle>solutions</FooterTitle>
      <ul className=" flex flex-col gap-2 text-gray-600 text-sm">
        <li>
          <FooterText>live stats</FooterText>
        </li>
        <li>
          <FooterText>simulation</FooterText>
        </li>
        <li>
          <FooterText>account manager</FooterText>
        </li>
        <li>
          <FooterText>live support</FooterText>
        </li>
      </ul>
    </div>
  );
}
