import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import SCREENS from "../screens";
import IMAGES from "../image";
import { Image } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import PriceScreen from "../screens/PriceScreen";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName={SCREENS.HOME}>
      <Tab.Screen
        name={SCREENS.HOME}
        component={HomeScreen}
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <Image source={IMAGES.HOME} style={{ width: 30, height: 30 }} />
          ),
        }}
      />
      <Tab.Screen
        name={SCREENS.SETTINGS}
        component={SettingsScreen}
        options={{
          title: "Settings",
          tabBarIcon: ({ focused }) => (
            <Image source={IMAGES.SETTINGS} style={{ width: 30, height: 30 }} />
          ),
        }}
      />
      <Tab.Screen
        name={SCREENS.PRICE}
        component={PriceScreen}
        options={{
          title: "Price",
          tabBarIcon: ({ focused }) => (
            <Image source={IMAGES.PRICE} style={{ width: 30, height: 30 }} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
