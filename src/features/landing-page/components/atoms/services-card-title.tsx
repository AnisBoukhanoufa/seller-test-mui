type ServicesCardTitleProps = {
  title: string;
};

export default function ServicesCardTitle({ title }: ServicesCardTitleProps) {
  return (
    <h4 className="font-medium sm:font-normal font-[Roboto] sm:text-2xl capitalize">
      {title}
    </h4>
  );
}
