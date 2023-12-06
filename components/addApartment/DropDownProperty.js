import { useFocusEffect } from "@react-navigation/native";
import React, { useState } from "react";
import { Fragment } from "react";
import { useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { useSelector } from "react-redux";

const data = [
  { label: "Property 1", value: "1" },
  { label: "Property 2", value: "2" },
  { label: "Property 3", value: "3" },
  { label: "Property 4", value: "4" },
  { label: "Property 5", value: "5" },
  { label: "Property 6", value: "6" },
  { label: "Property 7", value: "7" },
  { label: "Property 8", value: "8" },
];

const DropDownProperty = ({ handleChangePropertyId, properties }) => {
  const [value, setValue] = useState(null);

  const [propertiesData, setPropertiesData] = useState();

  useEffect(() => {
    if (properties) {
      setPropertiesData(properties.content);
    }
  }, [properties]);

  const renderItem = (item) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.propertyName}</Text>
      </View>
    );
  };

  return (
    <Fragment>
      {propertiesData && (
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={propertiesData}
          search
          maxHeight={210}
          labelField="propertyName"
          valueField="id"
          placeholder="Select item"
          searchPlaceholder="Search..."
          value={value}
          onChange={(item) => {
            handleChangePropertyId(item);
            setValue(item.id);
          }}
          renderItem={renderItem}
        />
      )}
    </Fragment>
  );
};

export default DropDownProperty;

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
