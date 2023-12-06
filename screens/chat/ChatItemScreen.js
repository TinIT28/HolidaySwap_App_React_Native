import {
  AntDesign,
  Feather,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity } from "react-native";
import { View } from "react-native-animatable";
import { TextInput } from "react-native-paper";

export default function ChatItemScreen() {
  const navigation = useNavigation();
  return (
    <View className=" flex-1">
      <View className="bg-white w-full h-[100px]  flex flex-row items-center justify-start px-5">
        <TouchableOpacity
          className="flex flex-row w-[50px] h-[50px] bg-[#EBEBEB] rounded-full items-center justify-center"
          onPress={() => navigation.goBack()}
        >
          <AntDesign name="arrowleft" size={20} />
        </TouchableOpacity>
        <Text className="ml-8 text-[20px]">Nguyễn(Nguyen)</Text>
        <TouchableOpacity className="ml-[20%]">
          <MaterialCommunityIcons name="dots-vertical" size={20} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View className="px-4 py-4">
          <View className="flex flex-row  mb-3  ">
            <Image
              className="w-[40px] h-[40px] rounded-full"
              source={require("../../assets/images/avtChat5.jpg")}
            />
            <View className="ml-[5%] w-[80%]">
              <Text className="bg-gray-200   text-gray-600 py-2 px-2 rounded-tl-[20] rounded-tr-[20] rounded-br-[20] ">
                Hello, I want to talk to you about the house in Landmark81
              </Text>
              <Text className="text-gray-400 text-[12px]">15:42PM</Text>
            </View>
          </View>
          <View className="flex flex-row  mb-3 justify-end">
            <View className="w-[80%] mr-[5%] ">
              <Text className="bg-blue-500 justify-end  text-white py-2 px-2 rounded-tl-[20] rounded-tr-[20] rounded-bl-[20] ">
                Hello, I want to talk to you about the house in Landmark81
              </Text>
              <View className="flex flex-row justify-end">
                <Text className="text-gray-400 text-[12px] ">15:42PM</Text>
              </View>
            </View>
            <Image
              className="w-[40px] h-[40px] rounded-full"
              source={require("../../assets/images/avt.jpg")}
            />
          </View>
          <View className="flex flex-row  mb-3  ">
            <Image
              className="w-[40px] h-[40px] rounded-full"
              source={require("../../assets/images/avtChat5.jpg")}
            />
            <View className="ml-[5%] w-[80%]">
              <Text className="bg-gray-200   text-gray-600 py-2 px-2 rounded-tl-[20] rounded-tr-[20] rounded-br-[20] ">
                Hello, I want to talk to you about the house in Landmark81
              </Text>
              <Text className="text-gray-400 text-[12px]">15:42PM</Text>
            </View>
          </View>
          <View className="flex flex-row  mb-3 justify-end">
            <View className="w-[80%] mr-[5%] ">
              <Text className="bg-blue-500 justify-end  text-white py-2 px-2 rounded-tl-[20] rounded-tr-[20] rounded-bl-[20] ">
                Hello, I want to talk to you about the house in Landmark81
              </Text>
              <View className="flex flex-row justify-end">
                <Text className="text-gray-400 text-[12px] ">15:42PM</Text>
              </View>
            </View>
            <Image
              className="w-[40px] h-[40px] rounded-full"
              source={require("../../assets/images/avt.jpg")}
            />
          </View>
          <View className="flex flex-row  mb-3  ">
            <Image
              className="w-[40px] h-[40px] rounded-full"
              source={require("../../assets/images/avtChat5.jpg")}
            />
            <View className="ml-[5%] w-[80%]">
              <Text className="bg-gray-200   text-gray-600 py-2 px-2 rounded-tl-[20] rounded-tr-[20] rounded-br-[20] ">
                Hello, I want to talk to you about the house in Landmark81
              </Text>
              <Text className="text-gray-400 text-[12px]">15:42PM</Text>
            </View>
          </View>
          <View className="flex flex-row  mb-3 justify-end">
            <View className="w-[80%] mr-[5%] ">
              <Text className="bg-blue-500 justify-end  text-white py-2 px-2 rounded-tl-[20] rounded-tr-[20] rounded-bl-[20] ">
                Hello, I want to talk to you about the house in Landmark81
              </Text>
              <View className="flex flex-row justify-end">
                <Text className="text-gray-400 text-[12px] ">15:42PM</Text>
              </View>
            </View>
            <Image
              className="w-[40px] h-[40px] rounded-full"
              source={require("../../assets/images/avt.jpg")}
            />
          </View>
          <View className="flex flex-row  mb-3  ">
            <Image
              className="w-[40px] h-[40px] rounded-full"
              source={require("../../assets/images/avtChat5.jpg")}
            />
            <View className="ml-[5%] w-[80%]">
              <Text className="bg-gray-200   text-gray-600 py-2 px-2 rounded-tl-[20] rounded-tr-[20] rounded-br-[20] ">
                Hello, I want to talk to you about the house in Landmark81
              </Text>
              <Text className="text-gray-400 text-[12px]">15:42PM</Text>
            </View>
          </View>
          <View className="flex flex-row  mb-3 justify-end">
            <View className="w-[80%] mr-[5%] ">
              <Text className="bg-blue-500 justify-end  text-white py-2 px-2 rounded-tl-[20] rounded-tr-[20] rounded-bl-[20] ">
                Hello, I want to talk to you about the house in Landmark81
              </Text>
              <View className="flex flex-row justify-end">
                <Text className="text-gray-400 text-[12px] ">15:42PM</Text>
              </View>
            </View>
            <Image
              className="w-[40px] h-[40px] rounded-full"
              source={require("../../assets/images/avt.jpg")}
            />
          </View>
          <View className="flex flex-row  mb-3  ">
            <Image
              className="w-[40px] h-[40px] rounded-full"
              source={require("../../assets/images/avtChat5.jpg")}
            />
            <View className="ml-[5%] w-[80%]">
              <Text className="bg-gray-200   text-gray-600 py-2 px-2 rounded-tl-[20] rounded-tr-[20] rounded-br-[20] ">
                Hello, I want to talk to you about the house in Landmark81
              </Text>
              <Text className="text-gray-400 text-[12px]">15:42PM</Text>
            </View>
          </View>
          <View className="flex flex-row  mb-3 justify-end">
            <View className="w-[80%] mr-[5%] ">
              <Text className="bg-blue-500 justify-end  text-white py-2 px-2 rounded-tl-[20] rounded-tr-[20] rounded-bl-[20] ">
                Hello, I want to talk to you about the house in Landmark81
              </Text>
              <View className="flex flex-row justify-end">
                <Text className="text-gray-400 text-[12px] ">15:42PM</Text>
              </View>
            </View>
            <Image
              className="w-[40px] h-[40px] rounded-full"
              source={require("../../assets/images/avt.jpg")}
            />
          </View>
          <View className="flex flex-row  mb-3  ">
            <Image
              className="w-[40px] h-[40px] rounded-full"
              source={require("../../assets/images/avtChat5.jpg")}
            />
            <View className="ml-[5%] w-[80%]">
              <Text className="bg-gray-200   text-gray-600 py-2 px-2 rounded-tl-[20] rounded-tr-[20] rounded-br-[20] ">
                Hello, I want to talk to you about the house in Landmark81
              </Text>
              <Text className="text-gray-400 text-[12px]">15:42PM</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View className="px-4 py-3">
        <View className="bg-blue-100 border border-gray-300 rounded-3xl  px-2">
          <View className="flex flex-row justify-between items-center">
            <View className="flex flex-row items-center ">
              <TouchableOpacity className="border-r border-gray-400 pr-3">
                <MaterialCommunityIcons size={30} name="attachment" />
              </TouchableOpacity>

              <TextInput className="w-[70%] bg-transparent " value="Message" />
            </View>
            <View>
              <TouchableOpacity className="bg-blue-300 rounded-full px-1 py-1 flex flex-row items-center justify-center">
                <Feather name="send" size={25} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
