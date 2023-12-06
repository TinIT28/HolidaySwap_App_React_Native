import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import { TextInput } from "react-native-paper";
import { StyleSheet } from "react-native";
import { Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { loadUser, updateProfile } from "../../redux/actions/userActions";
import { Text } from "react-native";
import { ScrollView } from "react-native";
import { TouchableOpacity } from "react-native";
import { View } from "react-native-animatable";
import UploadImage from "../../components/addApartment/UploadImage";
import UploadImageProfile from "./UploadImageProfile";
import { launchImageLibrary } from "react-native-image-picker";

export default function ManageAccount() {
  const { user, userProfile, loading, error, isAuthenticated } = useSelector(
    (state) => state.user
  );

  const { success, isUpdated } = useSelector((state) => state.profile);

  const dispatch = useDispatch();
  const [avatar, setAvatar] = useState(userProfile?.avatar);
  const [avatarSubmit, setAvatarSubmit] = useState();
  const [fullName, setFullName] = useState(userProfile?.fullName);
  const [dob, setDob] = useState(userProfile?.dob);
  const [gender, setGender] = useState(userProfile?.gender);

  const handleSaveProfile = () => {
    const userData = {
      avatar: avatarSubmit ?? userProfile.avatar,
      fullName: fullName,
      gender: gender,
      dob: dob,
    };

    console.log("Check user data", userData);

    dispatch(updateProfile(userData));
  };

  useEffect(() => {
    if (success === true) {
      navigation.navigate("root");
    }
  }, [success, navigation]);

  const navigation = useNavigation();

  console.log("Check profile in edit", userProfile);

  const handleChangeImage = (value) => {
    setAvatar(Object.assign({}, value));
    setAvatarSubmit(Object.assign({}, value));
  };

  console.log("Check avatar", avatar);

  return (
    <View className="flex-1">
      <View className="bg-blue-500 w-full h-[100px]  flex flex-row items-center justify-start px-5">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={30} color="white" />
        </TouchableOpacity>
        <Text className="ml-8 text-[20px] text-white">Your details</Text>
      </View>
      <ScrollView>
        <View style={styles.shadow} className="mx-2 my-2 px-4 py-4 bg-white ">
          <Text className="text-[15px] mt-5 font-bold">Public Details</Text>
          <View className="flex flex-row items-center py-5 gap-5">
            <Image
              className="w-16 h-16 rounded-full"
              source={{ uri: avatar["0"]["uri"] || userProfile?.avatar }}
            />

            <TextInput
              className=" bg-transparent px-1 w-[72%] border-b border-gray-500"
              value={fullName}
              editable={false}
            />
          </View>
          <UploadImageProfile handleChangeImage={handleChangeImage} />
        </View>
        <View style={styles.shadow} className="mx-2 my-2 px-4 py-4 bg-white ">
          <Text className="text-[15px] font-bold">Personal infomation</Text>
          <View className="my-5">
            <TextInput
              // onChangeText={handleInputChange}
              label={"Full Name"}
              className="w-[100%] bg-transparent border-b border-gray-400"
              value={fullName}
              onChangeText={(text) => setFullName(text)}
            />
          </View>
          <View className="my-5">
            <TextInput
              label={"Date of birth"}
              // onChangeText={handleInputChange}
              keyboardType="numbers-and-punctuation"
              className=" bg-transparent w-[100%] border-b border-gray-400"
              value={dob}
              onChangeText={(text) => setDob(text)}
            />
          </View>

          {/* <View className="my-5">
            <TextInput
              // onChangeText={handleInputChange}
              label="Phone number"
              editable={false}
              value={userProfile?.phone}
              className="  w-[100%] border-b border-gray-400 bg-transparent"
            />
          </View> */}
          <View className="my-5">
            <TextInput
              // onChangeText={handleInputChange}
              className="w-[100%] border-b border-gray-400 bg-transparent"
              label="Gender"
              value={gender}
              onChangeText={(text) => setGender(text)}
            />
          </View>
        </View>
        <View style={styles.shadow} className="mx-2 my-2 px-4 py-4 bg-white ">
          <Text>Email adress</Text>
          <View className="flex flex-row items-center gap-4 py-4">
            <AntDesign name="checkcircleo" size={25} color="green" />
            <View>
              <Text>{userProfile?.email}</Text>
              <Text>{userProfile?.phone}</Text>
              <Text>Email and phone has been confirmed</Text>
            </View>
          </View>
          <TouchableOpacity>
            <Text className="text-blue-500">EDIT EMAIL ADDRESS</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={handleSaveProfile}>
          <Text className="text-[20px] bg-blue-500 p-3 text-center text-white mx-2 my- font-bold">
            Save
          </Text>
        </TouchableOpacity>
      </ScrollView>
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
