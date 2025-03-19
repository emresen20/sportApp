import {
  Alert,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation, useRoute} from '@react-navigation/native';
import axios from 'axios';

const ManageRequestsScreen = () => {
  const [option, setOption] = useState('Requests');
  const [players, setPlayers] = useState([]);
  const navigation = useNavigation();
  const route = useRoute();
  const userId = route?.params?.userId;
  const gameId = route?.params?.gameId;
  const [requests, setRequests] = useState([]);
  console.log('gfame', gameId);

  useEffect(() => {
    fetchRequests();
  }, []);
  useEffect(() => {
    fetchPlayers();
  }, []);

  const fetchPlayers = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/game/${gameId}/players`,
      );
      setPlayers(response?.data);
    } catch (error) {
      console.log('Error', error);
    }
  };

  const fetchRequests = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/games/${gameId}/requests`,
      );
      setRequests(response.data);
    } catch (error) {
      console.log('Error', error);
    }
  };

  console.log('playersw,', players);

  const acceptRequest = async userId => {
    try {
      const user = {
        gameId: gameId,
        userId: userId,
      };
      const response = await axios.post('http://localhost:8000/accept', user);
      if ((response.status = 200)) {
        Alert.alert('Succes', 'Request Accepted');
        await fetchRequests();
        await fetchPlayers();
      }
    } catch (error) {
      console.log('Error', error);
    }
  };
  return (
    <SafeAreaView>
      <View style={{padding: 12, backgroundColor: '#223536'}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 5,
            justifyContent: 'space-between',
          }}>
          <Pressable onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="white" />
          </Pressable>

          <AntDesign name="plussquareo" size={24} color="white" />
        </View>

        <View
          style={{
            marginTop: 15,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 5,
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 20, fontWeight: '600', color: 'white'}}>
            Manage
          </Text>
          <Text style={{color: 'white', fontSize: 17}}>Match Full</Text>
        </View>

        <View
          style={{
            marginTop: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 15,
          }}>
          <Pressable onPress={() => setOption('Requests')}>
            <Text
              style={{
                fontWeight: '500',
                color: option == 'Requests' ? '#1dd132' : 'white',
              }}>
              {/* Requests ({route?.params?.requests?.length}) */}
              Requests ({requests?.length})
            </Text>
          </Pressable>

          <Pressable onPress={() => setOption('Invited')}>
            <Text
              style={{
                fontWeight: '500',
                color: option == 'Invited' ? '#1dd132' : 'white',
              }}>
              Invited (0)
            </Text>
          </Pressable>

          <Pressable onPress={() => setOption('Playing')}>
            <Text
              style={{
                fontWeight: '500',
                color: option == 'Playing' ? '#1dd132' : 'white',
              }}>
              Playing ({players?.length})
            </Text>
          </Pressable>

          <Pressable onPress={() => setOption('Retired')}>
            <Text
              style={{
                fontWeight: '500',
                color: option == 'Retired' ? '#1dd132' : 'white',
              }}>
              Retired(0)
            </Text>
          </Pressable>
        </View>
      </View>

      <View style={{marginTop: 10, marginHorizontal: 15}}>
        <View>
          {option == 'Requests' && (
            <View>
              {requests.map((item, index) => (
                <Pressable
                  key={index}
                  style={{
                    padding: 10,
                    backgroundColor: 'white',
                    marginVertical: 10,
                    borderRadius: 6,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 13,
                    }}>
                    <Image
                      style={{width: 50, height: 50, borderRadius: 25}}
                      source={{uri: item?.image}}
                    />
                    <View style={{flex: 1}}>
                      <Text style={{fontWeight: '600'}}>
                        {item?.firstName} {item?.lastName}
                      </Text>
                      <View
                        style={{
                          paddingHorizontal: 10,
                          paddingVertical: 3,
                          marginTop: 10,
                          borderRadius: 20,
                          borderColor: 'orange',
                          borderWidth: 1,
                          alignSelf: 'flex-start',
                        }}>
                        <Text style={{fontSize: 13}}>INTERMEDIATE</Text>
                      </View>
                    </View>
                    <View>
                      <Image
                        style={{
                          width: 110,
                          height: 60,
                          resizeMode: 'contain',
                        }}
                        source={{
                          uri: 'https://playo-website.gumlet.io/playo-website-v2/logos-icons/new-logo-playo.png?q=50',
                        }}
                      />
                    </View>
                  </View>
                  <Text style={{marginTop: 8}}>{item?.comment}</Text>
                  <View
                    style={{
                      height: 1,
                      borderColor: '#E0E0E0',
                      borderWidth: 0.7,
                      marginVertical: 15,
                    }}
                  />

                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}>
                    <View>
                      <View
                        style={{
                          paddingHorizontal: 10,
                          paddingVertical: 4,
                          backgroundColor: '#E0E0E0',
                          borderRadius: 5,
                          alignSelf: 'flex-start',
                        }}>
                        <Text style={{fontSize: 14, color: 'gray'}}>
                          0 NO SHOWS
                        </Text>
                      </View>
                      <Text
                        style={{
                          marginTop: 10,
                          fontWeight: 'bold',
                          textDecorationLine: 'underline',
                        }}>
                        See Reputation
                      </Text>
                    </View>

                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 12,
                      }}>
                      <Pressable
                        style={{
                          padding: 10,
                          borderRadius: 6,
                          borderColor: '#E0E0E0',
                          borderWidth: 1,
                          width: 100,
                        }}>
                        <Text style={{textAlign: 'center'}}>RETIRE</Text>
                      </Pressable>
                      <Pressable
                        onPress={() => acceptRequest(item?.userId)}
                        style={{
                          padding: 10,
                          borderRadius: 6,
                          backgroundColor: '#26bd37',
                          width: 100,
                        }}>
                        <Text style={{textAlign: 'center', color: 'white'}}>
                          ACCEPT
                        </Text>
                      </Pressable>
                    </View>
                  </View>
                </Pressable>
              ))}
            </View>
          )}
        </View>
      </View>
      <View style={{marginTop: 10, marginHorizontal: 15}}>
          <View>
            {option == 'Playing' && (
              <>
                <View style={{}}>
                  {players?.map((item, index) => (
                    <Pressable
                    key={index}
                      style={{
                        marginVertical: 10,
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 10,
                      }}>
                      <View>
                        <Image
                          style={{width: 60, height: 60, borderRadius: 30}}
                          source={{uri: item?.image}}
                        />
                      </View>

                      <View>
                        <Text>
                          {item?.firstName} {item?.lastName}
                        </Text>

                        <View
                          style={{
                            paddingHorizontal: 10,
                            paddingVertical: 5,
                            marginTop: 10,
                            borderRadius: 20,
                            borderColor: 'orange',
                            borderWidth: 1,
                            alignSelf: 'flex-start',
                          }}>
                          <Text style={{fontSize: 13, fontWeight: '400'}}>
                            INTERMEDIATE
                          </Text>
                        </View>
                      </View>
                    </Pressable>
                  ))}
                </View>
              </>
            )}
          </View>
        </View>
    </SafeAreaView>
  );
};

export default ManageRequestsScreen;

const styles = StyleSheet.create({});
