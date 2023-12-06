import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  Keyboard,
  Pressable,
} from "react-native";
import * as Icon from "react-native-feather";
import OTPInputField from "../../components/input/OTPInputField";
import Button from "../../components/button/Button";
import { useNavigation } from "@react-navigation/native";
import ModalConfirm from "../../components/modal/ModalConfirm";
import ButtonBack from "../../components/button/ButtonBack";

const VerifyOPTScreen = () => {
  const navigation = useNavigation();
  const [code, setCode] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [pinReady, setPinReady] = useState(false);
  const MAX_CODE_LENGTH = 4;

  return (
    <View className="flex-1">
      <StatusBar style="light" />
      <SafeAreaView className="flex-1 bg-white">
        <ScrollView>
          {/* Button back */}
          <ButtonBack navigation={navigation} />

          {/* Title */}
          <View className="justify-center items-center flex w-full py-3">
            <Text className="text-lg font-normal mx-6 my-6 text-center">
              We have just sent digit code via your email: email@gmail.com
            </Text>
          </View>

          <Button
            text={"Continue"}
            disabled={!pinReady}
            style={{
              backgroundColor: !pinReady ? "#66B4F4" : "#2196F3",
              marginTop: 60,
            }}
            onPress={() => setModalVisible(true)}
          />

          <View>
            <View className="flex-row justify-center">
              <Text className="text-lg font-bold">Didn’t receive code? </Text>
              <Text className="text-lg font-bold text-[#2196F3]">
                Resend code
              </Text>
            </View>
          </View>

          {/* Modal */}
          <ModalConfirm
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
          />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default VerifyOPTScreen;
