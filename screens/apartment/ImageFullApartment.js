import React, { useEffect, useState } from "react";
import { Image } from "react-native";
import { View } from "react-native-animatable";
import AvtHeader from "../../components/Home/SearchHome";
import { ScrollView } from "react-native";
import { TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AntDesign, Ionicons } from "@expo/vector-icons";

export default function ImageFullApartment() {
  const route = useRoute();
  const navigation = useNavigation();
  const dataApartmentImage = route.params.apartmentImage;
  const [apartmentImage, setApartmentImage] = useState([]);
  useEffect(() => {
    setApartmentImage(dataApartmentImage);
  }, []);
  return (
    <>
      <View>
        <View className="bg-blue-500 w-full h-[100px]  flex flex-row items-center justify-start px-5">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={30} color="white" />
          </TouchableOpacity>
          <Text className="ml-8 text-[20px] text-white">Image of Apartment</Text>
        </View>
      </View>
      <ScrollView>
        <View className="px-2  mt-2">
          <View className="mb-2">
            {apartmentImage.map((item, index) => {
              return (
                <View key={index}>
                  <Image
                    className="w-full h-[300px] mb-2"
                    source={{
                      uri: item?.link,
                    }}
                  />
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
      <View className="mx-3 my-2">
        <TouchableOpacity onPress={() => navigation.goBack()} className="w-full bg-blue-500 ">
          <Text className="text-center py-4 text-white text-[17px] font-bold">Back to detail</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
