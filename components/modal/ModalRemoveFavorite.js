import React from "react";
import {
  View,
  Modal,
  Text,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import * as Icon from "react-native-feather";
import { useNavigation } from "@react-navigation/native";

const ModalRemoveFavorite = ({
  modalVisible,
  setModalVisible,
  onRemoveItem,
  itemToDelete,
}) => {
  const navigation = useNavigation();

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const handleSurePress = () => {
    toggleModal();

    // Gọi hàm xóa mục với thông tin itemToDelete
    onRemoveItem(itemToDelete);

    ToastAndroid.showWithGravityAndOffset(
      "Removed from favorites",
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50
    );
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "slategray",
      }}
    >
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
            <Text
              style={{
                marginBottom: 15,
                textAlign: "center",
                fontSize: 30,
                fontWeight: "bold",
              }}
            >
              Are you sure yet?
            </Text>
            <View className="flex flex-row items-center justify-between gap-20">
              <TouchableOpacity onPress={toggleModal}>
                <Text className="bg-gray-300 px-5 py-2 rounded-lg">Not</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleSurePress}>
                <Text className="bg-blue-500 text-white px-5 py-2 rounded-lg">
                  Sure
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalRemoveFavorite;
