import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import DropDownResort from "../../components/addApartment/DropDownResort";
import DropDownProperty from "../../components/addApartment/DropDownProperty";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { getListResort } from "../../redux/actions/resortActions";
import { getListProperty } from "../../redux/actions/propertyActions";
import { TextInput } from "react-native";

export default function StepAdd1() {
  const navigation = useNavigation();
  const [resortId, setResortId] = useState();
  const [resortName, setResortName] = useState();
  const [propertyId, setPropertyId] = useState();
  const [propertyName, setPropertyName] = useState();
  const [roomId, setRoomId] = useState();

  const { properties } = useSelector((state) => state.properties);

  const dispatch = useDispatch();

  const handleChangeResortId = (value) => {
    setResortId(value.id);
    setResortName(value.resortName);
    dispatch(getListProperty(value.id));
  };

  const handleChangePropertyId = (value) => {
    setPropertyId(value.id);
    setPropertyName(value.propertyName);
  };

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
        <View className="px-4">
          <Text className="text-[25px] font-bold mt-7">Step 1</Text>
          <Text className="font-bold text-[25px] py-3 text-blue-500">
            Share your information about your apartment with us
          </Text>
          <Text className="text-[18px] text-gray-500">
            In this step, we will ask you which resort the apartment you want to
            rent is located in and what type of property it is
          </Text>
        </View>
        <View className="px-4 mt-10 mb-5 ">
          <Text className="text-[20px] font-bold text-blue-500">
            Select Resort
          </Text>
          <DropDownResort handleChangeResortId={handleChangeResortId} />
        </View>

        <View className="px-4 mt-5 ">
          <Text className="text-[20px] font-bold text-blue-500">
            Select Property
          </Text>
          <DropDownProperty
            handleChangePropertyId={handleChangePropertyId}
            properties={properties}
          />
        </View>

        <View className="px-4 mt-10 mb-5 ">
          <Text className="text-[20px] font-bold text-blue-500">
            Apartment ID
          </Text>
          <TextInput
            value={roomId}
            onChangeText={(text) => setRoomId(text)}
            className="w-full p-3 rounded-lg bg-white border border-slate-300 shadow-lg px-3 mt-3"
            placeholder="Ex: 001"
          />
        </View>
      </ScrollView>
      <View className="flex flex-row gap-1 items-center justify-center w-full">
        <View className="bg-gray-700 w-[33.3%] h-[5px]"></View>
        <View className="bg-gray-300 w-[33.3%] h-1"></View>
        <View className="bg-gray-300 w-[33.3%] h-1"></View>
      </View>
      <View className="px-4 py-5">
        <View className="flex flex-row justify-between items-center">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text className="text-[20px] underline">Back</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("StepAdd2", {
                resortId: resortId,
                resortName: resortName,
                propertyId: propertyId,
                propertyName: propertyName,
                roomId: roomId,
              })
            }
          >
            <Text className="text-[20px] bg-blue-700  text-white px-5 py-2 rounded-md">
              Next Step
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
