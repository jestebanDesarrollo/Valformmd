import { StyleSheet} from "react-native";
import Settings from "./Settings";
import Chat from "./Chat";
import Login from "./Login"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MaterialIcons} from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

export default function Home({navigation}) {
    return (
        // <View style={styles.container}>
        //     <Text>Estamos en Home</Text>
        //     <Button
        //         title="Ir a Login"
        //         onPress={() => {
        //             navigation.navigate("Login", (rol="0", fullname="administrador"));
        //         }}
        //     />
              
        // </View>

        <Tab.Navigator
            // initialRouteName="Chat"
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: 'red',
                tabBarInactiveTintColor: 'grey',
                tabBarActiveBackgroundColor: 'powderblue',
                tabBarInactiveBackgroundColor: 'white',
            }}
        >
            <Tab.Screen name="Login" component= {Login} options={{
                tabBarStyle:{display:'none'},
                tabBarIcon: () => (
                    <MaterialIcons name ="person" size={30} color = {'red'}/>
                ),
            }}/>
            <Tab.Screen name="Settings" component= {Settings} options={{
                tabBarIcon: () => (
                    <MaterialIcons name ="settings" size={30} color = {'red'}/>
                ),
            }}/>
            <Tab.Screen name="Chat" component= {Chat} options={{
                tabBarIcon: () => (
                    <MaterialIcons name ="chat" size={30} color = {'red'}/>
                ),
            }}/>
        </Tab.Navigator>
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