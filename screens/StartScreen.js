import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useRef} from 'react';
import MapView from 'react-native-maps';

const StartScreen = () => {
  const mapView = useRef(null);

  return (
    <SafeAreaView style={styles.container}>
      <MapView
        ref={mapView}
        style={{width:'100%',height:'100%'}}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </SafeAreaView>
  );
};

export default StartScreen;

const styles = StyleSheet.create({});
