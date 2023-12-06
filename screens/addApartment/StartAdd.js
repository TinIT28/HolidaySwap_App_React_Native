import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";

export default function StartAdd() {
  const navigation = useNavigation();
  return (
    <View className="bg-white flex-1">
      <View className="bg-white w-full h-[100px]  flex flex-row items-center justify-start px-4">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={30} />
        </TouchableOpacity>
      </View>
      <View className="px-4">
        <Text className="text-[25px] font-bold">
          Getting started on HolidaySwap is easy{" "}
        </Text>
      </View>

      <ScrollView>
        <View className=" mb-4">
          <View className="flex flex-row items-center px-4 my-5">
            <View className="flex flex-row gap-2">
              <Text className="font-bold text-xl">1</Text>
              <View className="w-[76%]">
                <Text className="font-bold mb-1 text-lg">
                  Share information about your apartment with us
                </Text>
                <Text>
                  Share some basic information, like the location of your
                  apartment, the number of guests who can stay there...
                </Text>
              </View>
            </View>
            <Image
              className="w-14 h-14"
              source={require("../../assets/images/bedAdd.png")}
            />
          </View>
          <View className="bg-gray-400 w-full h-[1px] my-10"></View>
          <View className="flex flex-row items-center px-4">
            <View className="flex flex-row gap-2">
              <Text className="font-bold text-xl">2</Text>
              <View className="w-[76%]">
                <Text className="font-bold mb-1 text-lg">
                  Make your rental apartment stand out
                </Text>
                <Text>
                  Add 5 or more photos along with a title and description -
                  we'll help you do it
                </Text>
              </View>
            </View>
            <Image
              className="w-14 h-14"
              source={require("../../assets/images/apartmentAdd.png")}
            />
          </View>
          <View className="bg-gray-400 w-full h-[1px] my-10"></View>
          <View className="flex flex-row items-center px-4">
            <View className="flex flex-row gap-2">
              <Text className="font-bold text-xl">3</Text>
              <View className="w-[76%]">
                <Text className="font-bold mb-1 text-lg">
                  Complete and post apartments for rent
                </Text>
                <Text>
                  Choose whether you want to start with experienced hospitality,
                  choose a starting price or list an apartment for rent
                </Text>
              </View>
            </View>
            <Image
              className="w-14 h-14"
              source={require("../../assets/images/apartmentAdd.png")}
            />
          </View>
        </View>
      </ScrollView>
      <View className="bg-white w-full h-[13%] border-t border-gray-300 flex flex-col items-center justify-center">
        <TouchableOpacity
          onPress={() => navigation.navigate("StepAdd1")}
          className="bg-blue-500 rounded-md px-20"
        >
          <View className="flex flex-row items-center gap-1">
            <MaterialCommunityIcons
              name="home-plus-outline"
              color="#ffffff"
              size={30}
            />
            <Text className="text-center text-white font-bold py-4 text-lg">
              Start
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
