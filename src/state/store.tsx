import { configureStore, combineReducers } from "@reduxjs/toolkit";
import sellerReducer from "./seller-redux";
import productNormalSellerReducer from "./product-normal-seller-redux";
import productAffiliateSellerReducer from "./product-affiliate-seller-redux";
import productToopDropReducer from "./product-toop-drop-redux";
import orderNormalSellerReducer from "./order-normal-seller-redux";
import orderToopDropReducer from "./order-toop-drop-redux";
import orderAffiliateSellerReducer from "./order-affiliate-seller-redux";
import cartReducer from "./cart-redux";
import invoiceReducer from "./invoice-normal-seller-redux";
import invoiceToopDropReducer from "./invoice-toop-drop-redux";
import paymentReducer from "./payment-redux";
import sourcingReducer from "./sourcing-redux";
import stockReducer from "./stock-redux";
import simulationReducer from "./simulation-redux";
import settingsReducer from "./settings-redux";
import storageReducer from "./storage-redux";

import statisticReducer from "./statistics-redux-";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const appReducer = combineReducers({
  seller: sellerReducer,
  statistic: statisticReducer,
  productNormalSeller: productNormalSellerReducer,
  productAffiliateSeller: productAffiliateSellerReducer,
  productToopDrop: productToopDropReducer,
  orderNormalSeller: orderNormalSellerReducer,
  orderToopDrop: orderToopDropReducer,
  orderAffiliateSeller: orderAffiliateSellerReducer,
  payment: paymentReducer,
  sourcing: sourcingReducer,
  stock: stockReducer,
  invoice: invoiceReducer,
  invoiceToopDrop: invoiceToopDropReducer,
  simulation: simulationReducer,
  cart: cartReducer,
  settings: settingsReducer,
  storage: storageReducer,

});

const rootReducer = (state, action) => {
  // Handle LOGOUT action
  if (action.type === "LOGOUT") {
    storage.removeItem("persist:root"); // Clear persisted storage for everything
    state = {
      settings: {
        ...state.settings,
      },
    };
  }

  // Handle RESET_STORE action
  if (action.type === "RESET_STORE") {
    // Preserve only seller.currentSeller and reset everything else
    state = {
      // Reset the whole state but preserve currentSeller
      seller: {
        ...state.seller,
        succeed: false,
        isFetching: false,
        error: false,
      },
      settings: {
        ...state.settings, // Preserve the other parts of the employee state
      },
    };
  }

  return appReducer(state, action); // Continue with the combined reducer logic
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
