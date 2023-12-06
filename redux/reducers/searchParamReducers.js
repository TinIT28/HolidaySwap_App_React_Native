import { SUBMIT_SEARCH } from "../constants/searchParamConstants";
const searchParam = {
  locationName: "",
  resortId: "",
  checkIn: "",
  checkOut: "",
  min: "",
  max: "",
  guest: 1,
  numberBedsRoom: 1,
  numberBathRoom: 1,
  listOfInRoomAmenity: [],
  listOfPropertyView: [],
  listOfPropertyType: [],
  pageNo: 0,
  pageSize: 10,
  sortBy: "id",
  sortDirection: "asc",
};
export const searchParamReducers = (state = { searchParam: {} }, action) => {
  const data = { ...state.searchParam, ...action.searchParam };
  switch (action.type) {
    case SUBMIT_SEARCH:
      // return { ...state.searchParam, ...action.searchParam?.searchParam };
      return { ...state, searchParam: data };
    default:
      return { searchParam };
  }
};
