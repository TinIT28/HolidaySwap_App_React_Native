import React, { useEffect } from "react";
import { TouchableOpacity, ActivityIndicator } from "react-native";
import { ScrollView, Image, Text, View } from "react-native";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import {
  getTotalPoint,
  getTransactionHistory,
} from "../../redux/actions/walletAction";

export default function Wallet() {
  const dispatch = useDispatch();
  const {
    user,
    userProfile,
    loading: userLoading,
    error: userError,
  } = useSelector((state) => state.user);
  const {
    totalPoint,
    transactionHistory,
    error: walletError,
  } = useSelector((state) => state.wallet);

  const navigation = useNavigation();

  useFocusEffect(
    React.useCallback(() => {
      dispatch(getTotalPoint());
      if (userProfile?.userId) {
        dispatch(getTransactionHistory(userProfile.userId));
      }
    }, [dispatch, userProfile])
  );

  return (
    <View>
      <View className="bg-blue-500 w-full h-[100px]  flex flex-row items-center justify-start px-5">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={30} color="white" />
        </TouchableOpacity>
        <Text className="ml-8 text-[20px] text-white">Wallet</Text>
      </View>

      <ScrollView>
        <View className="flex flex-col h-[200px] w-full  bg-blue-500 items-center">
          {userProfile?.avatar ? (
            <Image
              className="w-[80px] h-[80px] rounded-full"
              source={{ uri: userProfile?.avatar }}
            />
          ) : (
            <Image
              className="w-[80px] h-[80px] rounded-full"
              source={require("../../assets/images/avt.jpg")}
            />
          )}
          <Text className="text-[30px] font-bold text-white py-2">
            {userProfile?.fullName}
          </Text>
          <Text className="text-yellow-400"> {userProfile?.role?.name}</Text>
        </View>

        <View className="mb-28">
          <View className="px-4  py-4 bg-white">
            <View className="flex flex-row items-center justify-between">
              <Text className="text-[30px] font-bold">Point</Text>
              <View className="flex flex-row items-center">
                <Text className="text-[20px] font-bold mr-2">
                  {Number(totalPoint).toFixed(2)}
                </Text>
                <FontAwesome5 name="coins" size={20} color="orange" />
              </View>
            </View>
            <View className="w-full h-[1px] bg-gray-300 my-4"></View>
          </View>
          <View className="bg-white px-4 py-4 mt-3 flex flex-col items-center justify-center">
            <AntDesign name="creditcard" size={30} />
            <Text>No credit cards</Text>
            <Text>You can add points to the application via vnpay</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("Recharge")}
              className="bg-blue-500 px-6 rounded-md py-3 my-3"
            >
              <Text className="text-white">Recharge</Text>
            </TouchableOpacity>
          </View>
          <View className="pr-6 pl-3 py-4 bg-white mt-3">
            <View className="flex flex-row justify-between mb-3">
              <View className="">
                <Text> View transaction history</Text>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate("FullHistoryTransaction")}
              >
                <Text className="font-bold  text-blue-500">
                  View all history
                </Text>
              </TouchableOpacity>
            </View>
            <ScrollView>
              {transactionHistory !== undefined &&
                transactionHistory.length > 0 && (
                  <View className="w-full">
                    {transactionHistory
                      .slice(0, 3)
                      .map((transaction, index) => (
                        <View
                          key={index}
                          className="flex flex-row w-full justify-between mt-2"
                        >
                          <View className="flex flex-row gap-2 items-center">
                            <View>
                              <Image
                                className="w-[30px] h-[30px] rounded-full"
                                source={{ uri: userProfile?.avatar }}
                              />
                            </View>
                            <View>
                              <Text className="font-bold">
                                {transaction.message}
                              </Text>
                              <Text className="text-[12px]">
                                {transaction.dateConvert}
                              </Text>
                              <View className="flex flex-row items-center gap-1">
                                <Text className="text-[12px]">
                                  Wallet balance:
                                </Text>
                                <Text>{transaction.totalPoint}</Text>
                              </View>
                            </View>
                          </View>
                          <View className="flex flex-row items-center">
                            <View>
                              <Text className="mt-8 font-bold">
                                {transaction.amount}
                              </Text>
                            </View>
                            <View>
                              <FontAwesome5
                                className="mt-8"
                                name="coins"
                                size={10}
                                color="orange"
                              />
                            </View>
                          </View>
                        </View>
                      ))}
                  </View>
                )}
              {transactionHistory !== undefined &&
                transactionHistory.length === 0 && (
                  <Text>No transaction history</Text>
                )}
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
