import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import { View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import InputEmail from "../../components/input/InputEmail";
import InputPassword from "../../components/input/InputPassword";
import BtnLoginGoogle from "../../components/button/BtnLoginGoogle";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/userActions";

export default function SignInScreen() {
  const [isGreen, setIsGreen] = useState(false);
  const dispatch = useDispatch();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { error, loading, isAuthenticated, user } = useSelector(
    (state) => state.user
  );

  const [userLogin, setUserLogin] = useState();

  const navigation = useNavigation();

  const toggleColor = () => {
    setIsGreen(!isGreen);
  };

  const LoginSubmit = () => {
    dispatch(login(email, password));
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigation.navigate("root");
    }

    console.log("Check user in sign in screen", user);
  }, [isAuthenticated, navigation, error, user]);
  return (
    <ScrollView>
      <View className="flex justify-center items-center">
        <View className="flex-row items-center justify-center pt-10">
          <View className="-ml-[130px] mr-[70px]">
            <TouchableOpacity
              className="w-[55px] h-[55px] bg-[#D9D5D5] rounded-full flex justify-center items-center "
              onPress={() => navigation.goBack()}
            >
              <AntDesign name="arrowleft" size={20} color="#AAAAAA" />
            </TouchableOpacity>
          </View>
          <View>
            <Text className="font-bold text-[24px]">Sign In</Text>
          </View>
        </View>
        <View className="mt-10">
          <InputEmail email={email} onChange={(e) => setEmail(e)} />
          <InputPassword password={password} onChange={(e) => setPassword(e)} />
        </View>
        <View>
          <View className="flex-row mb-[30px] mt-[10px]">
            <View className="flex-row items-center mr-[80px]">
              <TouchableOpacity
                className=" mr-[5px] border-[0.5px] border-collapse border-black w-[15] h-[15] rounded-full"
                style={[{ backgroundColor: isGreen ? "#2196F3" : "#fff" }]}
                onPress={toggleColor}
              ></TouchableOpacity>
              <Text>Remember me</Text>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => navigation.navigate("ForgotPassword")}
              >
                <Text className="text-red-600">Forgot password?</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <TouchableOpacity
          onPress={LoginSubmit}
          className="w-[317px] h-[58px] bg-[#2196F3] mb-[13px] rounded-3xl flex justify-center items-center"
        >
          <Text className="text-white text-lg font-bold">Sign In</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
