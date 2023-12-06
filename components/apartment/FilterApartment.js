import { AntDesign, Fontisto, Octicons } from "@expo/vector-icons";
import React from "react";
import { Text, TextInput, TouchableOpacity } from "react-native";
import { View } from "react-native";
import FilterSelect from "./FilterSelect";

export default function FilterApartment() {
  return (
    <View>
      <View className="flex flex-row w-full gap-2 justify-between items-center">
        <View className="flex-row items-center w-[84%] py-1 rounded-2xl  border border-blue-200 bg-blue-100">
          <View className="border-r px-4 border-blue-400">
            <AntDesign color="#0073CF" name="search1" size={20} />
          </View>
          <TextInput className="w-[100%]" />
        </View>
        <View className="flex flex-row">
          <TouchableOpacity>
            <FilterSelect />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
