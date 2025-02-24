import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef} from 'react';
import MapView, {Marker} from 'react-native-maps';

const StartScreen = () => {
  const mapView = useRef(null);
  const users = [
    {
      image:
        'https://images.pexels.com/photos/7208625/pexels-photo-7208625.jpeg?auto=compress&cs=tinysrgb&w=800',
      id: '1',
      latitude: '13.1295',
      longitude: '79.5977',
      name: 'sujan',
      description: 'Hey!',
    },
    {
      image:
        'https://images.pexels.com/photos/2913125/pexels-photo-2913125.jpeg?auto=compress&cs=tinysrgb&w=800',
      id: '2',
      latitude: '13.155',
      longitude: '77.6070',
      name: 'suhas',
      description: "let's play",
    },
    {
      image:
        'https://images.pexels.com/photos/1042140/pexels-photo-1042140.jpeg?auto=compress&cs=tinysrgb&w=800',
      id: '3',
      latitude: '13.0977',
      longitude: '77.5839',
      name: 'ashish',
      description: "I'm always",
    },
    {
      image:
        'https://images.pexels.com/photos/4307678/pexels-photo-4307678.jpeg?auto=compress&cs=tinysrgb&w=800',
      id: '4',
      latitude: '13.0490',
      longitude: '77.5936',
      name: 'abhi',
      description: 'At 8pm?',
    },
    {
      image:
        'https://images.pexels.com/photos/1379031/pexels-photo-1379031.jpeg?auto=compress&cs=tinysrgb&w=800',
      id: '5',
      latitude: '13.0623',
      longitude: '77.5871',
      name: 'akash',
      description: 'Hey!',
    },
    {
      image:
        'https://images.pexels.com/photos/3264235/pexels-photo-3264235.jpeg?auto=compress&cs=tinysrgb&w=800',
      id: '6',
      latitude: '13.0354',
      longitude: '77.5988',
      name: 'Preetham',
      description: 'What up?',
    },
  ];
  const BANGALORE_COORDS = {
    latitude: 12.9916987,
    longitude: 77.5945627,
  };
  const IZMIR_COORDS = {
    latitude: 38.4192,
    longitude: 27.1287,
  };

  const generateCircularPoints = (center, radius, numPoints) => {
    const points = [];
    const angleSte = (2 * Math.PI) / numPoints;

    for (let i = 0; i < numPoints; i++) {
      const angle = i * angleSte;
      const latitude = center.latitude + (radius / 111) * Math.cos(angle);
      const longitude =
        center.longitude +
        (radius / (111 * Math.cos(center.latitude))) * Math.sin(angle);
      points.push({latitude, longitude});
    }
    return points;
  };

  const numPoints = 6;
  const radius = 5;

  const circularPoints = generateCircularPoints(
    IZMIR_COORDS,
    radius,
    numPoints,
  );
  console.log('points', circularPoints);
  useEffect(() => {
    mapView.current.fitToCoordinates(circularPoints, {
      edgePadding: {
        top: 70,
        bottom: 70,
        left: 70,
        right: 70,
      },
    });
  }, [circularPoints]);

  //   useEffect(() => { // bu kod kullanıcıların kendi adresleri için
  //     const coordinates = users.map(user => ({
  //       latitude: parseFloat(user.latitude),
  //       longitude: parseFloat(user.longitude),
  //     }));

  //     if (mapView.current && coordinates.length > 0) {
  //       mapView.current.fitToCoordinates(coordinates, {
  //         edgePadding: {
  //           top: 70,
  //           bottom: 70,
  //           left: 70,
  //           right: 70,
  //         },
  //       });
  //     }
  //   }, [users]);
  return (
    <SafeAreaView style={styles.container}>
      <MapView
        ref={mapView}
        style={{width: '100%', height: 400}}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {/* {users?.map((user, index) => ( bu kodda kendi adresleri için
          <Marker
            key={index}
            coordinate={{
              latitude: parseFloat(user.latitude), // Kullanıcının kendi konumu
              longitude: parseFloat(user.longitude),
            }}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                style={{
                  width: 70,
                  height: 70,
                  resizeMode: 'cover',
                  borderRadius: 35,
                }}
                source={{uri: user?.image}}
              />
            </View>
          </Marker>
        ))} */}
        {circularPoints?.map((point, index) => {
          // bu kullanıcıların gerçek olmayan konumlarında bi daire çizdiriyor
          const user = users[index % users?.length];
          return (
            <Marker key={index} coordinate={point}>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Image
                  style={{
                    width: 70,
                    height: 70,
                    resizeMode: 'cover',
                    borderRadius: 35,
                  }}
                  source={{uri: user?.image}}
                />
              </View>
              <View
                style={{
                  paddingHorizontal: 10,
                  paddingVertical: 7,
                  borderRadius: 7,
                  backgroundColor: 'white',
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 13,
                    fontWeight: '500',
                  }}>
                  {user?.description}
                </Text>
              </View>
            </Marker>
          );
        })}
      </MapView>
    </SafeAreaView>
  );
};

export default StartScreen;

const styles = StyleSheet.create({});
