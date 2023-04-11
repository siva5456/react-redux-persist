import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  FlatList,
  Image,
  Button,
  Pressable,
  Dimensions,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
// import { RemoveItemFromCart } from "../redux/actions/Actions";
import {
  RemoveItemFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/reducer/Reducer";

const screenDimensions = Dimensions.get("screen");
// console.log(screenDimensions);

function Cart({navigation,hide}) {
  // let val=[]
  // let x=Boolean(val.length)
  // let y=Boolean(val)
  // console.log(x);
  // console.log(y);

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.Reducer);
  const theme = useSelector(({ ThemeReducer }) => ThemeReducer);
  // console.log(cartItems);
  const [myProducts, setMyProducts] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [boolean, setBoleean] = useState(false);

  useEffect(() => {
    if (cartItems) {
      setBoleean(Boolean(cartItems.length));
    }

    setMyProducts(cartItems);

    let cost = Number(0);
    if (cartItems) {
      for (const i in cartItems) {
        cost += Number(cartItems[i].Data.price * cartItems[i].quantity);
      }
      setTotalCost(Math.floor(cost));
    }
  }, [cartItems]);
 

  return (
    <>
      <View style={{ flex: 1, backgroundColor: theme ? "#000000" : "#e4e7ed" }}>
        {!boolean && (
          <View
            style={{
              flex: 1,
              backgroundColor: theme ? "#000000" : "#e4e7ed",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: theme ? "#fff" : "#000", fontSize: 20 }}>
              Your Cart is Empty
            </Text>
          </View>
        )}
        {boolean && (
          <View
            style={{
              flex: 1,
              backgroundColor: theme ? "#000000" : "#e4e7ed",
            }}
          >
            <FlatList
            showsVerticalScrollIndicator={false}
              data={myProducts}
              renderItem={({ item, index }) => {
                return (
                  <View
                    style={{
                      padding: 10,
                      backgroundColor: theme ? "#28282B" : "#fff",

                      margin: 10,
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
                        source={{ uri: `${item.Data.image}` }}
                        style={{
                          maxWidth: 250,
                          maxHeight: 250,
                          height: 90,
                          width: 70,
                        }}
                      />
                      <Text
                        style={{ color: theme ? "#fff" : "#000", fontSize: 23 }}
                      >
                        Price: ${Math.floor(item.Data.price)}.00
                      </Text>
                    </View>
                    <Text
                      style={{
                        color: theme ? "#fff" : "#000",
                        fontSize: 20,
                        marginBottom: 20,
                      }}
                    >
                      {item.Data.title}
                    </Text>
                    <View
                      style={{
                        alignItems: "center",
                        justifyContent: "space-evenly",
                        flexDirection: "row",
                      }}
                    >
                      <View
                        style={{
                          height: 43,
                          alignItems: "center",

                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: 8,
                          marginBottom: 2,
                        }}
                      >
                        <Text
                          style={{
                            color: theme ? "#fff" : "#000",
                            fontSize: 20,
                          }}
                        >
                          Quantity:
                        </Text>
                      </View>

                      {item.quantity === 1 ? (
                        <Pressable
                          onPress={() => dispatch(RemoveItemFromCart(index))}
                          style={{
                            height: 43,
                            backgroundColor: "transparent",
                            alignItems: "center",
                            width: 50,
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 8,
                            borderWidth: 1,
                            borderColor: "#F10404",
                          }}
                        >
                          {/* <Image
                            source={{
                              uri: "https://img.icons8.com/windows/256/delete.png",
                            }}
                            style={{
                              height: 30,
                              width: 30,
                            }}
                          /> */}
                          <Image
                            source={require("../../assets/trashBin.png")}
                            style={{
                              height: 30,
                              width: 30,
                              tintColor:'#F10404'
                            }}
                          />
                        </Pressable>
                      ) : (
                        <Pressable
                          onPress={() => dispatch(decreaseQuantity(item.Data))}
                          style={{
                            height: 43,
                            backgroundColor: "rgb(4, 169, 234)",
                            alignItems: "center",
                            width: 50,
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 8,
                            borderWidth: 1,
                            borderColor: "rgb(4, 169, 234)",
                          }}
                        >
                          <Text
                            style={{
                              color: "white",
                              fontSize: 18,
                              textAlign: "center",
                            }}
                          >
                            -
                          </Text>
                        </Pressable>
                      )}

                      <View
                        style={{
                          height: 43,
                          backgroundColor: theme ? "#000000" : "#e4e7ed",
                          alignItems: "center",
                          width: 50,
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: 8,
                          borderWidth: 1,
                          borderColor: theme ? "#000000" : "#e4e7ed",
                        }}
                      >
                        <Text
                          style={{
                            color: theme ? "#fff" : "#000",
                            fontSize: 20,
                          }}
                        >
                          {item.quantity}
                        </Text>
                      </View>
                      <Pressable
                        onPress={() => dispatch(increaseQuantity(item.Data))}
                        style={{
                          height: 43,
                          backgroundColor: "rgb(4, 169, 234)",
                          alignItems: "center",
                          width: 50,
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: 8,
                          borderWidth: 1,
                          borderColor: "rgb(4, 169, 234)",
                        }}
                      >
                        <Text
                          style={{
                            color: "white",
                            fontSize: 18,
                            textAlign: "center",
                          }}
                        >
                          +
                        </Text>
                      </Pressable>
                    </View>
                  </View>
                );
              }}
              keyExtractor={(item, i) => i}
            />

            <View
              style={{
                backgroundColor: theme ? "#28282B" : "#fff",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: theme ? "grey" : "grey",
                  fontSize: 16,
                  margin: 5,
                }}
              >
                {`(items ${cartItems.length})`}
              </Text>
              <Text
                style={{
                  color: theme ? "grey" : "grey",
                  fontSize:18,
                  margin: 5,
                }}
              >
                Total Cost: ${Math.floor(totalCost)}.00
              </Text>

              {!hide &&<Pressable
                onPress={()=>navigation.navigate('BookOrder')}
                style={{
                  height: 43,
                  backgroundColor: "rgb(4, 169, 234)",
                  alignItems: "center",
                  width: Math.floor(screenDimensions.width) - 5,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 8,
                  marginBottom: 2,
                }}
              >
                <Text
                  style={{ color: "white", fontSize: 18, textAlign: "center" }}
                >
                  Order
                </Text>
              </Pressable>}
            </View>
          </View>
        )}
      </View>
    </>
  );
}

export default Cart;
