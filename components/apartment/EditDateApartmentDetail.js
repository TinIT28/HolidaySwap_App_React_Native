import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { View } from "react-native-animatable";
import { BottomSheet } from "react-native-btr";
import { AntDesign, EvilIcons, FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native";
import { ScrollView } from "react-native";
import { Image } from "react-native";
import InputDateComponents from "../dateInput/InputDateComponents";
import { format } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import { getDateRangeBooking } from "../../redux/actions/dateRangeActions";

const initialDateRange = {
  startDate: new Date(),
  endDate: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
};

export default function EditDateApartmentDetail({
  dateRange,
  handleChangeDateRange,
}) {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [selectedLocation, setSelectedLocation] = useState(null);
  // const [dateRangeBooking, setDateRangeBooking] = useState({
  //   startDate: dateRange?.startTime,
  //   endDate: dateRange?.endTime,
  // });

  const { dateRangeBooking } = useSelector((state) => state.dateRangeBooking);
  const dispatch = useDispatch();
  // const handleDateRange = (value) => {
  //   dispatch(getDateRangeBooking(value));
  // };

  const toggleBottomNavigationView = () => {
    setVisible(!visible);
  };

  return (
    <View className="">
      <View>
        <TouchableOpacity
          onPress={() => toggleBottomNavigationView()}
          className=""
        >
          <Text className="font-bold underline px-4 w-[100%]">
            {dateRangeBooking
              ? `${format(
                  new Date(dateRangeBooking.startTimeBooking),
                  "E, dd MMM"
                )} - ${format(
                  new Date(dateRangeBooking.endTimeBooking),
                  "E, dd MMM"
                )}`
              : "Time"}
          </Text>
        </TouchableOpacity>
      </View>
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
            <View className="flex-1 px-4">
              <InputDateComponents dateRange={dateRangeBooking} />
            </View>

            <View className="pb-4 px-4  flex flex-row justify-end bg-white shadow-md">
              <TouchableOpacity
                onPress={() => setVisible(!visible)}
                className="w-[40%] p-4 bg-sky-500 rounded-md"
              >
                <Text className="text-white text-lg text-center">Apply</Text>
              </TouchableOpacity>
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
    height: "90%",
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
});
