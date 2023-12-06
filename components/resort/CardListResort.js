import {
  AntDesign,
  EvilIcons,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { Image } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function CardListResort() {
  const navigation = useNavigation();

  return (
    <View className="px-3">
      <View className="py-3">
        <Text>4 Resort</Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.replace("DetailResort")}
        style={styles.shadow}
        className="bg-white flex flex-row mb-5 rounded-md"
      >
        <Image
          className="w-[150px] h-full rounded-tl-md rounded-bl-md"
          source={require("../../assets/images/landmark.jpg")}
        />
        <View className="flex flex-1 flex-col px-2">
          <Text className="text-[15px] font-bold">
            Landmark 81 - Luxury Resort - Stay in the Top of Vietnam
          </Text>
          <View className="flex flex-row gap-1 py-1 items-center">
            <AntDesign name="star" color="orange" />
            <AntDesign name="star" color="orange" />
            <AntDesign name="star" color="orange" />
            <AntDesign name="star" color="orange" />
            <AntDesign name="star" color="orange" />
            <Text className="text-[12px]">4 Reviews</Text>
          </View>
          <View>
            <View className="flex flex-row py-1">
              <EvilIcons name="location" size={25} color="gray" />
              <Text className="text-[13px] pr-5">
                Binh Thanh district, 4km from the center
              </Text>
            </View>
          </View>
          <View className="mb-1">
            <Text>10 Property</Text>
          </View>

          <TouchableOpacity className="w-full  bg-blue-500  py-2 rounded-md mb-2">
            <Text className="text-white text-center font-semibold">
              Booking
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.shadow}
        className="bg-white flex flex-row mb-5 rounded-md "
      >
        <Image
          className="w-[150px] h-full rounded-tl-md rounded-bl-md"
          source={require("../../assets/images/buivien.jpg")}
        />
        <View className="flex flex-1 flex-col px-2 ">
          <Text className="text-[15px]   font-bold">
            Bliss Boutique Saigon - Bui Vien Walking Street
          </Text>
          <View className="flex flex-row gap-1 py-1 items-center">
            <AntDesign name="star" color="orange" />
            <AntDesign name="star" color="orange" />
            <AntDesign name="star" color="orange" />
            <AntDesign name="star" color="orange" />
            <AntDesign name="star" color="orange" />
            <Text className="text-[12px]">4 Reviews</Text>
          </View>
          <View>
            <View className="flex flex-row py-1 ">
              <EvilIcons name="location" size={25} color="gray" />
              <Text className="text-[13px] pr-5">
                Binh Thanh district, 4km from the center
              </Text>
            </View>
          </View>
          <View className="mb-1">
            <Text>5 Property</Text>
          </View>

          <TouchableOpacity className="w-full flex flex-row justify-center items-center bg-blue-500  py-2 rounded-md mb-2">
            <Text className="text-white font-semibold">Booking</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.shadow}
        className="bg-white flex flex-row  rounded-md mb-5"
      >
        <Image
          className="w-[150px] h-full rounded-tl-md rounded-bl-md"
          source={require("../../assets/images/haanresort.jpg")}
        />
        <View className="flex flex-1 flex-col px-2">
          <Text className="text-[15px]   font-bold">HAAN Resort & Golf</Text>
          <View className="flex flex-row gap-1 py-1 items-center">
            <AntDesign name="star" color="orange" />
            <AntDesign name="star" color="orange" />
            <AntDesign name="star" color="orange" />
            <AntDesign name="star" color="orange" />
            <AntDesign name="star" color="orange" />
            <Text className="text-[12px]">4 Reviews</Text>
          </View>
          <View>
            <View className="flex flex-row py-1 ">
              <EvilIcons name="location" size={25} color="gray" />
              <Text className="text-[13px] pr-5">
                Binh Thanh district, 4km from the center
              </Text>
            </View>
          </View>
          <View className="mb-1">
            <Text>11 Property</Text>
          </View>

          <TouchableOpacity className="w-full flex flex-row justify-center items-center bg-blue-500  py-2 rounded-md mb-2">
            <Text className="text-white font-semibold">Booking</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.shadow}
        className="bg-white flex flex-row  rounded-md mb-5 "
      >
        <Image
          className="w-[150px] h-full rounded-tl-md rounded-bl-md"
          source={require("../../assets/images/seahorse.jpg")}
        />
        <View className="flex flex-1 flex-col px-2">
          <Text className="text-[15px]   font-bold">Seahorse Resort</Text>
          <View className="flex flex-row gap-1 py-1 items-center">
            <AntDesign name="star" color="orange" />
            <AntDesign name="star" color="orange" />
            <AntDesign name="star" color="orange" />
            <AntDesign name="star" color="orange" />
            <AntDesign name="star" color="orange" />
            <Text className="text-[12px]">4 Reviews</Text>
          </View>
          <View>
            <View className="flex flex-row py-1 ">
              <EvilIcons name="location" size={25} color="gray" />
              <Text className="text-[13px] pr-5">
                Binh Thanh district, 4km from the center
              </Text>
            </View>
          </View>
          <View className="mb-1">
            <Text>21 Property</Text>
          </View>

          <TouchableOpacity className="w-full flex flex-row justify-center items-center bg-blue-500  py-2 rounded-md mb-2">
            <Text className="text-white font-semibold">Booking</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
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
