import {
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ActivityIndicator,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthContext} from '../AuthContext';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const {setToken, token} = useContext(AuthContext);
  const [showpassword, setShowPassWord] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (token) {
      navigation.replace('MainStack', {screen: 'Main'});
    }
  }, [token]);

  const handleLogin = async () => {
    const user = {
      email: email,
      password: password,
    };

    axios.post('http://localhost:8000/login', user).then(response => {
      setLoading(true);
      const token = response.data.token;
      AsyncStorage.setItem('token', token);
      setToken(token);
      setLoading(false);
    });
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <View style={{padding: 10, alignItems: 'center'}}>
          <KeyboardAvoidingView>
            <View
              style={{
                marginTop: 80,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 20, fontWeight: '500'}}>
                Login to your account
              </Text>
            </View>

            <View style={{marginTop: 50}}>
              <View>
                <Text style={{fontSize: 18, fontWeight: '600', color: 'gray'}}>
                  Email
                </Text>
                <View>
                  <TextInput
                    autoCapitalize="none"
                    value={email}
                    onChangeText={setEmail}
                    placeholderTextColor="#BEBEBE"
                    style={{
                      width: 340,
                      marginTop: 15,
                      borderBottomColor: '#BEBEBE',
                      borderBottomWidth: 1,
                      paddingBottom: 10,
                      fontFamily: 'GeezaPro-Bold',
                      fontSize: email ? 15 : 15,
                    }}
                    placeholder="Enter your email"
                  />
                </View>

                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: '600',
                    color: 'gray',
                    marginTop: 25,
                  }}>
                  Password
                </Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <TextInput
                    secureTextEntry={showpassword}
                    value={password}
                    onChangeText={setPassword}
                    placeholderTextColor="#BEBEBE"
                    style={{
                      width: 340,
                      marginTop: 15,
                      borderBottomColor: '#BEBEBE',
                      borderBottomWidth: 1,
                      paddingBottom: 10,
                      fontFamily: 'GeezaPro-Bold',
                      fontSize: email ? 15 : 15,
                    }}
                    placeholder="Enter your password"
                  />
                  {showpassword ? (
                    <Pressable onPress={() => setShowPassWord(prev => !prev)}>
                      <FontAwesome name="eye" size={24} />
                    </Pressable>
                  ) : (
                    <Pressable onPress={() => setShowPassWord(prev => !prev)}>
                      <FontAwesome name="eye-slash" size={24} />
                    </Pressable>
                  )}
                </View>
              </View>

              <Pressable
                onPress={handleLogin}
                style={{
                  width: 200,
                  backgroundColor: 'green',
                  padding: 15,
                  marginTop: 50,
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  borderRadius: 6,
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 16,
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                  Login
                </Text>
              </Pressable>

              <Pressable onPress={() => navigation.navigate('RegisterScreen')}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: 'gray',
                    fontSize: 16,
                    margin: 12,
                  }}>
                  Don't have an account? Sign Up
                </Text>
              </Pressable>
            </View>

            <View
              style={{
                marginTop: 50,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={{width: 110, height: 60, resizeMode: 'contain'}}
                source={{
                  uri: 'https://playo-website.gumlet.io/playo-website-v2/logos-icons/new-logo-playo.png?q=50',
                }}
              />
            </View>
          </KeyboardAvoidingView>
        </View>
      )}
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
