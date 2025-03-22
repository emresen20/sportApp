import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import BookScreen from '../screens/BookScreen';
import PlayScreen from '../screens/PlayScreen';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import VenueInfoScreen from '../screens/VenueInfoScreen';
import StartScreen from '../screens/StartScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import PasswordScreen from '../screens/PasswordScreen';
import OtpScreen from '../screens/OtpScreen';
import SelectImage from '../screens/SelectImage';
import PreFinalScreen from '../screens/PreFinalScreen';
import NameScreen from '../screens/NameScreen';
import {AuthContext} from '../AuthContext';
import CreateActivity from '../screens/CreateActivity';
import TagVenueScreen from '../screens/TagVenueScreen';
import SelectTimeScreen from '../screens/SelectTimeScreen';
import GamesSetUpScreen from '../screens/GamesSetUpScreen';
import ManageRequestsScreen from '../screens/ManageRequestsScreen';
import SlotScreen from '../screens/SlotScreen';
import PaymentScreen from '../screens/PaymentScreen';

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const {token} = useContext(AuthContext);

  function BottomTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home', // Tab etiketi
            tabBarIcon: ({focused}) => (
              <Icon
                name={focused ? 'home' : 'home-outline'}
                size={24}
                color={focused ? 'green' : 'gray'} // Iconun rengi odaklanmışken ve odaklanmamışken
              />
            ),
          }}
        />
        <Tab.Screen
          name="Play"
          component={PlayScreen}
          options={{
            headerShown: false,
            tabBarLabel: 'Play', // Tab etiketi
            tabBarIcon: ({focused}) => (
              <Icon
                name={focused ? 'play' : 'play-outline'}
                size={24}
                color={focused ? 'green' : 'gray'} // Iconun rengi odaklanmışken ve odaklanmamışken
              />
            ),
          }}
        />

        <Tab.Screen
          name="Book"
          component={BookScreen}
          options={{
            headerShown: false,
            tabBarLabel: 'Book', // Tab etiketi
            tabBarIcon: ({focused}) => (
              <Icon
                name={focused ? 'book' : 'book-outline'}
                size={24}
                color={focused ? 'green' : 'gray'} // Iconun rengi odaklanmışken ve odaklanmamışken
              />
            ),
          }}
        />

        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            headerShown: false,
            tabBarLabel: 'Profile', // Tab etiketi
            tabBarIcon: ({focused}) => (
              <Icon
                name={focused ? 'person' : 'person-outline'}
                size={24}
                color={focused ? 'green' : 'gray'} // Iconun rengi odaklanmışken ve odaklanmamışken
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }

  const AuthStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="StartScreen"
          component={StartScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PasswordScreen"
          component={PasswordScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OtpScreen"
          component={OtpScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="NameScreen"
          component={NameScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SelectImage"
          component={SelectImage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PreFinalScreen"
          component={PreFinalScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  };

  function MainStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={BottomTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Venue"
          component={VenueInfoScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Create"
          getId={() => 'myId'} //önemli stateler güncellenmesin isteniyorsa
          component={CreateActivity}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TagVenue"
          component={TagVenueScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Time" component={SelectTimeScreen} />
        <Stack.Screen
          name="Game"
          component={GamesSetUpScreen}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="Manage"
          component={ManageRequestsScreen}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="Slot"
          component={SlotScreen}
          options={{headerShown: false}}
        />
          <Stack.Screen
          name="Payment"
          component={PaymentScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
      
    );
  }

  return (
    <NavigationContainer>
      {token === null || token === '' ? <AuthStack /> : <MainStack />}
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
