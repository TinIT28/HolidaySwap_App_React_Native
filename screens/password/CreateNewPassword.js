import { StatusBar } from "expo-status-bar";
import React from "react";
import { ScrollView, Text, View, SafeAreaView } from "react-native";
import ButtonBack from "../../components/button/ButtonBack";
import { useNavigation } from "@react-navigation/native";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";

const CreateNewPassword = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-1">
      <StatusBar style="dark" />
      <SafeAreaView className="bg-white flex-1">
        <ScrollView className="flex-1">
          {/* Button Back */}
          <ButtonBack navigation={navigation} />

          {/* Title */}
          <View className="justify-center items-center flex w-full py-3">
            <Text className="text-3xl font-black justify-center mt-5">
              Create a new password
            </Text>
            <Text className="text-lg font-normal">Enter your new password</Text>
          </View>

          {/* Input */}
          <View>
            <Input
              label={"New Password"}
              placeholder={"Enter your new password"}
              secure={true}
            />

            <Input
              label={"Confirm Password"}
              placeholder={"Enter your confirm password"}
              secure={true}
            />
          </View>

          <Button
            onPress={() => navigation.navigate("SignInScreen")}
            text={"Continue"}
            style={{ marginTop: 40 }}
          />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default CreateNewPassword;
