import { useEffect, useState, useCallback } from "react";

const useQuery = (queryFilter, setQueryFilter, setFilterOpen) => {
  const [query, setQuery] = useState({});

  // Handle clear
  const handleClear = useCallback((initQuery: object) => {
    setQuery({ ...initQuery });
  }, []);

  // Handle filter
  const handleFilter = useCallback(() => {
    const processedQuery = Object.entries(query || {})?.reduce(
      (acc, [key, value]) => {
        acc[key] = Array.isArray(value) ? value.join(",") : value;
        return acc;
      },
      {}
    );
    setQueryFilter(processedQuery);
    setFilterOpen(false);
  }, [query, setQueryFilter, setFilterOpen]);

  // Autocomplete change handler
  const handleAutocompleteChange = useCallback((id, value) => {
    setQuery((prevQuery) => {
      const newQuery = { ...prevQuery };
      if (id === "country" && value?.label) {
        newQuery[id] = value?.label;
      } else if (id === "country" && value) {
        newQuery[id] = value;
      } else if (value) {
        newQuery[id] = value?.label ? value?.value : value;
      } else {
        delete newQuery[id];
      }
      return newQuery;
    });
  }, []);
  // Autocomplete change handler
  const handleUserAutocompletChange = useCallback((id, value) => {
    setQuery((prevQuery) => {
      const newQuery = { ...prevQuery };
      if (value) {
        newQuery[id] = value?._id ? value?._id : value;
      } else {
        delete newQuery[id];
      }
      return newQuery;
    });
  }, []);

  const handleMultipleAutocompleteChange = useCallback((id, value) => {
    setQuery((prevQuery) => {
      const newQuery = { ...prevQuery };
      if (Array.isArray(value) && value?.length) {
        newQuery[id] = value[0]?.label
          ? value?.map((element) => element?.value)
          : value;
      } else {
        delete newQuery[id];
      }
      return newQuery;
    });
  }, []);

  // Yes/No Autocomplete handler
  const handleAutocompletYesNo = useCallback((id, value) => {
    setQuery((prevQuery) => {
      const newQuery = { ...prevQuery };
      if (value) {
        newQuery[id] = value?.value;
      } else {
        delete newQuery[id];
      }
      return newQuery;
    });
  }, []);

  // Input change handler
  const handleInput = useCallback((event) => {
    const { id, value } = event.target;
    setQuery((prevQuery) => {
      const newQuery = { ...prevQuery };
      if (value) {
        newQuery[id] = value;
      } else {
        delete newQuery[id];
      }
      return newQuery;
    });
  }, []);

  //handle status radios change
  const handleRadioInput = (event) => {
    const { name, value } = event.target;
    setQuery((prevQuery) => {
      const newQuery = { ...prevQuery };
      if (value) {
        newQuery[name] = value;
      } else {
        delete newQuery[name];
      }
      return newQuery;
    });
  };
  //handle check box change
  const handleCheckboxInput = (event) => {
    const { name, checked } = event.target;
    setQuery((prev) => ({
      ...prev,
      [name]: checked ? "1" : "0", // Set "1" for true and "0" for false
    }));
  };

  useEffect(() => {
    const transformedQuery = Object.entries(queryFilter).reduce(
      (acc, [key, value]) => {
        // Check if the value is a string containing a comma
        acc[key] =
          typeof value === "string" && value.includes(",")
            ? value.split(",")
            : value;
        return acc;
      },
      {}
    );
    setQuery(transformedQuery);
  }, [queryFilter]);

  return {
    query,
    setQuery,
    handleClear,
    handleFilter,
    handleAutocompleteChange,
    handleUserAutocompletChange,
    handleAutocompletYesNo,
    handleInput,
    handleMultipleAutocompleteChange,
    handleRadioInput,
    handleCheckboxInput,
  };
};

export default useQuery;
