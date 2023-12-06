import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getListResort } from "../../redux/actions/resortActions";
import { useFocusEffect } from "@react-navigation/native";
import { Dropdown } from "react-native-element-dropdown";

const data = [
  { label: "Resort 1", value: "1" },
  { label: "Resort 2", value: "2" },
  { label: "Resort 3", value: "3" },
  { label: "Resort 4", value: "4" },
  { label: "Resort 5", value: "5" },
  { label: "Resort 6", value: "6" },
  { label: "Resort 7", value: "7" },
  { label: "Resort 8", value: "8" },
];

const DropDownResort = ({ handleChangeResortId }) => {
  const dispatch = useDispatch();

  const { resorts } = useSelector((state) => state.resorts);

  const [value, setValue] = useState(null);

  const [resortData, setResortData] = useState();

  useEffect(() => {
    if (resorts) {
      setResortData(resorts.content);
    }
  }, []);

  const renderItem = (item) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.resortName}</Text>
      </View>
    );
  };

  return (
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      data={resortData}
      search
      maxHeight={300}
      labelField="resortName"
      valueField="id"
      placeholder="Select item"
      searchPlaceholder="Search..."
      value={value}
      onChange={(item) => {
        handleChangeResortId(item);
        setValue(item.id);
      }}
      renderItem={renderItem}
    />
  );
};

export default DropDownResort;

const styles = StyleSheet.create({
  dropdown: {
    margin: 16,
    height: 50,
    backgroundColor: "white",
    borderRadius: 12,
    padding: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
