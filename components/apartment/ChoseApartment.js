import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { View } from "react-native-animatable";
import { BottomSheet } from "react-native-btr";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import EditDateApartmentDetail from "./EditDateApartmentDetail";

export default function ChoseApartment({ data }) {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
  const [apartmentDetail, setApartmentDetail] = useState(data);
  const [dateRange, setDateRange] = useState({
    startDate: data?.availableTime?.startTime,
    endDate: data?.availableTime?.endTime,
  });

  const toggleBottomNavigationView = () => {
    setVisible(!visible);
  };

  const handleChangeDateRange = (value) => {
    setDateRange(value);
  };

  return (
    <View className="">
      <TouchableOpacity onPress={toggleBottomNavigationView}>
        <View className="border border-blue-300 w-full my-3 rounded-sm ">
          <Text className="text-center py-4 text-blue-700 font-bold">BOOK</Text>
        </View>
      </TouchableOpacity>
      <BottomSheet
        visible={visible}
        onBackButtonPress={toggleBottomNavigationView}
        onBackdropPress={toggleBottomNavigationView}
      >
        <View style={styles.bottomNavigationView}>
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flex: 1, flexDirection: "row" }}>
              <View className="w-full flex flex-row justify-around items-center ">
                <View className="flex flex-col items-center gap-1">
                  <View className="flex flex-row items-center gap-1">
                    <Text className="text-[35px] font-bold">
                      {apartmentDetail?.availableTime?.pricePerNight}
                    </Text>
                    <View>
                      <FontAwesome5 name="coins" size={25} color="orange" />
                    </View>
                    <Text className="text-[35px] font-bold">/Night</Text>
                  </View>
                  {/* <Text>{apartmentDetail?.availableTime?.startTime}</Text> */}
                  <EditDateApartmentDetail
                    dateRange={apartmentDetail?.availableTime}
                    handleChangeDateRange={handleChangeDateRange}
                  />
                </View>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("InputInfomationScreen", {
                      apartmentBooking: apartmentDetail,
                    })
                  }
                  className="bg-blue-500 px-10 mx-4 rounded-md "
                >
                  <Text className="p-3 text-white font-bold text-[23px]">
                    Book
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  bottomNavigationView: {
    backgroundColor: "#fff",
    width: "100%",
    height: "13%",
  },
});
