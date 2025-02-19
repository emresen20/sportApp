import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const BookScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#f5f5f5'}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 12,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
          <Text style={{fontSize: 16, fontWeight: '500'}}>Emre Shen</Text>
          <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
          }}>
          <Ionicons name="chatbox-outline" size={24} color="black" />
          <Ionicons name="notifications-outline" size={24} color="black" />

          <View>
            <Image
              style={{width: 30, height: 30, borderRadius: 15}}
              source={{
                uri: 'https://lh3.googleusercontent.com/a/ACg8ocJJo_bZya4l3sXsEq0-34iEFzIKuSthszhBrNKVfZteK7nI84BW=s576-c-no',
              }}
            />
          </View>
        </View>
      </View>

      <View
        style={{
          marginHorizontal: 12,
          backgroundColor: '#E8E8E8',
          padding: 12,
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderRadius: 20,
          alignItems: 'center',
        }}>
        <TextInput placeholder="Search for Venues" />
        <Ionicons name="search" size={24} color="gray" />
      </View>

      <Pressable
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 10,
          padding: 13,
        }}>
        {['Sports & Availabilty', 'Favorites', 'Offers'].map(item => (
          <View
            style={{
              padding: 10,
              borderRadius: 10,
              borderColor: '#E0E0E0',
              borderWidth: 2,
            }}
            key={item}>
            <Text>{item}</Text>
          </View>
        ))}
      </Pressable>
    </SafeAreaView>
  );
};

export default BookScreen;

const styles = StyleSheet.create({});
