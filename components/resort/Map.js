import React, { useState } from "react";
import MapView, { Marker, Heatmap } from "react-native-maps";
import { StyleSheet, View, Text } from "react-native";
import { Dimensions } from "react-native";

export default function MapDetailResorts() {
  const [mapLat, setMapLat] = useState(10.841328);
  const [mapLong, setMapLong] = useState(106.810473);

  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          latitude: 10.795909283931664,
          longitude: 106.72132516778024,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        style={styles.map}
        mapType="standard"
      >
        <Marker
          coordinate={{
            latitude: 10.795267202562,
            longitude: 106.72173566479273,
          }}
          title="Lanmark81"
          // description="T"
          pinColor={"red"}
        />
      </MapView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 100,
  },
  map: {
    width: Dimensions.get("window").width,
    height: 150,
  },
});
