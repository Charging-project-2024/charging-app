import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";

const ChargeTimeSetting = () => {
  const [chargeTime, setChargeTime] = useState(8);

  const handleChange = (value) => {
    const newValue = Math.max(0, Math.min(100, value));
    setChargeTime(newValue);
  };

  return (
    <View
      style={{
        padding: 10,
        alignItems: "center",
      }}
    >
      <Text>Car Charge Time (0-100%)</Text>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Button
          color="#007bff"
          title=" - "
          onPress={() => handleChange(chargeTime - 1)}
        />
        <TextInput
          keyboardType="numeric"
          value={chargeTime.toString()}
          onChangeText={(text) => handleChange(Number(text))}
          style={{ marginHorizontal: 10, textAlign: "center" }}
        />
        <Button
          color="#007bff"
          title=" + "
          onPress={() => handleChange(chargeTime + 1)}
        />
      </View>
    </View>
  );
};

export default ChargeTimeSetting;
