import { Pressable, StyleSheet, Text } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AsyncStorage from '@react-native-async-storage/async-storage';  // ✅ Import ekledik
import { AuthContext } from '../AuthContext'

const ProfileScreen = () => {
  const { setToken } = useContext(AuthContext);  // ✅ `useContext` en üstte tanımlandı

  const clearAuthToken = async () => {
    try {
      await AsyncStorage.removeItem("token");  // ✅ Token AsyncStorage'dan silindi
      setToken("");  // ✅ Token context içinde temizlendi
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    const logout = async () => {
      await clearAuthToken();  // ✅ useEffect içinde async fonksiyon çağrıldı
    };
    logout();
  }, );

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Pressable onPress={() => clearAuthToken()}>
        <Text style={{ fontSize: 50 }}>
          Çıkış
        </Text>
      </Pressable>
    </SafeAreaView>
  );
}

export default ProfileScreen;

const styles = StyleSheet.create({})
