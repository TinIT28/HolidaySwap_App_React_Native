import { Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ScrollView } from "react-native";
import { TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { View } from "react-native-animatable";

export default function Rating() {
  const navigation = useNavigation();
  return (
    <View>
      <View className="bg-blue-500 w-full h-[100px]  flex flex-row items-center justify-start px-5">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={30} color="white" />
        </TouchableOpacity>
        <Text className="ml-8 text-[20px] text-white">Your rating</Text>
      </View>
      <ScrollView>
        <View className="px-4 mt-3">
          <View className="flex flex-row gap-3">
            <Feather color="black" size={20} name="message-circle" />
            <View>
              <Text className="font-bold text-[15px]">
                You have no reviews yet.
              </Text>
              <Text className="w-[35%] py-3">
                After you stay at an apartment. You will be invited to write a
                review. This allows us to ensure that reviews are written by
                customers themselves. Similar to you
              </Text>
            </View>
          </View>
          <View className="flex flex-row items-center justify-center py-3">
            <TouchableOpacity className="border border-blue-500 py-3 w-[70%]">
              <Text className="text-center text-blue-600 font-bold">
                Rent an apartment for review
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
