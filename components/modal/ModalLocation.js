import React from "react";
import { View, Modal, TouchableOpacity } from "react-native";
import { Text } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import SearchBar from "../search/SearchBar";
import { ScrollView } from "react-native";

const ModalLocation = ({ modalVisibleLocation, setModalVisibleLocation }) => {
  const closeModal = () => {
    setModalVisibleLocation(false);
  };

  return (
    <View className="flex-1 justify-center items-center bg-slate-200">
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleLocation}
        onRequestClose={closeModal}
      >
        <TouchableOpacity
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          activeOpacity={1}
          onPress={closeModal}
        >
          {/* Mờ nền */}
          <View
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              backgroundColor: "rgba(0, 0, 0, 0.5)", // Màu xám semi-transparent
            }}
          />
          <View className="flex-1 justify-center opacity-90">
            <View className="flex-col sm-5 bg-white rounded-3xl  px-[5px] h-[500px]  shadow-md">
              <View className="flex-row justify-center mr-[80px] mt-[20px] ">
                <TouchableOpacity onPress={closeModal} className="mt-[5px]">
                  <AntDesign name="close" size={25} />
                </TouchableOpacity>
                <Text className="mb-4 text-center text-3xl font-black ml-[50px]">
                  Location
                </Text>
              </View>
              <View className="flex-row items-center">
                <View className="w-[300px] ">
                  <SearchBar />
                </View>
                <View>
                  <TouchableOpacity className="w-[70px] h-[50px] bg-[#2196F3] rounded-[20px] items-center justify-center">
                    <Text className="font-bold text-white">Send</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <ScrollView showsVerticalScrollIndicator={false}>
                <TouchableOpacity className="flex-row items-center ml-[20px] mb-[10px] mt-[10px]">
                  <View className="w-[40px] h-[40px] bg-slate-400 rounded-full items-center justify-center">
                    <EvilIcons name="location" size={25} />
                  </View>
                  <View className="ml-[10px]">
                    <Text className="text-[20px] font-bold">
                      Reort Camping Lak
                    </Text>
                    <Text>Hồ Lak, huyện Lak, Đak Lak</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity className="flex-row items-center ml-[20px] mb-[10px] mt-[10px]">
                  <View className="w-[40px] h-[40px] bg-slate-400 rounded-full items-center justify-center">
                    <EvilIcons name="location" size={25} />
                  </View>
                  <View className="ml-[10px]">
                    <Text className="text-[20px] font-bold">Quy Nhơn</Text>
                    <Text>Bình Định Việt Nam</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity className="flex-row items-center ml-[20px] mb-[10px] mt-[10px]">
                  <View className="w-[40px] h-[40px] bg-slate-400 rounded-full items-center justify-center">
                    <EvilIcons name="location" size={25} />
                  </View>
                  <View className="ml-[10px]">
                    <Text className="text-[20px] font-bold">
                      Khu nghỉ dưỡng Đak San
                    </Text>
                    <Text>Huyện Đak Glong, Dak Nông</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity className="flex-row items-center ml-[20px] mb-[10px] mt-[10px]">
                  <View className="w-[40px] h-[40px] bg-slate-400 rounded-full items-center justify-center">
                    <EvilIcons name="location" size={25} />
                  </View>
                  <View className="ml-[10px]">
                    <Text className="text-[20px] font-bold">
                      Resort Terra Mi-A
                    </Text>
                    <Text>Huyện Chư Sê, Gia Lai</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity className="flex-row items-center ml-[20px] mb-[10px] mt-[10px]">
                  <View className="w-[40px] h-[40px] bg-slate-400 rounded-full items-center justify-center">
                    <EvilIcons name="location" size={25} />
                  </View>
                  <View className="ml-[10px]">
                    <Text className="text-[20px] font-bold">Ho Lak</Text>
                    <Text>Huyen Lak, Dak Lak</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity className="flex-row items-center ml-[20px] mb-[10px] mt-[10px]">
                  <View className="w-[40px] h-[40px] bg-slate-400 rounded-full items-center justify-center">
                    <EvilIcons name="location" size={25} />
                  </View>
                  <View className="ml-[10px]">
                    <Text className="text-[20px] font-bold">Ho Lak</Text>
                    <Text>Huyen Lak, Dak Lak</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity className="flex-row items-center ml-[20px] mb-[10px] mt-[10px]">
                  <View className="w-[40px] h-[40px] bg-slate-400 rounded-full items-center justify-center">
                    <EvilIcons name="location" size={25} />
                  </View>
                  <View className="ml-[10px]">
                    <Text className="text-[20px] font-bold">Ho Lak</Text>
                    <Text>Huyen Lak, Dak Lak</Text>
                  </View>
                </TouchableOpacity>
              </ScrollView>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default ModalLocation;
