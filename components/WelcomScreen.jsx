// import { View, Text, StyleSheet, TextInput, ScrollView, Image, useColorScheme} from 'react-native'
// import React, {useState} from 'react'

// export default function WelcomScreen() {
//   const ColorScheme = useColorScheme();
  
//   return (
//     <ScrollView style={[
//       styles.container,
//       ColorScheme === 'light' ? {backgroundColor: '#fff'} : {backgroundColor:'#333333'}
//     ]}>
//       <View style={styles.headerWrapper}>
//         <Image
//         style={styles.image}
//         source={require('../assets/images/logo.webp')}
//         resizeMode='cover'
//         accessible={true}
//         accessibilityLabel='Little Lemon Logo'/>
//         <Text  style={[
//           styles.headerText,
//           ColorScheme === 'light' ? { color: '#333333' } : { color: '#EDEFEE' },
//           ]}>Little Lemon</Text>
//       </View>
//       <Text style={[
//         styles.regularText,
//         ColorScheme === 'light' ? { color: '#333333' } : { color: '#EDEFEE' },
//         ]}> 
//         Little Lemon is a charming neighborhood bistro that serves simple food
//         and classic cocktails in a lively but casual environment. We would love
//         to hear your experience with us!
//         </Text>

//     </ScrollView>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   headerWrapper: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     margin: 10,
//   },
//   headerText: {
//     paddingRight: 10,
//     paddingLeft: 20,
//     paddingTop: 30,
//     paddingBottom: 10,
//     fontSize: 30,
//     color: '#EDEFEE',
//     textAlign: 'center',
//   },
//   regularText: {
//     fontSize: 24,
//     padding: 20,
//     marginVertical: 8,
//     color: '#EDEFEE',
//     textAlign: 'center',
//   },
//   image: {
//     width: 100,
//     height: 100,
//     borderRadius: 20,
//   },
// });

import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Button from "../components/Button";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/images/little-lemon-logo.png")}
        />
        <Text style={styles.title}>
          Little Lemon, your local Mediterranean Bistro
        </Text>
      </View>
      <Button
        onPress={() => {
          navigation.navigate("Login");
        }}
      >
        Newsletter
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 200,
    width: 300,
    resizeMode: "contain",
  },
  title: {
    marginTop: 48,
    paddingVertical: 10,
    color: "#333333",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default WelcomeScreen;
