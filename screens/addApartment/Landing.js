import {
  AntDesign,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import Maps from "../../components/map/Map";
import { Image } from "react-native";
import { useDispatch } from "react-redux";
import { getListResort } from "../../redux/actions/resortActions";

export default function Landing() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useFocusEffect(
    React.useCallback(() => {
      dispatch(getListResort());
    }, [dispatch])
  );

  return (
    <View className="flex-1">
      <View className="bg-white w-full h-[100px]  flex flex-row items-center justify-start px-5">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="close" size={30} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View className="bg-white">
          <View className="px-4 py-3">
            <Text className="text-center text-[35px] font-bold text-blue-500 ">
              Rent apartments on HolidaySwap
            </Text>
            <Text className="text-center text-[35px] font-bold py-3">
              You can earn
            </Text>
            <View className="flex flex-row items-center justify-center gap-3">
              <Text className="text-[40px] font-bold">Many</Text>
              <FontAwesome5 name="coins" size={30} color="orange" />
            </View>
            <TouchableOpacity>
              <Text className="text-center mt-2 underline text-gray-500">
                Learn how we estimate your earnings
              </Text>
            </TouchableOpacity>
          </View>
          <View className="pr-11">
            <Maps />
          </View>
          <View className="px-4 py-20">
            <Text className="text-[20px] font-bold">
              Easily rent apartments on HolidaySwap with HolidaySwap Setup
            </Text>
          </View>
          <View className="flex flex-row  justify-center">
            <Image
              className="w-full h-[400px]"
              source={require("../../assets/images/landingAdd.jpg")}
            />
          </View>
          <View className="px-4 pt-8">
            <Text className="font-bold py-4 text-[15px] ">
              Get personal guidance from a super apartment owner
            </Text>
            <Text className="text-gray-600">
              We will connect you with a Super Apartment Owner of your rental
              who will guide you from your first inquiry to your first guest
              placement - Through our app's chat feature
            </Text>
          </View>
          <View className="px-4 pt-8">
            <Text className="font-bold py-4 text-[15px] ">
              Experienced guest for his first apartment booking
            </Text>
            <Text className="text-gray-600">
              For your first apartment booking, you can choose to welcome an
              experienced guest with at least 3 stays and a good history on
              HolidaySwap
            </Text>
          </View>
          <View className="px-4 py-8">
            <Text className="font-bold py-4 text-[15px] ">
              Special support from HolidaySwap
            </Text>
            <Text className="text-gray-600">
              WWith just a click of a button, apartment owners can add their
              apartments to the HolidaySwap application to easily exchange and
              receive special support from the HolidaySwap team.
            </Text>
          </View>
          <View className="flex flex-col pl-4 ">
            <View className=" flex flex-row">
              <Text className="text-blue-500 font-bold text-[25px]">Holi</Text>
              <Text className="text-[25px] font-bold">Cover</Text>
            </View>
            <View>
              <Text className="text-[20px]">For the apartment owner</Text>
            </View>
            <Text className="text-[17px] font-bold mt-5">
              Rent your home on HolidaySwap with a comprehensive protection
              program
            </Text>
          </View>
          <View className=" flex flex-col gap-3 px-4 mt-4 ">
            <View className="flex flex-row justify-end gap-3">
              <Text>HolidaySwap</Text>
              <Text>Edge unit</Text>
            </View>
            <View className="bg-gray-300 px-4  h-[1px]"></View>
          </View>
          <View className="flex flex-col px-4 my-4 ">
            <View className="flex flex-row justify-between">
              <Text className="font-bold text-[18px] w-[50%]">
                Verify guest identity
              </Text>
              <View className="flex flex-row items-center gap-12 pr-4">
                <AntDesign name="check" size={25} color="#2370FB" />
                <AntDesign name="check" size={25} color="#2370FB" />
              </View>
            </View>
            <Text className="my-4 text-gray-600">
              Our system checks information such as name, address and more to
              confirm the identity of people booking apartments on HolidaySwap
            </Text>
          </View>
          <View className="bg-gray-300 px-4  h-[1px]"></View>
          <View className="flex flex-col px-4 my-4 ">
            <View className="flex flex-row justify-between">
              <Text className="font-bold text-[18px] w-[50%]">
                Screening booking requests
              </Text>
              <View className="flex flex-row items-center gap-12 pr-4">
                <AntDesign name="check" size={25} color="#2370FB" />
                <AntDesign name="close" size={25} color="#FD2D2B" />
              </View>
            </View>
            <Text className="my-4 text-gray-600">
              Our proprietary technology analyzes hundreds of factors in every
              apartment booking to block bookings that represent a high risk of
              parties causing nuisance and damage.
            </Text>
          </View>
          <View className="bg-gray-300 px-4  h-[1px]"></View>
          <View className="flex flex-col px-4 my-4 ">
            <View className="flex flex-row justify-between">
              <Text className="font-bold text-[18px] w-[50%]">
                Damage caused by pets{" "}
              </Text>
              <View className="flex flex-row items-center gap-12 pr-4">
                <AntDesign name="check" size={25} color="#2370FB" />
                <AntDesign name="close" size={25} color="#FD2D2B" />
              </View>
            </View>
          </View>
          <View className="bg-gray-300 px-4  h-[1px]"></View>
          <Text className="px-4 my-4 text-gray-600">
            Comparison results are based on public information and freely
            provided benefits of competing units
          </Text>
          <View className="px-4 mb-8">
            <TouchableOpacity className="w-[40%]">
              <Text className="border border-gray-700 rounded-md px-3 py-3 text-center font-bold">
                Learn more
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="px-4 py-10">
          <Text className="text-[20px] font-bold w-[50%] pb-10">
            Answering your questions
          </Text>
        </View>
      </ScrollView>
      <View className="bg-white w-full h-[13%] border-t border-gray-300 flex flex-col items-center justify-center">
        <TouchableOpacity
          onPress={() => navigation.navigate("WellcomeBackAdd")}
          className="bg-blue-500 rounded-md px-20"
        >
          <View className="flex flex-row items-center gap-1">
            <MaterialCommunityIcons
              name="home-plus-outline"
              color="#ffffff"
              size={20}
            />
            <Text className="text-center text-white font-bold py-4">
              HolidaySwap Setup
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
