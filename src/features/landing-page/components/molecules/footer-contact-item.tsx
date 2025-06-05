import FooterText from "../atoms/footer-text";

interface FooterContactItemProps {
  icon: string;
  text: string;
  alt?: string;
  href?: string;
}

export default function FooterContactItem({
  icon,
  text,
  alt,
  href,
}: FooterContactItemProps) {
  const content = (
    <>
      <div className="flex gap-3">
        <img className="min-w-[20px]" src={icon} alt={alt} />
      <FooterText>{text}</FooterText>
      </div>
    </>
  );

  // If href is provided, wrap with an anchor tag
  if (href) {
    return (
      <li className="flex items-center">
        <a
          href={href}
          className="flex items-center hover:text-[var(--color-primary)] transition-colors duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          {content}
        </a>
      </li>
    );
  }

  // Otherwise, just render the content
  return <li className="flex items-center">{content}</li>;
}
