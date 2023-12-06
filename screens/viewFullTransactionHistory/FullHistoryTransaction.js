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

export default function FullHistoryTransaction() {
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
        <Text className="ml-8 text-[20px] text-white">Transaction history</Text>
      </View>
      <ScrollView className="mb-[100px] px-3">
        {transactionHistory !== undefined && transactionHistory.length > 0 && (
          <View className="w-full">
            {transactionHistory.map((transaction, index) => (
              <View
                key={index}
                className="flex flex-row w-full justify-between mt-4 py-2 border border-gray-200 rounded-md "
              >
                <View className="flex flex-row gap-2 items-center">
                  <View>
                    <Image
                      className="w-[30px] h-[30px] rounded-full"
                      source={{ uri: userProfile?.avatar }}
                    />
                  </View>
                  <View>
                    <Text className="font-bold">{transaction.message}</Text>
                    <Text className="text-[12px]">
                      {transaction.dateConvert}
                    </Text>
                    <View className="flex flex-row items-center gap-1">
                      <Text className="text-[12px]">Wallet balance:</Text>
                      <Text>{transaction.totalPoint}</Text>
                    </View>
                  </View>
                </View>
                <View className="flex flex-row items-center">
                  <View>
                    <Text className="mt-8 font-bold">{transaction.amount}</Text>
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
  );
}
