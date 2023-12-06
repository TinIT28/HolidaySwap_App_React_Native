import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { WebView } from "react-native-webview";
import { useSelector } from "react-redux";

export default function VNPAYPaymentScreen() {
  const navigation = useNavigation();

  const deposit = useSelector((state) => state.deposit);

  const handlePaymentResult = (url) => {
    let id;
    if (url) {
      const urlParts = url?.split("/");
      id = urlParts[1];
    }
    console.log("oh", id);
  };

  useEffect(() => {
    console.log(deposit?.deposit?.url ?? ``, "deposit");
  }, [deposit]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View className="bg-blue-500 w-full h-[100px]  flex flex-row items-center justify-start px-5">
        <TouchableOpacity onPress={() => navigation.navigate("Wallet")}>
          <Ionicons name="close-outline" size={30} color="white" />
        </TouchableOpacity>
        <Text className="ml-8 text-[20px] text-white">Recharge</Text>
      </View>
      {deposit && deposit.deposit && deposit.deposit.url && (
        <WebView
          source={{ uri: `${deposit?.deposit?.url}` }}
          onNavigationStateChange={(navState) => {
            console.log(navState);
            handlePaymentResult(navState?.url ?? ``);
          }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          // injectedJavaScript={this.state.cookie}
          startInLoadingState={false}
        />
      )}
    </SafeAreaView>
  );
}
