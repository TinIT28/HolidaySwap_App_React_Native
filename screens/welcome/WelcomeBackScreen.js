import React from "react";
import { TextInput, TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import BtnLoginGoogle from "../../components/button/BtnLoginGoogle";
import InputEmail from "../../components/input/InputEmail";
import { ScrollView } from "react-native";

export default function WelcomeBackScreen({ navigation }) {
  return (
    <View className="bg-white flex-1">
      <ScrollView>
        <View className="flex-col bg-blue-500 flex-1">
          <View className="w-full h-auto justify-center items-center flex ">
            <View className=" pt-[90px] pb-[90px] flex justify-center items-center">
              <Text className="text-white text-2xl"> Hi, Welcome Back!</Text>
              <Text className="text-white">HolidaySwap</Text>
            </View>
          </View>
          <View className="bg-white w-full h-full rounded-t-[35px] flex items-center ">
            <View>
              <InputEmail />
              <TouchableOpacity
                className="w-[317px] h-[58px] bg-[#2196F3] mb-[13px] rounded-3xl flex justify-center items-center"
                onPress={() => navigation.replace("SignInScreen")}
              >
                <Text className="text-white text-lg font-bold">
                  Continue with email
                </Text>
              </TouchableOpacity>
              <View className="flex-row justify-center items-center mb-[20px]">
                <View className="w-[93px] h-[1px] bg-black"></View>
                <Text className="p-3">Or continue with</Text>
                <View className="w-[93px] h-[1px] bg-black"></View>
              </View>
              <BtnLoginGoogle />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
