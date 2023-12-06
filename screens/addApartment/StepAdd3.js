import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import UploadImage from "../../components/addApartment/UploadImage";
import { useDispatch, useSelector } from "react-redux";
import { createOwnership } from "../../redux/actions/ownershipActions";
import { CREATE_OWNERSHIP_RESET } from "../../redux/constants/ownershipConstants";
import { loadUser } from "../../redux/actions/userActions";

export default function StepAdd3() {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();
  const { userProfile } = useSelector((state) => state.user);

  useFocusEffect(
    React.useCallback(() => {
      dispatch(loadUser());
    }, [dispatch])
  );

  const { success, ownership, error } = useSelector(
    (state) => state.newOwnership
  );

  const {
    resortId,
    resortName,
    propertyId,
    propertyName,
    roomId,
    type,
    timeFrames,
    startTime,
    endTime,
  } = route.params;

  const [images, setImages] = useState([]);

  const handleChangeImage = (value) => {
    setImages([...images, ...value]);
  };

  const handleSubmit = () => {
    dispatch(
      createOwnership(
        propertyId,
        userProfile.userId,
        roomId,
        endTime,
        startTime,
        type,
        timeFrames,
        images
      )
    );
  };

  useEffect(() => {
    if (success) {
      dispatch({ type: CREATE_OWNERSHIP_RESET });
      navigation.navigate("root");
    }

    if (error) {
      console.log("error create ownership", error);
    }
  }, [dispatch, success, error, navigation]);

  console.log("Check image", images);

  console.log("Check user in step 2", userProfile);

  return (
    <View className="bg-white h-full">
      <View className="flex flex-row justify-between mt-10 px-4 border-b border-gray-400 py-4">
        <TouchableOpacity>
          <Text className="border border-gray-400 rounded-3xl px-2 py-1">
            Save & quit
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text className="border border-gray-400 rounded-3xl px-2 py-1">
            You have questions?
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View className="px-4 ">
          <Text className="text-[25px] font-bold mt-7">Step 3</Text>
          <Text className="font-bold text-[25px] py-3 text-blue-500">
            Share your information about your apartment with us
          </Text>
          <View className="flex ">
            <Text className="text-[16px] text-gray-600">
              In this step we will ask you if the apartment you want to rent is
              located in the
            </Text>

            <View className="flex flex-row items-center">
              <Text>Resort: </Text>
              <Text className="font-bold text-[17px]">{resortName}</Text>
            </View>

            <View className="flex flex-row items-center">
              <Text>Type: </Text>
              <Text className="text-[17px] font-bold">{propertyName}</Text>
            </View>
            <View className="flex flex-row items-center">
              <Text>Apartment ID: </Text>
              <Text className="text-[17px] font-bold">{roomId}</Text>
            </View>
            <View className="flex flex-row items-center">
              <Text>Time range: </Text>
              {startTime && endTime ? (
                <Text className="text-[17px] font-bold">
                  {startTime} - {endTime}
                </Text>
              ) : (
                <Text className="text-[17px] font-bold">Owner forever</Text>
              )}
            </View>
            <Text className="text-[16px] text-gray-600">
              Please provide us with more pictures of your apartment
            </Text>
          </View>
        </View>
        <View className="px-4 mt-10 mb-5 ">
          <Text className="text-[20px] font-bold text-blue-500 mb-5">
            Image
          </Text>
          <UploadImage handleChangeImage={handleChangeImage} />
          <TouchableOpacity
            onPress={handleSubmit}
            className="text-[20px] font-bold  mb-5 bg-blue-500 px-2 py-3 rounded-md text-white"
          >
            <Text>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View className="flex flex-row gap-1 items-center justify-center w-full">
        <View className="bg-gray-300 w-[33.3%] h-1"></View>
        <View className="bg-gray-300 w-[33.3%] h-1"></View>
        <View className="bg-gray-700 w-[33.3%] h-[5px]"></View>
      </View>
      <View className="px-4 py-5">
        <View className="flex flex-row justify-between items-center">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text className="text-[20px] underline">Back</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSubmit}>
            <Text className="text-[20px] bg-blue-700  text-white px-5 py-2 rounded-md">
              Finish
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
