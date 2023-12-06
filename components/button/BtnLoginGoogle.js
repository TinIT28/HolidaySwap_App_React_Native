import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text } from "react-native";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { View } from "react-native";

export default function BtnLoginGoogle() {
  const navigation = useNavigation();

  return (
    <View className="flex items-center">
      <TouchableOpacity className=" items-center justify-center border-[1px] border-collapse border-black w-[317] h-[58] rounded-3xl mb-[20px]">
        <View className="flex-row items-center">
          <Image
            className="-ml-[22px]"
            source={require("../../assets/images/Google.png")}
          />
          <Text className="text-[16px] font-medium">Continue with Google</Text>
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
      <View className="flex-row py-3">
        <Text style={{ fontSize: 16 }}>Dont’t have an account?</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("CreateAccountScreen")}
        >
          <Text
            onPress={() => navigation.navigate("SignUp")}
            style={{ fontSize: 16, color: "#2196F3", marginLeft: 3 }}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
