import { t } from "i18next";
import {
  EnumCountry,
  EnumCurrency,
  EnumOrderTypes,
  EnumProductCategory,
  EnumStockProductStatus,
  EnumOrderReason,
  EnumOrderStatus,
} from "./enums";

export const operators = [
  { label: t("equal ="), value: "$eq" },
  { label: t("greater than >"), value: "$gt" },
  { label: t("less than <"), value: "$lt" },
  { label: t("greater or equal >="), value: "$gte" },
  { label: t("less or equal <="), value: "$lte" },
];


export const currenciesFromNumber = {
  966: EnumCurrency.SAR,
  971: EnumCurrency.AED,
  974: EnumCurrency.QAR,
  965: EnumCurrency.KWD,
  973: EnumCurrency.BHD,
  968: EnumCurrency.OMR,
};

export const countryEnumFromName = {
  Oman: EnumCountry.oman,
  Bahrain: EnumCountry.bahrain,
  "Saudi Arabia": EnumCountry.KSA,
  Qatar: EnumCountry.qatar,
  "United Arab Emirates": EnumCountry.UAE,
  Kuwait: EnumCountry.kuwait,
};
export const countryEnumFromNameAbbr = {
  OMN: EnumCountry.oman,
  BHR: EnumCountry.bahrain,
  KSA: EnumCountry.KSA,
  QTR: EnumCountry.qatar,
  UAE: EnumCountry.UAE,
  KWT: EnumCountry.kuwait,
};

export const countriesFromNumber = {
  966: 70,
  971: 71,
  974: 72,
  965: 73,
  973: 74,
  968: 75,
};

export const phoneNumberFromCountry = {
  70: "966",
  71: "971",
  72: "974",
  73: "965",
  74: "973",
  75: "968",
};

export const currenciesFromCountry = {
  70: EnumCurrency.SAR,
  71: EnumCurrency.AED,
  72: EnumCurrency.QAR,
  73: EnumCurrency.KWD,
  74: EnumCurrency.BHD,
  75: EnumCurrency.OMR,
};

export const internationalDeliveryCountry = [EnumCountry.KSA, EnumCountry.UAE];

export const StockStatusPriority = [
  EnumStockProductStatus.onHold,
  EnumStockProductStatus.outOfStock,
  EnumStockProductStatus.available,
];

export const sellerCapital = [
  "0$ - 499$",
  "500$ - 999$",
  "1000$ - 1499",
  "1500$ - 2999$",
  "3000$ - 4999$",
  "5000$ - 6999$",
  "7000$ - 9999$",
  ">10K$",
];
export const monthlyIncome = [
  "0$ - 5k$",
  "5k$ - 10k$",
  "10k$ - 50k",
  ">50K$",
];

export const nicheOptions = [
  { label: "Automobiles & Motorcycle", value: "automobiles&motorcycle" },
  { label: "Bag & Shoes", value: "bag&shoes" },
  { label: "Computer & Office", value: "computer&office" },
  { label: "Health & Beauty", value: "health&beauty" },
  { label: "Home & Garden", value: "home&garden" },
  { label: "Home Improvement", value: "homeimprovement" },
  { label: "Jewelry & Watches", value: "jewelry&watches" },
  { label: "Men’s Clothing", value: "men’sclothing" },
  { label: "Phone & Accessories", value: "phone&accessories" },
  { label: "Sports & Outdoors", value: "sports&outdoors" },
  { label: "Toys, Kids & Baby", value: "toys,kids&baby" },
  { label: "Women’s Clothing", value: "women’sclothing" },
  { label: "Other", value: "other" },
];

export const OrderTypePriority = [
  EnumOrderTypes.default,
  EnumOrderTypes.sourcing,
  EnumOrderTypes.test,
];

export const defaultDateFilter = () => {
  return {
    $gte: shiftDateNow(-30),
    // $lte: shiftDateNow(+1),
  };
};

export const defaultDateTakenFee = () => {
  return shiftDateNow(-7);
};

