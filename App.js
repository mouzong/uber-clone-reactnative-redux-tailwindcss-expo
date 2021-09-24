import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./state/store/store";

// 1) install redux and setup

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Text>Lets build an Uber clone hurray !!!!!</Text>
      </View>
    </Provider>
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
