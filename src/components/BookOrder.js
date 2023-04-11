import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Cart from "../screens/Cart";
import { ScrollView } from "react-native";
import RazorpayCheckout from "react-native-razorpay";

const BookOrder = () => {
  const cartItems = useSelector((state) => state.Reducer);
  const theme = useSelector(({ ThemeReducer }) => ThemeReducer);
  const [selectPymentMethod, setSelectPymentMethod] = useState("credit card");
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme ? "#000000" : "#e4e7ed",
      paddingHorizontal: 5,
    },
    productsList: {
      flex: 0.5,
      backgroundColor: theme ? "#000000" : "#e4e7ed",

      //   alignItems: "center",
      //   justifyContent: "center",
    },
    payments: {
      flex: 0.6,
      backgroundColor: theme ? "#28282B" : "#fff",
      backgroundColor: theme ? "#000000" : "#e4e7ed",
      padding: 10,
    },
    Title: { color: theme ? "#fff" : "black", fontSize: 18 },
    radioBtn: {
      flexDirection: "row",
      width: "90%",
      marginBottom: 20,
    },
    img: {
      width: 24,
      height: 24,
      tintColor: theme ? "#fff" : "black",
      marginRight: 10,
    },
    radioBtn_text: { color: theme ? "#fff" : "black", fontSize: 15 },
    place_order: {
      height: 40,
      backgroundColor: "rgb(4, 169, 234)",
      alignItems: "center",
      width: 230,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 8,
      marginTop: 20,
    },
  });

  let handleMyBooking = () => {
    alert(
      `your items are booked today ${new Date().toLocaleDateString()}.will be delevered within 3 working days`
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.productsList}>
        <Cart hide={true} />
      </View>
      <View style={styles.payments}>
        <ScrollView
          style={{ backgroundColor: "transparent", padding: 10 }}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.Title}>select payment mode</Text>

          <Pressable
            style={styles.radioBtn}
            onPress={() => setSelectPymentMethod("credit card")}
          >
            <Image
              source={
                selectPymentMethod === "credit card"
                  ? require("../../assets/radio.png")
                  : require("../../assets/radio-button.png")
              }
              style={styles.img}
            />
            <Text style={styles.radioBtn_text}>credit card</Text>
          </Pressable>
          <Pressable
            style={styles.radioBtn}
            onPress={() => setSelectPymentMethod("debit card")}
          >
            <Image
              source={
                selectPymentMethod === "debit card"
                  ? require("../../assets/radio.png")
                  : require("../../assets/radio-button.png")
              }
              style={styles.img}
            />
            <Text style={styles.radioBtn_text}>debit card</Text>
          </Pressable>
          <Pressable
            style={styles.radioBtn}
            onPress={() => setSelectPymentMethod("UPI")}
          >
            <Image
              source={
                selectPymentMethod === "UPI"
                  ? require("../../assets/radio.png")
                  : require("../../assets/radio-button.png")
              }
              style={styles.img}
            />
            <Text style={styles.radioBtn_text}>UPI</Text>
          </Pressable>
          <Pressable
            style={styles.radioBtn}
            onPress={() => setSelectPymentMethod("cash on delevery")}
          >
            <Image
              source={
                selectPymentMethod === "cash on delevery"
                  ? require("../../assets/radio.png")
                  : require("../../assets/radio-button.png")
              }
              style={styles.img}
            />
            <Text style={styles.radioBtn_text}>cash on delevery</Text>
          </Pressable>
          <Text style={styles.Title}>adrres</Text>
          <Text style={[styles.Title, { color: "grey", fontSize: 15 }]}>
            please select address
          </Text>
          <View style={{ paddingBottom: 25 }}>
            <Pressable
              onPress={handleMyBooking}
              //   onPress={() =>{
              //     var options = {
              //         description: 'Credits towards consultation',
              //         image: 'https://i.imgur.com/3g7nmJC.png',
              //         currency: 'INR',
              //         key: 'rzp_test_Wy1YsPwzDklWv8', // Your api key
              //         amount: '5000',
              //         name: 'foo',
              //         prefill: {
              //           email: 'void@razorpay.com',
              //           contact: '9191919191',
              //           name: 'Razorpay Software'
              //         },
              //         theme: {color: '#F37254'}
              //       };
              //       RazorpayCheckout.open(options).then((data) => {
              //         // handle success
              //         alert(`Success: ${data.razorpay_payment_id}`);
              //       }).catch((error) => {
              //         // handle failure
              //         alert(`Error: ${error.code} | ${error.description}`);
              //       });
              //   }}
              style={styles.place_order}
            >
              <Text
                style={{ color: "white", fontSize: 18, textAlign: "center" }}
              >
                place Order
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default BookOrder;
