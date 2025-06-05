import ourCompany from "../../../../../assets-v1/our-company.png";

export default function OurCompanyMobile() {
  return (
    <section className="container block sm:hidden">
      <div className="our-company-mobile-section">
        <img
          className="background-image"
          src={ourCompany}
          alt="Office background"
        />
        <div className="overlay flex justify-end items-end pr-2">
          <div className="w-1/2 flex flex-col gap-[var(--spacing-xs)]">
            <div className="flex flex-col gap-[var(--spacing-xxs)]">
              <h3 className="font-[--font-roboto] font-medium text-[10px] uppercase text-white">
                our company
              </h3>
              <h2 className="text-base  text-white uppercase">
                optimize your bussines
              </h2>
            </div>
            <p className="text-white text-[10px]">
              COD TOOP is a company specialized in providing e-commerce
              solutions in the Gulf countries, starting from sourcing to cash on
              delivery (COD).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
