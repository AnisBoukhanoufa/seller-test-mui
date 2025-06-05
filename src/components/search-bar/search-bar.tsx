import React, { useState, ChangeEvent } from "react";
import "./search-bar.scss";
import { t } from "i18next";
interface SearchBarProps {
  queryFilter: any;
  setQueryFilter: any;
}

const SearchBar: React.FC<SearchBarProps> = ({
  queryFilter,
  setQueryFilter,
}) => {
  const [searchTimeout, setSearchTimeout] = useState<NodeJS.Timeout | null>(
    null
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }
    const timeout = setTimeout(() => {
      setQueryFilter((prevQuery) => ({
        ...prevQuery,
        search: value.toLowerCase(),
      }));
    }, 700);
    setSearchTimeout(timeout);
  };

  return (
    <input
      className="search-bar"
      id="search"
      placeholder={t("search...")}
      onChange={handleChange}
      defaultValue={queryFilter?.search}
    />
  );
};

export default SearchBar;
