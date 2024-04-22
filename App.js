import {useState, useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home'
import Login from './components/Login'

const Stack = createNativeStackNavigator(); // se genera la vble para la pila de pantallas

export default function App() {
  return (
   <NavigationContainer>
     <Stack.Navigator
        initialRouteName='Home'>
       <Stack.Screen name="Home" component={Home} />
       {/* <Stack.Screen name="Login" component={Login} /> */}
     </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

