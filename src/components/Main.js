import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import AppNavigator from "./AppNavigator";
import { Provider, useSelector } from "react-redux";
import { myStore } from "../redux/store/store";
import ThemeChanger from "./ThemeChanger";

function Main() {

  return (
    <>
      <Provider store={myStore}>
      <ThemeChanger/>
      </Provider>

      <StatusBar style="auto" />
    </>
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

export default Main;
