import React, { useState, useEffect } from "react";
import { View, Text, TextInput } from "react-native";
import Slider from "@react-native-community/slider";

const SliderComponent = ({ maxPrice, setMaxPrice }) => {
  const [inputValue, setInputValue] = useState(maxPrice.toString());
  const [isError, setIsError] = useState(false);
  const max = 100;
  const min = 0;

  useEffect(() => {
    setInputValue(maxPrice.toString());
  }, [maxPrice]);

  const handleTextInputChange = (text) => {
    setInputValue(text);
    const newValue = parseFloat(text);
    if (!isNaN(newValue) && newValue >= min && newValue <= max) {
      setMaxPrice(newValue);
      setIsError(false);
    } else {
      setIsError(true);
    }
  };

  const handleSliderChange = (newValue) => {
    setMaxPrice(newValue);
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
        value={maxPrice}
        onValueChange={handleSliderChange}
      />
    </View>
  );
};

export default SliderComponent;
