
import React from 'react'
import Cart from '../screens/Cart'
import Products from '../screens/Products'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import MultipleReducers from '../screens/MultipleReducers'
import {useSelector } from "react-redux";


const Stack=createStackNavigator()
//theme? 'black': "#e4e7ed" 
function AppNavigator() {

  const theme = useSelector(({ ThemeReducer }) => ThemeReducer);

  return (
    <NavigationContainer>
    <Stack.Navigator >
    <Stack.Screen name="Products" component={Products} options={{headerShown:false}} />
    <Stack.Screen name="MultipleReducers" component={MultipleReducers} options={{headerShown:false}} />

    <Stack.Screen name="Cart" component={Cart} options={{headerStyle:{backgroundColor:theme? '#28282B': "#fff" },headerTintColor:theme?'white':'#000'}}  />
  </Stack.Navigator>
  </NavigationContainer>

  )
}

export default AppNavigator