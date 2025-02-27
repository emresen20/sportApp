import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  TouchableOpacity
} from 'react-native';
import React, {useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { saveRegistrationPrgoress } from '../registrationUtlis';

const PasswordScreen = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigation=useNavigation();
  const handleNext=()=>{
    if(password.trim() !=='' ){
        saveRegistrationPrgoress('PasswordScreen',{password});
    }
    navigation.navigate('NameScreen')
  }
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{marginTop: 90, marginHorizontal: 20}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              width: 44,
              height: 44,
              borderRadius: 22,
              borderWidth: 2,
              borderColor: 'green',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <AntDesign name="lock1" size={26} color="green" />
          </View>

          <Image
            style={{width: 100, height: 40}}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/10613/10613685.png',
            }}
          />
        </View>
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            fontFamily: 'GeezaPro-Bold',
            marginTop: 15,
          }}>
          Please choose a password
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TextInput
            autoFocus={true}
            secureTextEntry={showPassword ? false : true}
            value={password}
            onChangeText={text => setPassword(text)}
            placeholder="Enter your password"
            placeholderTextColor={'#BEBEBE'}
            style={{
              width: 340,
              marginVertical: 10,
              marginTop: 25,
              borderBottomColor: 'black',
              borderBottomWidth: 1,
              paddingBottom: 10,
              fontFamily: 'GeezaPro-Bold',
              fontSize: password ? 22 : 22,
            }}
          />
          <Pressable onPress={() => setShowPassword(!showPassword)}>
            {showPassword ? (
              <FontAwesome
                name="eye-slash"
                size={35}
                color="green"
                style={{marginTop: 15}}
              />
            ) : (
              <FontAwesome
                name="eye"
                size={35}
                color="green"
                style={{marginTop: 15}}
              />
            )}
          </Pressable>
        </View>
        <Text style={{color: 'gray', fontSize: 15, marginTop: 7}}>
          Note: Your details will be safe with us
        </Text>
      </View>
      <TouchableOpacity onPress={handleNext} activeOpacity={0.8} style={{marginTop:30,marginLeft:"auto"}}>
            <MaterialCommunityIcons
            style={{alignSelf:"center",marginTop:40}}
              name="arrow-right-circle"
              size={60}
              color="green"
            />
          </TouchableOpacity>
    </SafeAreaView>
  );
};

export default PasswordScreen;

const styles = StyleSheet.create({});
