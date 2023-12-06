import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, Text, ScrollView } from "react-native";
import { getOwnershipDetails } from "../../redux/actions/ownershipActions";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { format } from "date-fns";
import { useFocusEffect } from "@react-navigation/native";

export default function OwnerDetailApartment({ route }) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { userId, propertyId, roomId } = route.params;
  const { owner } = useSelector((state) => state.detailOwnership);
  useFocusEffect(
    React.useCallback(() => {
      dispatch(getOwnershipDetails(userId, propertyId, roomId));
    }, [dispatch, userId, propertyId, roomId])
  );

  return (
    <View className="flex-1">
      <View className="bg-blue-500 w-full h-[100px]  flex flex-row items-center justify-start px-5">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={30} color="white" />
        </TouchableOpacity>
        <Text className="ml-8 text-[20px] text-white">Your Apartment</Text>
      </View>
      <ScrollView>
        <View className="px-3 mt-2 pb-10 h-full">
          <Text className="text-[25px] font-bold">
            {owner.property?.propertyName}
          </Text>
          <View className=" w-[80%] flex flex-row py-3 gap-1">
            <Text>Resort:</Text>
            <Text className="text-[18px] font-bold">
              {owner.resort.resortName}
            </Text>
          </View>
          <View className="flex flex-row items-center gap-1 pb-3">
            <Text>Status:</Text>
            <Text className="text-[20px] text-green-500 font-bold">
              {owner.status}
            </Text>
          </View>
          <View className="flex flex-row items-center gap-1">
            <Text>Apartment ID:</Text>
            <Text className="text-[20px] font-bold">{owner.id.roomId}</Text>
          </View>
          {owner.endTime === null && owner.startTime === null ? (
            <View className="flex flex-row items-center gap-1 pt-3">
              <Text>Type owner:</Text>
              <Text className="text-[20px] font-bold">Owner forever</Text>
            </View>
          ) : (
            <>
              <Text className="py-3">
                Start Time: {format(new Date(owner.startTime), "dd-MM-yyyy")}
              </Text>
              <Text>
                End Time: {format(new Date(owner.endTime), "dd-MM-yyyy")}
              </Text>
            </>
          )}
          <View className="flex flex-row items-center gap-1 pt-3">
            <Text>Week Numbers:</Text>
            <Text className="text-[20px] font-bold">
              {owner.timeFrames
                .map((timeFrame) => timeFrame.weekNumber)
                .join(", ")}
            </Text>
          </View>
          <View className="flex flex-row items-center gap-1 mt-3">
            <Image
              className="w-[50%] h-[300px] rounded-md mr-3"
              source={{ uri: owner?.contractImages[0].link }}
            />
          </View>
        </View>
        {/* <View>
          <Text> {owner.property?.propertyName}</Text>
        </View> */}
      </ScrollView>
    </View>
  );
}
