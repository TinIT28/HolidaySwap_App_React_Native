import { AntDesign, EvilIcons, Ionicons } from "@expo/vector-icons";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Image, ScrollView, Text, TouchableOpacity } from "react-native";
import { View } from "react-native-animatable";
import { useDispatch, useSelector } from "react-redux";
import { getListOwnership } from "../../redux/actions/ownershipActions";
import { loadUser } from "../../redux/actions/userActions";
import Loading from "./../../components/Loading";
import { format } from "date-fns";

const YourApartment = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { ownerships, loading, error } = useSelector(
    (state) => state.ownerships
  );
  const { userProfile } = useSelector((state) => state.user);

  useFocusEffect(
    React.useCallback(() => {
      dispatch(loadUser());
    }, [dispatch])
  );

  useEffect(() => {
    if (userProfile) {
      dispatch(getListOwnership(userProfile.userId));
    }
  }, [dispatch, userProfile]);

  console.log("check ownership", ownerships);

  return (
    <View>
      <View className="bg-blue-500 w-full h-[100px]  flex flex-row items-center justify-start px-5">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={30} color="white" />
        </TouchableOpacity>
        <Text className="ml-8 text-[20px] text-white">Your Apartment</Text>
      </View>
      <View>
        {loading ? (
          <View className="mt-[80%]">
            <Loading />
          </View>
        ) : (
          <ScrollView className="mb-20">
            <View className="px-4">
              {ownerships &&
              ownerships.content &&
              ownerships.content.length > 0 ? (
                ownerships.content.map((item, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() =>
                      navigation.navigate("OwnerDetailApartment", {
                        roomId: item.id.roomId,
                        userId: item.id.userId,
                        propertyId: item.id.propertyId,
                      })
                    }
                    className=" flex flex-row bg-white mt-3 justify-start  rounded-md py-2 px-2"
                  >
                    <Image
                      className="w-[30%] h-[100px] rounded-md mr-3"
                      source={{ uri: item.contractImages[0]?.link }}
                    />
                    <View className="w-[65%]">
                      <View className="flex flex-row items-center gap-1">
                        <Text className="text-[12px]">Apartment ID:</Text>
                        <Text className=" font-bold ">{item.id.roomId}</Text>
                      </View>
                      {/* <View className="flex flex-row mt-2">
                        <EvilIcons name="location" size={15} />
                        <Text className="text-[12px] ">resort </Text>
                      </View> */}
                      <View className="flex flex-row items-center gap-1">
                        <Text className="text-[12px]">Ownertype:</Text>
                        <Text className="font-bold">
                          {item.startTime !== null
                            ? format(new Date(item.startTime), "yyyy")
                            : "Forever"}
                        </Text>
                      </View>
                      <View className="flex flex-row items-center">
                        <Text
                          className={`text-[12px] font-bold ${
                            item.status === "ACCEPTED"
                              ? "text-green-500"
                              : item.status === "PENDING"
                              ? "text-red-500"
                              : ""
                          }`}
                        >
                          {item.status}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                ))
              ) : (
                <Text>No ownerships found</Text>
              )}
            </View>
          </ScrollView>
        )}
      </View>
    </View>
  );
};

export default YourApartment;
