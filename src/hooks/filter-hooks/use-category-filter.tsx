import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { categories } from "statics/categories";
import { deepCloneObject } from "utils/functions";

const useCategoryFilterHandler = () => {
  const [searchParams] = useSearchParams();

  const [choosenCategories, setChoosenCategories] = useState([]);
  const [categoriesList, setCategoriesList] = useState(Object.keys(categories));
  const [categoryDetails, setCategoryDetails] = useState(categories);

  const handleCategoriesChange = (event, value, eventType, option) => {
    if (eventType === "clear") {
      setChoosenCategories([]);
      setCategoryDetails(categories);
    } else if (eventType === "selectOption") {
      setChoosenCategories(value);
      const newDetails = deepCloneObject(categoryDetails[option.option.value]);
      delete newDetails?.name_en;
      setCategoryDetails(newDetails);
    } else if (eventType === "removeOption") {
      const newDetails = deepCloneObject(
        value.reduce((acc, key) => acc[key.value], categories)
      );
      delete newDetails?.name_en;
      setChoosenCategories(value);
      setCategoryDetails(newDetails);
    }
  };

  //tags handeler
  const hasNestedObjects = (obj) => {
    return Object.values(obj).some(
      (value) =>
        value &&
        typeof value === "object" &&
        !Array.isArray(value) &&
        Object.keys(value).length > 0
    );
  };
  useEffect(() => {
    const detailKeys = Object.keys(categoryDetails);
    if (detailKeys.length === 0) {
      setCategoriesList([]);
      return;
    }
    if (hasNestedObjects(categoryDetails)) {
      const tagsOptions = Object.entries(categoryDetails).map(
        ([key, value]) => ({
          value: key,
          label: value?.name_en ? value?.name_en : key,
        })
      );
      setCategoriesList(tagsOptions);
    } else {
      setCategoriesList([]);
    }
  }, [categoryDetails]);

  // useEffect(() => {
  //     const urlCategories = searchParams.get("category");
  //   const initCategories =
  //   typeof urlCategories?.split(",") === "string"
  //     ? [urlCategories]
  //     : urlCategories.split(",");
  // const choosenValues = [];
  // const initCategoryDetails = initCategories.reduce((acc, currentVal) => {
  //   choosenValues.push({
  //     label: acc?.[currentVal]?.name_en,
  //     value: currentVal,
  //   });
  //   return acc?.[currentVal];
  // }, categories);
  // console.log(initCategories)
  // }, []);
  return {
    choosenCategories,
    setChoosenCategories,
    categoriesList,
    setCategoriesList,
    categoryDetails,
    setCategoryDetails,
    handleCategoriesChange,
  };
};

export default useCategoryFilterHandler;
