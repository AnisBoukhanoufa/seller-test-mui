// FilterSection.tsx
import React from "react";
import { EnumSellerRole } from "../../../statics/enums";
import DropDownOrderType from "components/drop-downs/drop-down-order-type/drop-down-order-type";
import FilterButtonGroup from "components/button-group/filter-button-group/filter-button-group";
import { useSelector } from "react-redux";
import ProductTypeSelector from "../components/seller-type.tsx/product-type-selector";

interface FilterSectionProps {
  queryFilter: any;
  setQueryFilter: React.Dispatch<React.SetStateAction<any>>;
  setFilterOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const FilterSection: React.FC<FilterSectionProps> = ({
  queryFilter,
  setQueryFilter,
  setFilterOpen,
}) => {
  const seller = useSelector((state: any) => state.seller.currentSeller);
  const handleClear = () => {
    setQueryFilter((prevState) => ({
      order: prevState.order,
      ...(prevState.type ? { type: Number(prevState.type) } : {}),
      ...(prevState.paymentType ? { paymentType: prevState.paymentType } : {}),
    }));
  };
  const countColorFilter = seller.role === EnumSellerRole.seller ? 2 : 2;
  return (
    <div className="filter-container">
      {seller.role === EnumSellerRole.seller && (
        <ProductTypeSelector
          queryFilter={queryFilter}
          setQueryFilter={setQueryFilter}
        />
      )}
      {seller.role === EnumSellerRole.seller && (
        <DropDownOrderType
          queryFilter={queryFilter}
          setQueryFilter={setQueryFilter}
        />
      )}
      <FilterButtonGroup
        queryFilter={queryFilter}
        setFilterOpen={setFilterOpen}
        handleClear={handleClear}
        countColorFilter={countColorFilter}
      />
    </div>
  );
};

export default FilterSection;
