import { EnumOrderReason } from "statics/enums";

export const EnumExcelShippingStatusReason = {
    delayed: EnumOrderReason.delayed,
    noanswer: EnumOrderReason.noAnswer,
    outofcoverage: EnumOrderReason.outOfCoverage,
    other: EnumOrderReason.other,
    none: EnumOrderReason.none,
  };
  export const EnumExcelReturnStatusReason = {
    delayed: EnumOrderReason.delayed,
    noanswer: EnumOrderReason.noAnswer,
    outofcoverage: EnumOrderReason.outOfCoverage,
    other: EnumOrderReason.other,
    wrongarticle: EnumOrderReason.wrongArticle,
  };