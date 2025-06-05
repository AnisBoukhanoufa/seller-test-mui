import { EnumDisplayMode } from "statics/enums";

export const getValidPagination = (pageSizeValue, pageValue, displayMode) => {
  let pageSize;
  if (displayMode === EnumDisplayMode.cards) {
    const validSizes = [50];
    pageSize = validSizes.includes(Number(pageSizeValue))
      ? Number(pageSizeValue)
      : 50;
  } else {
    const validSizes = [10, 25, 50];
    pageSize = validSizes.includes(Number(pageSizeValue))
      ? Number(pageSizeValue)
      : 10;
  }
  const page = Number.isInteger(Number(pageValue)) ? Number(pageValue) : 0;
  return { pageSize, page };
};
export  const isValidPageData = (pageSize, pageNumber, displayMode) => {
  const validSizes = [10, 25, 50];
  if (!Number.isInteger(Number(pageNumber))) {
    return false;
  }
  if (displayMode === EnumDisplayMode.cards && Number(pageSize) === 50) {
    return true;
  } else if (validSizes.includes(Number(pageSize))) {
    return true;
  }
  return false;
};