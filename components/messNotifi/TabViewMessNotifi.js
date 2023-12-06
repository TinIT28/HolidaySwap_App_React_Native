import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import CarouselApartmentHome from "../apartment/CaroselApartmentHome";
import SearchBar from "../search/SearchBar";

export default function TabViewMessNotifi() {
  const tabs = ["Chat", "Notifications"];
  const [selectedTab, setSelectedTab] = useState("Chat");
  const navigation = useNavigation();
  const renderTabContent = () => {
    switch (selectedTab) {
      case "Chat":
        return (
          <View>
            <SearchBar />
            <ScrollView
              showsVerticalScrollIndicator={false}
              className=" w-[95%] py-3"
            >
              <View className="flex-row mr-[100px]">
                <View className="  py-[5px]">
                  <TouchableOpacity
                    className="flex-row justify-start "
                    onPress={() => navigation.navigate("ChatItemScreen")}
                  >
                    <Image
                      className="mr-[8px] rounded-full w-[60] h-[60] mb-[20px]  "
                      source={require("../../assets/images/avtChat2.jpg")}
                    />
                    <View>
                      <View className="flex-row items-center justify-between">
                        <Text className="text-lg font-bold">
                          Nguyễn (Nguyen)
                        </Text>
                      </View>
                      <Text>Tôi muốn trao đổi một kì nghỉ tại... </Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View className="mt-[10px] ml-[20px]">
                  <Text>10:30AM</Text>
                </View>
              </View>
              <View className="flex-row mr-[100px]">
                <View className="  py-[5px]">
                  <TouchableOpacity className="flex-row justify-start ">
                    <Image
                      className="mr-[8px] rounded-full w-[60] h-[60] mb-[20px]  "
                      source={require("../../assets/images/avtChat3.jpg")}
                    />
                    <View>
                      <View className="flex-row items-center justify-between">
                        <Text className="text-lg font-bold">Trần (Tran)</Text>
                      </View>
                      <Text>Tôi muốn trao đổi một kì nghỉ tại... </Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View className="mt-[10px] ml-[20px]">
                  <Text>10:30AM</Text>
                </View>
              </View>
              <View className="flex-row mr-[100px]">
                <View className="  py-[5px]">
                  <TouchableOpacity className="flex-row justify-start ">
                    <Image
                      className="mr-[8px] rounded-full w-[60] h-[60] mb-[20px]  "
                      source={require("../../assets/images/avtChat4.jpg")}
                    />
                    <View>
                      <View className="flex-row items-center justify-between">
                        <Text className="text-lg font-bold">Lê (Le)</Text>
                      </View>
                      <Text>Tôi muốn trao đổi một kì nghỉ tại... </Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View className="mt-[10px] ml-[20px]">
                  <Text>10:30AM</Text>
                </View>
              </View>
              <View className="flex-row mr-[100px]">
                <View className="  py-[5px]">
                  <TouchableOpacity className="flex-row justify-start ">
                    <Image
                      className="mr-[8px] rounded-full w-[60] h-[60] mb-[20px]  "
                      source={require("../../assets/images/avtChat5.jpg")}
                    />
                    <View>
                      <View className="flex-row items-center justify-between">
                        <Text className="text-lg font-bold">Phạm (Pham)</Text>
                      </View>
                      <Text>Tôi muốn trao đổi một kì nghỉ tại... </Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View className="mt-[10px] ml-[20px]">
                  <Text>10:30AM</Text>
                </View>
              </View>
              <View className="flex-row mr-[100px]">
                <View className="  py-[5px]">
                  <TouchableOpacity className="flex-row justify-start ">
                    <Image
                      className="mr-[8px] rounded-full w-[60] h-[60] mb-[20px]  "
                      source={require("../../assets/images/avtChat6.jpg")}
                    />
                    <View>
                      <View className="flex-row items-center justify-between">
                        <Text className="text-lg font-bold">Hoàng (Hoang)</Text>
                      </View>
                      <Text>Tôi muốn trao đổi một kì nghỉ tại... </Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View className="mt-[10px] ml-[20px]">
                  <Text>10:30AM</Text>
                </View>
              </View>
              <View className="flex-row mr-[100px]">
                <View className="  py-[5px]">
                  <TouchableOpacity className="flex-row justify-start ">
                    <Image
                      className="mr-[8px] rounded-full w-[60] h-[60] mb-[20px]  "
                      source={require("../../assets/images/avtChat7.jpg")}
                    />
                    <View>
                      <View className="flex-row items-center justify-between">
                        <Text className="text-lg font-bold">Huỳnh (Huyhn)</Text>
                      </View>
                      <Text>Tôi muốn trao đổi một kì nghỉ tại... </Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View className="mt-[10px] ml-[20px]">
                  <Text>10:30AM</Text>
                </View>
              </View>
              <View className="flex-row mr-[100px]">
                <View className="  py-[5px]">
                  <TouchableOpacity className="flex-row justify-start ">
                    <Image
                      className="mr-[8px] rounded-full w-[60] h-[60] mb-[20px]  "
                      source={require("../../assets/images/avtChat8.jpg")}
                    />
                    <View>
                      <View className="flex-row items-center justify-between">
                        <Text className="text-lg font-bold">Phan (Phan)</Text>
                      </View>
                      <Text>Tôi muốn trao đổi một kì nghỉ tại... </Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View className="mt-[10px] ml-[20px]">
                  <Text>10:30AM</Text>
                </View>
              </View>
              <View className="flex-row mr-[100px]">
                <View className="  py-[5px]">
                  <TouchableOpacity className="flex-row justify-start ">
                    <Image
                      className="mr-[8px] rounded-full w-[60] h-[60] mb-[20px]  "
                      source={require("../../assets/images/avtChat9.jpg")}
                    />
                    <View>
                      <View className="flex-row items-center justify-between">
                        <Text className="text-lg font-bold">Vũ (Vu)</Text>
                      </View>
                      <Text>Tôi muốn trao đổi một kì nghỉ tại... </Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View className="mt-[10px] ml-[20px]">
                  <Text>10:30AM</Text>
                </View>
              </View>
              <View className="flex-row mr-[100px]">
                <View className="  py-[5px]">
                  <TouchableOpacity className="flex-row justify-start ">
                    <Image
                      className="mr-[8px] rounded-full w-[60] h-[60] mb-[20px]  "
                      source={require("../../assets/images/avtChat1.jpg")}
                    />
                    <View>
                      <View className="flex-row items-center justify-between">
                        <Text className="text-lg font-bold">Đặng (Dang)</Text>
                      </View>
                      <Text>Tôi muốn trao đổi một kì nghỉ tại... </Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View className="mt-[10px] ml-[20px]">
                  <Text>10:30AM</Text>
                </View>
              </View>
              <View className="flex-row mr-[100px]">
                <View className="  py-[5px]">
                  <TouchableOpacity className="flex-row justify-start ">
                    <Image
                      className="mr-[8px] rounded-full w-[60] h-[60] mb-[20px]  "
                      source={require("../../assets/images/avtChat1.jpg")}
                    />
                    <View>
                      <View className="flex-row items-center justify-between">
                        <Text className="text-lg font-bold">Dương (Duong)</Text>
                      </View>
                      <Text>Tôi muốn trao đổi một kì nghỉ tại... </Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View className="mt-[10px] ml-[20px]">
                  <Text>10:30AM</Text>
                </View>
              </View>
            </ScrollView>
          </View>
        );
      case "Notifications":
        return (
          <View style={styles.shadow} className="flex-1 ">
            <View>
              <ScrollView showsVerticalScrollIndicator={false}>
                <View className="flex flex-row items-center w-full py-4 gap-2 ">
                  <Image
                    className="w-[30%] h-[100%]"
                    source={require("../../assets/images/landmark.jpg")}
                  />
                  <View className="w-[70%] flex flex-col gap-2">
                    <Text className="text-[18px] font-bold">
                      You have booked the apartment
                    </Text>
                    <Text className="overflow-hidden">
                      You have booked Alex's Apartment at 710 Dien Bien Phu, Ho
                      Chi Minh City, Vietnam
                    </Text>
                    <Text>15 Hour ago</Text>
                  </View>
                </View>
                <View className="flex flex-row items-center w-full py-4 gap-2 ">
                  <Image
                    className="w-[30%] h-[100%]"
                    source={require("../../assets/images/landmark1.jpg")}
                  />
                  <View className="w-[70%] flex flex-col gap-2">
                    <Text className="text-[18px] font-bold">
                      You have booked the apartment
                    </Text>
                    <Text className="overflow-hidden">
                      You have booked Alex's Apartment at 710 Dien Bien Phu, Ho
                      Chi Minh City, Vietnam
                    </Text>
                    <Text>15 Hour ago</Text>
                  </View>
                </View>
                <View className="flex flex-row items-center w-full py-4 gap-2 ">
                  <Image
                    className="w-[30%] h-[100%]"
                    source={require("../../assets/images/landmark2.jpg")}
                  />
                  <View className="w-[70%] flex flex-col gap-2">
                    <Text className="text-[18px] font-bold">
                      You have booked the apartment
                    </Text>
                    <Text className="overflow-hidden">
                      You have booked Alex's Apartment at 710 Dien Bien Phu, Ho
                      Chi Minh City, Vietnam
                    </Text>
                    <Text>15 Hour ago</Text>
                  </View>
                </View>
                <View className="flex flex-row items-center w-full py-4 gap-2 ">
                  <Image
                    className="w-[30%] h-[100%]"
                    source={require("../../assets/images/landmark3.jpg")}
                  />
                  <View className="w-[70%] flex flex-col gap-2">
                    <Text className="text-[18px] font-bold">
                      You have booked the apartment
                    </Text>
                    <Text className="overflow-hidden">
                      You have booked Alex's Apartment at 710 Dien Bien Phu, Ho
                      Chi Minh City, Vietnam
                    </Text>
                    <Text>15 Hour ago</Text>
                  </View>
                </View>
                <View className="flex flex-row items-center w-full py-4 gap-2 ">
                  <Image
                    className="w-[30%] h-[100%]"
                    source={require("../../assets/images/landmark4.jpg")}
                  />
                  <View className="w-[70%] flex flex-col gap-2">
                    <Text className="text-[18px] font-bold">
                      You have booked the apartment
                    </Text>
                    <Text className="overflow-hidden">
                      You have booked Alex's Apartment at 710 Dien Bien Phu, Ho
                      Chi Minh City, Vietnam
                    </Text>
                    <Text>15 Hour ago</Text>
                  </View>
                </View>
                <View className="flex flex-row items-center w-full py-4 gap-2 ">
                  <Image
                    className="w-[30%] h-[100%]"
                    source={require("../../assets/images/landmark5.jpg")}
                  />
                  <View className="w-[70%] flex flex-col gap-2">
                    <Text className="text-[18px] font-bold">
                      You have booked the apartment
                    </Text>
                    <Text className="overflow-hidden">
                      You have booked Alex's Apartment at 710 Dien Bien Phu, Ho
                      Chi Minh City, Vietnam
                    </Text>
                    <Text>15 Hour ago</Text>
                  </View>
                </View>
                <View className="flex flex-row items-center w-full pt-4 pb-10 gap-2 ">
                  <Image
                    className="w-[30%] h-[100%]"
                    source={require("../../assets/images/landmark.jpg")}
                  />
                  <View className="w-[70%] flex flex-col gap-2">
                    <Text className="text-[18px] font-bold">
                      You have booked the apartment
                    </Text>
                    <Text className="overflow-hidden">
                      You have booked Alex's Apartment at 710 Dien Bien Phu, Ho
                      Chi Minh City, Vietnam
                    </Text>
                    <Text>15 Hour ago</Text>
                  </View>
                </View>
              </ScrollView>
            </View>
          </View>
        );

      default:
        return null;
    }
  };

  return (
    <View className="flex-1 px-4 bg-white">
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View className="flex flex-row gap-6">
            {tabs.map((tab) => (
              <TouchableOpacity
                className="pb-1"
                key={tab}
                onPress={() => setSelectedTab(tab)}
                style={[
                  styles.tabButton,
                  {
                    borderBottomWidth: selectedTab === tab ? 2 : 0,
                    borderBottomColor:
                      selectedTab === tab ? "#009FC2" : "transparent",
                  },
                ]}
              >
                <Text
                  className="text-[15px] font-bold mt-3"
                  style={selectedTab === tab ? { color: "#007FC4" } : {}}
                >
                  {tab}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
      {renderTabContent()}
    </View>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
});
