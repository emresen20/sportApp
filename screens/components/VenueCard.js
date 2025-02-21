import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const VenueCard = ({item}) => {
  const navigation = useNavigation();
  return (
    <View style={{margin: 15}}>
      <Pressable
        onPress={() =>
          navigation.navigate('Venue', {
            name: item?.name,
            image: item?.image,
            sportsAvailable: item?.sportsAvailable,
            rating: item?.rating,
            timings: item?.timings,
            address: item?.address,
            location: item?.location,
            bookings: item?.bookings,
          })
        }
        style={{
          backgroundColor: 'white',
          borderRadius: 5,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}>
        <View>
          <Image
            style={{
              width: '100%',
              height: 200,
              borderTopLeftRadius: 10,
              borderBottomRightRadius: 10,
            }}
            source={{uri: item?.image}}
          />
        </View>

        <View style={{paddingVertical: 12, paddingHorizontal: 10}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text>
              {item?.name.length > 40
                ? item?.name?.substring(0, 40) + '...'
                : item?.name}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                padding: 6,
                alignItems: 'center',
                gap: 6,
                backgroundColor: 'green',
                borderRadius: 5,
              }}>
              <AntDesign name="star" size={20} color="white" />
              <Text style={{color: 'white', fontWeight: 'bold'}}>
                {item?.rating}
              </Text>
            </View>
          </View>

          <Text style={{color: 'gray'}}>
            {item?.adress?.length > 40
              ? item?.address?.substring(0, 40) + '...'
              : item?.address}
          </Text>
          <View
            style={{
              height: 1,
              borderWidth: 0.6,
              borderColor: '#E0E0E0',
              marginVertical: 10,
            }}></View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text>Upto 10% off</Text>
            <Text>INR 250 Onwards</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default VenueCard;

const styles = StyleSheet.create({});
