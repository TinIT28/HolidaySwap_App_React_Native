import React, { useEffect } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import {
  AntDesign,
  Feather,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
  Octicons,
} from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { TouchableOpacity } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import * as SecureStore from "expo-secure-store";
import { loadUser } from "../../redux/actions/userActions";

export default function ProfileScreen() {
  const dispatch = useDispatch();
  const { user, userProfile, loading, error, isAuthenticated } = useSelector(
    (state) => state.user
  );

  useFocusEffect(
    React.useCallback(() => {
      dispatch(loadUser());
    }, [dispatch])
  );

  const navigation = useNavigation();
  const signOut = () => {
    SecureStore.deleteItemAsync("secure_token")
      .then(navigation.navigate("SignInScreen"))
      .catch((error) => {
        console.log("Check error", error);
      });
  };

  // console.log("Check profile", userProfile);

  return (
    <View>
      <View className="bg-blue-500 w-full h-[100px] justify-between flex flex-row items-center px-5">
        <View className="flex flex-row items-center gap-8">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back-outline" size={30} color="white" />
          </TouchableOpacity>
          <Text className="text-[20px] text-white">Profile</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("HelpCenter")}>
          <AntDesign name="infocirlceo" size={20} color="white" />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View className="flex flex-col h-[200px] w-full absolute bg-blue-500 items-center">
          {userProfile?.avatar ? (
            <Image
              className="w-[80px] h-[80px] rounded-full"
              source={{ uri: userProfile?.avatar }}
            />
          ) : (
            <Image className="w-[80px] h-[80px] rounded-full" />
          )}

          <Text className="text-[30px] font-bold text-white py-2">
            {userProfile?.fullName}
          </Text>
          {/* <Text className="text-yellow-400">{userProfile?.role.name}</Text> */}
        </View>
        <View className="px-4 flex flex-col items-center">
          <View className="bg-white rounded-md w-[95%] relative mt-40 border border-gray-300 px-3 py-3">
            <Text className="text-center">
              Welcome to experience our app! Hopefully you will have interesting
              and rewarding moments.
            </Text>
            <View className="bg-gray-300 w-full h-[1px] my-5" />
            <View className="flex flex-col items-center">
              <Text className="py-3">Start looking for a vacation now!!</Text>
              <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                <Text className="text-blue-500 font-bold text-[20px]">
                  HolidaySwap!
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View className="px-3 mt-4 mb-32">
          <Text className="text-[17px] font-bold mb-3">Account</Text>
          <View className=" flex flex-col gap-1">
            <TouchableOpacity
              onPress={() => navigation.navigate("ManageAccount")}
              className="flex flex-row items-center gap-3"
            >
              <Feather name="user" size={20} color="gray" />
              <Text>Edit account</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Wallet")}
              className="flex flex-row items-center gap-3"
            >
              <AntDesign name="wallet" size={20} color="gray" />
              <Text>Wallet</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("YourTrip")}
              className="flex flex-row items-center gap-3"
            >
              <MaterialCommunityIcons
                name="clipboard-list-outline"
                size={20}
                color="gray"
              />
              <Text>Booking history</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("YourApartment")}
              className="flex flex-row items-center gap-3"
            >
              <MaterialCommunityIcons
                name="home-city-outline"
                size={20}
                color="gray"
              />
              <Text>Your Apartment </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("OwnerBooking")}
              className="flex flex-row items-center gap-3"
            >
              <Octicons name="list-unordered" size={20} color="gray" />
              <Text>Owner booking </Text>
            </TouchableOpacity>
          </View>
          <Text className="text-[17px] font-bold mt-7 mb-3">Help</Text>
          <View className=" flex flex-col gap-1">
            <TouchableOpacity
              onPress={() => navigation.navigate("HelpCenter")}
              className="flex flex-row items-center gap-3"
            >
              <Ionicons name="help-circle-outline" size={20} />
              <Text>Contact customer service</Text>
            </TouchableOpacity>
          </View>
          <Text className="text-[17px] font-bold mt-7 mb-3">Discover</Text>
          <View className=" flex flex-col gap-1">
            <TouchableOpacity
              onPress={() => navigation.navigate("PostBlog")}
              className="flex flex-row items-center gap-3"
            >
              <Octicons name="note" size={20} />
              <Text>Posting about travel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("BlogComunity")}
              className="flex flex-row items-center gap-3"
            >
              <Ionicons name="people-outline" size={20} />
              <Text>Comunity travel</Text>
            </TouchableOpacity>
          </View>
          <Text className="text-[17px] font-bold mt-7 mb-3">
            Setting and Juridical
          </Text>
          <View className=" flex flex-col gap-1">
            <TouchableOpacity className="flex flex-row items-center gap-3">
              <AntDesign name="setting" size={20} />
              <Text>Setting</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity className="flex flex-row items-center gap-3">
              <FontAwesome name="balance-scale" size={20} />
              <Text>Juridical</Text>
            </TouchableOpacity> */}
          </View>
          <Text className="text-[17px] font-bold mt-7 mb-3">Partner</Text>
          <View className=" flex flex-col gap-1">
            <TouchableOpacity
              onPress={() => navigation.navigate("Landing")}
              className="flex flex-row items-center gap-3"
            >
              <MaterialCommunityIcons name="home-plus-outline" size={20} />
              <Text>Add apartment</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={signOut}
              className="flex flex-row items-center gap-3"
            >
              <AntDesign color="red" name="logout" size={20} />
              <Text className="text-red-600">Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
