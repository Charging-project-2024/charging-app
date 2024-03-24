import React from "react";
import { View, Text } from "react-native";
import ChargeTimeSetting from "../components/ChargeTime";
import SliderComponent from "../components/Slider";

const SettingsScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ChargeTimeSetting />
      <SliderComponent />
    </View>
  );
};

export default SettingsScreen;
