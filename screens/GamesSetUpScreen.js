import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const GamesSetUpScreen = () => {
  const route = useRoute();
  console.log('route',route.params)
  return (
    <SafeAreaView>
      <ScrollView>
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
              justifyContent: 'space-between',
            }}>
            <Ionicons name="arrow-back" size={24} color="white" />

            <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
              <Entypo name="share" size={24} color="white" />
              <Entypo name="dots-three-vertical" size={24} color="white" />
            </View>
          </View>

          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              alignItems: 'center',
              gap: 14,
            }}>
            <Text style={{color: 'white', fontSize: 24, fontWeight: 'bold'}}>
              {route?.params?.item?.sport}
            </Text>
            <View
              style={{
                padding: 7,
                backgroundColor: 'white',
                borderRadius: 7,
                alignSelf: 'flex-start',
              }}>
              <Text>Regular</Text>
            </View>

            <View
              style={{
                marginLeft: 'auto',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 6,
              }}>
              <Text style={{fontSize: 15, fontWeight: '500', color: 'white'}}>
                Match Full
              </Text>
              <FontAwesome size={24} name="toggle-off" />
            </View>
          </View>

          <View style={{marginTop: 10}}>
            <Text style={{fontSize: 15, color: 'white', fontWeight: '600'}}>
              {route?.params?.item?.time} / {route?.params?.item?.date}
            </Text>
          </View>

          <Pressable
            style={{
              backgroundColor: '#28c752',
              paddingHorizontal: 18,
              paddingVertical: 8,
              marginTop: 10,
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
              width: '75%',
              justifyContent: 'center',
              borderRadius: 8,
            }}>
            <Entypo name="location" size={24} color="white" />
            <View>
              <Text style={{color: 'white'}}>{route?.params?.item?.area}</Text>
            </View>
          </Pressable>
        </View>

        <View
          style={{
            marginVertical: 20,
            marginHorizontal: 15,
            backgroundColor: 'white',
            padding: 10,
            flexDirection: 'row',

            gap: 10,
          }}>
          <MaterialCommunityIcons
            name="directions-fork"
            size={24}
            color="#adcf17"
          />
          <View>
            <Text style={{fontSize: 15}}>Add Expense</Text>
            <View
              style={{
                marginTop: 6,
                flexDirection: 'row',

                justifyContent: 'space-between',
              }}>
              <Text style={{width: '80%', color: 'gray'}}>
                Start Adding your expenses to split cost among players
              </Text>

              <Entypo name="chevron-small-right" size={24} color="gray" />
            </View>
          </View>
        </View>

        <View style={{marginHorizontal: 15}}>
          <Image
            style={{
              width: '100%',
              height: 220,
              borderRadius: 10,
              resizeMode: 'cover',
            }}
            source={{
              uri: 'https://playo.gumlet.io/OFFERS/PlayplusSpecialBadmintonOfferlzw64ucover1614258751575.png',
            }}
          />
        </View>

        <View
          style={{
            marginVertical: 20,
            marginHorizontal: 15,
            backgroundColor: 'white',
            padding: 12,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 16, fontWeight: '600'}}>
              Players ({route?.params?.item?.players?.length})
            </Text>
            <Ionicons name="earth" size={24} color="gray" />
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 20,
            }}>
            <Text style={{fontSize: 15, fontWeight: '500'}}>
              ❤️ You are not covered 🙂
            </Text>
            <Text style={{fontWeight: '500'}}>Learn More</Text>
          </View>

          <View style={{marginTop: 12}}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
              <Text>{route?.params?.item?.adminName}</Text>
              <View
                style={{
                  alignSelf: 'flex-start',
                  paddingHorizontal: 10,
                  paddingVertical: 6,
                  backgroundColor: '#E0E0E0',
                  borderRadius: 8,
                }}>
                <Text>Host</Text>
              </View>
            </View>
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
              <Text>INTERMEDIATE</Text>
            </View>
          </View>
        </View>

        {route?.params?.item?.isUserAdmin == true ? (
          <View>
            <View
              style={{
                height: 1,
                borderWidth: 1,
                borderColor: '#E0E0E0',
                marginVertical: 12,
              }}
            />
            <Pressable
              style={{flexDirection: 'row', alignItems: 'center', gap: 14}}>
              <View
                style={{
                  width: 60,
                  height: 60,
                  borderWidth: 1,
                  borderColor: '#E0E0E0',
                  borderRadius: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  style={{width: 30, height: 30, resizeMode: 'contain'}}
                  source={{
                    uri: 'https://cdn-icons-png.flaticon.com/128/343/343303.png',
                  }}
                />
              </View>

              <Text style={{fontSize: 15, fontWeight: '500', flex: 1}}>
                Add Co-Host
              </Text>

              <MaterialCommunityIcons
                style={{textAlign: 'center'}}
                name="chevron-right"
                size={24}
                color="black"
              />
            </Pressable>
          </View>
        ) : (
          <View></View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default GamesSetUpScreen;

const styles = StyleSheet.create({});
