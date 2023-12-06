import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Input = ({
  type,
  label,
  onChangeText,
  value,
  placeholder,
  secure,
  onFocus,
  keyboardAppearance,
}) => {
  return (
    <View className="py-2">
      <Text className="font-medium text-base mx-4 my-2 text-black">
        {label}
      </Text>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        onFocus={onFocus}
        keykeyboardType={type}
        className="p-4 bg-slate-200 rounded-full mx-4 text-base"
        placeholderTextColor="#BDBDBD"
        secureTextEntry={secure}
        keyboardAppearance={keyboardAppearance}
      />
    </View>
  );
};

export default Input;
