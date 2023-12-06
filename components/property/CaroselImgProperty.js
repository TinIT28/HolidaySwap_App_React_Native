import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { View } from "react-native";
import Carousel from "react-native-swipeable-carousel";

// imagePath can get images URL or imported images.

const data = [
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/496850375.jpg?k=1db7e7976d05f46e84627d51a45fd09ac50de8bfb1e3088e40145148f2be2bce&o=&hp=1",
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/496852455.jpg?k=9bb4d026ab29472934805e3984b9e2492e6673701bc99e418494d3b4399f86ed&o=&hp=1",
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/496850388.jpg?k=e52e10995136a37426aade34121eb9b37dd495014300db844111af47dc5f6e87&o=&hp=1",
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/496852443.jpg?k=07eb32e02a17825c74f7f8548b24f3801db04fe97816269ad933e4a51cb608e2&o=&hp=1",
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/496852428.jpg?k=f35c56cf4b0c1da31d7f4f480eb43ce6edae3cd7f3f8e29d6d38a85d545cfb36&o=&hp=1",
  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/02/9e/ce/shades-resort.jpg?w=1200&h=-1&s=1",
];

export default function CaroselImgProperty() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("ImageFullProperty")}>
      <Carousel images={data} enableGestureSwipe={true} />
    </TouchableOpacity>
  );
}
