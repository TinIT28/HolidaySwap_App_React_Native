import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { Text, View } from "react-native";
import { BottomSheet } from "react-native-btr";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function InputGuestBottomSheet(props) {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [selectedLocation, setSelectedLocation] = useState(null);

  const [showGuestCount, setShowGuestCount] = useState(false);

  const toggleBottomNavigationView = () => {
    setVisible(!visible);
  };

  const applyChanges = () => {
    toggleBottomNavigationView();
    setShowGuestCount(true);
    props.setNumberGuest(adultCount);
  };

  const resetCounts = () => {
    setAdultCount(0);
    setChildCount(0);
    setBabyCount(0);
    setPetCount(0);
  };

  const [adultCount, setAdultCount] = useState(0);
  const incrementAdultCount = () => {
    setAdultCount(adultCount + 1);
  };
  const decrementAdultCount = () => {
    if (adultCount > 0) {
      setAdultCount(adultCount - 1);
    }
  };

  const [childCount, setChildCount] = useState(0);
  const incrementChildCount = () => {
    setChildCount(childCount + 1);
  };
  const decrementChildCount = () => {
    if (childCount > 0) {
      setChildCount(childCount - 1);
    }
  };

  const [babyCount, setBabyCount] = useState(0);
  const incrementBabyCount = () => {
    setBabyCount(babyCount + 1);
  };
  const decrementBabyCount = () => {
    if (babyCount > 0) {
      setBabyCount(babyCount - 1);
    }
  };

  const [petCount, setPetCount] = useState(0);
  const incrementPetCount = () => {
    setPetCount(petCount + 1);
  };
  const decrementPetCount = () => {
    if (petCount > 0) {
      setPetCount(petCount - 1);
    }
  };

  const isAdultCountChanged = adultCount > 0;
  const isChildCountChanged = childCount > 0;
  const isBabyCountChanged = babyCount > 0;
  const isPetCountChanged = petCount > 0;

  return (
    <View style={styles.container}>
      <View style={styles.shadow} className="bg-white rounded-xl px-5 py-5 mt-5 ">
        <TouchableOpacity onPress={toggleBottomNavigationView}>
          <View className="flex flex-row justify-between">
            <Text>Guest:</Text>
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>
              {isAdultCountChanged ? `Adult: ${adultCount} ` : ""}
              {isChildCountChanged ? `Children: ${childCount} ` : ""}
              {isBabyCountChanged ? `Baby: ${babyCount} ` : ""}
              {isPetCountChanged ? `Pet: ${petCount}` : ""}
              {!isAdultCountChanged && !isChildCountChanged && !isBabyCountChanged && !isPetCountChanged
                ? "Add guest"
                : ""}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <BottomSheet
        visible={visible}
        onBackButtonPress={toggleBottomNavigationView}
        onBackdropPress={toggleBottomNavigationView}>
        <View style={styles.bottomNavigationView}>
          <View className="flex-1 flex-col justify-between">
            <View className="px-4">
              <View style={styles.shadow} className="bg-white rounded-xl px-5 mt-5 py-4">
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>Who's coming?</Text>
                <View className="flex flex-row items-center justify-between mt-5">
                  <View>
                    <Text className="text-[17px]">Adult</Text>
                    <Text className="text-gray-500">From 13 years old and up</Text>
                  </View>
                  <View className="flex flex-row items-center gap-5">
                    <TouchableOpacity onPress={decrementAdultCount}>
                      <AntDesign name="minuscircleo" size={20} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 18 }}>{adultCount}</Text>
                    <TouchableOpacity onPress={incrementAdultCount}>
                      <AntDesign name="pluscircleo" size={20} />
                    </TouchableOpacity>
                  </View>
                </View>
                {/* <View className="bg-gray-400 h-[1px] w-full my-4"></View>

                <View className="flex flex-row items-center justify-between">
                  <View>
                    <Text className="text-[17px]">Children</Text>
                    <Text style={{ color: "gray" }}>Ages 2 - 12</Text>
                  </View>
                  <View className="flex flex-row items-center gap-5">
                    <TouchableOpacity onPress={decrementChildCount}>
                      <AntDesign name="minuscircleo" size={20} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 18 }}>{childCount}</Text>
                    <TouchableOpacity onPress={incrementChildCount}>
                      <AntDesign name="pluscircleo" size={20} />
                    </TouchableOpacity>
                  </View>
                </View>
                <View className="bg-gray-400 h-[1px] w-full my-5"></View>

                <View className="flex flex-row items-center justify-between">
                  <View>
                    <Text className="text-[17px]">Baby</Text>
                    <Text style={{ color: "gray" }}>Under 2 years old</Text>
                  </View>
                  <View className="flex flex-row items-center gap-5">
                    <TouchableOpacity onPress={decrementBabyCount}>
                      <AntDesign name="minuscircleo" size={20} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 18 }}>{babyCount}</Text>
                    <TouchableOpacity onPress={incrementBabyCount}>
                      <AntDesign name="pluscircleo" size={20} />
                    </TouchableOpacity>
                  </View>
                </View>
                <View className="bg-gray-400 h-[1px] my-5 w-full"></View> */}

                {/* <View className="flex flex-row items-center justify-between">
                  <View>
                    <Text className="text-[17px]">Pets</Text>
                    <Text style={{ color: "gray" }}>
                      Rules about bringing pets
                    </Text>
                  </View>
                  <View className="flex flex-row items-center gap-5">
                    <TouchableOpacity onPress={decrementPetCount}>
                      <AntDesign name="minuscircleo" size={20} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 18 }}>{petCount}</Text>
                    <TouchableOpacity onPress={incrementPetCount}>
                      <AntDesign name="pluscircleo" size={20} />
                    </TouchableOpacity>
                  </View>
                </View> */}
              </View>
            </View>
            <View className="px-4 border-t border-gray-400 py-3">
              <View className="flex flex-row items-center justify-between">
                <TouchableOpacity onPress={resetCounts} style={{ fontSize: 18, fontWeight: "bold" }}>
                  <Text className="font-bold underline">Clear All</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={applyChanges} className=" bg-blue-500 px-10 py-3 rounded-xl">
                  <Text className=" text-[16px] font-bold text-white">Apply</Text>
                </TouchableOpacity>
              </View>
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
    height: "60%",
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
});