export const shiftDateNow = (day) => {
  const date = new Date();
  date.setDate(date.getDate() + day);
  return date;
};

const basicColors = [
  "#FF0000",
  "#0000FF",
  "#008000",
  "#FFFF00",
  "#000000",
  "#FFFFFF",
  "#808080",
  "#FFC0CB",
  "#FFA500",
  "#800080",
  "#A52A2A",
  "#F5F5DC",
];
const usShoeSizesMen = [
  "6",
  "6.5",
  "7",
  "7.5",
  "8",
  "8.5",
  "9",
  "9.5",
  "10",
  "10.5",
  "11",
  "11.5",
  "12",
  "12.5",
  "13",
  "14",
];
const usShoeSizesWomen = [
  "5",
  "5.5",
  "6",
  "6.5",
  "7",
  "7.5",
  "8",
  "8.5",
  "9",
  "9.5",
  "10",
  "10.5",
  "11",
  "11.5",
  "12",
];
const euShoeSizes = [
  "35",
  "36",
  "37",
  "38",
  "39",
  "40",
  "41",
  "42",
  "43",
  "44",
  "45",
  "46",
];
const ukShoeSizesMen = [
  "5",
  "5.5",
  "6",
  "6.5",
  "7",
  "7.5",
  "8",
  "8.5",
  "9",
  "9.5",
  "10",
  "10.5",
  "11",
  "12",
];
const ukShoeSizesWomen = [
  "3",
  "3.5",
  "4",
  "4.5",
  "5",
  "5.5",
  "6",
  "6.5",
  "7",
  "7.5",
  "8",
];
const clothesSizes = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"];
const numericClothingSizesWomen = [
  "0",
  "2",
  "4",
  "6",
  "8",
  "10",
  "12",
  "14",
  "16",
  "18",
  "20",
  "22",
  "24",
];
const numericClothingSizesMen = [
  "28",
  "30",
  "32",
  "34",
  "36",
  "38",
  "40",
  "42",
  "44",
  "46",
];
const plusSizesWomen = ["1X", "2X", "3X", "4X", "5X"];
const petiteSizesWomen = ["PXS", "PS", "PM", "PL", "PXL"];

const EnumProductVariationLabel = {
  color: "color",
  size: "size",
};

export const ProductVariation = {
  color: {
    values: basicColors,
    tags: Object.values(EnumProductCategory),
    label: EnumProductVariationLabel.color,
  },
  usShoeSizesMen: {
    values: usShoeSizesMen,
    tags: [EnumProductCategory.man, EnumProductCategory.shoes],
    label: EnumProductVariationLabel.size,
  },
  usShoeSizesWomen: {
    values: usShoeSizesWomen,
    tags: [EnumProductCategory.woman, EnumProductCategory.shoes],
  },
  euShoeSizes: { values: euShoeSizes, tags: [] },
  ukShoeSizesMen: { values: ukShoeSizesMen, tags: [] },
  ukShoeSizesWomen: { values: ukShoeSizesWomen, tags: [] },
  clothesSizes: { values: clothesSizes, tags: [] },
  numericClothingSizesWomen: { values: numericClothingSizesWomen, tags: [] },
  numericClothingSizesMen: { values: numericClothingSizesMen, tags: [] },
  plusSizesWomen: { values: plusSizesWomen, tags: [] },
  petiteSizesWomen: { values: petiteSizesWomen, tags: [] },
};

// const basicColors = [
//   { name: "Red", hex: "#FF0000" },
//   { name: "Blue", hex: "#0000FF" },
//   { name: "Green", hex: "#008000" },
//   { name: "Yellow", hex: "#FFFF00" },
//   { name: "Black", hex: "#000000" },
//   { name: "White", hex: "#FFFFFF" },
//   { name: "Gray", hex: "#808080" },
//   { name: "Pink", hex: "#FFC0CB" },
//   { name: "Orange", hex: "#FFA500" },
//   { name: "Purple", hex: "#800080" },
//   { name: "Brown", hex: "#A52A2A" },
//   { name: "Beige", hex: "#F5F5DC" }
// ];

