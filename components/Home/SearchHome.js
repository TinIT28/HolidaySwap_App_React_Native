import { AntDesign, Octicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { View } from "react-native-animatable";
import { Button } from "react-native-paper";

export default function SearchHome(props) {
  const navigation = useNavigation();
  return (
    <View className="pt-6 pb-8 px-4 bg-white">
      <View
        style={styles.shadow}
        className=" w-full bg-white rounded-3xl py-2 px-4"
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("SearchApartment")}
          className="flex flex-row items-center justify-between gap-3"
        >
          <AntDesign name="search1" size={25} />
          <View>
            <Text className="text-[15px] font-bold ">
              Where do you want to go?
            </Text>
            <Text className="text-gray-500 text-center">
              Any location, any week - More...
            </Text>
          </View>
          <View className="border border-gray-300 py-2 px-2 rounded-full">
            <Octicons name="multi-select" size={20} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
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
