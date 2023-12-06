import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { ScrollView } from "react-native";
import { View } from "react-native";
import { TextInput } from "react-native";

export default function HelpCenter() {
  const navigation = useNavigation();
  return (
    <View className="bg-white flex-1">
      <View className="bg-blue-500 w-full h-[100px]  flex flex-row items-center justify-start px-5">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={30} color="white" />
        </TouchableOpacity>
        <Text className="ml-8 text-[20px] text-white">Help center</Text>
      </View>
      <ScrollView>
        <View className="px-4">
          <View className="flex flex-col items-center gap-10  mt-3 mb-10">
            <Text className="text-[30px] font-bold">Support</Text>
            <Image
              className="w-40 h-40"
              source={require("../../assets/images/information.png")}
            />
          </View>
          <View className="border border-blue-500 rounded-lg px-4 py-4">
            <View>
              <Text className="py-3">Your name*</Text>
              <TextInput className="bg-blue-100 rounded-3xl border py-2 px-2 border-blue-500 " />
            </View>
            <View>
              <Text className="py-3">Email*</Text>
              <TextInput className="bg-blue-100 rounded-3xl border py-2 px-2 border-blue-500 " />
            </View>
            <View>
              <Text className="py-3">Phone number*</Text>
              <TextInput className="bg-blue-100 rounded-3xl border py-2 px-2 border-blue-500 " />
            </View>
            <View>
              <Text className="py-3">Problem description*</Text>
              <TextInput
                multiline
                className="bg-blue-100 rounded-3xl border px-2 pb-[100px] pt-2  border-blue-500 "
              />
            </View>
          </View>
          <TouchableOpacity
            className="border-[2px] border-blue-500 py-5 my-5"
            onPress={() => navigation.navigate("ChatItemScreen")}
          >
            <Text className="text-center text-blue-500 font-bold">
              Or can you chat now
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
