import React from "react";
import { View } from "react-native-animatable";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function SearchSession() {
  const navigation = useNavigation();
  return (
    <ScrollView className="px-4 py-4  bg-gray-100">
      <View className="w-full">
        <View className=" bg-gray-50">
          <View className="bg-white border-[4px] border-orange-300 rounded-lg ">
            <View className="flex flex-row items-center w-full gap-4 justify-start px-3 py-3">
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <AntDesign name="arrowleft" size={25} color="#AAAAAA" />
              </TouchableOpacity>

              <View className="flex flex-row items-center -ml-[40px]">
                <Text>Ho Chi Minh City - </Text>
                <Text> 18 August - 17 August</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
