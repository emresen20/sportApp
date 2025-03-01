import {
    Alert,
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useNavigation, useRoute} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {SlideAnimation} from 'react-native-modals';
import {BottomModal} from 'react-native-modals';
import {ModalContent} from 'react-native-modals';
import moment from 'moment';
import {AuthContext} from '../AuthContext';
import axios from 'axios';

const CreateActivity = () => {
  const navigation = useNavigation();
  const [sport, setSport] = useState('');
  console.log('sport',sport)
  const [area, setArea] = useState('');
  const [date, setDate] = useState('');
  const [timeInterval, setTimeInterval] = useState('');
  const [taggedVenue, setTaggedVenue] = useState(null);
  console.log('taggedVenue',taggedVenue)
  const [noOfPlayers, setnoOfPlayers] = useState(0);
  const {userId} = useContext(AuthContext);
  console.log(userId);

  const [selected, setSelected] = useState(['Public']);
  const [modalVisible, setModalVisible] = useState(false);
  const route = useRoute();

  useEffect(() => {
    if (route?.params?.timeInterval) {
      setTimeInterval(route?.params?.timeInterval);
    }
  }, [route?.params]);

  useEffect(() => {
    if (route?.params?.taggedVenue) {
      setTaggedVenue(route?.params?.taggedVenue);
    }
  }, [route.params]);

  const createGame = async () => {
    try {
      const admin = userId;
      const time = timeInterval;
      const gameData = {
        sport,
        area: taggedVenue,
        date,
        time,
        admin,
        totalPlayers: noOfPlayers,
      };
      console.log('gameData',gameData)

      const response = await axios.post(
        'http://localhost:8000/creategame',
        gameData,
      );
      console.log('Game created:', response.data);
      if (response.status == 200) {
        Alert.alert('Success!', 'Game created Succesfully', [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => navigation.navigate('Main', { screen: 'Play' })},
        ]);

        setSport('');
        setArea('');
        setDate('');
        setTimeInterval('');
      }
    } catch (error) {
      console.log('eror creategame', error);
    }
  };

  const generateDates = () => {
    const dates = [];
    for (let i = 0; i < 10; i++) {
      const date = moment().add(i, 'days');
      let displayDate;
      if (i === 0) {
        displayDate = 'Today';
      } else if (i === 1) {
        displayDate = 'Tomorrow';
      } else if (i === 2) {
        displayDate = 'Day after';
      } else {
        displayDate = date.format('Do MMMM');
      }
      dates.push({
        id: i.toString(),
        displayDate,
        dayOfWeek: date.format('ddd'),
        actualDate: date.format('Do MMMM'),
      });
    }
    return dates;
  };

  const selectDate = (date) => {
    setModalVisible(false);
    setDate(date);
  };
  const dates = generateDates();
  console.log(dates);
  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: 'white',
          paddingTop: Platform.OS === 'android' ? 35 : 0,
        }}>
        <ScrollView>
          <View style={{marginHorizontal: 10}}>
            <Ionicons
              onPress={() => navigation.goBack()}
              name="arrow-back"
              size={24}
              color="black"
            />
          </View>

          <View style={{padding: 10}}>
            <Text style={{fontSize: 25, fontWeight: 'bold'}}>
              Create Activity
            </Text>

            <Pressable
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 20,
                marginTop: 15,
                marginVertical: 10,
              }}>
              <MaterialCommunityIcons name="whistle" size={24} color="gray" />
              <View style={{flex: 1}}>
                <Text style={{fontSize: 17, fontWeight: '500'}}>Sport</Text>
                <TextInput
                  value={sport}
                  onChangeText={setSport}
                  style={{marginTop: 7, fontSize: 15}}
                  placeholderTextColor="gray"
                  placeholder={'Eg Badminton / Footbal / Cricket'}
                />
              </View>
              <AntDesign name="arrowright" size={24} color="gray" />
            </Pressable>
            <Text
              style={{borderColor: '#E0E0E0', borderWidth: 0.7, height: 1}}
            />

            <Pressable
              onPress={() => navigation.navigate('TagVenue')}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 20,
                marginTop: 10,
                marginVertical: 10,
              }}>
              <Entypo name="location" size={24} color="gray" />
              <View style={{flex: 1}}>
                <Text style={{fontSize: 17, fontWeight: '500'}}>Area</Text>
                <TextInput
                  value={area ? area : taggedVenue}
                  onChangeText={setArea}
                  placeholderTextColor="gray"
                  style={{marginTop: 7, fontSize: 15, color: 'black'}}
                  placeholder={'Locality or venue name'}
                />
              </View>
              <AntDesign name="arrowright" size={24} color="gray" />
            </Pressable>
            <Text
              style={{borderColor: '#E0E0E0', borderWidth: 0.7, height: 1}}
            />

            <Pressable
              onPress={() => setModalVisible(!modalVisible)}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 20,
                marginTop: 10,
                marginVertical: 10,
              }}>
              <Feather name="calendar" size={24} color="gray" />
              <Pressable style={{flex: 1}}>
                <Text style={{fontSize: 17, fontWeight: '500'}}>Date</Text>
                <TextInput
                  editable={false}
                  placeholderTextColor={date ? 'black' : 'gray'}
                  style={{marginTop: 7, fontSize: 15}}
                  placeholder={date ? date : 'Pick a Day'}
                />
              </Pressable>
              <AntDesign name="arrowright" size={24} color="gray" />
            </Pressable>
            <Text
              style={{borderColor: '#E0E0E0', borderWidth: 0.7, height: 1}}
            />

            <Pressable
              onPress={() => navigation.navigate('Time')}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 20,
                marginTop: 7,
                marginVertical: 10,
              }}>
              <AntDesign name="clockcircleo" size={24} color="gray" />
              <View style={{flex: 1}}>
                <Text style={{fontSize: 17, fontWeight: '500'}}>Time</Text>
                <TextInput
                  placeholderTextColor={timeInterval ? 'black' : 'gray'}
                  style={{marginTop: 7, fontSize: 15}}
                  placeholder={timeInterval ? timeInterval : 'Pick Exact Time'}
                />
              </View>
              <AntDesign name="arrowright" size={24} color="gray" />
            </Pressable>
            <Text
              style={{borderColor: '#E0E0E0', borderWidth: 0.7, height: 1}}
            />

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 20,
                marginTop: 7,
                marginVertical: 10,
              }}>
              <Feather name="activity" size={24} color="black" />
              <View>
                <Text
                  style={{marginBottom: 10, fontSize: 15, fontWeight: '500'}}>
                  Activity Access
                </Text>

                <Pressable style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Pressable
                    onPress={() => setSelected('Public')}
                    style={
                      selected.includes('Public')
                        ? {
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 8,
                            backgroundColor: '#07bc0c',
                            width: 140,
                            justifyContent: 'center',
                            borderRadius: 3,
                            padding: 10,
                          }
                        : {
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 8,
                            backgroundColor: 'white',
                            width: 140,
                            justifyContent: 'center',
                            borderRadius: 3,
                            padding: 10,
                          }
                    }>
                    <Ionicons
                      name="earth"
                      size={24}
                      color={selected.includes('Public') ? 'white' : 'black'}
                    />
                    <Text
                      style={
                        selected.includes('Public')
                          ? {color: 'white', fontWeight: 'bold', fontSize: 15}
                          : {color: 'black', fontWeight: 'bold', fontSize: 15}
                      }>
                      Public
                    </Text>
                  </Pressable>

                  <Pressable
                    onPress={() => setSelected('invite only')}
                    style={
                      selected.includes('invite only')
                        ? {
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 8,
                            backgroundColor: '#07bc0c',
                            width: 140,
                            justifyContent: 'center',
                            borderRadius: 3,
                            padding: 10,
                          }
                        : {
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 8,
                            backgroundColor: 'white',
                            width: 140,
                            justifyContent: 'center',
                            borderRadius: 3,
                            padding: 10,
                          }
                    }>
                    <AntDesign
                      name="lock1"
                      size={24}
                      color={
                        selected.includes('invite only') ? 'white' : 'black'
                      }
                    />
                    <Text
                      style={
                        selected.includes('invite only')
                          ? {color: 'white', fontWeight: 'bold', fontSize: 15}
                          : {color: 'black', fontWeight: 'bold', fontSize: 15}
                      }>
                      Invite Only
                    </Text>
                  </Pressable>
                </Pressable>
              </View>
            </View>
            <Text
              style={{
                borderColor: '#E0E0E0',
                borderWidth: 0.7,
                height: 1,
                marginTop: 7,
              }}
            />
            <Text style={{marginTop: 20, fontSize: 16}}>Total Players</Text>
            <View
              style={{
                padding: 10,
                backgroundColor: '#F0F0F0',
                marginTop: 10,
                borderRadius: 6,
              }}>
              <View style={{marginVertical: 5}}>
                <View>
                  <TextInput
                    value={noOfPlayers}
                    onChangeText={(text) => setnoOfPlayers(Number(text))}
                    style={{
                      padding: 10,
                      backgroundColor: 'white',
                      borderColor: '#D0D0D0',
                      borderWidth: 1,
                    }}
                    placeholder="Total Players (including you)"
                  />
                </View>
              </View>
            </View>
            <Text
              style={{
                borderColor: '#E0E0E0',
                borderWidth: 0.7,
                height: 1,
                marginTop: 15,
              }}
            />
            <Text style={{marginTop: 20, fontSize: 16}}>Add Instructions</Text>
            <View
              style={{
                padding: 10,
                backgroundColor: '#F0F0F0',
                marginTop: 10,
                borderRadius: 6,
              }}>
              <View
                style={{
                  marginVertical: 5,
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 8,
                }}>
                <Ionicons name="bag-check" size={24} color="red" />

                <Text style={{flex: 1, fontStyle: 15, fontWeight: '500'}}>
                  Bring your own equipment
                </Text>

                <FontAwesome name="check-square" size={24} color="green" />
              </View>
              <View
                style={{
                  marginVertical: 5,
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 8,
                }}>
                <MaterialCommunityIcons
                  name="directions-fork"
                  size={24}
                  color="#FEBE10"
                />

                <Text style={{flex: 1, fontStyle: 15, fontWeight: '500'}}>
                  Cost Shared
                </Text>

                <FontAwesome name="check-square" size={24} color="green" />
              </View>
              <View
                style={{
                  marginVertical: 5,
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 8,
                }}>
                <FontAwesome5 name="syringe" size={24} color="green" />

                <Text style={{flex: 1, fontStyle: 15, fontWeight: '500'}}>
                  Covid Vaccinated players preferred
                </Text>

                <FontAwesome name="check-square" size={24} color="green" />
              </View>

              <TextInput
                style={{
                  padding: 10,
                  backgroundColor: 'white',
                  borderColor: '#D0D0D0',
                  borderWidth: 1,
                  marginVertical: 8,
                  borderRadius: 6,
                }}
                placeholder="Add Additional Instructions"
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 20,
                marginTop: 15,
                marginVertical: 10,
              }}>
              <AntDesign name="setting" size={24} color="black" />
              <View style={{flex: 1}}>
                <Text style={{fontSize: 17, fontWeight: '500'}}>
                  Advanced Settings
                </Text>
              </View>
              <AntDesign name="arrowright" size={24} color="gray" />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
      <Pressable
        style={{
          backgroundColor: '#07bc0c',
          marginTop: 'auto',
          marginBottom: 30,
          padding: 12,
          marginHorizontal: 10,
          borderRadius: 4,
        }}
        onPress={createGame}>
        <Text
          style={{
            textAlign: 'center',
            color: 'white',
            fontSize: 15,
            fontWeight: '500',
          }}>
          Create Activity
        </Text>
      </Pressable>
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}>
        {/* Arka planı karartma alanı */}
        <Pressable
          style={styles.overlay}
          onPress={() => setModalVisible(false)} // Boş alana basınca kapat
        >
          {/* Aşağıdan gelen içerik alanı */}
          <View style={styles.bottomSheet}>
            <Text style={styles.title}>Choose date/time to rehost</Text>

            <View style={styles.dateContainer}>
              {dates?.map((item, index) => (
                <Pressable
                  key={index}
                  onPress={() => selectDate(item?.actualDate)}
                  style={styles.dateItem}>
                  <Text>{item?.displayDate}</Text>
                  <Text style={{color: 'gray', marginTop: 8}}>
                    {item?.dayOfWeek}
                  </Text>
                </Pressable>
              ))}
            </View>

            {/* Kapatma butonu */}
            <Pressable
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>Close</Text>
            </Pressable>
          </View>
        </Pressable>
      </Modal>

      {/* <BottomModal
        onBackdropPress={() => setModalVisible(!modalVisible)}
        swipeDirection={['up', 'down']}
        swipeThreshold={200}
        modalAnimation={
          new SlideAnimation({
            slideFrom: 'bottom',
          })
        }
        onHardwareBackPress={() => setModalVisible(!modalVisible)}
        visible={modalVisible}
        onTouchOutside={() => setModalVisible(!modalVisible)}>
        <ModalContent
          style={{width: '100%', height: 400, backgroundColor: 'white'}}>
          <View>
            <Text
              style={{textAlign: 'center', fontSize: 16, fontWeight: 'bold'}}>
              Choose date/ time to rehost
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 15,
                flexWrap: 'wrap',
                marginVertical: 20,
              }}>
              {dates.map((item, index) => (
                <Pressable
                  onPress={() => selectDate(item?.actualDate)}
                  key={index}
                  style={{
                    padding: 10,
                    borderRadius: 10,
                    borderColor: '#E0E0E0',
                    borderWidth: 1,
                    width: '30%',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text>{item?.displayDate}</Text>
                  <Text style={{color: 'gray', marginTop: 8}}>
                    {item?.dayOfWeek}
                  </Text>
                </Pressable>
              ))}
            </View>
          </View>
        </ModalContent>
      </BottomModal> */}
    </>
  );
};

export default CreateActivity;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end', // Alt kısımdan açılmasını sağlar
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  bottomSheet: {
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    padding: 20,
    maxHeight: '60%', // Ekranın max %60'ı kadar açılır
  },
  title: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  dateContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
    justifyContent: 'center',
  },
  dateItem: {
    padding: 10,
    borderRadius: 10,
    borderColor: '#E0E0E0',
    borderWidth: 1,
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  closeButton: {
    backgroundColor: 'black',
    padding: 12,
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20,
  },
});



