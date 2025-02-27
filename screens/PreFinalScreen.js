import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from '../AuthContext';
import {getRegistrationProgress} from '../registrationUtlis';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

const PreFinalScreen = () => {
  const {token, setToken} = useContext(AuthContext);
  const [userData, setUserData] = useState();
  const navigation = useNavigation();
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (token) {
      navigation.replace('MainStack', {screen: 'Main'});
    }
  }, [token]);
  useEffect(() => {
    getAllScreenData();
  }, []);

  const getAllScreenData = async () => {
    try {
      const screens = [
        'RegisterScreen',
        'PasswordScreen',
        'NameScreen',
        'SelectImage',
      ];
      let userData = {};

      for (const screenName of screens) {
        const screenData = await getRegistrationProgress(screenName);
        if (screenData) {
          userData = {...userData, ...screenData};
        }
      }
      setUserData(userData);
    } catch (error) {
      console.log('errorprefinal', error);
    }
  };

  const clearAllScreenData = async () => {
    try {
      const screens = [
        'RegisterScreen',
        'PasswordScreen',
        'NameScreen',
        'SelectImage',
      ];

      for (const screenName of screens) {
        const key = `registration_progress_${screenName}`;
        await AsyncStorage.removeItem(key);
      }

      console.log('All screen data cleared!');
    } catch (error) {
      console.log('Error', error);
    }
  };

  const registerUser = async () => {
    try {
      setErrorMessage('');
      const response = await axios
        .post('http://localhost:8000/register', userData)
        .then(response => {
          console.log('response', response);
          const token = response.data.token;
          AsyncStorage.setItem('token', token);
          setToken(token);
        });
      clearAllScreenData();
    } catch (error) {
      console.log('Register error:', error);
      if (error.response) {
        if (error.response.status === 400) {
          setErrorMessage('This email is already registered. Try logging in.');
        } else {
          setErrorMessage(
            error.response.data.error ||
              'Something went wrong. Please try again.',
          );
        }
      } else {
        setErrorMessage('Network error. Please check your connection.');
      }
    }
  };
  console.log('userdata', userData);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{marginTop: 80}}>
        <Text
          style={{
            fontSize: 32,
            fontWeight: 'bold',
            fontFamily: 'GeezaPro-Bold',
            marginLeft: 20,
          }}>
          All set to register
        </Text>
        <Text
          style={{
            fontSize: 32,
            fontWeight: 'bold',
            fontFamily: 'GeezaPro-Bold',
            marginLeft: 20,
            marginTop: 10,
          }}>
          Setting up your profile for you
        </Text>
      </View>
      {errorMessage ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{errorMessage}</Text>
        </View>
      ) : null}
      <Pressable
        onPress={registerUser}
        style={{backgroundColor: '#03C03C', padding: 15, marginTop: 'auto'}}>
        <Text
          style={{
            textAlign: 'center',
            color: 'white',
            fontWeight: '600',
            fontSize: 15,
          }}>
          Finish Registering
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default PreFinalScreen;

const styles = StyleSheet.create({});
