import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';

const TagVenueScreen = () => {
    const [venues,setVenues]=useState([]);
    const navigation= useNavigation();
  return (
    <View>
      <Text>TagVenueScreen</Text>
    </View>
  )
}

export default TagVenueScreen

const styles = StyleSheet.create({})