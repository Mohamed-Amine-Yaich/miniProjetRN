import React, { useState, useEffect } from "react";

import { Text, View, Image, StyleSheet, Pressable,ActivityIndicator } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

import { useRoute, useNavigation } from "@react-navigation/native";

import pins from "../assets/pins";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";


export default function PinScreen() {
  const [ratio, setRatio] = useState(1);
  const [pin, setPin] = useState(null);
  const [imgUri, setImgUri] = useState("");

  const route = useRoute();
  const navigation = useNavigation();

  //for the size of the notch ( from r-n-safe-area-context)
  const insets = useSafeAreaInsets();

 /*  const {image,title}=route.params.props */

console.log('to pinScreen',route.params)
const {image,title}=route.params 
  const goBack = () => {
    navigation.goBack();
  };

 if(!image&&!title){
  return <ActivityIndicator/>
} 

  return (
    <SafeAreaView style={{ backgroundColor: "black" }}>
      <StatusBar style="light" />
      <View style={styles.container}>
  <Image source={{ uri:image }} style={[styles.img, { aspectRatio: ratio }]} />

        <Text style={styles.title}>{title}</Text>
        <Pressable
          onPress={goBack}
          style={[styles.goBackBtn, { top: insets.top }]}
        >
          <Ionicons name="chevron-back" size={35} color={"white"} />
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    height: 100,
  },
  img: {
    width: "100%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  title: {
    fontSize: 25,
    fontWeight: "600",
    textAlign: "center",
    lineHeight: 35,
    margin: 10,
  },
  goBackBtn: {
    position: "absolute",
    left: 10,
  },
});
