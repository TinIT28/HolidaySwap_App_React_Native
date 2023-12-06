import React from "react";
import { StyleSheet, Text } from "react-native";
import { Image } from "react-native";
import { View } from "react-native-animatable";

export default function CardExplore() {
  return (
    <View className="px-3 py-5  ">
      <View className="flex flex-row w-full justify-between ">
        <View
          style={styles.shadow}
          className="bg-white w-[48%] h-auto rounded-lg "
        >
          <Image
            source={require("../../../assets/images/explore1.jpg")}
            className="w-full h-48 rounded-t-lg"
          />
          <View className="px-1 py-2">
            <Text className="font-bold text-[18px]">
              Discover year-end deals
            </Text>
            <Text className="text-[14px]">
              Save from 15% to destinations across Vietnam
            </Text>
          </View>
        </View>
        <View
          style={styles.shadow}
          className="bg-white w-[48%] h-auto rounded-lg "
        >
          <Image
            source={require("../../../assets/images/explore2.jpg")}
            className="w-full h-48 rounded-t-lg"
          />
          <View className="px-1 py-2">
            <Text className="font-bold text-[18px]">Long stay</Text>
            <Text className="text-[14px]">
              Comfortable stay with stays of over 30 nights
            </Text>
          </View>
        </View>
      </View>
      <View className="flex flex-row w-full justify-between mt-4 ">
        <View
          style={styles.shadow}
          className="bg-white w-[48%] h-auto rounded-lg "
        >
          <Image
            source={require("../../../assets/images/explore3.jpg")}
            className="w-full h-48 rounded-t-lg"
          />
          <View className="px-1 py-2">
            <Text className="font-bold text-[18px]">
              Discover year-end deals
            </Text>
            <Text className="text-[14px]">
              Save from 15% to destinations across Vietnam
            </Text>
          </View>
        </View>
        <View
          style={styles.shadow}
          className="bg-white w-[48%] h-auto rounded-lg "
        >
          <Image
            source={require("../../../assets/images/explore4.jpg")}
            className="w-full h-48 rounded-t-lg"
          />
          <View className="px-1 py-2">
            <Text className="font-bold text-[18px]">Long stay</Text>
            <Text className="text-[14px]">
              Comfortable stay with stays of over 30 nights
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
});
