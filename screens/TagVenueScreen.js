import {
  ActivityIndicator,
  FlatList,
  Image,
  Pressable,
  RefreshControl,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';

const TagVenueScreen = () => {
  const [venues, setVenues] = useState([]);
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const fetchVenues = async () => {
    try {
      const response = await axios.get('http://localhost:8000/venues');
      setVenues(response.data);
      setLoading(false);
      setRefreshing(false)
    } catch (error) {
      console.log('Error fetch Venues', error);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchVenues();
  }, []);
  console.log('v', venues);

  const [taggedVenue, setTaggedVenue] = useState(null);

  useEffect(() => {
    if (taggedVenue) {
      navigation.goBack({taggedVenue});
    }
  }, [taggedVenue, navigation]);

  handleSelectVenue = venue => {
    navigation.navigate('Create', {taggedVenue: venue});
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchVenues(); // Yeniden verileri çek
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          padding: 10,
          backgroundColor: '#294461',
          paddingBottom: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
          }}>
          <Pressable onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="white" />
          </Pressable>

          <Text style={{fontSize: 15, fontWeight: '500', color: 'white'}}>
            Tag Venue
          </Text>
        </View>
      </View>
      {loading ? (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <ActivityIndicator size={'large'} color={'#294461'} />
        </View>
      ) : (
        <FlatList
          data={venues}
          keyExtractor={item => item._id}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          renderItem={({item}) => (
            <Pressable
              onPress={() => handleSelectVenue(item?.name)}
              style={{
                padding: 10,
                marginVertical: 10,
                borderColor: '#e0e0e0',
                borderWidth: 1,
                marginHorizontal: 10,
              }}>
              <View>
                <View style={{flexDirection: 'row', gap: 10}}>
                  <Image
                    style={{
                      width: 90,
                      height: 90,
                      resizeMode: 'cover',
                      borderRadius: 7,
                    }}
                    source={{
                      uri: item?.image,
                    }}
                  />

                  <View style={{flex: 1}}>
                    <Text
                      numberOfLines={1}
                      ellipsizeMode="tail"
                      style={{fontSize: 15, fontWeight: '500', width: '100%'}}>
                      {item?.name}
                    </Text>

                    <Text style={{marginTop: 5, color: 'gray'}}>
                      {item?.address}
                    </Text>

                    <Text style={{marginTop: 8, fontWeight: '500'}}>
                      4.4 (122 ratings)
                    </Text>
                  </View>

                  <Ionicons
                    name="shield-checkmark-sharp"
                    size={24}
                    color="green"
                  />
                </View>

                <View>
                  <Text style={{textAlign: 'center', color: 'gray'}}>
                    BOOKABLE
                  </Text>
                </View>
              </View>
            </Pressable>
          )}
        />
      )}
    </SafeAreaView>
  );
};

export default TagVenueScreen;

const styles = StyleSheet.create({});
