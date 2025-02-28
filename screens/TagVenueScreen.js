import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

const TagVenueScreen = () => {
  const [venues, setVenues] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchVenues = async () => {
      try {
        const response = await axios.get('http://localhost:8000/venues')
        setVenues(response.data)
      } catch (error) {
        console.log('Error fetch Venues',error)
      }
    }
    fetchVenues();
  }, []);
  console.log('v',venues)
  return (
    <SafeAreaView>
      <Text>TagVenueScreen</Text>
    </SafeAreaView>
  );
};

export default TagVenueScreen;

const styles = StyleSheet.create({});
