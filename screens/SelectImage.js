import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {launchImageLibrary} from 'react-native-image-picker';

const SelectImage = () => {
  const [image, setImage] = useState();
  const navigation = useNavigation();
  const images = [
    {
      id: '0',
      image: 'https://cdn-icons-png.flaticon.com/128/16683/16683469.png',
    },
    {
      id: '0',
      image: 'https://cdn-icons-png.flaticon.com/128/16683/16683439.png',
    },
    {
      id: '0',
      image: 'https://cdn-icons-png.flaticon.com/128/4202/4202835.png',
    },
    {
      id: '0',
      image: 'https://cdn-icons-png.flaticon.com/128/3079/3079652.png',
    },
  ];

  const pickImageFromGallery = async () => {
    const result = await launchImageLibrary({mediaType: 'photo'});
    console.log(image);
    if (!result.didCancel && result.assets && result.assets.length > 0) {
      setImage(result.assets[0].uri);
    }
  };

  const saveImage=()=>{
    navigation.navigate('PreFinalScreen')
  }
  return (
    <>
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{marginHorizontal: 10}}>
          <Ionicons
            onPress={() => navigation.goBack()}
            name="arrow-back"
            size={24}
            color="black"
          />
        </View>
        <View style={{marginHorizontal: 10, marginVertical: 15}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            Complete Your Profile
          </Text>

          <Text style={{marginTop: 10, color: 'gray'}}>
            What would you like your mates to call you? ❤️
          </Text>
        </View>
        <View style={{marginVertical: 25}}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                borderColor: 'green',
                borderWidth: 2,
                resizeMode: 'cover',
              }}
              source={{uri: image ? image : images[0]?.image}}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 25,
              justifyContent: 'center',
            }}>
            {images?.map((item, index) => (
              <Pressable
                onPress={() => setImage(item?.image)}
                style={{margin: 10, gap: 10}}
                key={index}>
                <Image
                  style={{
                    width: 70,
                    height: 70,
                    borderRadius: 35,
                    borderColor: image == item?.image ? 'green' : 'transparent',
                    borderWidth: 2,
                    resizeMode: 'contain',
                  }}
                  source={{uri: item.image}}
                />
              </Pressable>
            ))}
          </View>

          <Text style={{textAlign: 'center', color: 'gray', fontSize: 17}}>
            OR
          </Text>
          <Pressable
            onPress={pickImageFromGallery}
            style={{
              backgroundColor: '#2dcf30',
              paddingVertical: 10,
              marginVertical: 15,
              borderRadius: 8,
              marginTop: 15,
              marginRight: 30,
              marginLeft: 30,
            }}>
            <Text style={{textAlign: 'center', color: 'white', fontSize: 16}}>
              Pick from Gallery
            </Text>
          </Pressable>
          <Text style={{textAlign: 'center', color: 'gray', fontSize: 17}}>
            OR
          </Text>
          <View style={{marginHorizontal: 20, marginVertical: 20}}>
            <View>
              <Text style={{fontSize: 16, color: 'gray'}}>
                Enter Image link
              </Text>

              <TextInput
                value={image}
                onChangeText={setImage}
                placeholder="Image link"
                style={{
                  padding: 18,
                  borderColor: '#D0D0D0',
                  borderWidth: 1,
                  borderRadius: 10,
                  marginTop: 10,
                }}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
      <Pressable
        onPress={saveImage}
        style={{
          backgroundColor: '#07bc0c',
          marginTop: 'auto',
          marginBottom: 30,
          padding: 15,
          marginHorizontal: 10,
          borderRadius: 4,
        }}>
        <Text
          style={{
            textAlign: 'center',
            color: 'white',
            fontSize: 15,
            fontWeight: '500',
          }}>
          NEXT
        </Text>
      </Pressable>
    </>
  );
};

export default SelectImage;

const styles = StyleSheet.create({});
