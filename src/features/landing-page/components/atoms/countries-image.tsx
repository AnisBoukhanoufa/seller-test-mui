import countries from "../../../../assets-v1/countries.png";

export default function CountriesImage() {
  return (
    <img
      src={countries}
      alt="ourCompany"
      className="h-[266px] w-[278px] sm:h-[451px] sm:w-[471px] object-cover "
    />
  );
}
