import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import axios from "./src/components/axios";
import TabNavigator from "./src/components/Navigation";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get("/test")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
