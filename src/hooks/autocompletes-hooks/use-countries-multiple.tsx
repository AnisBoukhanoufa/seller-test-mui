import { useState, useEffect } from "react";

const useMultipleCountries = (globalQuery: any, setQuery: any) => {
  const [countryFilter, setCountryFilter] = useState<number[]>(
    globalQuery.country || [],
  );

  useEffect(() => {
    if (!globalQuery?.country?.length) {
      setCountryFilter([]);
    }
  }, [globalQuery.country]);

  useEffect(() => {
    handleCountriesInput({ target: { id: "country", value: countryFilter } });
  }, [countryFilter]);

  const handleCountriesInput = async (e: any) => {
    const id = e.target.id;
    const value = e.target.value;

    setQuery((prevQuery: any) => ({ ...prevQuery, [id]: value }));
  };

  return {
    countryFilter,
    setCountryFilter,
  };
};

export default useMultipleCountries;
