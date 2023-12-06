import React, { useState } from "react";
import { TextInput, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { View } from "react-native-animatable";
import MapView, { Marker, Heatmap } from "react-native-maps";
import { Dimensions } from "react-native";

import { BottomSheet } from "react-native-btr";
import { FontAwesome6, Octicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { MapIcon, XMarkIcon } from "react-native-heroicons/solid";
import DropDownPicker from "react-native-dropdown-picker";

export default function ReviewBtn() {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
  const [rating, setRating] = useState(0);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Public", value: "Anonymous" },
    { label: "Anonymous", value: "" },
  ]);
  const toggleBottomNavigationView = () => {
    setVisible(!visible);
  };

  const handleStarPress = (selectedRating) => {
    setRating(selectedRating);
  };

  return (
    <View className=" ">
      <BottomSheet
        visible={visible}
        onBackButtonPress={toggleBottomNavigationView}
        onBackdropPress={toggleBottomNavigationView}
      >
        <View style={styles.bottomNavigationView}>
          <View>
            <View className="py-3 border-b w-full border-gray-300 flex flex-row gap-9 items-center px-2">
              <XMarkIcon
                onPress={toggleBottomNavigationView}
                size={30}
                color={"black"}
              />
              <Text className="text-xl font-bold text-black text-center">
                Review
              </Text>
            </View>
            <View className="px-5 py-10">
              <View>
                <Text className="text-[20px] font-bold">Rating</Text>
                <View className="flex flex-row items-center gap-1 py-5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <TouchableOpacity
                      key={star}
                      onPress={() => handleStarPress(star)}
                    >
                      <Octicons
                        name="star-fill"
                        size={30}
                        color={star <= rating ? "orange" : "gray"}
                      />
                    </TouchableOpacity>
                  ))}
                </View>

                <View>
                  <Text className="text-[20px] font-bold">Your comment</Text>
                  <View className="py-3">
                    <TextInput className="w-full h-[50px] border border-gray-500 rounded-md px-2" />
                  </View>
                </View>
                <View>
                  <Text className="text-[20px] font-bold">
                    Do you want to remain anonymous?
                  </Text>
                  <View className="py-5">
                    <DropDownPicker
                      open={open}
                      value={value}
                      items={items}
                      setOpen={setOpen}
                      setValue={setValue}
                      setItems={setItems}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View className="absolute bottom-5 right-5">
            <TouchableOpacity className="bg-blue-500 rounded-md px-7 py-3">
              <Text className="text-white">Submit</Text>
            </TouchableOpacity>
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
    height: "65%",
  },
  map: {
    width: Dimensions.get("window").width,
    height: "100%",
  },
});
