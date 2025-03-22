import {
    Alert,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useContext } from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import axios from 'axios';
import { AuthContext } from '../AuthContext';

const PaymentScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const total = (parseFloat(route?.params?.price) || 0) + 8.8;
  console.log('route.params', route.params);
  const courtNumber = route.params.selectedCourt;
  const date = route.params.selectedDate;
  const time = route.params.selectedTime;
  const name = route.params.place;
  const game = route.params?.gameId;

  const  {userId}=useContext(AuthContext);

  const bookSlot = async () => {
    try {
      const response = await axios.post('http://localhost:8000/book', {
        courtNumber,
        date,
        time,
        name,
        game,
        userId
      });

      if(response.status===200){
        console.log('Booking Succes', response.data);
        Alert.alert('Success', 'Booking Success');
        navigation.replace('Main')
      }else{
        Alert.alert('Error', 'Booking Failed')
      }
    } catch (error) {
      console.log('error', error);
    }
  };
  return (
    <>
      <ScrollView style={{marginTop: 50}}>
        <View style={{padding: 15}}>
          <Text style={{fontSize: 23, fontWeight: '500', color: 'green'}}>
            {route?.params?.selectedSport}
          </Text>
          <View
            style={{
              borderColor: '#E0E0E0',
              borderWidth: 1,
              padding: 10,
              marginTop: 10,
              borderRadius: 6,
              shadowColor: '#171717',
              shadowOffset: {width: -1, height: 1},
              shadowOpacity: 0.2,
              shadowRadius: 3,
            }}>
            <View>
              <View
                style={{
                  marginVertical: 3,
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 7,
                }}>
                <MaterialCommunityIcons
                  name="fireplace-off"
                  size={20}
                  color="black"
                />
                <Text style={{fontSize: 15, fontWeight: '600'}}>
                  {route.params.selectedCourt}
                </Text>
              </View>

              <View
                style={{
                  marginVertical: 3,
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 7,
                }}>
                <Feather name="calendar" size={20} color="black" />
                <Text style={{fontSize: 15, fontWeight: '600'}}>
                  {route.params.selectedDate}
                </Text>
              </View>

              <View
                style={{
                  marginVertical: 3,
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 7,
                }}>
                <Feather name="clock" size={20} color="black" />
                <Text style={{fontSize: 15, fontWeight: '600'}}>
                  {route.params.selectedTime}
                </Text>
              </View>
              <View
                style={{
                  marginVertical: 3,
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 7,
                }}>
                <FontAwesome name="money" size={20} color="black" />
                <Text style={{fontSize: 15, fontWeight: '600'}}>
                  {route.params.price} Tl
                </Text>
              </View>
            </View>
          </View>

          <View style={{marginTop: 15, marginHorizontal: 15}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 7,
                justifyContent: 'space-between',
              }}>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 7}}>
                <Text>Court Price</Text>
                <EvilIcons name="question" size={24} color="green" />
              </View>
              <Text style={{fontSize: 16, fontWeight: '500'}}>
                {route.params.price} Tl
              </Text>
            </View>
          </View>
          <View style={{marginTop: 15, marginHorizontal: 15}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 7,
                justifyContent: 'space-between',
              }}>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 7}}>
                <Text>Convenience Fee</Text>
                <EvilIcons name="question" size={24} color="green" />
              </View>
              <Text style={{fontSize: 16, fontWeight: '500'}}>8.8 Tl</Text>
            </View>
          </View>

          <Text
            style={{
              height: 1,
              borderColor: '#E0E0E0',
              borderWidth: 3,
              marginTop: 20,
            }}
          />
          <View
            style={{
              marginHorizontal: 15,
              marginTop: 10,
              flexDirection: 'row',
              alignItems: 'center',

              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 16}}>Total Amount</Text>
            <Text style={{fontSize: 15, fontWeight: '500', color: 'green'}}>
              {total}
            </Text>
          </View>
          <View
            style={{
              marginHorizontal: 15,
              marginTop: 10,
              flexDirection: 'row',
              alignItems: 'center',

              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 16}}>Total Amount</Text>
            <Text style={{fontSize: 15, fontWeight: '500', color: 'green'}}>
              To be Paid at Venue
            </Text>
          </View>
        </View>
        <View style={{marginLeft: 'auto', marginRight: 'auto', marginTop: 20}}>
          <Image
            style={{width: 100, height: 80, resizeMode: 'contain'}}
            source={{
              uri: 'https://playo.co/_next/image?url=https%3A%2F%2Fplayo-website.gumlet.io%2Fplayo-website-v2%2FLogo%2Bwith%2BTrademark_Filled.png%3Fq%3D20%26format%3Dauto&w=3840&q=75',
            }}
          />
        </View>
      </ScrollView>

      <Pressable
        onPress={bookSlot}
        style={{
          backgroundColor: '#32CD32',
          padding: 15,
          marginBottom: 38,
          borderRadius: 6,
          marginHorizontal: 15,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={{fontSize: 17, fontWeight: '500', color: 'white'}}>
          {total} Tl
        </Text>
        <Text style={{fontSize: 17, fontWeight: '500', color: 'white'}}>
          {' '}
          Proceed to Pay
        </Text>
      </Pressable>
    </>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({});
