import React, { useState } from "react";
import AppNavigator from "./AppNavigator";
import { View, Switch, StyleSheet, Dimensions } from "react-native";
import { useDispatch, useSelector } from "react-redux";
// import { changeTheme } from "../redux/actions/Actions";
import { changeTheme } from "../redux/reducer/ThemeReducer";

const screenDimensions = Dimensions.get("screen");

function ThemeChanger() {
  const [isEnabled, setIsEnabled] = useState(false);

  const dispatch = useDispatch();
  const theme = useSelector((state) => state.ThemeReducer);
  const toggleSwitch = () => dispatch(changeTheme(!theme));

  console.log(theme);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme ? "#000000" : "#e4e7ed",
        padding: 0,
      }}
    >
      <AppNavigator />
      <View
        style={{
          height: 20,
          width: 35,
          backgroundColor: "transparent",
          borderWidth: 1,
          borderColor: theme ? "grey" : "grey",
          position: "relative",
          bottom: 70,
          alignItems: "center",
          justifyContent: "center",
          left: screenDimensions.width - 60,
          borderRadius: 10,
        }}
      >
        <Switch
          trackColor={{ false: "#e4e7ed", true: "#000" }}
          thumbColor={theme ? "rgb(6, 6, 194)" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={theme}
        />
      </View>
    </View>
  );
}

export default ThemeChanger;
// import React, {useState} from 'react';
// import {View, Switch, StyleSheet} from 'react-native';

// const App = () => {
//   const [isEnabled, setIsEnabled] = useState(false);
//   const toggleSwitch = () => setIsEnabled(previousState => !previousState);

//   return (
//     <View style={styles.container}>
//       <Switch
//         trackColor={{false: '#767577', true: '#81b0ff'}}
//         thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
//         ios_backgroundColor="#3e3e3e"
//         onValueChange={toggleSwitch}
//         value={isEnabled}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// export default App;
