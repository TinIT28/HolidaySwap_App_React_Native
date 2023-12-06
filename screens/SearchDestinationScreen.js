import React, { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import { View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { useNavigation } from "@react-navigation/native";
import SearchBar from "../components/search/SearchBar";
import ImgDetailHotel from "../components/input/ImgDetailHotel";
import FrequentlyVisited from "../components/Home/FrequentlyVisited";
import { ScrollView } from "react-native";
import ModalDate from "../components/modal/ModalDate";
import ModalLocation from "../components/modal/ModalLocation";

export default function SearchDestinationScreen() {
  const navigation = useNavigation();

  const [modalVisibleDate, setModalVisibleDate] = useState(false);
  const [modalVisibleLocation, setModalVisibleLocation] = useState(false);

  const openModalDate = () => {
    setModalVisibleDate(true);
  };
  const openModalLocation = () => {
    setModalVisibleLocation(true);
  };

  return (
    <View className="mx-[15px] flex-1 h-auto">
      <View className="flex items-center">
        <View className="flex-row items-center justify-between mt-[70px] mb-[20px]">
          <View className="items-center justify-between flex-row flex-1 w-full">
            <TouchableOpacity
              className="w-[55px] h-[55px] bg-[#D9D5D5] rounded-full flex justify-center items-center "
              onPress={() => navigation.navigate("WelcomeBackScreen")}
            >
              <AntDesign name="arrowleft" size={20} color="#AAAAAA" />
            </TouchableOpacity>

            <View>
              <Text className="font-bold text-[24px] mr-[50px]">
                Search Destination
              </Text>
            </View>
          </View>
        </View>
        <SearchBar />
        <View className=" flex-row justify-between mt-[10px] w-full">
          <TouchableOpacity
            className="h-[36px] w-[160px] bg-slate-200 rounded-[30px] mr-[10px] flex-row items-center justify-around "
            onPress={openModalDate}
          >
            <Text>Date</Text>
            <EvilIcons name="calendar" size={25} />
          </TouchableOpacity>

          {/* Hiển thị ModalConfirm nếu modalVisible là true */}
          <View>
            <ModalDate
              modalVisibleDate={modalVisibleDate}
              setModalVisibleDate={setModalVisibleDate}
            />
            <ModalLocation
              modalVisibleLocation={modalVisibleLocation}
              setModalVisibleLocation={setModalVisibleLocation}
            />
          </View>

          <TouchableOpacity
            onPress={openModalLocation}
            className="h-[36px] w-[160px] bg-slate-200 rounded-[30px] flex-row items-center justify-around"
          >
            <Text>Location</Text>
            <EvilIcons name="location" size={25} />
          </TouchableOpacity>
        </View>
        <View className="flex-row items-center justify-between w-full mt-[10px]">
          <Text className="font-bold text-lg">Recommentdation</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("ListDestinationScreen")}
          >
            <Text className="text-sky-600">See all </Text>
          </TouchableOpacity>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View className=" w-full justify-center items-center mb-[85px]">
            <View className="flex-row items-center justify-between">
              <FrequentlyVisited />
              <FrequentlyVisited />
            </View>
            <View className="flex-row items-center justify-between">
              <FrequentlyVisited />
              <FrequentlyVisited />
            </View>
            <View className="flex-row items-center justify-between">
              <FrequentlyVisited />
              <FrequentlyVisited />
            </View>
            <View className="flex-row items-center justify-between">
              <FrequentlyVisited />
              <FrequentlyVisited />
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
