import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation, useRoute} from '@react-navigation/native';
import Calender from './components/Calender';
import moment, {duration} from 'moment';

const SlotScreen = () => {
  const today = moment().format('YYYY-MM-DD');
  const navigation = useNavigation();
  const [duration, setDuration] = useState(60);
  const route = useRoute();
  const [selectedSport, setselectedSport] = useState(
    route?.params?.sports[0].name,
  );
  const [selectedDate, setSelectedDate] = useState(today);
  //const [bookingStatus, setBookingStatus] = useState(false);
  const [selectedTime, setSelectedTime] = useState([]);
  const [selectedCourt, setSelectedCourt] = useState([]);

  const calculateEndTime = (startTime, duration) => {
    if (typeof startTime !== 'string') {
      //startTime string değilse işlem yapma
      console.log('invalid', startTime);
      return;
    }
    console.log('starttime', startTime);

    const match = startTime.match(/(\d+:\d+)([APMapm]+)/); //regex ile saat ve AM/PM kontrolü
    if (!match) {
      console.error('Invalid startTime format:', startTime);
      return;
    }
    const time = match[1]; // 10.30 gibi bir deper alır
    const modifier = match[2].toUpperCase(); //AM/PM kontrolü
    console.log('time', time);
    console.log('modifier', modifier);

    let [hours, minutes] = time.split(':'); //saat ve dakika ayırma
    hours = parseInt(hours, 10); //saati integer yapma
    minutes = parseInt(minutes, 10); //dakikayı integer yapma
    if (modifier === 'PM' && hours < 12) {
      //PM ise ve saat 12 den küçükse 12 ekler
      hours += 12;
    }
    if (modifier === 'AM' && hours === 12) {
      //AM ise ve saat 12 ise 0 yapar
      hours = 0;
    }
    const totalMinutes = hours * 60 + minutes + duration; //saat ve dakikayı toplar ve süreyi ekler
    let endHours = Math.floor(totalMinutes / 60); //saati hesaplar
    let endMinutes = totalMinutes % 60; //dakikayı hesaplar
    let endModifier = endHours >= 12 ? 'PM' : 'AM'; //saat 12 den büyükse PM değilse AM yapar
    if (endHours > 24) {
      //saat 24 den büyükse 24 çıkarır ve AM yapar
      endHours -= 24;
      endModifier = 'AM';
    }
    if (endHours > 12) {
      //saat 12 den büyükse 12 çıkarır ve PM yapar
      endHours -= 12;
      endModifier = 'PM';
      if (endHours > 12) endHours -= 12;
    }
    if (endHours === 0) {
      //saat 0 ise 12 yapar ve AM yapar
      endHours = 12;
      endModifier = 'AM';
    }

    const formattedEndHours = endHours.toString().padStart(2, '0'); //saati 2 haneli yapar
    const formattedEndMinutes = endMinutes.toString().padStart(2, '0'); //  dakikayı 2 haneli yapar

    return `${formattedEndHours}:${formattedEndMinutes} ${endModifier}`; //saat ve dakikayı döndürür
  };

  console.log('slotroute', route?.params);
  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={{
            padding: 10,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
          }}>
          <Ionicons
            onPress={() => navigation.goBack()}
            name="arrow-back-outline"
            size={25}
            color="black"
          />
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={{fontSize: 15, fontWeight: '500', width: '90%'}}>
            {route?.params?.place}
          </Text>
        </View>
        <ScrollView
          contentContainerStyle={{marginLeft: 'auto'}}
          showsHorizontalScrollIndicator={false}
          horizontal>
          {route.params.sports.map((item, index) => {
            // if (item.name === selectedSport) {
            //  showCalender
            // }
            return (
              <View>
                {selectedSport.includes(item.name) ? (
                  <Pressable
                    key={index}
                    style={{
                      borderColor: 'green',
                      margin: 10,
                      padding: 20,
                      width: 80,
                      height: 90,
                      borderWidth: 3,
                      borderRadius: 5,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <MaterialCommunityIcons
                      style={{textAlign: 'center'}}
                      name={item.icon}
                      size={24}
                      color="gray"
                    />
                    <Text
                      style={{
                        fontSize: 10,
                        fontWeight: 'bold',
                        width: 80,
                        textTransform: 'uppercase',
                        textAlign: 'center',
                        marginTop: 10,
                      }}>
                      {item.name}
                    </Text>
                  </Pressable>
                ) : (
                  <Pressable
                    key={index}
                    onPress={() => {
                      setselectedSport(item.name);
                      setSelectedCourt([]);
                    }}
                    style={{
                      borderColor: '#686868',
                      margin: 10,
                      padding: 20,
                      width: 80,
                      height: 90,
                      borderWidth: 1,
                      borderRadius: 5,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <MaterialCommunityIcons
                      style={{textAlign: 'center'}}
                      name={item.icon}
                      size={24}
                      color="gray"
                    />
                    <Text
                      style={{
                        fontSize: 10,
                        fontWeight: 'bold',
                        width: 80,
                        textTransform: 'uppercase',
                        textAlign: 'center',
                        marginTop: 10,
                      }}>
                      {item.name}
                    </Text>
                  </Pressable>
                )}
              </View>
            );
          })}
        </ScrollView>
        {selectedSport && (
          <ScrollView>
            <Calender
              selectedSport={selectedSport}
              onSelectDate={setSelectedDate}
              setSelectedTime={setSelectedTime}
              selected={selectedDate}
            />
          </ScrollView>
        )}
        <Pressable
          style={{
            flexDirection: 'row',
            margin: 10,
            alignItems: 'center',
            gap: 20,
            width: '100%',
          }}>
          <Pressable
            style={{
              borderColor: '#E0E0E0',
              borderWidth: 1,
              paddingVertical: 15,
              paddingHorizontal: 60,
              marginRight: 20,
            }}>
            <Text
              style={{fontSize: 13, fontWeight: '400', textAlign: 'center'}}>
              TIME
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '400',
                textAlign: 'center',
                marginTop: 8,
              }}>
              {/* 06:30 AM */}
              {route?.params?.startTime
                ? route?.params?.startTime
                : selectedTime.length > 0
                ? selectedTime
                : 'Choose Time'}
            </Text>
          </Pressable>
          <Pressable
            style={{
              borderColor: '#E0E0E0',
              borderWidth: 1,
              paddingVertical: 15,
              paddingHorizontal: 60,
              marginRight: 20,
            }}>
            <Text
              style={{fontSize: 13, fontWeight: '400', textAlign: 'center'}}>
              TIME
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '400',
                textAlign: 'center',
                marginTop: 8,
              }}>
              {/* 06:30 AM */}
              {route?.params?.endTime
                ? route.params.endTime
                : selectedTime.length > 0
                ? calculateEndTime(selectedTime, duration)
                : 'Choose Time'}
            </Text>
          </Pressable>
        </Pressable>
        <Text
          style={{
            textAlign: 'center',

            fontSize: 16,
            fontWeight: '500',
          }}>
          Duration
        </Text>
        <Pressable
          style={{
            gap: 15,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 10,
          }}>
          <Pressable
            onPress={() => setDuration(Math.max(60, duration - 60))} //60 dakikadan küçük olamaz
            style={{
              width: 26,
              height: 26,
              borderRadius: 13,
              borderColor: 'red',
              borderWidth: 2,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{textAlign: 'center', fontSize: 15, fontWeight: '600'}}>
              -
            </Text>
          </Pressable>
          <Text style={{textAlign: 'center', fontSize: 16, fontWeight: '500'}}>
            {duration}
          </Text>
          <Pressable
            onPress={() => setDuration(duration + 60)}
            style={{
              width: 26,
              height: 26,
              borderRadius: 13,
              borderColor: 'green',
              borderWidth: 2,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{textAlign: 'center', fontSize: 15, fontWeight: '600'}}>
              +
            </Text>
          </Pressable>
        </Pressable>
        <Text
          style={{
            textAlign: 'center',
            marginVertical: 10,
            fontSize: 16,
            fontWeight: '500',
          }}>
          Select Slot
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SlotScreen;

const styles = StyleSheet.create({});
