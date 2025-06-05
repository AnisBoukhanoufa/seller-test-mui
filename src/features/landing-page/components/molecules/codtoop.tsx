import logoCodToop from "../../../../assets-v1/logo.svg";

export default function CodToop() {
  return (
    <div className="flex items-center">
      <div className="p-1">
        <img src={logoCodToop} alt={"logo"} />
      </div>

      <h1 className="text-[var(--color-primary-blue)] font-medium text-xl">
        COD TOOP
      </h1>
    </div>
  );
}
