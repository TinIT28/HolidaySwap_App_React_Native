import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/home/HomeScreen";
import { AntDesign, Ionicons } from "@expo/vector-icons"; // Import Ionicons
import { Text, View } from "react-native";
import YourTrip from "../screens/yourTrip/YourTrip";
import FullHistoryTransaction from "../screens/viewFullTransactionHistory/FullHistoryTransaction";
import BlogComunity from "../screens/blogComunity/BlogComunity";
import ProfileScreen from "../screens/profile/ProfileScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let iconColor = focused ? "#2196F3" : "#000000";

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "YourTrip") {
            iconName = "book";
          } else if (route.name === "Profile") {
            iconName = "user";
          } else if (route.name === "BlogComunity") {
            iconName = "people-outline";
          }

          const messageCount = 1;

          return (
            <View>
              {route.name === "BlogComunity" ? (
                <Ionicons
                  name={iconName}
                  size={28}
                  color={iconColor}
                  style={{ marginTop: 10 }}
                />
              ) : (
                <AntDesign
                  name={iconName}
                  size={size}
                  color={iconColor}
                  style={{ marginTop: 10 }}
                />
              )}
            </View>
          );
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ tabBarLabel: "" }}
      />

      <Tab.Screen
        name="YourTrip"
        component={YourTrip}
        options={{ tabBarLabel: "" }}
      />
      <Tab.Screen
        name="BlogComunity"
        component={BlogComunity}
        options={{ tabBarLabel: "" }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ tabBarLabel: "" }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
