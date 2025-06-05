export const EnumPaymentMethod = {
  wise: 20,
  payonner: 21,
  paysera: 22,
  USD: 23,
  cashDZD: 24,
  cashAED: 25,
  none: 26,
};

export const EnumEmployeeRole = {
  admin: 30,
  sm: 31,
  am: 32,
  confirmer: 33,
  follower: 34,
  om: 35,
  sourcingMan: 36,
  deliveryMan: 37,
  sells: 38,
  cm: 39,
  validator: 40,
  rh: 41,
  bdm: 42,
};

export const EnumFeeUnit = {
  percentage: 43,
  dollar: 44,
};

export const EnumFeeName = {
  newFee: 45,
  confirmationFee: 46,
  upsellFee: 47,
  vat: 48,
  cod: 49,
  delivery: 50,
  weight: 51,
  return: 52,
  followingFee: 53,
};

export const EnumFeeCategory = {
  callCenter: 60,
  domesticShipping: 61,
  internationalShippingKSA: 62,
  internationalShippingUAE: 63,
};

export const EnumInternationalDeliveryCountry = {
  KSA: 70,
  UAE: 71,
};
export const EnumCountry = {
  qatar: 72,
  kuwait: 73,
  bahrain: 74,
  oman: 75,
  ...EnumInternationalDeliveryCountry,
};

export const EnumSourcingType = {
  local: 80,
  international: 81,
};

export const EnumBasicStatus = {
  active: 90,
  inactive: 91,
  new: 93,
};
export const EnumWarehouseStatus = {
  ...EnumBasicStatus,
};

export const EnumNonConfirmedOrderStatus = {
  new: 93,
  inConfirmation: 96,
  canceled: 97,
  wrong: 98,
  expired: 99,
};

export const EnumConfirmedOrderStatus = {
  confirmed: 100,
  dispatch: 101,
  shipping: 102,
  returned: 103,
  delivered: 104,
  inReturn: 115,
};
export const EnumDeathOrderStatus = {
  canceled: 97,
  wrong: 98,
  delivered: 104,
  returned: 103,
};

export const EnumOrderStatus = {
  ...EnumNonConfirmedOrderStatus,
  ...EnumConfirmedOrderStatus,
};

export const EnumStockProductStatus = {
  available: 133,
  onHold: 134,
  outOfStock: 135,
};
export const EnumProductSellerStatus = {
  new: 130,
  test: 131,
  sourcing: 132,
  ...EnumStockProductStatus,
};

export const EnumProductAffiliateStatus = EnumProductSellerStatus;

export const EnumSellerLevel = {
  beginner: 150,
  amateur: 151,
  professional: 152,
};
export const EnumCurrency = {
  SAR: 160,
  QAR: 161,
  OMR: 162,
  KWD: 163,
  BHD: 164,
  AED: 165,
  dollar: 166,
  euro: 167,
};
export const EnumSourcingStatus = {
  new: 180,
  search: 181,
  payed: 182,
  received: 183,
  shipping: 184,
  delivered: 185,
  rejected: 186,
};
export const EnumOrderCreationSource = {
  platform: 190,
  excel: 191,
  sheet: 192,
  shopify: 193,
  wordpress: 194,
};
export const EnumProductCategory = {
  default: 200,
  books: 201,
  toys: 202,
  shoes: 203,
  woman: 204,
  man: 205,
  clothes: 206,
};
export const EnumSellerRole = {
  seller: 300,
  affiliate: 301,
};

export const EnumUserStatus = {
  ...EnumBasicStatus,
  banned: 310,
  duplicated: 311,
};

export const EnumSellerStatus = {
  ...EnumUserStatus,
  onHold: 312,
  rejected: 313,
};
export const EnumEmployeeStatus = {
  ...EnumUserStatus,
};

export const EnumSourcingServices = {
  search: 320,
  check: 321,
  payed: 322,
  custom: 323,
  shipping: 324,
};

export const EnumOrderTypes = {
  default: 330,
  test: 331,
  sourcing: 332,
};

export const EnumPaymentStatus = {
  Payed: 340,
  inProcess: 341,
  rejected: 342,
};

export const EnumSourcingCategory = {
  self: 350,
  shipping: 351,
  search_Shipping: 352,
};

export const EnumSourcingShippingMethod = {
  sea: 360,
  air: 361,
  land: 362,
};

export const EnumPaymentType = {
  withdraw: 370,
  deposit: 371,
  sourcing: 372,
  refund: 373,
};

export const EnumPaymentReason = {
  purchase: 380,
  shipping: 381,
  productCost: 382,
  custom: 383,
}

export const EnumOrderReason = {
  none: 400,
  wrongOrder: 401,
  duplicated: 402,
  delayed: 403,
  noAnswer: 404,
  outOfCoverage: 405,
  expensive: 406,
  notSerious: 407,
  other: 408,
  didNotOrdered: 409,
  buyItFromOther: 410,
  wrongNumber: 411,
  wrongArticle: 412,
  expired: 413,
};
export const EnumBank = {
  wise: 501,
  payonner: 502,
  redotpay: 504,
  other: 505,
};

export const EnumProductsGeneralCategory = {
  default: 530,
  gadget: 531,
  cosmetic: 532,
};

export const EnumDisplayMode = {
  table: 1000,
  cards: 1001,
};

export const EnumSellerStatusReason = {
  none: 600,
  noAnswer: 601,
  outOfCoverage: 602,
  delayed: 603,
  impolite: 604,
  risk: 605,
  noKPIs: 606,
  other: 607,
  notReachable: 608,
  notReady: 609,
  cut: 610,
  busy: 611,
  unreachableFor7DaysNoInteraction: 612,
  unreachableFor7DaysWithInteraction: 613,
  unreachableFor7DaysWorking: 614,
  notSerious: 615,
};
export const EnumMediaChanel = {
  phone: 580,
  whatsapp: 581,
  facebook: 582,
  instagram: 583,
  tiktok: 584,
  SMS: 585,
  email: 586,
};

export const EnumTestProcessPhase = {
  prospect: 700,
  adsPrep: 701,
  assessment: 702,
  search: 703,
  closing: 704,
};
export const EnumLunchProcessPhase = {
  transit: 710,
  touchingUP: 711,
  uploading: 712,
  concluded: 713,
  scaling: 714,
};

export const EnumProcessPhase = {
  ...EnumTestProcessPhase,
  ...EnumLunchProcessPhase,
};

export const EnumProductAffiliateVisibilityScope = {
  affiliate: 720,
  toopDrop: 721,
};
