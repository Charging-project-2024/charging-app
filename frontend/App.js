import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import axios from "./components/axios.js";
import React, { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    axios.get("/test").then((res) => {
      setData(res.data);
      console.log(res.data).catch((err) => {
        console.log(err);
      });
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>{data.message}</Text>
      <StatusBar style="auto" />
    </View>
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
