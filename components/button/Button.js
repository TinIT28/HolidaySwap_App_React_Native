import React from "react";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native";

const Button = ({ text, onPress, disabled, style }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={style}
      className="px-5 py-2 rounded-md bg-button flex my-4 mx-4"
    >
      <Text className="text-center justify-center font-bold text-white text-xl">
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
