import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Platform,
  Button,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
// import { AddItemToCart } from "../redux/actions/Actions";
import { AddItemToCart } from "../redux/reducer/Reducer";

function Products({ navigation }) {
  let [myProducts, setMyProducts] = useState(null);
  let [count, setCount] = useState(0);

  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.Reducer);
  const theme = useSelector(({ ThemeReducer }) => ThemeReducer);

  useEffect(() => {
    if (cartItems) {
      setCount(cartItems.length);
    }
  }, [cartItems]);

  useEffect(() => {
    async function fetchProduct() {
      try {
        let { data } = await axios.get("https://fakestoreapi.com/products");
        setMyProducts(data);
        // console.log('===================================='); rgba(0, 0, 0, 0.844)
        // console.log(data);
        // console.log('====================================');
      } catch (e) {
        console.log(e);
      }
    }
    fetchProduct();
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={{ flex: 1, backgroundColor:theme? '#000000': "#e4e7ed" }}>
        <View
          style={{
            flex: 0.1,
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
            backgroundColor:theme? '#28282B': "#fff" ,
            paddingHorizontal: 1,
            marginBottom: 10,
          }}
        >
          <View
            style={{
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: "row",
              backgroundColor: theme? '#28282B': "#fff" ,
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("Cart")}
              style={{
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: theme? '#28282B': "#fff" ,
                height: 50,
                width: 50,
                borderRadius: 50,
              }}
            >
              <Text style={{ color: theme? '#fff': "#28282B" , fontSize: 23 }}>☰</Text>
            </TouchableOpacity>
            <Text style={{ color:theme? '#fff': "#28282B" ,fontSize: 23 }}>Products</Text>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate("Cart")}
            style={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor:theme? 'grey': "rgb(220, 236, 249)" ,
              height: 50,
              width: 50,
              borderRadius: 50,
              margin: 10,
            }}
          >
            <Text style={{ color:theme ? "#fff": "black", fontSize: 23 }}>{count}</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flex: 0.9,
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
            backgroundColor:theme? 'rgba(0, 0, 0, 0.144)': "#e4e7ed"
          }}
        >
          {myProducts && (
            <FlatList
              data={myProducts}
              renderItem={({ item }) => {
                return (
                  <View
                    style={{
                      backgroundColor:theme? '#28282B': "#fff",
                      padding: 10,
                      marginVertical:5,
                      marginHorizontal:10,
                      borderRadius: 10,
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Image
                        source={{ uri: `${item.image}` }}
                        style={{
                          maxWidth: 250,
                          maxHeight: 250,
                          height: 90,
                          width: 70,
                        }}
                      />

                      <Text style={{ color:theme? '#fff': "black", fontSize: 23 }}>
                        Price: ${Math.floor(item.price)}.00
                      </Text>
                    </View>
                    <Text
                      style={{ color:theme? '#fff': "black",fontSize: 20, marginBottom: 20 }}
                    >
                      {item.title}
                    </Text>
                    <Button
                      onPress={() => dispatch(AddItemToCart(item))}
                      title="add to cart"
                    />
                  </View>
                );
              }}
              keyExtractor={(item, index) => index}
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    backgroundColor: "aliceblue",
  },
});

export default Products;
