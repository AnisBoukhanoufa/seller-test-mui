import moment from "moment";
import { baseRequest } from "./request-methods";
import { parsePhoneNumberFromString } from "libphonenumber-js";

export const inputHandleSearch = (
  searchEndpoint: string,
  setSearchResults: (data: any[]) => void,
  prevTimeout: NodeJS.Timeout | null,
  setPrevTimeout: (timeout: NodeJS.Timeout | null) => void
) => {
  if (prevTimeout) clearTimeout(prevTimeout);

  const timeout = setTimeout(async () => {
    const link = `${searchEndpoint}`;
    try {
      const res = await baseRequest.get(link);
      const newData = res.data.list;
      setSearchResults(newData);
    } catch (err) {
      console.error("Error fetching data: ", err);
    }
  }, 500);

  setPrevTimeout(timeout);
};

export const queryToFilter = (query: any) => {
  let filter = "";
  for (const key in query) {
    if (key === "page") {
      filter += `${key}=${Number(query[key]) + 1}&`;
    } else if (key.toLowerCase().includes("enddate")) {
      filter += `${key}=${moment(query[key])
        .add(1, "day")
        .format("YYYY-MM-DD")}&`;
    } else filter += `${key}=${query[key]}&`;
  }
  return filter;
};

export const defaultDateFilter = () => {
  return {
    startDate: moment(shiftDateNow(-30)).format("YYYY-MM-DD"),
  };
};

export const shiftDateNow = (day: any) => {
  const date = new Date();
  date.setDate(date.getDate() + day);
  return date;
};

export const splitPhoneNumbers = (number: string) => {
  try {
    let phoneNumber = number.toString();
    // Check if the number starts with '+' or not
    if (phoneNumber.startsWith("+")) {
      phoneNumber = parsePhoneNumberFromString(phoneNumber);
    } else {
      phoneNumber = parsePhoneNumberFromString(`+${phoneNumber}`);
    }
    if (phoneNumber) {
      return {
        code: phoneNumber.countryCallingCode,
        number: phoneNumber.nationalNumber,
      };
    }
  } catch (error) {
    console.error("Error parsing phone number:", error);
  }
  return null;
};
export const normalizeObjectKeys = (obj) => {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => {
      const normalizedKey = key.toLowerCase().replace(/\s+/g, "");
      return [normalizedKey, value];
    })
  );
};

export const deepCloneObject = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};

export const isObjectsEqual = (obj1, obj2) => {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
};

export const getValidPagination = (pageSizeValue, pageValue) => {
  const validSizes = [10, 25, 50];

  const pageSize = validSizes.includes(Number(pageSizeValue))
    ? Number(pageSizeValue)
    : 10;
  const page = Number.isInteger(Number(pageValue)) ? Number(pageValue) : 0;

  return { pageSize, page };
};
