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

const initialDateRange = {
  startDate: new Date(),
  endDate: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
};

export default function EditPublicTime() {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [dateRange, setDateRange] = useState(initialDateRange);

  const handleDateRange = (value) => {
    setDateRange(value);
  };

  const toggleBottomNavigationView = () => {
    setVisible(!visible);
  };

  return (
    <View className="">
      <View>
        <TouchableOpacity
          onPress={() => toggleBottomNavigationView()}
          className="py-4 flex flex-row items-center justify-between"
        >
          <View className="">
            <Text className="font-bold">Public Time: </Text>
            <Text className="text-[20px]">
              {dateRange
                ? `${format(
                    new Date(dateRange.startDate),
                    "E, dd MMM"
                  )} - ${format(new Date(dateRange.endDate), "E, dd MMM")}`
                : "Time"}
            </Text>
          </View>
          <TouchableOpacity onPress={() => toggleBottomNavigationView()}>
            <AntDesign size={25} color="#4180F4" name="edit" />
          </TouchableOpacity>
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
              <InputDateComponents handleDateRange={handleDateRange} />
            </View>

            <View className="pb-4 px-4">
              <TouchableOpacity
                onPress={() => setVisible(!visible)}
                className="w-full p-4 bg-sky-500 rounded-md"
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
    height: "80%",
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
