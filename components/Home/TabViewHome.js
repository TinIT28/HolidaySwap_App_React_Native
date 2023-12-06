import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
  ActivityIndicator,
} from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import CarouselApartmentHome from "../apartment/CaroselApartmentHome";
import axios from "axios";
import CarouselApartmentImage from "../apartment/CarouselApartmentImage";
import { useDispatch, useSelector } from "react-redux";
import { submitSearchParamApartmentForRent } from "../../redux/actions/searchParamActions";
import { getApartments } from "../../redux/actions/apartmentActions";
import { Fragment } from "react";
import Loading from "../Loading";

export default function TabViewHome(props) {
  const { searchParam } = useSelector((state) => state.searchParam);
  const { loading, apartments } = useSelector((state) => state.apartments);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getApartments());
  }, [dispatch]);

  useFocusEffect(
    useCallback(() => {
      dispatch(getApartments());
    }, [dispatch])
  );

  const [selectedTab, setSelectedTab] = useState("");
  const [tabs, setTabs] = useState([]);
  useEffect(() => {
    if (apartments && apartments.length > 0) {
      const resortNames = [
        ...new Set(apartments.map((item) => item.resort.resortName)),
      ];
      setSelectedTab(resortNames[0] || "");
      setTabs(resortNames);
    }
  }, [apartments]);

  const navigation = useNavigation();

  let pageNo = searchParam.pageNo;
  const [listApartmentForRent, setListApartmentForRent] = useState([]);
  const [data, setData] = useState({});
  let param = "";
  const apiUrl = "https://holiday-swap.click/api/v1/apartment-for-rent";

  const loadArrayOfParram = (listOfParram, name) => {
    listOfParram.map((data) => {
      param += `&${name}=${data}`;
    });
  };

  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "",
    headers: {},
  };

  const fetchListApartmentForRent = async () => {
    param = `?locationName=${searchParam.locationName}&resortId=${searchParam.resortId}&checkIn=${searchParam.checkIn}&checkOut=${searchParam.checkOut}&min=${searchParam.min}&max=${searchParam.max}&guest=${searchParam.guest}&numberBedsRoom=${searchParam.numberBedsRoom}&numberBathRoom=${searchParam.numberBathRoom}&pageNo=${searchParam.pageNo}&pageSize=${searchParam.pageSize}&sortBy=${searchParam.sortBy}&sortDirection=${searchParam.sortDirection}`;
    loadArrayOfParram(
      searchParam.listOfInRoomAmenity,
      "listOfInRoomAmenity",
      param
    );
    loadArrayOfParram(
      searchParam.listOfPropertyView,
      "listOfPropertyView",
      param
    );
    loadArrayOfParram(
      searchParam.listOfPropertyType,
      "listOfPropertyType",
      param
    );
    config.url = apiUrl.concat(param);
    await axios
      .request(config)
      .then((response) => {
        // setListApartmentForRent(...listApartmentForRent, ...contentRsp);
        let contentRsp = listApartmentForRent.concat(response.data.content);
        if (searchParam.pageNo == 0)
          setListApartmentForRent(response.data.content);
        else setListApartmentForRent(contentRsp);
        setData(response.data);
        {
          // Get the property values from the data array.
          const propertyList = response.data.content.map((obj) => obj.property);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleOnScrollEnd = () => {
    if (pageNo < data.totalPages - 1) {
      pageNo++;
      var searchParam = { pageNo: pageNo };
      dispatch(submitSearchParamApartmentForRent(searchParam));
    }
  };

  const handleScroll = (event) => {
    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;

    // Calculate the current scroll position
    const scrollY = contentOffset.y;

    // Calculate the height of the ScrollView's visible area
    const scrollViewHeight = layoutMeasurement.height;

    // Calculate the height of the entire content
    const contentHeight = contentSize.height;

    // Check if the user has scrolled to the end
    if (scrollY + scrollViewHeight >= contentHeight - 100) {
      // User has reached the end of the ScrollView content
      console.log("Scrolled to the end");
      handleOnScrollEnd();
    }
  };
  const renderTabContent = () => {
    switch (selectedTab) {
      case "":
        return null;
      default:
        const filteredApartments = apartments?.filter(
          (item) => item.resort.resortName === selectedTab
        );

        return (
          <Fragment>
            {loading ? (
              <Loading />
            ) : (
              <View style={styles.shadow} className="flex-1">
                <ScrollView
                  showsVerticalScrollIndicator={false}
                  onScrollEndDrag={(event) => {
                    handleScroll(event);
                  }}
                  className="mt-5 w-full"
                >
                  <View>
                    {filteredApartments.map((item, index) => {
                      const startTime = new Date(item.availableTime?.startTime);
                      const endTime = new Date(item.availableTime?.endTime);

                      const timeDiff = endTime - startTime;
                      const nights = Math.ceil(
                        timeDiff / (1000 * 60 * 60 * 24)
                      );

                      return (
                        <View className="flex-1" key={index}>
                          <View>
                            <CarouselApartmentImage
                              image={item.property.propertyImage}
                            />
                            <TouchableOpacity
                              activeOpacity={0.8}
                              onPress={() =>
                                navigation.navigate("DetailApartment", {
                                  id: item.availableTime.id,
                                })
                              }
                              className="mb-8"
                            >
                              <View className="">
                                <View className="">
                                  <View className="flex flex-row items-center justify-between">
                                    <Text className="underline pb-3 w-[80%] text-[18px] font-bold pt-2">
                                      {item.property.propertyName}
                                    </Text>
                                    {item.property.rating && ( // Check if rating is available
                                      <View className="flex flex-row items-center gap-1">
                                        <Text> {item.property.rating}</Text>
                                        <AntDesign name="star" color="orange" />
                                      </View>
                                    )}
                                  </View>
                                  <View className="flex flex-row gap-2 ">
                                    <Text className="font-bold">Resort:</Text>
                                    <Text>{item.resort.resortName}</Text>
                                  </View>
                                  <View className="flex flex-row gap-2 py-2">
                                    <Text className="font-bold">Type:</Text>
                                    <Text>
                                      {
                                        item.property.propertyType
                                          .propertyTypeName
                                      }
                                    </Text>
                                  </View>

                                  {/* <View className="max-w-[100%] overflow-hidden pb-2">
                                    <Text className="text-[15px] whitespace-nowrap overflow-ellipsis">
                                      {item.property.propertyDescription}
                                    </Text>
                                  </View> */}
                                  <View className="max-w-[100%] overflow-hidden pb-2 flex flex-row gap-1">
                                    <Text>Owner by:</Text>
                                    <Text className="text-[15px] whitespace-nowrap overflow-ellipsis">
                                      {item.user.username}
                                    </Text>
                                  </View>
                                  <View className="flex flex-row gap-1 items-center mb-1">
                                    <Text className="text-[20px] font-bold">
                                      {item.availableTime.pricePerNight}
                                    </Text>

                                    <FontAwesome5
                                      name="coins"
                                      size={15}
                                      color="orange"
                                    />
                                    <Text className="font-bold">/ night</Text>
                                  </View>

                                  <View className="flex flex-row items-center ">
                                    <Text className="font-bold mb-1">
                                      {nights} nights
                                    </Text>
                                  </View>
                                  <View className="flex flex-row items-center ">
                                    <Text className="font-bold">
                                      {startTime.toDateString()} -{" "}
                                      {endTime.toDateString()}
                                    </Text>
                                  </View>
                                </View>
                              </View>
                            </TouchableOpacity>
                          </View>
                        </View>
                      );
                    })}
                  </View>
                </ScrollView>
                {/* <View className="w-full absolute  flex h-full flex-col justify-end ">
                  <MapHome />
                </View> */}
              </View>
            )}
          </Fragment>
        );
    }
  };

  return (
    <View className="flex-1 px-4 max-w-fit bg-white">
      <View className=" border-b border-blue-200 ">
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View className="flex flex-row gap-10 ">
            {tabs.map((tab) => (
              <TouchableOpacity
                className="pb-3"
                key={tab}
                onPress={() => setSelectedTab(tab)}
                style={[
                  styles.tabButton,
                  {
                    borderBottomWidth: selectedTab === tab ? 2 : 0,
                    borderBottomColor:
                      selectedTab === tab ? "#009FC2" : "transparent",
                  },
                ]}
              >
                <Text style={selectedTab === tab ? { color: "#007FC4" } : {}}>
                  {tab}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
      {renderTabContent()}
    </View>
  );
}

const styles = StyleSheet.create({
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
