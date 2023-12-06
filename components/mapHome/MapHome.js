import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { View } from "react-native-animatable";
import MapView, { Marker, Heatmap } from "react-native-maps";
import { Dimensions } from "react-native";

import { BottomSheet } from "react-native-btr";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { MapIcon, XMarkIcon } from "react-native-heroicons/solid";

export default function MapHome() {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
  const [mapLat, setMapLat] = useState(10.841328);
  const [mapLong, setMapLong] = useState(106.810473);

  const toggleBottomNavigationView = () => {
    setVisible(!visible);
  };
  return (
    <View className=" ">
      <View className=" mb-5">
        <TouchableOpacity
          onPress={toggleBottomNavigationView}
          className=" flex flex-row justify-center"
        >
          <View className="flex flex-row items-center bg-black shadow-2xl rounded-full py-1 px-2 text-center opacity-50">
            <MapIcon color={"white"} size={30} />
            <Text className=" text-white text-lg font-bold pl-2">Maps</Text>
          </View>
        </TouchableOpacity>
      </View>
      <BottomSheet
        visible={visible}
        onBackButtonPress={toggleBottomNavigationView}
        onBackdropPress={toggleBottomNavigationView}
      >
        <View style={styles.bottomNavigationView}>
          <View>
            <View className="py-3 border-b border-gray-300 flex flex-row gap-9 items-center">
              <XMarkIcon
                onPress={toggleBottomNavigationView}
                size={30}
                color={"black"}
              />
              <Text className="text-xl font-bold text-black">Maps</Text>
            </View>
            <MapView
              initialRegion={{
                latitude: 10.841328,
                longitude: 106.810473,
                latitudeDelta: 0.01,
                longitudeDelta: 0.02,
              }}
              style={styles.map}
              mapType="standard"
            >
              <Marker
                coordinate={{
                  latitude: 10.841328,
                  longitude: 106.810473,
                }}
                title="Thức Bui Resort"
                description="Saigon Park Resort"
                pinColor={"red"}
              />
              <Marker
                coordinate={{
                  latitude: 10.844406208155235,
                  longitude: 106.80725192959953,
                }}
                title="Thinh Bui Resort"
                description="Lakeview Villa"
                pinColor={"red"}
              />
              <Marker
                coordinate={{
                  latitude: 10.840191283504446,
                  longitude: 106.80785274439928,
                }}
                title="Duy Thuong Resort"
                description="Khu Nghỉ dưỡng Caroline Resort"
                pinColor={"red"}
              />
            </MapView>
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
    height: "100%",
  },
  map: {
    width: Dimensions.get("window").width,
    height: "100%",
  },
});
