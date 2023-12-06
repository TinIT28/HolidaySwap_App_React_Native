import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import AvtHeader from "../../components/Home/SearchHome";
import { ScrollView } from "react-native";
import Carosel from "../../components/apartment/CaroselApartmentHome";
import {
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome,
  AntDesign,
} from "@expo/vector-icons";
import ChoseApartment from "../../components/apartment/ChoseApartment";
import FilterApartment from "../../components/apartment/FilterApartment";
import TableApartment from "../../components/apartment/TableApartment";
import CaroselImgProperty from "../../components/property/CaroselImgProperty";

export default function DetailProperty() {
  const [showMore, setShowMore] = useState(false);

  return (
    <View className="flex-1">
      <View className="">
        <AvtHeader />
      </View>
      <ScrollView>
        <CaroselImgProperty />
        <View className="px-4 py-3 bg-white">
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            className="flex row gap-10"
          >
            <View className="flex flex-col items-center">
              <View className="bg-gray-300 rounded-full w-12 h-12 flex flex-col items-center justify-center">
                <MaterialIcons size={25} color="gray" name="meeting-room" />
              </View>
              <Text className="mt-1">3 Beds room</Text>
            </View>
            <View className="flex flex-col items-center">
              <View className="bg-gray-300 rounded-full w-12 h-12 flex flex-col items-center justify-center">
                <FontAwesome5 size={25} color="gray" name="house-user" />
              </View>
              <Text className="mt-1">50 meters</Text>
            </View>
            <View className="flex flex-col items-center">
              <View className="bg-gray-300 rounded-full w-12 h-12 flex flex-col items-center justify-center">
                <MaterialCommunityIcons
                  size={25}
                  color="gray"
                  name="google-classroom"
                />
              </View>
              <Text className="mt-1">Living room</Text>
            </View>
            <View className="flex flex-col items-center">
              <View className="bg-gray-300 rounded-full w-12 h-12 flex flex-col items-center justify-center">
                <MaterialCommunityIcons size={25} color="gray" name="balcony" />
              </View>
              <Text className="mt-1">Balcony</Text>
            </View>
          </ScrollView>
        </View>
        <View className="px-4 py-3 bg-white">
          <View>
            <Text className="text-[20px] font-bold">Deluxe Property</Text>
            <Text className="text-[15px] pt-5">Only one 1 on HolidaySwap</Text>
            {/* <TouchableOpacity>
              <ChoseApartment />
            </TouchableOpacity> */}
          </View>
        </View>

        <View className="px-4 bg-white mt-2 py-3">
          <View>
            <Text className="text-[17px] font-bold my-2">Describe</Text>
            <Text>
              A holiday apartment, also known as a vacation rental or holiday
              rental, is a self-contained accommodation option that travelers
              can rent for a short-term stay during their vacation or holiday.
              These apartments are typically fully furnished and equipped with
              the amenities needed to provide a comfortable
            </Text>
          </View>
          <View className="w-full bg-gray-300 h-[1px] my-4"></View>
          <View>
            <View className="flex flex-col">
              <Text className="text-2xl font-bold">Convenient</Text>
              <View className="p-4 mt-2 space-y-2">
                <View className="flex flex-row justify-between">
                  <View className="flex flex-row">
                    <Ionicons size={20} name="bed-outline" />
                    <View className="ml-4 mb-3">
                      <Text className="text-[17px] font-bold">
                        Living room area
                      </Text>
                      <Text>Sofa</Text>
                      <Text>Reception area</Text>
                      <Text>Dining room area</Text>
                    </View>
                  </View>
                  <View className="flex flex-row">
                    <Ionicons size={20} name="bed-outline" />
                    <View className="ml-4 mb-4">
                      <Text className="text-[17px] font-bold">Bed room</Text>
                      <Text>bedsheets</Text>
                      <Text>Bag or closet</Text>
                    </View>
                  </View>
                </View>
                {showMore ? (
                  <View className="flex flex-col">
                    <View className="flex flex-row justify-between w-">
                      <View className="flex flex-col">
                        <View className="flex flex-col justify-between">
                          <View className="flex flex-row">
                            <MaterialIcons size={20} name="kitchen" />
                            <View className="ml-4 mb-3">
                              <Text className="text-[17px] font-bold">
                                Kitchen
                              </Text>
                              <Text>Dinner table</Text>
                              <Text>Kitchen</Text>
                              <Text>Kitchenette</Text>
                              <Text>Stove</Text>
                              <Text>Microwave oven</Text>
                              <Text>Washing machine</Text>
                              <Text>Fridge</Text>
                              <Text>Kitchenware</Text>
                              <Text>Electric kettle</Text>
                            </View>
                          </View>
                        </View>

                        <View className="flex flex-row">
                          <MaterialCommunityIcons
                            size={20}
                            name="bathtub-outline"
                          />
                          <View className="ml-4 mb-3">
                            <Text className="text-[17px] font-bold">
                              Bathroom
                            </Text>
                            <Text>Bidet</Text>
                            <Text>Sandal</Text>
                            <Text>Toilet paper</Text>
                            <Text>Towel</Text>
                            <Text>Toilet</Text>
                            <Text>Private bathroom</Text>
                            <Text>Shower</Text>
                            <Text>Kitchenware</Text>
                          </View>
                        </View>
                      </View>
                      <View className="flex flex-col">
                        <View className="flex flex-row">
                          <FontAwesome size={20} name="sun-o" />
                          <View className="ml-4 mb-3">
                            <Text className="text-[17px] font-bold">
                              Outside
                            </Text>
                            <Text>Balcony</Text>
                            <Text>Terrace</Text>
                            <Text>Courtyard</Text>
                          </View>
                        </View>
                        <View className="flex flex-row">
                          <AntDesign size={20} name="infocirlceo" />
                          <View className="ml-4 mb-3">
                            <Text className="text-[17px] font-bold">
                              Overview
                            </Text>
                            <Text>No smoking</Text>
                            <Text>Iron</Text>
                            <Text>Safe vault</Text>
                            <Text>Private entrance</Text>
                            <Text>Fan</Text>
                            <Text>Air conditioner</Text>
                          </View>
                        </View>
                      </View>
                    </View>
                    <TouchableOpacity onPress={() => setShowMore(false)}>
                      <Text className="text-blue-500 font-bold text-[17px]">
                        Show Less
                      </Text>
                    </TouchableOpacity>
                  </View>
                ) : (
                  <TouchableOpacity onPress={() => setShowMore(true)}>
                    <Text className="text-blue-500 font-bold text-[17px]">
                      View more
                    </Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </View>
        </View>
        <View className="px-4 bg-white mt-3">
          <View className="pt-3 pb-7">
            <Text className="text-[20px] font-bold">
              Apartments for rent at Deluxe Property
            </Text>
          </View>
          <View>
            <FilterApartment />
            <TableApartment />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
