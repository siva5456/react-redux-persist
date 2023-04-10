import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import ThemeChanger from "./ThemeChanger";
// import { Provider } from "react-redux";
// import {persistStore} from "redux-persist";
// import { PersistGate } from "redux-persist/integration/react";
// import { myStore } from "../redux/store/store";

// let persistor = persistStore(myStore);

function Main() {
  return (
    <>
      {/* <Provider store={myStore}>
        <PersistGate loading={null} persistor={persistor}> */}
          <ThemeChanger />
        {/* </PersistGate>
      </Provider> */}

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
