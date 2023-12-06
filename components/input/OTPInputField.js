import React, { useEffect, useRef, useState } from "react";
import { Pressable } from "react-native";
import { TextInput } from "react-native";
import { View, Text } from "react-native";

const OTPInputField = ({ setPinReady, code, setCode, maxLength }) => {
  const textInputRef = useRef(null);
  const codeDigitsArray = new Array(maxLength).fill(0);

  const [inputContainerIsFocused, setInputContainerIsFocused] = useState(false);

  const handleOnBlur = () => {
    setInputContainerIsFocused(false);
  };

  const handleOnPress = () => {
    setInputContainerIsFocused(true);
    textInputRef?.current?.focus();
  };

  useEffect(() => {
    setPinReady(code.length === maxLength);
    return () => setPinReady(false);
  }, [code]);

  const toCodeDigitInput = (_value, index) => {
    const emptyInputChar = " ";
    const digit = code[index] || emptyInputChar;

    return (
      <View
        className="border-[#407cd7] min-w-[15%] border-2 rounded-full p-2"
        key={index}
      >
        <Text className="text-2xl font-bold text-center text-black">
          {digit}
        </Text>
      </View>
    );
  };
  return (
    <View className="justify-center items-center mx-8">
      <Pressable
        className="w-[70%] flex-row justify-between"
        onPress={handleOnPress}
      >
        {codeDigitsArray.map(toCodeDigitInput)}
      </Pressable>
      <TextInput
        className="absolute w-[1px] h-[1px] opacity-0"
        value={code}
        onChangeText={setCode}
        maxLength={maxLength}
        keyboardType="number-pad"
        returnKeyType="done"
        textContentType="oneTimeCode"
        ref={textInputRef}
        onBlur={handleOnBlur}
      />
    </View>
  );
};

export default OTPInputField;
