import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text } from "react-native";
import { View } from "react-native";
import AvtHeader from "../../components/Home/SearchHome";
import { ScrollView } from "react-native";
import CardProperty from "../../components/property/CardProperty";

export default function ListProperty() {
  const navigation = useNavigation();

  return (
    <>
      <AvtHeader />
      <ScrollView>
        <View className="px-4">
          <CardProperty />
        </View>
      </ScrollView>
    </>
  );
}
