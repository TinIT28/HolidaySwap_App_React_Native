import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";

export default function GuestToMember() {
  const navigation = useNavigation();
  return (
    <View className="flex-1">
      <View className="bg-blue-500 w-full h-[100px]  flex flex-row items-center justify-start px-5">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={30} color="white" />
        </TouchableOpacity>
        <Text className="ml-8 text-[20px] text-white">Upgrade account</Text>
      </View>
      <ScrollView>
        <View className="px-4 py-4">
          <View className="flex flex-row gap-4 mb-5">
            <Image
              className="w-[40px] h-[40px]"
              source={require("../../assets/images/easy.png")}
            />
            <View className="w-[80%]">
              <Text className="text-[20px] font-bold">Easy access*</Text>
              <Text>
                Upgrade your account to become a HolidaySwap member for easy
                access to exciting vacations and apartments
              </Text>
            </View>
          </View>
          <View className="flex flex-row gap-4 mb-5">
            <Image
              className="w-[40px] h-[40px]"
              source={require("../../assets/images/chat.png")}
            />
            <View className="w-[80%]">
              <Text className="text-[20px] font-bold">
                Communicate quickly*
              </Text>
              <Text>
                Upgrade your account to experience an exchange application
                quickly
              </Text>
            </View>
          </View>
          <View className="flex flex-row gap-4 mb-5">
            <Image
              className="w-[40px] h-[40px]"
              source={require("../../assets/images/convenience.png")}
            />
            <View className="w-[80%]">
              <Text className="text-[20px] font-bold">
                Fast and convenient*
              </Text>
              <Text>
                Quickly become a member to experience full features in a
                convenient way such as renting an apartment anytime, anywhere...
              </Text>
            </View>
          </View>
          <View className="flex flex-row gap-4 ">
            <Image
              className="w-[40px] h-[40px]"
              source={require("../../assets/images/partner.png")}
            />
            <View className="w-[80%]">
              <Text className="text-[20px] font-bold">Become a partner*</Text>
              <Text>
                To become a partner to exchange apartments on our application,
                you first need to upgrade your account and become an owner.
              </Text>
            </View>
          </View>
        </View>
        <View className="px-4">
          <TouchableOpacity>
            <Text className="text-blue-500">Terms and condition*</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View className="bg-white w-full h-[13%] border-t border-gray-300 flex flex-col items-center justify-center">
        <TouchableOpacity
          onPress={() => navigation.navigate("Landing")}
          className="bg-blue-500 rounded-md px-8 "
        >
          <Text className="text-center text-white font-bold py-4">
            Upgrade now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
