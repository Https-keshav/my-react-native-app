// import React from 'react';
// import { View, StyleSheet } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import Ionicons from '@expo/vector-icons/Ionicons';
// import LLHeader from '../components/LLHeader.jsx';
// import LLFooter from '../components/LLFooter.jsx';
// import WelcomeScreen from '../components/WelcomScreen.jsx';
// import LoginForm from '../components/LoginForm.jsx';

// const Drawer =  createDrawerNavigator();

// export default function Layout() {
//   return (
  
//   < >
//   <View style={styles.container}>
//         <LLHeader />
        
//           <Drawer.Navigator initialRouteName='Login'>
//             <Drawer.Screen name="About Us" component={WelcomeScreen} />
//             <Drawer.Screen name="Login" component={LoginForm} />
//           </Drawer.Navigator>
//       </View>
     
//       </>
      
      
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#333333',
//     color:'black',
//   },

//  // footerContainer: {  color:'black' },

 
// });

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { View } from 'react-native';
import LLHeader from '../components/LLHeader.jsx';
import MenuItems from '../components/MenuItems.jsx';
import SubscribeScreen from '../components/SubscribeScreen.jsx';
import WelcomeScreen from '../components/WelcomScreen.jsx';
const Stack = createNativeStackNavigator();
const RootNavigator = () => {
  return (<>
    <View>
      <LLHeader/>
      
    </View>
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={SubscribeScreen}  />
      <Stack.Screen name="Menu" component={ MenuItems }/> 
    </Stack.Navigator>
  
    </>
  );
};

export default RootNavigator;

