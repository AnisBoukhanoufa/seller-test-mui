// import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
// const sellerSlice: any = createSlice({
//   name: "seller",
//   initialState: {
//     currentSeller: null,
//     succeed: false,
//     isFetching: false,
//     error: false,
//     page: 0,
//     pageSize: 10,
//     // totalPages:0,
//     abc: "lmkjdflkj",
//   },
//   reducers: {
// registerStart: (state) => {
//   state.succeed = false;
//   state.isFetching = true;
//   state.error = false;
// },
// registerSuccess: (state) => {
//   state.succeed = true;
//   state.isFetching = false;
//   state.error = false;
// },
// registerFailed: (state) => {
//   state.succeed = false;
//   state.isFetching = false;
//   state.error = true;
// },
//     loginStart: (state) => {
//       state.isFetching = true;
//       state.error = false;
//     },
//     loginSuccess: (state, action) => {
//       state.isFetching = false;
//       state.error = false;
//       state.currentSeller = action.payload;
//     },
//     loginFailed: (state) => {
//       state.isFetching = false;
//       state.error = true;
//     },
//     sellerOnlineStatus: (state, action) => {
//       state.online = action.payload;
//     },
//     logoutSuccess: (state) => {
//       state.currentSeller = null;
//     },
//     sellerStart: (state) => {
//       state.isFetching = true;
//       state.error = false;
//     },

//     sellerSuccess: (state, action) => {
//       state.isFetching = false;
//       state.sellers = action.payload;
//     },

//     sellerFailed: (state) => {
//       state.isFetching = false;
//       state.error = true;
//     },

//     setSellerStart: (state) => {
//       state.isFetching = true;
//     },

//     setSellerSuccess: (state: any, action: PayloadAction<string>) => {
//       state.isFetching = false;
//       state.sellers.push(action.payload);
//     },

//     setSellerFailed: (state) => {
//       state.isFetching = false;
//       state.error = true;
//     },

//     updateSellerStart: (state) => {
//       state.isFetching = true;
//       state.error = false;
//       state.succeed = false;
//     },

//     updateSellerSuccess: (state: any, action) => {
//       state.succeed = true;
//       state.isFetching = false;
//       state.sellers.list[
//         state.sellers.list.findIndex(
//           (item: any) => item._id === action.payload._id,
//         )
//       ] = action.payload;
//       console.log("from redux");
//     },

//     updateSellerFailed: (state) => {
//       state.succeed = false;
//       state.isFetching = false;
//       state.error = true;
//     },

//     setPagination: (state: any, action: any) => {
//       state.pageSize = action.payload.pageSize;
//       state.page = action.payload.page;
//     },

//     deleteSellerStart: (state) => {
//       state.isFetching = true;
//     },

//     deleteSellerSuccess: (state, action) => {
//       state.isFetching = false;
//       state.sellers.splice(
//         state.sellers.findIndex((item: any) => item._id === action.payload.id),
//         1,
//       );
//     },

//     deleteCSellerFailed: (state) => {
//       state.isFetching = false;
//       state.error = true;
//     },
//   },
// });

// export const {
//   loginStart,
//   loginSuccess,
//   loginFailed,
//   logoutSuccess,
//   setPagination,
//   sellerStart,
//   sellerSuccess,
//   sellerFailed,
//   sellerOnlineStatus,
//   setSellerStart,
//   setSellerSuccess,
//   setSellerFailed,
//   updateSellerStart,
//   updateSellerSuccess,
//   updateSellerFailed,
//   deleteSellerStart,
//   deleteSellerSuccess,
//   deleteSellerFailed,
// } = sellerSlice.actions;
// export default sellerSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
const sellerSlice: any = createSlice({
  name: "seller",
  initialState: {
    currentSeller: null,
    succeed: false,
    isFetching: false,
    error: false,
    errorMessage: "",
  },
  reducers: {
    loginInit: (state) => {
      state.succeed = false;
      state.isFetching = false;
      state.error = false;
    },
    registerInit: (state) => {
      state.succeed = false;
      state.isFetching = false;
      state.error = false;
    },
    registerStart: (state) => {
      state.succeed = false;
      state.isFetching = true;
      state.error = false;
    },
    registerSuccess: (state) => {
      state.succeed = true;
      state.isFetching = false;
      state.error = false;
    },
    registerFailed: (state) => {
      state.succeed = false;
      state.isFetching = false;
      state.error = true;
    },
    loginStart: (state) => {
      state.succeed = false;
      state.isFetching = true;
      state.error = false;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.succeed = true;
      state.currentSeller = action.payload;
    },
    loginFailed: (state, action) => {
      state.succeed = false;
      state.isFetching = false;
      state.error = true;
      state.errorMessage = action.payload;
    },
    logoutSuccess: (state) => {
      state.currentSeller = null;
    },
    sellerStart: (state) => {
      state.isFetching = true;
    },

    sellerAcceptTermsStart: (state) => {
      state.isFetching = true;
      state.error = false;
      state.succeed = false;
    },

    sellerAcceptTermsSuccess: (state: any, action) => {
      state.succeed = true;
      state.isFetching = false;
      state.currentUser.details = action.payload;
    },

    sellerAcceptTermsFailed: (state) => {
      state.succeed = false;
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  loginInit,
  registerInit,
  registerStart,
  registerSuccess,
  registerFailed,
  loginStart,
  loginSuccess,
  loginFailed,
  logoutSuccess,
  sellerStart,
  sellerSuccess,
  sellerFailed,
  setSellerStart,
  setSellerSuccess,
  setSellerFailed,
  sellerAcceptTermsStart,
  sellerAcceptTermsSuccess,
  sellerAcceptTermsFailed,
} = sellerSlice.actions;
export default sellerSlice.reducer;
