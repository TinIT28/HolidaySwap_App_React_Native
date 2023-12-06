import React from "react";
import { TextInput, TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import BtnLoginGoogle from "../../components/button/BtnLoginGoogle";
import InputEmail from "../../components/input/InputEmail";
import { Image } from "react-native";

export default function CreateAccountScreen({ navigation }) {
  return (
    <View className="flex-col bg-blue-500 flex-1">
      <View className="w-full h-auto justify-center items-center flex ">
        <View className=" pt-[90px] pb-[90px] flex justify-center items-center">
          <Text className="text-white text-2xl">Create Account</Text>
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
          <View className="flex items-center">
            <TouchableOpacity className=" items-center justify-center border-[1px] border-collapse border-black w-[317] h-[58] rounded-3xl mb-[20px]">
              <View className="flex-row items-center">
                <Image
                  className="-ml-[22px]"
                  source={require("../../assets/images/Google.png")}
                />
                <Text className="text-[16px] font-medium">
                  Continue with Google
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity className=" items-center justify-center border-[1px] border-collapse border-black w-[317] h-[58] rounded-3xl mb-[20px]">
              <View className="flex-row items-center ">
                <Image
                  className="mr-[8px]"
                  source={require("../../assets/images/Facebook.png")}
                />
                <Text className="text-[16px] font-medium">
                  Continue with Facebook
                </Text>
              </View>
            </TouchableOpacity>
            <View className="flex-row mt-5">
              <Text style={{ fontSize: 16 }}>Dont’t have an account?</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("SignInScreen")}
              >
                <Text style={{ fontSize: 16, color: "#2196F3", marginLeft: 3 }}>
                  Sign In
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
