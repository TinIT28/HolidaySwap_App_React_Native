// import React, { useState } from "react";
// import { Image, Text, View, Dimensions } from "react-native";
// import Carousel from "react-native-snap-carousel";

// export default function CarouselApartmentDetail(data) {
//   const { width: screenWidth } = Dimensions.get("window");
//   const itemWidthPercentage = 100;

//   const itemWidth = (screenWidth * itemWidthPercentage) / 100;

//   const renderItem = ({ item, index }) => (
//     <View style={{ height: 300, width: "100%" }} className="max-w-fit">
//       <View className="w-auto flex-1">
//         <Image
//           className="w-full h-full"
//           source={item.link ? { uri: item.link } : null}
//         />
//         <View
//           className="px-7"
//           style={{
//             position: "absolute",
//             bottom: 10,
//             right: 5,
//           }}
//         >
//           <Text
//             style={{
//               fontSize: 15,
//               fontWeight: "bold",
//               color: "black",
//             }}
//           >
//             {`${index + 1}/${data.image.length}`}
//           </Text>
//         </View>
//       </View>
//     </View>
//   );

//   return (
//     <View>
//       <Carousel
//         layout="default"
//         data={data.image}
//         sliderWidth={screenWidth}
//         itemWidth={itemWidth}
//         renderItem={renderItem}
//       />
//     </View>
//   );
// }
import React from "react";
import { Image, Text, View, Dimensions, TouchableOpacity } from "react-native";
import Carousel from "react-native-snap-carousel";
import { useNavigation } from "@react-navigation/native";

export default function CarouselApartmentDetail(data) {
  const { width: screenWidth } = Dimensions.get("window");
  const itemWidthPercentage = 100;
  const itemWidth = (screenWidth * itemWidthPercentage) / 100;

  const navigation = useNavigation();

  const renderItem = ({ item, index }) => (
    <View>
      <View className="h-[300px] w-full">
        <View className="flex-1">
          <Image
            className="flex-1 w-full h-full"
            source={item.link ? { uri: item.link } : null}
          />
          <View className="absolute bottom-2 right-2 px-4">
            <Text
              style={{
                fontSize: 15,
                fontWeight: "bold",
                color: "black",
              }}
            >
              {`${index + 1}/${data.image.length}`}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <View>
      <Carousel
        layout="default"
        data={data.image}
        sliderWidth={screenWidth}
        itemWidth={itemWidth}
        renderItem={renderItem}
      />
    </View>
  );
}
