import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const VenueInfoScreen = () => {
  const route = useRoute();
  console.log(route?.params);
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <>
          <View>
            <Image
              style={{width: '100%', height: 200, resizeMode: 'cover'}}
              source={{
                uri: 'https://images.pexels.com/photos/3660204/pexels-photo-3660204.jpeg?auto=compress&cs=tinysrgb&w=800',
              }}
            />
          </View>

          <View style={{padding: 10}}>
            <Text>{route.params.name}</Text>
            <View
              style={{
                marginTop: 5,
                flexDirection: 'row',
                alignItems: 'center',
                gap: 5,
              }}>
              <Ionicons name="time-outline" size={24} color="black" />
              <Text style={{fontSize: 15, fontWeight: '500'}}>
                6:00 Am - 11:00 Pm
              </Text>
            </View>

            <View
              style={{
                marginTop: 5,
                flexDirection: 'row',
                gap: 5,
              }}>
              <Ionicons name="location-outline" size={24} color="black" />
              <Text style={{fontSize: 14, width: '90%', fontWeight: '500'}}>
                {route?.params?.address}
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            {[0, 0, 0, 0, 0].map((en, i) => (
              <FontAwesome
                // key={`${food.id}-${i}`}
                style={{paddingHorizontal: 3}}
                name={i < Math.floor(route.params.rating) ? 'star' : 'star-half'}
                size={15}
                color="#FFD700"
              />
            ))}
            <Text>{route.params.rating} (9 ratings)</Text>
          </View>
        </>
      </ScrollView>
    </SafeAreaView>
  );
};

export default VenueInfoScreen;

const styles = StyleSheet.create({});
