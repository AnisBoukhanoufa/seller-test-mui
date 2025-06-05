import useCategoryHandler from "hooks/autocompletes-hooks/use-category";
import { useEffect } from "react";
import { categories } from "statics/categories";

const useCategoriesFilter = (query, setQuery) => {
  //handle categories
  const {
    choosenCategories,
    setChoosenCategories,
    categoriesList,
    setCategoryDetails,
    handleCategoriesChange,
  } = useCategoryHandler();

  // Handle categories
  useEffect(() => {
    const category = choosenCategories
      .map((element) => element.value)
      .join(",");

    setQuery((prevValue) => {
      if (prevValue.category === category) return prevValue;
      return {
        ...prevValue,
        category,
      };
    });
  }, [choosenCategories]);

  useEffect(() => {
    if (!query?.category) {
      setCategoryDetails(categories);
      setChoosenCategories([]);
    }
  }, [query]);
  return { choosenCategories, categoriesList, handleCategoriesChange };
};

export default useCategoriesFilter;
