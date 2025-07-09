import React from "react";
import { View, Text, StyleSheet } from "react-native";

const LLHeader = () => {
  return (
    <View style={header.view}>
      <Text style={header.text}>Little Lemon</Text>  
    </View>
  );
};

export default LLHeader;

const header= StyleSheet.create({
  view:{
    backgroundColor:'#9FC87E',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },

  text:{
    fontWeight: "bold",
    textAlign: "center",
    fontStyle: "italic",
    fontSize: 30
  }
})