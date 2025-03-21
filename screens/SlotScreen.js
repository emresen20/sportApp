import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
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
  const [checkedTimes, setCheckedTimes] = useState([]);
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

  const [checkTimes, setCheckTimes] = useState([]);
  const [times, setTimes] = useState([]);

  const generateTimes = () => {
    // 6dan 24 e kadar 60 dakika aralıklarla saatleri oluşturur
    console.log('selectedDate', selectedDate);
    const start = moment(selectedDate).startOf('day').add(6, 'hours');
    const end = moment(selectedDate)
      .startOf('day')
      .add(23, 'hours')
      .add(59, 'minutes');
    const interval = 60;
    const result = [];
    let current = moment(start);

    while (current <= end) {
      result.push(current.format('hh:mm A'));
      current.add(interval, 'minutes');
    }

    setTimes(result);
  };
  useEffect(() => {
    generateTimes();
  }, []);

  useEffect(() => {
    //gelecekte mi geçmişte mi
    const checkTime = () => {
      const currentDateTime = moment(); // Current date and time
      const selectedDateStart = moment(selectedDate).startOf('day'); // Start of the selected date

      const timess = times?.map(item => {
        // Combine the selected date with the current time slot to create a full date-time
        const dateTime = moment(selectedDateStart).set({
          hour: moment(item, 'h:mma').get('hour'),
          minute: moment(item, 'h:mma').get('minute'),
        });

        // Determine if the time slot is in the past or future
        const status = currentDateTime.isBefore(dateTime);
        return {time: item, status: status};
      });

      setCheckedTimes(timess);
    };

    checkTime();
  }, [selectedDate, times]);

  const isSlotBooked = time => {};
  const courts = route?.params?.sports.filter(
    item => item.name === selectedSport,
  );
  console.log('courts', courts);
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
        {selectedSport && (
          <ScrollView
            horizontal
            contentContainerStyle={{marginHorizontal: 10}}
            showsHorizontalScrollIndicator={false}>
            {checkedTimes?.map((item, index) => {
              const disabled = isSlotBooked(item?.time);
              return (
                <View>
                  {selectedTime.includes(item?.time) ? (
                    <Pressable
                      onPress={() => setSelectedTime(item?.time)}
                      style={{
                        margin: 10,
                        borderColor: '#1CAC78',
                        backgroundColor: '#29AB87',
                        borderRadius: 5,
                        borderWidth: 1,
                        padding: 10,
                      }}>
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: 'bold',
                          color: 'white',
                        }}>
                        {item?.time}
                      </Text>
                    </Pressable>
                  ) : (
                    <Pressable
                      style={{
                        margin: 10,
                        borderColor:
                          item.status === false || disabled
                            ? 'gray'
                            : '#1CAC78',
                        borderRadius: 5,
                        borderWidth: 1,
                        padding: 10,
                      }}>
                      <Text style={{fontSize: 15, fontWeight: 'bold'}}>
                        {item?.time}
                      </Text>
                    </Pressable>
                  )}
                </View>
              );
            })}
          </ScrollView>
        )}
        <View style={{marginHorizontal: 10}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
            }}>
            {courts.map((item, index) =>
              item.courts.map(court =>
                selectedCourt.includes(court.name) ? (
                  <Pressable
                    key={index}
                    onPress={() => setSelectedCourt(court.name)}
                    style={{
                      backgroundColor: '#00A86B',
                      borderRadius: 6,
                      padding: 15,

                      width: 160,
                      margin: 10,
                    }}>
                    <Text style={{textAlign: 'center', color: 'white'}}>
                      {court.name}
                    </Text>
                  </Pressable>
                ) : (
                  <Pressable
                    onPress={() => setSelectedCourt(court.name)}
                    style={{
                      borderColor: '#00A86B',
                      borderRadius: 6,
                      padding: 15,
                      borderWidth: 1,
                      width: 160,
                      margin: 10,
                    }}>
                    <Text style={{textAlign: 'center', color: '#00A86B'}}>
                      {court.name}
                    </Text>
                  </Pressable>
                ),
              ),
            )}
          </View>
        </View>
        {/* {selectedCourt.length > 0 && (
            <Text
              style={{
                textAlign: 'center',
                marginTop: 10,
                marginBottom: 20,
                fontSize: 15,
                fontWeight: '500',
              }}>
              Court Price : Rs {price}
            </Text>
          )} */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default SlotScreen;

const styles = StyleSheet.create({});
