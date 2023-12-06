import React, { useState, useEffect } from "react";
import { Button, Image, View, Platform } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { TouchableOpacity } from "react-native";
import { Text } from "react-native";
import * as FileSystem from "expo-file-system";

export default function UploadImageProfile({ handleChangeImage }) {
  const [images, setImages] = useState([]);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      // Lấy danh sách các hình ảnh đã chọn
      const selectedImages = result.assets.map((asset) => asset.uri);
      const selectedImageChange = result.assets;

      console.log("Check selected image", selectedImageChange);

      setImages(selectedImages);

      handleChangeImage(selectedImageChange);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TouchableOpacity onPress={pickImage}>
        <Text className="text-[20px] font-bold  mb-5 bg-blue-500 px-2 py-3 rounded-md text-white">
          Upload image
        </Text>
      </TouchableOpacity>
    </View>
  );
}
