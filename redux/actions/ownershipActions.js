import { format } from "date-fns";
import axios from "axios";
import * as SecureStore from "expo-secure-store";
import {
  CREATE_OWNERSHIP_REQUEST,
  CREATE_OWNERSHIP_SUCCESS,
  CREATE_OWNERSHIP_FAIL,
  GET_OWNERSHIP_REQUEST,
  GET_OWNERSHIP_SUCCESS,
  GET_OWNERSHIP_FAIL,
  GET_OWNERSHIP_DETAIL_REQUEST,
  GET_OWNERSHIP_DETAIL_FAIL,
  GET_OWNERSHIP_DETAIL_SUCCESS,
} from "../constants/ownershipConstants";
import mine from "mime";

export const createOwnership =
  (
    propertyId,
    userId,
    roomId,
    endTime,
    startTime,
    type,
    weekNumbers,
    contractImages
  ) =>
  async (dispatch) => {
    try {
      dispatch({ type: CREATE_OWNERSHIP_REQUEST });

      const accessToken = await SecureStore.getItemAsync("secure_token");

      const config = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "content-type": "multipart/form-data",
        },
      };

      const formData = new FormData();

      const coOwnerId = {
        propertyId: propertyId,
        userId: userId,
        roomId: roomId,
      };
      const coOwner = {
        endTime: type === "DEEDED" ? null : endTime,
        startTime: type === "DEEDED" ? null : startTime,
        type: type,
        timeFrames: weekNumbers?.map((element) => ({ weekNumber: element })),
      };
      const coOwnerIdBlob = new Blob([JSON.stringify(coOwnerId)], {
        type: "application/json",
      });
      const coOwnerBlob = new Blob([JSON.stringify(coOwner)], {
        type: "application/json",
      });

      formData.append("coOwnerId", coOwnerIdBlob);
      formData.append("coOwner", coOwnerBlob);
      contractImages.forEach((element) => {
        formData.append("contractImages", {
          uri: element.uri,
          type: "image/jpeg",
          name: "photo.jpg",
        });
      });

      console.log("Check formData", formData);

      const { data } = await axios
        .post(`https://holiday-swap.click/api/co-owners`, formData, config)
        .then((response) => {
          console.log("success", response);
        })
        .catch((response) => {
          console.log("Error ", response);
        });

      dispatch({ type: CREATE_OWNERSHIP_SUCCESS, payload: data });
      return data;
    } catch (error) {
      console.log("Error redux", error);
      dispatch({
        type: CREATE_OWNERSHIP_FAIL,
        payload: error.response?.data?.message || "An error occurred",
      });
      throw error;
    }
  };

export const getListOwnership = (userId) => async (dispatch) => {
  try {
    dispatch({ type: GET_OWNERSHIP_REQUEST });

    const accessToken = await SecureStore.getItemAsync("secure_token");

    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const { data } = await axios.get(
      `https://holiday-swap.click/api/co-owners?userId=${userId}&pageNo=0&pageSize=10&sortBy=property_id`,
      config
    );

    dispatch({ type: GET_OWNERSHIP_SUCCESS, payload: data });
    return data;
  } catch (error) {
    dispatch({ type: GET_OWNERSHIP_FAIL, payload: error });
    throw error;
  }
};

export const getOwnershipDetails =
  (userId, propertyId, roomId) => async (dispatch) => {
    try {
      dispatch({ type: GET_OWNERSHIP_DETAIL_REQUEST });

      const accessToken = await SecureStore.getItemAsync("secure_token");
      console.log("check detailasd", userId);
      const config = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };

      const { data } = await axios.get(
        `https://holiday-swap.click/api/co-owners/detail?propertyId=${propertyId}&userId=${userId}&roomId=${roomId}`,
        config
      );

      dispatch({
        type: GET_OWNERSHIP_DETAIL_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_OWNERSHIP_DETAIL_FAIL,
        payload: error.message || "An error occurred while fetching data.",
      });
      console.error("Error in getOwnershipDetails:", error);
    }
  };
