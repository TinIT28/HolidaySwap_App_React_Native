import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function InputPassword({ text, password, onChange }) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View>
      <Text className="mb-4 text-lg">{text}</Text>
      <Text className=" mb-4 text-lg ">Password:</Text>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TextInput
          className=" p-[10px] opacity-75 w-[317px] h-[58px] bg-[#cfcfd1] mb-[15px] rounded-3xl flex justify-center "
          placeholder="Enter your password"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={onChange}
        />
        <TouchableOpacity onPress={togglePasswordVisibility}>
          <Icon
            name={showPassword ? "eye" : "eye-slash"}
            size={20}
            color="gray"
            style={{ marginLeft: -30, marginBottom: 14 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default InputPassword;
