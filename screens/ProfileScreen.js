// import { Pressable, StyleSheet, Text } from 'react-native'
// import React, { useContext, useEffect } from 'react'
// import { SafeAreaView } from 'react-native-safe-area-context'
// import AsyncStorage from '@react-native-async-storage/async-storage';  // ✅ Import ekledik
// import { AuthContext } from '../AuthContext'

// const ProfileScreen = () => {
//   const { setToken } = useContext(AuthContext);  // ✅ `useContext` en üstte tanımlandı

//   const clearAuthToken = async () => {
//     try {
//       await AsyncStorage.removeItem("token");  // ✅ Token AsyncStorage'dan silindi
//       setToken("");  // ✅ Token context içinde temizlendi
//     } catch (error) {
//       console.log("Error", error);
//     }
//   };

//   useEffect(() => {
//     const logout = async () => {
//       await clearAuthToken();  // ✅ useEffect içinde async fonksiyon çağrıldı
//     };
//     logout();
//   }, );

//   return (
//     <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Pressable onPress={() => clearAuthToken()}>
//         <Text style={{ fontSize: 50 }}>
//           Çıkış
//         </Text>
//       </Pressable>
//     </SafeAreaView>
//   );
// }

// export default ProfileScreen;

// const styles = StyleSheet.create({})


import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import ProfileDetailScreen from './ProfileDetailScreen';

const ProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <ScrollView>
        <ProfileDetailScreen/>
        <View style={{padding: 12}}>
          <View
            style={{backgroundColor: 'white', padding: 10, borderRadius: 10}}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
              <View
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 24,
                  backgroundColor: '#E0E0E0',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <AntDesign name="calendar" size={24} color={'green'} />
              </View>

              <View style={{}}>
                <Text style={{fontSize: 16, fontWeight: '500'}}>
                  My Bookings
                </Text>
                <Text style={{marginTop: 7, color: 'gray'}}>
                  View Transactions & Receipts
                </Text>
              </View>
            </View>

            <View
              style={{
                height: 1,
                borderColor: '#E0E0E0',
                borderWidth: 0.5,
                marginTop: 15,
              }}
            />

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
                marginVertical: 15,
              }}>
              <View
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 24,
                  backgroundColor: '#E0E0E0',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Ionicons name="people-outline" size={24} color={'green'} />
              </View>

              <View style={{}}>
                <Text style={{fontSize: 16, fontWeight: '500'}}>Playpals</Text>
                <Text style={{marginTop: 7, color: 'gray'}}>
                  View & Manage Players
                </Text>
              </View>
            </View>

            <View
              style={{height: 1, borderColor: '#E0E0E0', borderWidth: 0.5}}
            />

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
                marginTop: 15,
              }}>
              <View
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 24,
                  backgroundColor: '#E0E0E0',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <AntDesign name="book" size={24} color={'green'} />
              </View>

              <View style={{}}>
                <Text style={{fontSize: 16, fontWeight: '500'}}>Passbook</Text>
                <Text style={{marginTop: 7, color: 'gray'}}>
                  Manage Karma,Playo credits, etc
                </Text>
              </View>
            </View>

            <View
              style={{
                height: 1,
                borderColor: '#E0E0E0',
                borderWidth: 0.5,
                marginTop: 15,
              }}
            />

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
                marginTop: 15,
                marginBottom: 10,
              }}>
              <View
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 24,
                  backgroundColor: '#E0E0E0',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <MaterialIcons
                  name="energy-savings-leaf"
                  size={24}
                  color={'green'}
                />
              </View>

              <View style={{}}>
                <Text style={{fontSize: 16, fontWeight: '500'}}>
                  Preference and Privacy
                </Text>
                <Text style={{marginTop: 7, color: 'gray'}}>
                  View Transactions & Receipts
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={{padding: 12}}>
          <View
            style={{backgroundColor: 'white', padding: 10, borderRadius: 10}}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
              <View
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 24,
                  backgroundColor: '#E0E0E0',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <AntDesign name="calendar" size={24} color={'green'} />
              </View>

              <View style={{}}>
                <Text style={{fontSize: 16, fontWeight: '500'}}>Offers</Text>
              </View>
            </View>

            <View
              style={{
                height: 1,
                borderColor: '#E0E0E0',
                borderWidth: 0.5,
                marginTop: 15,
              }}
            />

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
                marginVertical: 15,
              }}>
              <View
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 24,
                  backgroundColor: '#E0E0E0',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Ionicons name="people-outline" size={24} color={'green'} />
              </View>

              <View style={{}}>
                <Text style={{fontSize: 16, fontWeight: '500'}}>Blogs</Text>
              </View>
            </View>

            <View
              style={{height: 1, borderColor: '#E0E0E0', borderWidth: 0.5}}
            />

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
                marginTop: 10,
              }}>
              <View
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 24,
                  backgroundColor: '#E0E0E0',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <AntDesign name="book" size={24} color={'green'} />
              </View>

              <View style={{}}>
                <Text style={{fontSize: 16, fontWeight: '500'}}>
                  Invite & Earn
                </Text>
              </View>
            </View>

            <View
              style={{
                height: 1,
                borderColor: '#E0E0E0',
                borderWidth: 0.5,
                marginTop: 15,
              }}
            />

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
                marginTop: 15,
                marginBottom: 10,
              }}>
              <View
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 24,
                  backgroundColor: '#E0E0E0',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <MaterialIcons
                  name="energy-savings-leaf"
                  size={24}
                  color={'green'}
                />
              </View>

              <View style={{}}>
                <Text style={{fontSize: 16, fontWeight: '500'}}>
                  Help & Support
                </Text>
              </View>
            </View>


            <View
              style={{height: 1, borderColor: '#E0E0E0', borderWidth: 0.5}}
            />


            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
                marginTop: 15,
                marginBottom: 10,
              }}>
              <View
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 24,
                  backgroundColor: '#E0E0E0',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <MaterialIcons
                  name="energy-savings-leaf"
                  size={24}
                  color={'green'}
                />
              </View>

              <View style={{}}>
                <Text style={{fontSize: 16, fontWeight: '500'}}>Logout</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});