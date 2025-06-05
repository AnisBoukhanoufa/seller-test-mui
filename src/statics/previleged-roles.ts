import { EnumEmployeeRole } from "./enums";

const nonPrevilegedRoles = {
  homePage: [EnumEmployeeRole.sells, EnumEmployeeRole.cm, EnumEmployeeRole.rh],
  employeesPage: [
    EnumEmployeeRole.confirmer,
    EnumEmployeeRole.sells,
    EnumEmployeeRole.cm,
  ],
  tasksPage: [
    EnumEmployeeRole.confirmer,
    EnumEmployeeRole.sells,
    EnumEmployeeRole.cm,
    EnumEmployeeRole.rh,
  ],
  sellersPage: [EnumEmployeeRole.confirmer, EnumEmployeeRole.rh],
  orders: [EnumEmployeeRole.sells, EnumEmployeeRole.cm, EnumEmployeeRole.rh],
  ordersNormalSellersPage: [
    EnumEmployeeRole.sells,
    EnumEmployeeRole.cm,
    EnumEmployeeRole.rh,
  ],
  ordersAffiliatesPage: [
    EnumEmployeeRole.sells,
    EnumEmployeeRole.cm,
    EnumEmployeeRole.rh,
  ],
  products: [
    EnumEmployeeRole.confirmer,
    EnumEmployeeRole.sells,
    EnumEmployeeRole.cm,
    EnumEmployeeRole.rh,
  ],
  warehousesPage: [
    EnumEmployeeRole.confirmer,
    EnumEmployeeRole.sells,
    EnumEmployeeRole.cm,
    EnumEmployeeRole.rh,
  ],
  sourcingsPage: [
    EnumEmployeeRole.confirmer,
    EnumEmployeeRole.sells,
    EnumEmployeeRole.cm,
    EnumEmployeeRole.rh,
  ],
  billings: [
    EnumEmployeeRole.confirmer,
    EnumEmployeeRole.sells,
    EnumEmployeeRole.cm,
    EnumEmployeeRole.rh,
  ],
  simulationsPage: [
    EnumEmployeeRole.sells,
    EnumEmployeeRole.cm,
    EnumEmployeeRole.rh,
    EnumEmployeeRole.confirmer,
    EnumEmployeeRole.follower,
  ],
};
nonPrevilegedRoles.feesPage = [
  ...nonPrevilegedRoles.billings,
  EnumEmployeeRole.am,
];
nonPrevilegedRoles.pricingsPage = [...nonPrevilegedRoles.billings];
nonPrevilegedRoles.invoicesPage = [...nonPrevilegedRoles.billings];
nonPrevilegedRoles.currenciesPage = [
  ...nonPrevilegedRoles.billings,
  EnumEmployeeRole.am,
];
nonPrevilegedRoles.paymentsPage = [...nonPrevilegedRoles.billings];

nonPrevilegedRoles.ordersNormalSellersPage = [...nonPrevilegedRoles.orders];
nonPrevilegedRoles.ordersAffiliatesPage = [...nonPrevilegedRoles.orders];
nonPrevilegedRoles.productsNormalSellersPage = [...nonPrevilegedRoles.products];
nonPrevilegedRoles.productsAffiliatesPage = [...nonPrevilegedRoles.products];

export default nonPrevilegedRoles;
