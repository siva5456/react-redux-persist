import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../redux/actions/Actions";

function MultipleReducers() {
    const dispatch = useDispatch();
    const theme = useSelector(({ ThemeReducer }) => ThemeReducer);
    console.log(theme);

    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor:theme=== true ? "#000":"#fff",
            }}
        >
            <TouchableOpacity
                style={{
                    backgroundColor:theme=== true ? "#fff":"#000",
                    width: 200,
                    height: 50,
                    justifyContent: "center",
                    alignItems: "center",
                }}
                onPress={() => {
                    dispatch(changeTheme(!theme));
                }}
            >
                <Text style={{ color:theme=== true ? "#000":"#fff" }}>
                    Change Theme
                </Text>
            </TouchableOpacity>
        </View>
    );
}

export default MultipleReducers;
