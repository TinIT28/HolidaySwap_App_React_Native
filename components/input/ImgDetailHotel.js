import React from "react";
import {
  SafeAreaView,
  Image,
  StyleSheet,
  FlatList,
  View,
  Text,
  StatusBar,
  Dimensions,
} from "react-native";

const { width, height } = Dimensions.get("window");

const COLORS = { primary: "#fff", black: "#2196F3" };

const slides = [
  {
    id: "1",
    image: require("../../assets/images/image1.png"),
    title: "Best travel destinations \n in Vietnam",
    appName: "HolidaySwap",
    subtitle: "“Let us guide your adventure.”",
  },
  {
    id: "2",
    image: require("../../assets/images/image2.png"),
    title: "Meet the needs of the \n holidays",
    appName: "HolidaySwap",
    subtitle: "“Turn every trip into an amazing adventure.”",
  },
  {
    id: "3",
    image: require("../../assets/images/image3.png"),
    title: "Go on holiday with a \nsmile",
    appName: "HolidaySwap",
    subtitle: "“Easy, fast, and convenient exchange.”",
  },
  {
    id: "4",
    image: require("../../assets/images/image4.png"),
    title: "We are here to make your \nholiday easier",
    appName: "HolidaySwap",
    subtitle: "“Experience the world through our app.”",
  },
];

const Slide = ({ item }) => {
  return (
    <View>
      <Image
        source={item?.image}
        style={{
          height: "65%",
          width,
        }}
      />
    </View>
  );
};

const ImgDetailHotel = ({ navigation }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef();

  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const Footer = () => {
    return (
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              currentSlideIndex === index && {
                backgroundColor: COLORS.black,
                width: 26,
                height: 8,
              },
            ]}
          />
        ))}
      </View>
    );
  };

  return (
    <View>
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        contentContainerStyle={{ height: height * 0.75 }}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={slides}
        pagingEnabled
        renderItem={({ item }) => <Slide item={item} />}
      />

      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  indicator: {
    height: 8,
    width: 8,
    borderRadius: 100,
    backgroundColor: "grey",
    marginHorizontal: 3,
    marginTop: -250,
  },
});

export default ImgDetailHotel;
