import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import MapScreen from "./screens/MapScreen";
import NotificationsScreen from "./screens/NotificationsScreen";
import ProfileScreen from "./screens/ProfileScreen";
import { Octicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
const BottomTabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "yellow",
        tabBarStyle: [
          {
            elevation: 0,
            backgroundColor: "white",
            borderRadius: 15,
            height: 80,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          },
          null,
        ],
      })}
      tabBarOptions={{
        showLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Entypo name="home" size={24} color="black" />
            ) : (
              <AntDesign name="home" size={24} color="black" />
            ),
        }}
      />

      <Tab.Screen
        options={{
          tabBarLabel: "Notifications",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Octicons name="filter" size={24} color="black" />
            ) : (
              <Octicons name="filter" size={24} color="gray" />
            ),
        }}
        name="Settings"
        component={SettingsScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <View
              style={{
                backgroundColor: "red",
                width: 60,
                height: 60,
                borderRadius: 30,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AntDesign name="plus" size={24} color="white" />
            </View>
          ),
          //   tabBarButton: (props) => <CustomTab {...props} />,
        }}
        name="Maps"
        component={MapScreen}
      />
      <Tab.Screen
        name="Notifications"
        options={{
          tabBarLabel: "Notifications",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="notifications" size={24} color="black" />
            ) : (
              <Ionicons
                name="ios-notifications-outline"
                size={24}
                color="black"
              />
            ),
        }}
        component={NotificationsScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="person" size={24} color="black" />
            ) : (
              <Ionicons name="person-outline" size={24} color="black" />
            ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({});
