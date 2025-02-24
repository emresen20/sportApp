import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const navigation=useNavigation();
  const isValidEmail = email => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  return (
    <SafeAreaView>
      <View style={{padding: 13}}>
        <Text style={{fontSize: 16, fontWeight: '500'}}>
          You're Almost There
        </Text>
        <View style={{flexDirection: 'column', gap: 16, marginVertical: 40}}>
          <Text style={{fontSize: 16, color: 'gray'}}>Enter Your Email</Text>

          <TextInput
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
            style={{
              padding: 15,
              borderColor: '#D0D0D0',
              borderWidth: 1,
              borderRadius: 10,
            }}
          />

          <Pressable
            onPress={()=>navigation.navigate('PasswordScreen')}
            style={{
              padding: 15,
              backgroundColor: isValidEmail(email) ? '#2dcf30' : '#E0E0E0',
              borderRadius: 8,
            }}
            disabled={!isValidEmail(email)}>
            <Text style={{textAlign: 'center'}}>Next</Text>
          </Pressable>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{textAlign: 'center', fontWeight: '500', fontSize: 15}}>
            I agree to receive updates over Whatsapp
          </Text>

          <Text
            style={{
              fontSize: 15,
              color: 'gray',
              textAlign: 'center',
              marginTop: 20,
            }}>
            By Signing up, you agree to the Terms of Service and Privacy and
            Privacy Policy
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
