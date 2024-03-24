import React, { useState, useEffect } from "react";
import { View, Button, Alert } from "react-native";
import ChargeTimeSetting from "../components/ChargeTime";
import SliderComponent from "../components/Slider";
import axios from "../components/axios";

const SettingsScreen = () => {
  const [chargeTime, setChargeTime] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);

  useEffect(() => {
    axios
      .get("/get-settings-firebase")
      .then((response) => {
        const settings = response.data.settingsData;
        setChargeTime(settings.chargeTime || 0);
        setMaxPrice(settings.price || 0);
      })
      .catch((error) => {
        console.error("Error fetching settings:", error);
      });
  }, []);

  const saveSettings = () => {
    axios
      .post("/save-settings-firebase", { chargeTime, maxPrice })
      .then((response) => {
        Alert.alert("Success", "Settings saved successfully");
      })
      .catch((error) => {
        console.error("Error saving settings:", error);
        Alert.alert("Error", "Failed to save settings");
      });
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ChargeTimeSetting
        chargeTime={chargeTime}
        setChargeTime={setChargeTime}
      />
      <SliderComponent maxPrice={maxPrice} setMaxPrice={setMaxPrice} />
      <Button title="Save Settings" onPress={saveSettings} />
    </View>
  );
};

export default SettingsScreen;
