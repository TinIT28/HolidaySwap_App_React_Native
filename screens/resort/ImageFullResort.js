import React from "react";
import { Image } from "react-native";
import { View } from "react-native-animatable";
import AvtHeader from "../../components/Home/SearchHome";
import { ScrollView } from "react-native";
import { TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function ImageFullResort() {
  const navigation = useNavigation();
  return (
    <>
      <View>
        <AvtHeader />
      </View>
      <ScrollView>
        <View className="px-2  mt-2">
          <View className="mb-2">
            <View>
              <Image
                className="w-full h-[300px] mb-2"
                source={{
                  uri: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/496850387.jpg?k=5564e90a2b71893855bc439d5857b7eb1e6d283e4b7b331b446cb6480cad0c60&o=&hp=1",
                }}
              />
            </View>
            <View className=" flex flex-row  gap-2">
              <Image
                className="w-[48%] h-[200px]"
                source={{
                  uri: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/496850375.jpg?k=1db7e7976d05f46e84627d51a45fd09ac50de8bfb1e3088e40145148f2be2bce&o=&hp=1",
                }}
              />
              <Image
                className="w-[48%] h-[200px]"
                source={{
                  uri: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/496852455.jpg?k=9bb4d026ab29472934805e3984b9e2492e6673701bc99e418494d3b4399f86ed&o=&hp=1",
                }}
              />
            </View>
          </View>
          <View className="mb-2">
            <View>
              <Image
                className="w-full h-[300px] mb-2"
                source={{
                  uri: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/496850388.jpg?k=e52e10995136a37426aade34121eb9b37dd495014300db844111af47dc5f6e87&o=&hp=1",
                }}
              />
            </View>
            <View className=" flex flex-row  gap-2">
              <Image
                className="w-[48%] h-[200px]"
                source={{
                  uri: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/496852443.jpg?k=07eb32e02a17825c74f7f8548b24f3801db04fe97816269ad933e4a51cb608e2&o=&hp=1",
                }}
              />
              <Image
                className="w-[48%] h-[200px]"
                source={{
                  uri: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/496852428.jpg?k=f35c56cf4b0c1da31d7f4f480eb43ce6edae3cd7f3f8e29d6d38a85d545cfb36&o=&hp=1",
                }}
              />
            </View>
          </View>
          <View className="">
            <View>
              <Image
                className="w-full h-[300px] mb-2"
                source={{
                  uri: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/496850376.jpg?k=4324f200a84938085d126b10250156222c265a9654dee2b654056e7eda2c5bd3&o=&hp=1",
                }}
              />
            </View>
            <View className=" flex flex-row  gap-2">
              <Image
                className="w-[48%] h-[200px]"
                source={{
                  uri: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/496850361.jpg?k=fcdb680c6e707045a5b3efa80937c0a2de08559e407b514d675e9c0a661eb2c1&o=&hp=1",
                }}
              />
              <Image
                className="w-[48%] h-[200px]"
                source={{
                  uri: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/496881161.jpg?k=b35ff95e5b249131373604064e0163fba033831d5d96a3bf8e97eef275e89920&o=&hp=1",
                }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <View className="mx-3 my-2">
        <TouchableOpacity
          onPress={() => navigation.navigate("ListApartment")}
          className="w-full bg-blue-500 "
        >
          <Text className="text-center py-4 text-white text-[17px] font-bold">
            See vacant apartments
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
