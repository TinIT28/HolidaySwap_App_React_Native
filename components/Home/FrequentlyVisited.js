import { useNavigation } from "@react-navigation/core";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { View, Text } from "react-native";
import * as Icon from "react-native-feather";

const FrequentlyVisited = () => {
  const navigation = useNavigation();

  return (
    <View className="flex flex-row">
      <TouchableOpacity
        className="px-2 "
        onPress={() => navigation.navigate("ResortList")}
      >
        <View className="mt-3">
          <View className="flex">
            <Image
              source={require("../../assets/images/hanoi.jpg")}
              className="h-40 w-44 rounded-lg"
            />
            <Text className="text-gray-800 text-lg font-bold">Ha Noi</Text>
            <View className="flex-row gap-1">
              <Icon.MapPin stroke={"#AAAAAA"} strokeWidth={2} />
              <Text className="text-gray-400 text-sm">Ha Noi, Viet Nam</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        className="px-2  "
        onPress={() => navigation.navigate("ResortList")}
      >
        <View className="mt-3">
          <View className="flex">
            <Image
              source={require("../../assets/images/vinhhalong.jpg")}
              className="h-40 w-44 rounded-lg"
            />
            <Text className="text-gray-800 text-lg font-bold">
              Vinh Ha Long
            </Text>
            <View className="flex-row gap-2">
              <Icon.MapPin stroke={"#AAAAAA"} strokeWidth={2} />
              <Text className="text-gray-400 text-sm">Quan Ninh, Viet Nam</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        className="px-2  "
        onPress={() => navigation.navigate("ResortList")}
      >
        <View className="mt-3">
          <View className="flex">
            <Image
              source={require("../../assets/images/daklak.jpg")}
              className="h-40 w-44 rounded-lg"
            />
            <Text className="text-gray-800 text-lg font-bold">
              Buon Ma Thuot
            </Text>
            <View className="flex-row gap-2">
              <Icon.MapPin stroke={"#AAAAAA"} strokeWidth={2} />
              <Text className="text-gray-400 text-sm">Dak Lak, Viet Nam</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default FrequentlyVisited;
