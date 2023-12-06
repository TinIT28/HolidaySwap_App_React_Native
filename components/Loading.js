import React from "react";
import { ActivityIndicator } from "react-native";
import { View } from "react-native";

const Loading = () => {
  return (
    <View className="flex flex-1 flex-row items-center justify-center">
      <ActivityIndicator size="large" />
    </View>
  );
};

export default Loading;
