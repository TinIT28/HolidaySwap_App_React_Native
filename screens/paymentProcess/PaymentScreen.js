import { FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, ScrollView, TouchableOpacity } from "react-native";
import { View } from "react-native-animatable";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function PaymentScreen() {
  const navigation = useNavigation();
  return (
    <View className="flex-1">
      <View className="bg-blue-500 w-full h-[100px]  flex flex-row items-center justify-start px-5">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={30} color="white" />
        </TouchableOpacity>
        <Text className="ml-8 text-[20px] text-white">
          Booking apartment detail
        </Text>
      </View>
      <ScrollView>
        <View className="border-b border-gray-300 ">
          <View className="flex flex-row px-3 w-[90%] py-3">
            <MaterialCommunityIcons
              size={20}
              color="blue"
              name="credit-card-off-outline"
            />
            <View className="ml-2">
              <Text className="text-[15px] font-bold mb-1">
                Reservations do not require a credit card
              </Text>
              <Text>
                No credit card required for this booking. You will pay with
                points on our app
              </Text>
            </View>
          </View>
        </View>
        <View className="mx-4  border border-gray-300 rounded-lg mt-3">
          <View className="px-3">
            <View>
              <Text className="text-[20px] font-bold">
                Alex's Apartment with Sky view - Landmark 81 Tower
              </Text>
            </View>
            <Text className="py-3">
              712 Dien Bien Phu, Binh Thanh distric, Ho Chi Minh city, Vietnam
            </Text>

            <View className="bg-gray-300 w-full h-[1px] my-3"></View>
            <View className=" flex flex-row w-full justify-between mb-3">
              <View className="border-r border-gray-300 w-[48%]">
                <Text>Check in</Text>
                <Text className="text-[15px] font-bold">
                  Wed, 23th August, 2023
                </Text>
              </View>
              <View className="w-[48%]">
                <Text>Check out</Text>

                <Text className="text-[15px] font-bold">
                  Fri, 28th October, 2023
                </Text>
              </View>
            </View>
            <View className="bg-gray-300 w-full h-[1px] mb-3"></View>
            <View className="mb-3">
              <Text>Your chose</Text>
              <Text className="text-[15px] font-bold">5 night</Text>
              <Text>1x apartment, 1 bedroom</Text>
              <Text>2 audulst</Text>
            </View>
          </View>
        </View>
        <View className="mx-4  border border-gray-300 rounded-lg mt-3">
          <View className="px-3 py-3">
            <View className="flex flex-row items-center justify-between">
              <Text className="text-[20px] font-bold">Total</Text>
              <View className="">
                <View className="flex flex-row items-center gap-1 justify-end">
                  <Text className=" font-bold text-[25px]">25.000</Text>
                  <FontAwesome5 name="coins" size={20} color="orange" />
                </View>
                <TouchableOpacity>
                  <Text className="underline font-bold">
                    23nd - 28nd August
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View className="bg-gray-300 w-full h-[1px] my-3"></View>
            <View>
              <Text className="font-bold">Infoamtion about price</Text>
            </View>
          </View>
        </View>
        <View className=" my-3 w-full bg-gray-300 h-[1px]"></View>
        <View className="px-4">
          <Text className="font-bold text-[15px]">
            Review the general rules
          </Text>
          <Text>Alex's Apartment with Sky View - Landmark 81 Tower</Text>
          <Text className="py-2">
            The apartment owner wants you to agree to these rules
          </Text>
          <Text>- No smoking</Text>
          <Text>- No pets</Text>
          <Text>- No party, event</Text>
          <Text>Silent time from 23:00 - 06:00</Text>
          <Text className="py-3">
            Khi tiếp tục với các bước tiếp theo bạn sẽ đồng ý với những quy tắc
            này
          </Text>
        </View>
        <View className=" my-3 w-full bg-gray-300 h-[1px]"></View>
        <View className="px-4">
          <Text className="font-bold text-[20px]">Hight point</Text>
          <View className="flex flex-row items-center gap-3">
            <MaterialCommunityIcons
              name="star-shooting-outline"
              size={20}
              color="gray"
            />
            <Text>Clean, airy, fresh air</Text>
          </View>
        </View>
        <View className="bg-gray-300 w-full h-[1px] my-3"></View>
        <Text className="px-4 text-[20px] font-bold">Your chose</Text>
        <View className="bg-gray-300 w-full h-[1px] my-3"></View>
        <View className="mx-4  border border-gray-300 rounded-lg ">
          <View className="px-3 py-3 flex flex-col gap-1">
            <Text className="font-bold text-[18px] mb-2">
              Apartment 1 bedroom
            </Text>
            <View className="flex flex-row items-center gap-2">
              <Ionicons size={25} name="people-outline" />
              <Text>2 Audulst</Text>
            </View>
            <View className="flex flex-row items-center gap-2">
              <Ionicons size={25} name="person-outline" />
              <View className="flex flex-row gap-1">
                <Text>Booking for: </Text>
                <TouchableOpacity>
                  <Text className="text-blue-500">Bui Tri Thuc</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View className="flex flex-row items-center gap-2">
              <FontAwesome5 name="coins" size={20} color="orange" />
              <Text>Endown for guest</Text>
            </View>
            <View className="flex flex-row items-center gap-2">
              <Ionicons size={25} name="bed-outline" />
              <Text>1 large double bed</Text>
            </View>
          </View>
        </View>
        <View className="bg-gray-300 w-full h-[1px] my-3"></View>
        <View className="px-4">
          <Text className="text-[20px] font-bold">Special requirements</Text>
          <TouchableOpacity onPress={() => navigation.navigate("SpecialReq")}>
            <Text className="text-blue-500 py-2">Add Special requirements</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View>
        <View className="bg-gray-300 w-full h-[1px] mt-3"></View>
        <View className="px-4 py-3 flex flex-row items-center justify-between">
          <View className="w-50%">
            <View className="flex flex-row items-center">
              <Text className="font-bold text-[20px]">15.000</Text>
              <FontAwesome5 name="coins" size={20} color="orange" />
            </View>
            <TouchableOpacity>
              <Text className="underline font-bold">23nd - 28nd August</Text>
            </TouchableOpacity>
          </View>
          <View className="w-50%">
            <TouchableOpacity
              onPress={() => navigation.navigate("BookingConfirm")}
            >
              <Text className="bg-blue-500 text-white px-20 py-4 rounded-md">
                Book now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
