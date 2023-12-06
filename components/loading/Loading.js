import React from "react";
import {
  View,
  StatusBar,
  StyleSheet,
  Text,
  ActivityIndicator,
  Image,
} from "react-native";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  loading: {
    width: 80,
    height: 80,
    marginTop: 550,
  },
});

export default function Loading() {
  return (
    <View style={styles.root}>
      <StatusBar hidden />
      <Image
        source={require("../../assets/images/LoadingGif.gif")}
        style={styles.loading}
      />
    </View>
  );
}
