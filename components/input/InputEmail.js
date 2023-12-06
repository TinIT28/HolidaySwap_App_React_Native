import React from "react";
import { TextInput } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";

export default function InputEmail({ email, onChange }) {
  return (
    <View>
      <Text className="mt-10 mb-4 text-lg ">Email:</Text>
      <TextInput
        keyboardType="email-address"
        value={email}
        onChangeText={onChange}
        className=" p-[10px] opacity-75 w-[317px] h-[58px] bg-[#cfcfd1] mb-[] rounded-3xl flex justify-center "
        placeholder="Enter your email address"
      />
    </View>
  );
}
