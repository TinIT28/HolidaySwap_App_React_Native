import React from "react";
import { View, Modal, TouchableOpacity } from "react-native";
import Button from "../button/Button";
import { Text } from "react-native";
import * as Icon from "react-native-feather";
import Date from "../../components/dateInput/Date";

const ModalDate = ({ modalVisibleDate, setModalVisibleDate }) => {
  const closeModal = () => {
    setModalVisibleDate(false);
  };

  return (
    <View className="flex-1 justify-center items-center bg-slate-200">
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleDate}
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
          <View className="m-5 bg-white rounded-3xl p-9 items-center shadow-md">
            <Date />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default ModalDate;
