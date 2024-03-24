import { View, Text } from "react-native";
import React from "react";
import axios from "../components/axios";
import { useEffect, useState } from "react";

const DataScreen = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get("/test")
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <View>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>{data.message}</Text>
    </View>
  );
};

export default DataScreen;
