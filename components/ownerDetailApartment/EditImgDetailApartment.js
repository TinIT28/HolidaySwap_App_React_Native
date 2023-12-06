import React, { useState } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Text } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function EditImgDetailApartment() {
  const initialImages = [
    require("../../assets/images/landmark1.jpg"),
    require("../../assets/images/landmark2.jpg"),
    require("../../assets/images/landmark3.jpg"),
    require("../../assets/images/landmark4.jpg"),
    require("../../assets/images/landmark5.jpg"),
  ];

  const [images, setImages] = useState(initialImages);
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      const selectedImages = result.assets.map((asset) => ({
        uri: asset.uri,
      }));
      setImages([...images, ...selectedImages]);
    }
  };

  const removeImage = (index) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
  };

  return (
    <View
      className="bg-white flex-1"
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        {images.map((image, index) => (
          <View
            key={index}
            style={{ width: "33.33%", padding: 5, position: "relative" }}
          >
            <Image source={image} style={{ width: "100%", height: 100 }} />
            <TouchableOpacity
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                zIndex: 1,
                padding: 5,
              }}
              onPress={() => removeImage(index)}
            >
              <Feather name="x" size={24} color="black" />
            </TouchableOpacity>
          </View>
        ))}
      </View>
      <TouchableOpacity className="bg-white" onPress={pickImage}>
        <Text className="bg-blue-500 text-white py-3 px-4 rounded-md mt-3 font-bold">
          Add more image
        </Text>
      </TouchableOpacity>
    </View>
  );
}
