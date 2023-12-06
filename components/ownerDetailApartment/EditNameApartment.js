import React, { useState } from "react";
import { ScrollView, TextInput, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { View } from "react-native-animatable";
import { BottomSheet } from "react-native-btr";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function EditNameApartment() {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);

  const [newApartmentName, setNewApartmentName] = useState("Landmark View");

  const [apartmentName, setApartmentName] = useState("Landmark View");
  const toggleBottomNavigationView = () => {
    if (apartmentName !== newApartmentName) {
      setApartmentName(newApartmentName);
    }
    setVisible(!visible);
  };
  return (
    <View className="">
      <View className="flex flex-row items-center justify-between">
        <View className="flex flex-row items-center">
          <Text className="font-bold">Name apartment: </Text>
          <TouchableOpacity onPress={toggleBottomNavigationView}>
            <View className="flex flex-row justify-between items-center">
              <View className="flex flex-row items-center ">
                <Text className="text-[20px] ">{apartmentName}</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={toggleBottomNavigationView}>
          <AntDesign size={25} color="#4180F4" name="edit" />
        </TouchableOpacity>
      </View>
      <BottomSheet
        visible={visible}
        onBackButtonPress={toggleBottomNavigationView}
        onBackdropPress={toggleBottomNavigationView}
      >
        <View style={styles.bottomNavigationView}>
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flex: 1, flexDirection: "row" }}>
              <ScrollView className="w-full px-4 mt-4 ">
                <TextInput
                  className="bg-blue-200 w-full px-2 py-4 rounded-lg"
                  placeholder="Landmark View"
                  value={newApartmentName}
                  onChangeText={(text) => setNewApartmentName(text)}
                />
                <View className="flex flex-row justify-end">
                  <TouchableOpacity
                    onPress={toggleBottomNavigationView}
                    className="bg-blue-500 rounded-md px-3 py-2 my-4"
                  >
                    <Text className="text-[20px] text-white">Apply</Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </View>
          </View>
        </View>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  bottomNavigationView: {
    backgroundColor: "#fff",
    width: "100%",
    height: "20%",
  },
});
