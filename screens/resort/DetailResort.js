import React from "react";
import { Image, Text } from "react-native";
import { View } from "react-native-animatable";
import AvtHeader from "../../components/Home/SearchHome";
import ImgHeaderDetail from "../../components/resort/ImgHeaderDetail";
import {
  AntDesign,
  Entypo,
  FontAwesome5,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";
import MapDetailResorts from "../../components/resort/Map";
import { useNavigation } from "@react-navigation/native";

export default function DetailResort() {
  const navigation = useNavigation();

  return (
    <>
      <View>
        <AvtHeader />
      </View>
      <ScrollView className="flex-1 ">
        <View className="bg-white">
          <View className="">
            <View>
              <ImgHeaderDetail />
            </View>
            <View className="px-3 py-2">
              <Text className="font-bold text-[20px]">
                Landmark 81 - Luxury Resort - Stay in the Top of Vietnam
              </Text>
            </View>
          </View>
        </View>

        <View className="bg-white mt-2 pr-3 pl-4 py-3 flex flex-row">
          <AntDesign size={20} name="creditcard" />
          <View>
            <Text className="text-[15px] font-bold ml-2">
              Don't need credit card
            </Text>
            <Text className="ml-2 mr-16">
              Some options cannot be booked without a credit card
            </Text>
          </View>
        </View>
        <View className="bg-white pt-3 pl-3 pb-4 ">
          <View className="flex flex-row items-center">
            <MaterialIcons size={25} color="gray" name="apartment" />
            <Text className="text-[15px] font-bold ml-3">Whole apartment</Text>
          </View>
          <Text className="ml-9 mt-1">private like at home</Text>
        </View>
        <View className="bg-white">
          <MapDetailResorts />
          <View className="pl-4 py-3">
            <Text className="text-[15px]">
              720A Đ. Điện Biên Phủ, Vinhomes Tân Cảng, Bình Thạnh, Thành phố Hồ
              Chí Minh, Vietnam
            </Text>
          </View>
        </View>
        <View className="bg-white pl-4 py-3 mt-2">
          <Text className="font-bold text-[20px] ">
            What customers love most
          </Text>
          <View className="flex flex-row items-center pt-4 pb-2">
            <Image
              className="w-[40px] h-[40px] rounded-full "
              source={require("../../assets/images/avt.jpg")}
            />
            <View className="ml-2">
              <Text className="font-bold ">Thuc</Text>
              <View className="flex flex-row gap-1 py-1 items-center">
                <AntDesign name="star" color="orange" />
                <AntDesign name="star" color="orange" />
                <AntDesign name="star" color="orange" />
                <AntDesign name="star" color="orange" />
                <AntDesign name="star" color="orange" />
              </View>
            </View>
          </View>
          <View>
            <Text>
              Lễ tân rất dễ thương và nhiệt tình.Phòng tiện nghi sạch sẽ ,có bàn
              ủi quần áo và yên tĩnh.Giường to êm ái sạch sẽ.Local ở ngay trung
              tâm view toàn cảnh trên cao rất đẹp.Đồ ăn ở nhà hàng tầng 77 rất
              ngon.Quán cà phê tầng 48 nhiều đồ uống và bánh ngọt.Mình rất thích
              ở đây và sẽ quay trở lại Một địa điểm đáng để thư giãn nhé mọi
              người.
            </Text>
            <TouchableOpacity>
              <Text className="text-blue-700 py-3">View all reviews</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="bg-white mt-2 pl-4">
          <Text className="text-[20px] font-bold py-2">Popular amenities</Text>
          <View className="flex flex-row items-center gap-5">
            <View>
              <View className="flex flex-row items-center mb-2">
                <FontAwesome5 size={20} color="gray" name="parking" />
                <Text className=" ml-2">private parking</Text>
              </View>
              <View className="flex flex-row items-center mb-2">
                <Ionicons size={20} color="gray" name="restaurant-outline" />
                <Text className=" ml-2">Restaurant</Text>
              </View>
            </View>
            <View>
              <View className="flex flex-row items-center mb-2">
                <FontAwesome5 size={20} color="gray" name="parking" />
                <Text className=" ml-2">Parking (on site)</Text>
              </View>
              <View className="flex flex-row items-center mb-2">
                <MaterialIcons size={20} color="gray" name="family-restroom" />
                <Text className=" ml-2">Family room</Text>
              </View>
            </View>
          </View>
          <View className="flex flex-row items-center ">
            <AntDesign size={20} color="gray" name="wifi" />
            <Text className=" ml-2">Free wifi</Text>
          </View>
          <TouchableOpacity>
            <Text className="text-blue-700 pt-3 pb-4">View all convenient</Text>
          </TouchableOpacity>
        </View>
        <View className="bg-white pl-4 pr-3">
          <Text className="font-bold text-[20px] pb-3">
            visitors' questions
          </Text>
          <View className="flex flex-row ">
            <AntDesign size={15} name="message1" />
            <Text className="ml-1 -mt-1 pr-3 ">
              Hello! I have some days off next week. I’m going to travel
              somewhere but I don’t have any good ideas. Could you recommend me
              some beautiful places in Viet Nam?
            </Text>
          </View>
          <View className="bg-gray-200 rounded-md px-3 py-2 mt-2">
            <Text>19 August 2023</Text>
            <Text>
              Thanks for you interset. Hello! I have some days off next week.
              I’m going to travel somewhere but I don’t have any good ideas.
              Could you recommend me some beautiful places in Viet Nam?
            </Text>
          </View>
          <TouchableOpacity>
            <Text className="text-blue-700 py-3">View all 1 question</Text>
          </TouchableOpacity>
          <TouchableOpacity className="border border-blue-700 w-full mt-3 mb-2 rounded-md">
            <Text className="text-blue-700 text-center py-3">
              Make a question
            </Text>
          </TouchableOpacity>
          <Text className="w-full text-center pb-3">
            Usually respond within a few hours
          </Text>
        </View>
        <View className="bg-white mt-2 px-4">
          <Text className="text-[20px] font-bold">Describe</Text>
          <Text className="">
            Landmark 81 - Luxury Resort - Stay in the Top of Vietnam features
            spa faciliities and wellness packages, as well as air-conditioned
            accommodation w...
          </Text>
          <TouchableOpacity>
            <Text className="text-blue-700 text-[15px] py-3">
              Read all describe
            </Text>
          </TouchableOpacity>
        </View>

        <View className="bg-white mt-2 pl-4">
          <Text className="text-[20px] font-bold">
            Let's cook for ourselves! - like at home
          </Text>
          <Text>This resort is equipped with cooking facilities</Text>
          <View className="flex flex-row items-center pt-3 gap-5">
            <View>
              <View className="flex flex-row mb-1 items-center ">
                <Entypo size={20} name="check" color="#0073CF" />
                <Text className="text-[18px] ml-2">Dinner table</Text>
              </View>
              <View className="flex flex-row mb-1 items-center">
                <Entypo size={20} name="check" color="#0073CF" />
                <Text className="text-[18px] ml-2">Griller</Text>
              </View>
            </View>
            <View>
              <View className="flex flex-row mb-1 items-center">
                <Entypo size={20} name="check" color="#0073CF" />
                <Text className="text-[18px] ml-2">Microwave oven</Text>
              </View>
              <View className="flex flex-row mb-1 items-center">
                <Entypo size={20} name="check" color="#0073CF" />
                <Text className="text-[18px] ml-2">Fridge</Text>
              </View>
            </View>
          </View>
          <View className="flex flex-row gap-5 pt-2">
            <View>
              <View className="flex flex-row mb-1 items-center">
                <Entypo size={20} name="check" color="#0073CF" />
                <Text className="text-[18px] ml-2">Stove</Text>
              </View>
              <View className="flex flex-row mb-1 items-center">
                <Entypo size={20} name="check" color="#0073CF" />
                <Text className="text-[18px] ml-2">kettle</Text>
              </View>
            </View>
          </View>
        </View>
        <View className="bg-white mt-2 pl-4 pr-3">
          <Text className="text-[20px] font-bold">Rules</Text>
          <View className="py-3">
            <Text>Check-in is from 14:00 to 16:00</Text>
            <Text>Check-out is from 08:00 to 12:00</Text>
          </View>
          <View className="flex flex-row items-center">
            <Text className="text-white bg-green-400 px-2  mr-2">Free</Text>
            <Text>Free wifi have at resort and each apartment</Text>
          </View>
          <TouchableOpacity>
            <Text className="text-blue-700 font-bold py-3">
              View all rules of resort
            </Text>
          </TouchableOpacity>

          <Text className="text-[20px] font-bold">Children and extra beds</Text>
          <Text className="mt-2">
            Suitable for all children. To see accurate pricing and availability
            information please add the number and age of children in your group
            when searching.
          </Text>
          <TouchableOpacity>
            <Text className="text-blue-700 font-bold py-3">View all rules</Text>
          </TouchableOpacity>

          <View>
            <Text className="text-[20px] font-bold">Important information</Text>
            <Text>
              The resort does not allow musical activities that cause noise or
              disorder
            </Text>
            <TouchableOpacity>
              <Text className="text-blue-700 font-bold py-3">Read more</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="bg-white mt-2 pl-4 pr-3">
          <Text className="text-[20px] font-bold mt-2">Infomation*</Text>
          <View className="flex flex-row items-center mb-2">
            <FontAwesome5 size={20} color="gray" name="parking" />
            <Text className=" ml-2 py-3"> Have parking</Text>
          </View>
        </View>
      </ScrollView>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("ListProperty")}
          className="bg-blue-500"
        >
          <Text className="text-center text-white font-bold py-4">
            List Property
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
