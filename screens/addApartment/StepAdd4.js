import React, { useState } from "react";
import { ScrollView } from "react-native";
import { TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ModalConfirmAddApartment from "../../components/addApartment/ModalConfirmAddApartment";
import { Image } from "react-native";

export default function StepAdd4() {
  const [modalVisible, setModalVisible] = useState(false);

  const navigation = useNavigation();
  return (
    <View className="bg-white h-full">
      <View className="flex flex-row justify-between mt-10 px-4 border-b border-gray-400 py-4">
        <TouchableOpacity>
          <Text className="border border-gray-400 rounded-3xl px-2 py-1">
            Save & quit
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text className="border border-gray-400 rounded-3xl px-2 py-1">
            You have questions?
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View className="px-4 ">
          <Text className="text-[25px] font-bold mt-7">Confirm</Text>
          <Text className="font-bold text-[25px] py-3 text-blue-500">
            Thank you for providing us with information
          </Text>
          <View className="flex ">
            <Text className="text-[16px] text-gray-600">
              Below is all the information you provided. Please read it again
              before clicking finish
            </Text>
            <View className="flex flex-row items-center">
              <Text>Name: </Text>
              <Text className="text-[17px] font-bold">
                Nha cua Thuc View bien
              </Text>
            </View>
            <View className="flex flex-row items-center">
              <Text>Resort: </Text>
              <Text className="font-bold text-[17px]">Thuc Bui reosrt</Text>
            </View>

            <View className="flex flex-row items-center">
              <Text>Type: </Text>
              <Text className="text-[17px] font-bold">
                Luxury property type
              </Text>
            </View>
            <View className="flex flex-row items-center">
              <Text>Apartment ID: </Text>
              <Text className="text-[17px] font-bold">391</Text>
            </View>
            <View className="flex flex-row items-center">
              <Text>Time range: </Text>
              <Text className="text-[17px] font-bold">2019 - 2025</Text>
            </View>

            <Text className="text-[17px] font-bold mb-3">Image</Text>

            <View style={{ flexDirection: "row" }}>
              <Image
                style={{ flex: 1, aspectRatio: 1, margin: 2 }}
                source={require("../../assets/images/landmark1.jpg")}
              />
              <Image
                style={{ flex: 1, aspectRatio: 1, margin: 2 }}
                source={require("../../assets/images/landmark2.jpg")}
              />
              <Image
                style={{ flex: 1, aspectRatio: 1, margin: 2 }}
                source={require("../../assets/images/landmark3.jpg")}
              />
            </View>
            <View style={{ flexDirection: "row" }}>
              <Image
                style={{ flex: 1, aspectRatio: 1, margin: 2 }}
                source={require("../../assets/images/landmark4.jpg")}
              />
              <Image
                style={{ flex: 1, aspectRatio: 1, margin: 2 }}
                source={require("../../assets/images/landmark5.jpg")}
              />
              <Image
                style={{ flex: 1, aspectRatio: 1, margin: 2 }}
                source={require("../../assets/images/landmark1.jpg")}
              />
            </View>
          </View>
        </View>
        <ModalConfirmAddApartment
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      </ScrollView>
      <View className="flex flex-row gap-1 items-center justify-center w-full">
        <View className="bg-gray-600 w-full h-[5px]"></View>
      </View>
      <View className="px-4 py-5">
        <View className="flex flex-row justify-between items-center">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text className="text-[20px] underline">Back</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Text className="text-[20px] bg-blue-700  text-white px-10 py-2 rounded-md">
              Finish
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
