import { configureStore } from "@reduxjs/toolkit";
import {
  forgotPasswordReducer,
  profileReducer,
  userReducers,
} from "./reducers/userReducers";
import { depositReducers } from "./reducers/depositReducers";
import { searchParamReducers } from "./reducers/searchParamReducers";
import {
  apartmentDetailReducers,
  apartmentReducers,
} from "./reducers/apartmentReducers";
import {
  bookingDetailsReducer,
  historyBookingReducers,
  newBookingReducers,
  ownerBookingReducers,
} from "./reducers/bookingReducers";
import { resortReducers } from "./reducers/resortReducers";
import { propertiesReducers } from "./reducers/propertyReducers";
import {
  newOwnershipReducers,
  ownershipDetailsReducer,
  ownershipReducers,
} from "./reducers/ownershipReducer";
import walletReducers from "./reducers/walletReducers";
import blogReducers, {
  blogDetailsReducer,
  dislikePostReducer,
  likePostReducer,
} from "./reducers/blogReducers";
import signupReducer from "./reducers/signupReducer";
import {
  dateRangeDefaultReducer,
  dateRangeOutReducer,
  dateRangeReducer,
} from "./reducers/dateRangeReducers";
import {
  createRatingBookingReducer,
  ratingsReducer,
} from "./reducers/ratingReducers";

export const store = configureStore({
  reducer: {
    user: userReducers,
    resorts: resortReducers,
    properties: propertiesReducers,
    deposit: depositReducers,
    searchParam: searchParamReducers,
    apartments: apartmentReducers,
    apartmentDetail: apartmentDetailReducers,
    newBooking: newBookingReducers,
    historyBooking: historyBookingReducers,
    ownerBooking: ownerBookingReducers,
    newOwnership: newOwnershipReducers,
    ownerships: ownershipReducers,
    wallet: walletReducers,
    blog: blogReducers,
    bookingDetail: bookingDetailsReducer,
    blogDetail: blogDetailsReducer,
    likePost: likePostReducer,
    dislikePost: dislikePostReducer,
    profile: profileReducer,
    signup: signupReducer,
    forgotPassword: forgotPasswordReducer,
    detailOwnership: ownershipDetailsReducer,
    dateRangeBooking: dateRangeReducer,
    ratings: ratingsReducer,
    createRatingBooking: createRatingBookingReducer,
    // dislikePost: dislikePostReducer,
    dateRangeDefault: dateRangeDefaultReducer,
    dateOut: dateRangeOutReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});
