import React, { useState } from "react";
import { View, Modal } from "react-native";
import Button from "../button/Button";
import { Text } from "react-native";
import * as Icon from "react-native-feather";
import { useNavigation } from "@react-navigation/native";

const ModalConfirm = ({ modalVisible, setModalVisible }) => {
  const navigation = useNavigation();
  return (
    <View className="flex-1 justify-center items-center bg-slate-200">
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View className="flex-1 justify-center items-center bg-slate-200 opacity-90">
          <View className="m-5 bg-white rounded-3xl p-9 items-center shadow-md">
            <View className="p-7 bg-green-500 rounded-full">
              <Icon.Check
                strokeWidth={3}
                stroke={"#FFFFFF"}
                width={35}
                height={35}
              />
            </View>
            <Text className="mb-4 text-center text-3xl font-black">
              You have signed up successfully!
            </Text>

            <Button
              text={"Continue"}
              onPress={() => navigation.navigate("SignInScreen")}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalConfirm;
