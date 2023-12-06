import React from "react";
import { View, TextInput } from "react-native";
import * as Icon from "react-native-feather";

const SearchBar = () => {
  return (
    <View className="flex-row items-center space-x-2  mt-4">
      <View className="flex-row flex-1 items-center p-3  border border-gray-300 bg-slate-100">
        <Icon.Search height={25} width={25} stroke="gray" />
        <TextInput
          placeholder="Search"
          className="ml-2 flex-1 text-slate-600"
        />
        <View className="flex-row items-center space-x-1 bottom-0 border-l-2 pl-2 border-l-gray-300">
          <Icon.Sliders height={20} width={20} stroke="gray" />
        </View>
      </View>
    </View>
  );
};

export default SearchBar;
