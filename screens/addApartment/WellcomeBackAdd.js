import {
  Entypo,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ScrollView } from "react-native";
import { TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";

export default function WellcomeBackAdd() {
  const navigation = useNavigation();
  return (
    <View className="flex-1">
      <View className="px-4">
        <View className="flex flex-row justify-between mt-10">
          <TouchableOpacity>
            <Text className="border border-gray-400 rounded-3xl px-2 py-1">
              Save & quit
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text className="border border-gray-400 rounded-3xl px-2 py-1">
              You have questions?
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View className="py-6">
            <Text className="text-[25px] font-bold">Welcome back</Text>
            <Text className="text-[25px] px-3 font-bold text-blue-500">
              Bui Tri Thuc
            </Text>
          </View>
          <Text className="font-bold text-xl">
            Complete your apartment addition section
          </Text>
          {/* <View className="py-5 flex flex-col gap-5">
            <TouchableOpacity className="px-3 py-4 flex flex-row items-center border border-gray-300 rounded-md justify-between">
              <View className="flex flex-row gap-3 ">
                <View className="bg-blue-100 px-2 py-2 rounded-md">
                  <Entypo name="home" size={20} />
                </View>
                <Text className="text-[20px] text-gray-700">
                  Apartment for rent
                </Text>
              </View>
              <MaterialIcons size={30} name="navigate-next" />
            </TouchableOpacity>
            <TouchableOpacity className="px-3 py-4 flex flex-row items-center border border-gray-300 rounded-md justify-between">
              <View className="flex flex-row gap-3 items-center">
                <View className="bg-blue-100 px-2 py-2 rounded-md">
                  <Entypo name="home" size={20} />
                </View>
                <Text className="text-[20px] text-gray-700">
                  Apartment for rent...
                </Text>
              </View>
              <MaterialIcons size={30} name="navigate-next" />
            </TouchableOpacity>
          </View> */}
          <View className="px-4 bg-gray-300 w-full h-[1px] my-6"></View>
          <View>
            <Text className="font-bold text-xl">
              Start creating a new apartment rental section
            </Text>
          </View>
          <View className="flex flex-col gap-4 my-3">
            <TouchableOpacity
              onPress={() => navigation.navigate("StartAdd")}
              className="flex flex-row items-center justify-between"
            >
              <View className="flex flex-row items-center gap-5">
                <MaterialCommunityIcons size={30} name="home-plus-outline" />
                <Text className="text-xl font-bold">Create a new rental</Text>
              </View>
              <MaterialIcons size={30} name="navigate-next" />
            </TouchableOpacity>
            {/* <TouchableOpacity className="flex flex-row items-center justify-between">
              <View className="flex flex-row items-center gap-5">
                <MaterialCommunityIcons size={25} name="content-copy" />
                <Text>content-copy</Text>
              </View>
              <MaterialIcons size={30} name="navigate-next" />
            </TouchableOpacity> */}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
