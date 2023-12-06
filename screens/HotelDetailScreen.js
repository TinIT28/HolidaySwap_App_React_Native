import React, { useState } from "react";
import ImgDetailHotel from "../components/input/ImgDetailHotel";
import { Image, ScrollView, TouchableOpacity } from "react-native";
import { Text, View } from "react-native";
import Location from "react-native-vector-icons/Entypo";
import Icon from "react-native-vector-icons/EvilIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Maps from "../components/map/Map";
export default function HotelDetailScreen() {
  const [isRed, setIsRed] = useState(false);
  const [showMore, setShowMore] = useState(false); // State to control showing more text

  const toggleColor = () => {
    setIsRed(!isRed);
  };

  const resetColor = () => {
    setIsRed(false);
  };

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <ScrollView>
      <ImgDetailHotel />

      <View className="w-full h-auto bg-white flex-1 -mt-[223] rounded-t-[30] ">
        <View className="pl-[25px] pr-[25px] mt-[20px]">
          <View className="flex-row items-center justify-between ">
            <View>
              <Text className="text-[30px] font-bold">Vinh Ha Long</Text>
              <View className="flex-row items-center ">
                <Location name="location" />
                <Text className="text-[15px]"> Vinh ha long</Text>
              </View>
            </View>
            <TouchableOpacity onPress={isRed ? resetColor : toggleColor}>
              <Icon
                name="heart"
                color={isRed ? "red" : "white"}
                style={{ backgroundColor: isRed ? "red" : "#fff" }}
              />
            </TouchableOpacity>
          </View>
          <View className="flex-row items-center justify-between">
            <Text className="text-[22px] font-bold mt-[20px]">
              Common Facilities
            </Text>
            <TouchableOpacity>
              <Text className="text-blue-600 mt-[12px]">See more</Text>
            </TouchableOpacity>
          </View>
          <View className="flex-row justify-between mt-[20px] mb-[20px]">
            <View className="flex-col items-center">
              <View className="w-[50px] h-[50px] bg-slate-300 rounded-full flex items-center justify-center">
                <Ionicons name="restaurant-outline" size={20} />
              </View>
              <Text>Restautrant</Text>
            </View>
            <View className="flex-col items-center">
              <View className="w-[50px] h-[50px] bg-slate-300 rounded-full flex items-center justify-center">
                <Ionicons name="wifi" size={20} />
              </View>
              <Text>Internet</Text>
            </View>
            <View className="flex-col items-center">
              <View className="w-[50px] h-[50px] bg-slate-300 rounded-full flex items-center justify-center">
                <MaterialIcons name="pets" size={20} />
              </View>
              <Text>Pets</Text>
            </View>
            <View className="flex-col items-center">
              <View className="w-[50px] h-[50px] bg-slate-300 rounded-full flex items-center justify-center">
                <FontAwesome5 name="swimming-pool" size={20} />
              </View>
              <Text>Swimming</Text>
            </View>
          </View>
          <View className="mb-[20px]">
            <Text className="text-lg font-bold">Details</Text>
            <Text numberOfLines={showMore ? undefined : 2}>
              Khách sạn Vinpearl Ha Long Bay Resort 5 sao sang trọng có khu vực
              bãi biển riêng và spa thư giãn. Tọa lạc trên Đảo Rêu, resort có 3
              lựa chọn ăn uống và cung cấp Wi-Fi miễn phí. The room gave us the
              home atmosphere and very clean. Meals in all day dining restaurant
              was great!
            </Text>
            {/* Show more button */}
            <TouchableOpacity onPress={toggleShowMore}>
              <Text style={{ color: "blue", marginTop: 5 }}>
                {showMore ? "Show Less" : "Show More"}
              </Text>
            </TouchableOpacity>
          </View>
          <View className="flex-row justify-between items-center">
            <Text className="text-lg font-bold mb-[20px]">Review</Text>
            <TouchableOpacity>
              <Text className="text-blue-600">See more</Text>
            </TouchableOpacity>
          </View>
          <View className="flex-row mb-[20px] ">
            <Image
              className="w-[50px] h-[50px] rounded-full"
              source={require("../assets/images/avt.jpg")}
            />
            <View className="flex-row justify-between">
              <View>
                <Text className="mr-[103px] text-lg font-bold ml-[4px]">
                  Bui Tri Thuc
                </Text>
                <View className="flex-row ml-[2px] ">
                  <AntDesign
                    style={{ padding: 2, marginLeft: 2 }}
                    name="star"
                    color={"yellow"}
                  />
                  <AntDesign
                    style={{ padding: 2, marginLeft: 2 }}
                    name="star"
                    color={"yellow"}
                  />
                  <AntDesign
                    style={{ padding: 2, marginLeft: 2 }}
                    name="star"
                    color={"yellow"}
                  />
                  <AntDesign
                    style={{ padding: 2, marginLeft: 2 }}
                    name="star"
                    color={"yellow"}
                  />
                  <AntDesign
                    style={{ padding: 2, marginLeft: 2 }}
                    name="star"
                    color={"yellow"}
                  />
                </View>
                <View className="ml-[4px] ">
                  <Text>
                    transform[stderr]: Expected style "borderTopLeftRadius: 30"
                  </Text>
                </View>
              </View>

              <Text>23 nov 2022</Text>
            </View>
          </View>
          <Text className="text-lg font-bold mb-[20px]">Location</Text>
        </View>
        <View></View>
      </View>
      <Maps />
    </ScrollView>
  );
}
