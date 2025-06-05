type IconProps = {
  iconSize: string;
  color: string;
  bgColor: string;
  borderColor: string;
  icon: any;
};

export default function Icon({
  iconSize,
  color,
  bgColor,
  borderColor,
  icon,
}: IconProps) {
  return (
    <div
      className="p-[6px] border rounded-full flex justify-center "
      style={{
        borderColor: borderColor,
        backgroundColor: bgColor,
        color: color,
        height: iconSize,
        width: iconSize,
      }}
    >
      <img src={icon} alt={"icon"} />
    </div>
  );
}
