import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { View } from "react-native-animatable";
import { BottomSheet } from "react-native-btr";
import { AntDesign, EvilIcons, FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native";
import { ScrollView } from "react-native";
import { Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { submitSearchParamApartmentForRent } from "../../redux/actions/searchParamActions";

export default function SearchAdressBottomSheet(props) {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [selectedLocation, setSelectedLocation] = useState(null);
  const { searchParam } = useSelector((state) => state.searchParam);
  const dispatch = useDispatch();
  const toggleBottomNavigationView = () => {
    setVisible(!visible);
  };
  const onTextChangeHandle = (text) => {
    setSearchText(text);
    props.setLocationName(text);
  };
  return (
    <View className="">
      <View style={styles.shadow} className="bg-white rounded-xl  ">
        <Text className="mt-5 font-bold text-[20px]">Where will you go?</Text>
        <TouchableOpacity
          onPress={toggleBottomNavigationView}
          className="flex-row items-center w-[100%] py-4 my-5 rounded-2xl  border border-blue-200">
          <View className=" px-4">
            <AntDesign color="#0073CF" name="search1" size={20} />
          </View>
          <TextInput
            className="w-[100%] font-bold"
            value={searchText}
            onChangeText={(text) => {
              onTextChangeHandle(text);
            }}
          />
        </TouchableOpacity>
        <View className="pb-2">
          <Text className="text-[15px] font-bold">Recommend</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View className="flex flex-row items-center gap-5 pb-5">
            <TouchableOpacity
              onPress={() => {
                setSelectedLocation("daklak");
                setSearchText("Dak Lak");
              }}>
              <View
                className={` px-[1px] py-[1px] mb-2 ${
                  selectedLocation === "daklak" ? "border-2 border-red-500 rounded-lg" : ""
                }`}>
                <Image className="w-[150px] h-[150px] rounded-lg " source={require("../../assets/images/daklak.jpg")} />
              </View>
              <Text className={`font-bold ${selectedLocation === "daklak" ? "red" : "black"}`}>Dak Lak</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setSelectedLocation("vinhhalong");
                setSearchText("Vinh Ha Long");
              }}>
              <View
                className={` px-[1px] py-[1px] mb-2 ${
                  selectedLocation === "vinhhalong" ? "border-2 border-red-500 rounded-lg" : ""
                }`}>
                <Image
                  className="w-[150px] h-[150px] rounded-lg "
                  source={require("../../assets/images/vinhhalong.jpg")}
                />
              </View>
              <Text className={`font-bold ${selectedLocation === "vinhhalong" ? "red" : "black"}`}>Vinh Ha Long</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setSelectedLocation("hanoi");
                setSearchText("Ha Noi");
              }}>
              <View
                className={` px-[1px] py-[1px] mb-2 ${
                  selectedLocation === "hanoi" ? "border-2 border-red-500 rounded-lg" : ""
                }`}>
                <Image className="w-[150px] h-[150px] rounded-lg " source={require("../../assets/images/hanoi.jpg")} />
              </View>
              <Text className={`font-bold ${selectedLocation === "hanoi" ? "red" : "black"}`}>Ha Noi</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      <BottomSheet
        visible={visible}
        onBackButtonPress={toggleBottomNavigationView}
        onBackdropPress={toggleBottomNavigationView}>
        <View style={styles.bottomNavigationView}>
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              justifyContent: "space-between",
            }}>
            <View className="flex-1 px-4">
              <ScrollView>
                <View className="flex-row items-center w-[100%] py-4 my-5 rounded-2xl  border border-blue-200">
                  <View className="px-4">
                    <AntDesign color="#0073CF" name="search1" size={20} />
                  </View>
                  <TextInput value={searchText} onChangeText={(text) => setSearchText(text)} className="w-[100%]" />
                </View>
                <TouchableOpacity
                  onPress={() => {
                    setVisible();
                    setSearchText("Ho CHi Minh");
                  }}
                  className="flex flex-row items-center gap-5">
                  <View className="bg-gray-200 rounded-lg flex flex-row justify-center items-center border border-gray-300  pb-1">
                    <EvilIcons size={30} name="location" />
                  </View>
                  <Text>Ho Chi Minh city, Ho Chi Minh</Text>
                </TouchableOpacity>
                <View className="bg-gray-300 h-[1px] w-full my-4"></View>
                <TouchableOpacity
                  onPress={() => {
                    setVisible();
                    setSearchText("Hoi An");
                  }}
                  className="flex flex-row items-center gap-5">
                  <View className="bg-gray-200 rounded-lg flex flex-row justify-center items-center border border-gray-300  pb-1">
                    <EvilIcons size={30} name="location" />
                  </View>
                  <Text>Hoi An, Da Nang city</Text>
                </TouchableOpacity>
                <View className="bg-gray-300 h-[1px] w-full my-4"></View>
                <TouchableOpacity
                  onPress={() => {
                    setVisible();
                    setSearchText("Hoan Kiem");
                  }}
                  className="flex flex-row items-center gap-5">
                  <View className="bg-gray-200 rounded-lg flex flex-row justify-center items-center border border-gray-300  pb-1">
                    <EvilIcons size={30} name="location" />
                  </View>
                  <Text>Hoan Kiem, Ha Noi</Text>
                </TouchableOpacity>
                <View className="bg-gray-300 h-[1px] w-full my-4"></View>
              </ScrollView>
            </View>
          </View>
        </View>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  bottomNavigationView: {
    backgroundColor: "#fff",
    width: "100%",
    height: "80%",
  },
});