const electronicVariations = {
  brand: [
    "Apple",
    "Samsung",
    "Sony",
    "Dell",
    "HP",
    "Lenovo",
    "LG",
    "Microsoft",
    "Asus",
    "Acer",
  ],
  model: [
    "iPhone 13",
    "Galaxy S21",
    "PlayStation 5",
    "XPS 13",
    "Surface Pro 7",
    "MacBook Pro",
  ],
  color: [
    "Black",
    "White",
    "Silver",
    "Gray",
    "Blue",
    "Red",
    "Gold",
    "Rose Gold",
    "Space Gray",
  ],
  storageCapacity: ["64GB", "128GB", "256GB", "512GB", "1TB", "2TB"],
  ram: ["4GB", "8GB", "16GB", "32GB", "64GB"],
  processor: [
    "Intel Core i5",
    "Intel Core i7",
    "AMD Ryzen 5",
    "Apple M1",
    "Qualcomm Snapdragon 888",
  ],
  screenSize: [
    "13-inch",
    "15-inch",
    "17-inch",
    "24-inch",
    "27-inch",
    "32-inch",
  ],
  resolution: ["720p", "1080p", "1440p", "4K", "8K", "Retina Display"],
  batteryLife: [
    "Up to 8 hours",
    "Up to 10 hours",
    "Up to 12 hours",
    "Up to 20 hours",
  ],
  operatingSystem: [
    "Windows 11",
    "macOS",
    "Android",
    "iOS",
    "Linux",
    "Chrome OS",
  ],
  connectivity: [
    "Wi-Fi",
    "Bluetooth",
    "4G LTE",
    "5G",
    "Ethernet",
    "USB-C",
    "Thunderbolt 4",
    "HDMI",
    "NFC",
  ],
  cameraQuality: [
    "8MP",
    "12MP",
    "16MP",
    "48MP",
    "108MP",
    "4K video recording",
    "5x optical zoom",
  ],
  weight: ["1.2kg", "1.5kg", "2kg", "3kg", "5kg"],
  dimensions: ["7.9 x 5.3 x 0.3 inches", "13.1 x 9.1 x 0.8 inches"],
  warranty: [
    "1-year warranty",
    "2-year warranty",
    "3-year warranty",
    "5-year warranty",
  ],
};

export const countryAbbrFromEnum = {
  [EnumCountry.oman]: "OMN",
  [EnumCountry.bahrain]: "BHR",
  [EnumCountry.KSA]: "KSA",
  [EnumCountry.qatar]: "QTR",
  [EnumCountry.UAE]: "UAE",
  [EnumCountry.kuwait]: "KWT",
};

export const OrderReasonStatus = {
  [EnumOrderStatus.expired]: [
    EnumOrderReason.other,
    EnumOrderReason.outOfCoverage,
    EnumOrderReason.noAnswer,
    EnumOrderReason.delayed,
  ],
  [EnumOrderStatus.inConfirmation]: [
    EnumOrderReason.other,
    EnumOrderReason.outOfCoverage,
    EnumOrderReason.noAnswer,
    EnumOrderReason.delayed,
  ],
  [EnumOrderStatus.canceled]: [
    EnumOrderReason.other,
    EnumOrderReason.expensive,
    EnumOrderReason.notSerious,
    EnumOrderReason.buyItFromOther,
  ],
  [EnumOrderStatus.wrong]: [
    EnumOrderReason.other,
    EnumOrderReason.didNotOrdered,
    EnumOrderReason.duplicated,
    EnumOrderReason.wrongNumber,
    EnumOrderReason.wrongArticle,
  ],
  [EnumOrderStatus.shipping]: [
    EnumOrderReason.other,
    EnumOrderReason.outOfCoverage,
    EnumOrderReason.delayed,
  ],
  [EnumOrderStatus.inReturn]: [
    EnumOrderReason.other,
    EnumOrderReason.noAnswer,
    EnumOrderReason.outOfCoverage,
    EnumOrderReason.wrongArticle,
  ],
};
