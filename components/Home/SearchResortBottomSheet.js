import React, { useCallback, useState } from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { View } from "react-native-animatable";
import { BottomSheet } from "react-native-btr";
import { AntDesign, EvilIcons, FontAwesome5 } from "@expo/vector-icons";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native";
import { ScrollView } from "react-native";
import { Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getListResort } from "../../redux/actions/resortActions";

export default function SearchResortBottomSheet({ handleChangeResort }) {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [selectedResort, setSelectedResort] = useState("");
  const dispatch = useDispatch();

  const [selectedLocation, setSelectedLocation] = useState(null);

  const { resorts } = useSelector((state) => state.resorts);

  useFocusEffect(
    useCallback(() => {
      dispatch(getListResort());
    }, [dispatch])
  );

  const toggleBottomNavigationView = () => {
    setVisible(!visible);
  };
  return (
    <View className="">
      <View className="">
        <View style={styles.shadow} className="bg-white rounded-xl px-5 mt-5 ">
          <TouchableOpacity
            onPress={() => toggleBottomNavigationView()}
            className="py-5 flex flex-row justify-between"
          >
            <Text>Resort: </Text>
            <Text className="font-bold">
              {selectedResort ? selectedResort : ""}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <BottomSheet
        visible={visible}
        onBackButtonPress={toggleBottomNavigationView}
        onBackdropPress={toggleBottomNavigationView}
      >
        <View style={styles.bottomNavigationView}>
          <View style={styles.bottomNavigationView}>
            <View
              style={{
                flex: 1,
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <View className="flex-1 px-4">
                <ScrollView>
                  <View className="flex-row items-center w-[100%] py-4 my-5 rounded-2xl  border border-blue-200">
                    <View className="px-4">
                      <AntDesign color="#0073CF" name="search1" size={20} />
                    </View>
                    <TextInput
                      value={searchText}
                      onChangeText={(text) => setSearchText(text)}
                      className="w-[100%]"
                    />
                  </View>
                  {resorts?.content?.map((item, index) => (
                    <View key={item.id}>
                      <TouchableOpacity
                        onPress={() => {
                          setVisible();
                          setSearchText(item.resortName);
                          setSelectedResort(item.resortName);
                          handleChangeResort(item.id);
                        }}
                        className="flex flex-row items-center gap-5"
                      >
                        <View className="bg-gray-200 rounded-lg flex flex-row justify-center items-center border border-gray-300  pb-1">
                          <EvilIcons size={30} name="location" />
                        </View>
                        <Text>{item.resortName}</Text>
                      </TouchableOpacity>
                      <View className="bg-gray-300 h-[1px] w-full my-4"></View>
                    </View>
                  ))}
                </ScrollView>
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
    height: "80%",
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
