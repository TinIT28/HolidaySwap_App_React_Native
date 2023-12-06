import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ScrollView, Image, TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";

export default function NotificationScreen() {
  const navigation = useNavigation();
  return (
    <View>
      <View className="bg-blue-500 w-full h-[100px]  flex flex-row items-center justify-start px-5">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="close-outline" size={30} color="white" />
        </TouchableOpacity>
        <Text className="ml-8 text-[20px] text-white">Your notification</Text>
      </View>
      <View>
        <ScrollView>
          <View className="flex flex-row items-center w-full py-4 gap-2 px-3">
            <Image
              className="w-[30%] h-[100%]"
              source={require("../../assets/images/landmark.jpg")}
            />
            <View className="w-[70%] flex flex-col gap-2">
              <Text className="text-[18px] font-bold">
                You have booked the apartment
              </Text>
              <Text className="overflow-hidden">
                You have booked Alex's Apartment at 710 Dien Bien Phu, Ho Chi
                Minh City, Vietnam
              </Text>
              <Text>15 Hour ago</Text>
            </View>
          </View>
          <View className="flex flex-row items-center w-full py-4 gap-2 px-3">
            <Image
              className="w-[30%] h-[100%]"
              source={require("../../assets/images/landmark1.jpg")}
            />
            <View className="w-[70%] flex flex-col gap-2">
              <Text className="text-[18px] font-bold">
                You have booked the apartment
              </Text>
              <Text className="overflow-hidden">
                You have booked Alex's Apartment at 710 Dien Bien Phu, Ho Chi
                Minh City, Vietnam
              </Text>
              <Text>15 Hour ago</Text>
            </View>
          </View>
          <View className="flex flex-row items-center w-full py-4 gap-2 px-3">
            <Image
              className="w-[30%] h-[100%]"
              source={require("../../assets/images/landmark2.jpg")}
            />
            <View className="w-[70%] flex flex-col gap-2">
              <Text className="text-[18px] font-bold">
                You have booked the apartment
              </Text>
              <Text className="overflow-hidden">
                You have booked Alex's Apartment at 710 Dien Bien Phu, Ho Chi
                Minh City, Vietnam
              </Text>
              <Text>15 Hour ago</Text>
            </View>
          </View>
          <View className="flex flex-row items-center w-full py-4 gap-2 px-3">
            <Image
              className="w-[30%] h-[100%]"
              source={require("../../assets/images/landmark3.jpg")}
            />
            <View className="w-[70%] flex flex-col gap-2">
              <Text className="text-[18px] font-bold">
                You have booked the apartment
              </Text>
              <Text className="overflow-hidden">
                You have booked Alex's Apartment at 710 Dien Bien Phu, Ho Chi
                Minh City, Vietnam
              </Text>
              <Text>15 Hour ago</Text>
            </View>
          </View>
          <View className="flex flex-row items-center w-full py-4 gap-2 px-3">
            <Image
              className="w-[30%] h-[100%]"
              source={require("../../assets/images/landmark4.jpg")}
            />
            <View className="w-[70%] flex flex-col gap-2">
              <Text className="text-[18px] font-bold">
                You have booked the apartment
              </Text>
              <Text className="overflow-hidden">
                You have booked Alex's Apartment at 710 Dien Bien Phu, Ho Chi
                Minh City, Vietnam
              </Text>
              <Text>15 Hour ago</Text>
            </View>
          </View>
          <View className="flex flex-row items-center w-full py-4 gap-2 px-3">
            <Image
              className="w-[30%] h-[100%]"
              source={require("../../assets/images/landmark5.jpg")}
            />
            <View className="w-[70%] flex flex-col gap-2">
              <Text className="text-[18px] font-bold">
                You have booked the apartment
              </Text>
              <Text className="overflow-hidden">
                You have booked Alex's Apartment at 710 Dien Bien Phu, Ho Chi
                Minh City, Vietnam
              </Text>
              <Text>15 Hour ago</Text>
            </View>
          </View>
          <View className="flex flex-row items-center w-full pt-4 pb-10 gap-2 px-3">
            <Image
              className="w-[30%] h-[100%]"
              source={require("../../assets/images/landmark.jpg")}
            />
            <View className="w-[70%] flex flex-col gap-2">
              <Text className="text-[18px] font-bold">
                You have booked the apartment
              </Text>
              <Text className="overflow-hidden">
                You have booked Alex's Apartment at 710 Dien Bien Phu, Ho Chi
                Minh City, Vietnam
              </Text>
              <Text>15 Hour ago</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
