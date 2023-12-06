import {
  AntDesign,
  EvilIcons,
  Feather,
  FontAwesome,
  Ionicons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";

export default function BookedApartment() {
  const navigation = useNavigation();
  return (
    <View className="flex-1">
      <View className="bg-blue-500 w-full h-[100px]  flex flex-row items-center justify-start px-5">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="close-outline" size={30} color="white" />
        </TouchableOpacity>
        <Text className="ml-8 text-[20px] text-white">
          Booking apartment for you
        </Text>
      </View>

      <ScrollView>
        <View className="px-3 py-4 w-full">
          <View>
            <Text className="text-blue-500">Confirmed</Text>
            <Text className="text-[20px] font-bold py-3">Book your room</Text>
            <View className="flex flex-col w-[100%]">
              <Text className="text-[15px]">
                Everything is done! We have sent a confirmation email to:
              </Text>
              <Text className="font-bold text-[15px]">
                Buitrithuc1008@gmail.com
              </Text>
              <TouchableOpacity>
                <Text className="text-blue-500 py-2">Update and resend</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View className="w-full mt-3">
            <TouchableOpacity>
              <Text className="text-[20px] text-blue-500 font-bold">
                Alex's Apartment with Sky View - Landmark 81 Toweer
              </Text>
            </TouchableOpacity>
            <View className="mt-4">
              <View className="flex flex-row my-4">
                <FontAwesome name="calendar-o" size={20} />
                <View className="ml-3">
                  <Text className="font-bold">18th October - 27th October</Text>
                  <Text>Check in from 14:00 to 23:00</Text>
                  <Text>Check out from 08:00 to 12:00</Text>
                  <TouchableOpacity>
                    <Text className="text-blue-500 mt-3 text-[15px]">
                      Change date
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View className="flex flex-row my-4 w-[95%]">
                <AntDesign name="clockcircleo" size={20} />
                <View className="ml-3">
                  <Text className="font-bold">Your arrival time</Text>
                  <Text>
                    Share your arrival time so the host can help you get the
                    apartment smoothly
                  </Text>
                  <TouchableOpacity>
                    <Text className="text-blue-500 mt-3 text-[15px]">
                      More time to come
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View className="flex flex-row my-4 w-[95%]">
                <Feather name="key" size={20} />
                <View className="ml-3">
                  <Text className="font-bold">Check-in instructions</Text>
                  <Text>Instructions on how to enter the Host's property</Text>
                  <TouchableOpacity>
                    <Text className="text-blue-500 mt-3 text-[15px]">
                      View detail
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View className="flex flex-row my-4 w-[95%]">
                <EvilIcons name="location" size={20} />
                <View className="ml-3">
                  <Text className="font-bold">Apartment address</Text>
                  <Text>719 Dien Bien Phu, Ho Chi Minh city, Vietnam</Text>
                  <TouchableOpacity>
                    <Text className="text-blue-500 mt-3 text-[15px]">
                      See directions
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View className="flex flex-row my-4 w-[95%]">
                <Ionicons name="bed-outline" size={20} />
                <View className="ml-3">
                  <Text className="font-bold">
                    Accommodation amenities and policies
                  </Text>
                  <TouchableOpacity>
                    <Text className="text-blue-500 mt-3 text-[15px]">
                      View all
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View className="bg-gray-400 w-full h-[1px] my-3"></View>
            <View>
              <Text className="text-[15px] font-bold my-3">
                Contact apartments
              </Text>
              <Text className="py-3">
                Discuss questions and apartment rental requests
              </Text>
            </View>
            <View className="flex flex-col py-4">
              <View className="flex flex-row  ">
                <AntDesign size={20} name="message1" />
                <View className="ml-4">
                  <Text className="font-bold ">Text the apartment owner</Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("ChatItemScreen")}
                  >
                    <Text className="text-blue-500 mt-3 text-[15px]">
                      Send message
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <TouchableOpacity></TouchableOpacity>
            </View>
            <View className="flex flex-col">
              <View className="flex flex-row  ">
                <Feather size={20} name="phone" />
                <View className="ml-4">
                  <Text className="font-bold ">Other methods</Text>
                  <TouchableOpacity>
                    <Text className="text-blue-500 mt-3 text-[15px]">
                      Gọi +8456597778
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text className="text-blue-500 mt-3 text-[15px]">
                      Send email
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View className="bg-gray-400 w-full h-[1px] my-3"></View>

            <View>
              <Text className="text-[20px] font-bold">
                You have booked an apartment
              </Text>
              <Text className="text-[15px] font-bold py-3">
                Apartment 1 bedroom
              </Text>
            </View>
            <View className="px-3">
              <View className="flex flex-row gap-3 ">
                <Ionicons size={20} name="person-outline" />
                <View className="flex flex-col ">
                  <Text className="font-bold ">Guest</Text>
                  <Text>Bui Tri Thuc</Text>
                  <Text>Bui Tri Thuc</Text>
                </View>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate("ManageRevervation")}
              className="border border-blue-400 my-3 rounded-md"
            >
              <Text className="text-center text-blue-500 py-4 ">
                Manage reservations
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
