import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import Slider from "@react-native-community/slider";

const SliderComponent = () => {
  const [value, setValue] = useState(0);
  const [inputValue, setInputValue] = useState("0");
  const [isError, setIsError] = useState(false);
  const max = 100;
  const min = 0;

  const handleTextInputChange = (text) => {
    setInputValue(text);
    const newValue = parseFloat(text);
    if (!isNaN(newValue)) {
      if (newValue >= min && newValue <= max) {
        setValue(newValue);
        setIsError(false);
      } else {
        setIsError(true);
      }
    }
  };

  const handleSliderChange = (newValue) => {
    const roundedValue = parseFloat(newValue.toFixed(2));
    setValue(roundedValue);
    setInputValue(roundedValue.toString());
    setIsError(false);
  };

  return (
    <View style={{ padding: 10, alignItems: "center" }}>
      <Text>Max price</Text>
      <TextInput
        keyboardType="numeric"
        value={inputValue}
        onChangeText={handleTextInputChange}
        style={{ marginHorizontal: 10, textAlign: "center", width: 200 }}
      />
      {isError && <Text style={{ color: "red" }}>Invalid input</Text>}
      <Slider
        style={{ width: 200, height: 40 }}
        minimumValue={min}
        maximumValue={max}
        minimumTrackTintColor="#007bff"
        maximumTrackTintColor="#000000"
        thumbTintColor="#007bff"
        value={value}
        onValueChange={handleSliderChange}
      />
    </View>
  );
};

export default SliderComponent;
