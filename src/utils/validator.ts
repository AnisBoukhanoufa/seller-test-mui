import { parsePhoneNumberFromString } from "libphonenumber-js";

export const splitPhoneNumbers = (number) => {
  const phoneNumber = parsePhoneNumberFromString(number);
  if (phoneNumber) {
    return {
      code: phoneNumber.countryCallingCode,
      number: phoneNumber.nationalNumber,
    };
  }
  return null;
};

export const isInteger = (str) => {
  return /^\d+$/.test(str);
};
export const isFloat = (str) => {
  return /^-?\d+(\.\d+)?$/.test(str);
};


export const isValidPageSize = (pageSize) => {
  const validSizes = [10, 25, 50];
  if (validSizes.includes(Number(pageSize))) {
    return true;
  }
  return false;
};

export const isValidPageData = (pageSize, pageNumber) => {
  const validSizes = [10, 25, 50];
  if (!validSizes.includes(Number(pageSize))) {
    return false;
  }

  if (!Number.isInteger(Number(pageNumber))) {
    return false;
  }
  return true;
};

export const isObjectsEqual = (obj1, obj2) => {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
};
