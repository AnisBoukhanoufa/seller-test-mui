import { useState, useEffect } from "react";
import { categories } from "statics/categories";

import { deepCloneObject } from "utils/functions";

const useTagsHandler = (setCategoriesList) => {
  const [tagsList, setTagsList] = useState(Object.keys(categories));
  const [details, setDetails] = useState(categories);

  const handleTagsChange = (event, value, eventType, option) => {
    if (eventType === "clear") {
      setCategoriesList([]);
      setDetails(categories);
    } else if (eventType === "selectOption") {
      setCategoriesList(value);
      const newDetails = deepCloneObject(details[option.option.value]);
      delete newDetails?.name_en;
      setDetails(newDetails);
    } else if (eventType === "removeOption") {
      const newDetails = deepCloneObject(
        value.reduce((acc, key) => acc[key.value], categories)
      );
      delete newDetails?.name_en;
      setCategoriesList(value);
      setDetails(newDetails);
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
    const detailKeys = Object.keys(details);
    if (detailKeys.length === 0) {
      setTagsList([]);
      return;
    }
    if (hasNestedObjects(details)) {
      const tagsOptions = Object.entries(details).map(([key, value]) => ({
        value: key,
        label: value?.name_en ? value?.name_en : key,
      }));
      setTagsList(tagsOptions);
    } else {
      setTagsList([]);
    }
  }, [details]);

  return {
    tagsList,
    details,
    handleTagsChange,
  };
};

export default useTagsHandler;
