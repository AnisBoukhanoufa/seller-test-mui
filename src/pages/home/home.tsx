import "./home.scss";
import { useState } from "react";
import { useSelector } from "react-redux";
import StatisticsFilter from "./statistics-filter/statistics-filter";
import FilterSection from "./sections/filter-section";
import ChartsSection from "./sections/charts-section";
import { EnumSellerRole } from "statics/enums";
import useQueryFilter from "./hooks/use-query-filter";
import useStatisticData from "./hooks/use-page-data";
import PaymentsSection from "./sections/payments";
import RatesSection from "./sections/rates";

const Home = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const seller = useSelector((state: any) => state.seller.currentSeller);

  const { queryFilter, setQueryFilter } = useQueryFilter({
    order: seller.role === EnumSellerRole.seller ? "toopDrop" : "affiliate",
  });

  useStatisticData();
  return (
    <div className="home">
      <StatisticsFilter
        queryFilter={queryFilter}
        setQueryFilter={setQueryFilter}
        filterOpen={filterOpen}
        setFilterOpen={setFilterOpen}
      />
      <div className="homeContainer overflowPreventerFlexbox">
        <div className="container1">
          <div className="overflowPreventer">
            <FilterSection
              queryFilter={queryFilter}
              setQueryFilter={setQueryFilter}
              setFilterOpen={setFilterOpen}
            />
            <PaymentsSection
              queryFilter={queryFilter}
              setQueryFilter={setQueryFilter}
            />
            <RatesSection />
            <ChartsSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
