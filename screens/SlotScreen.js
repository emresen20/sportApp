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
import moment from 'moment';

const SlotScreen = () => {
  const today = moment().format('YYYY-MM-DD');
  const navigation = useNavigation();
  const route = useRoute();
  const [selectedSport, setselectedSport] = useState(
    route?.params?.sports[0].name,
  );
  const [selectedDate, setSelectedDate] = useState(today);
  //const [bookingStatus, setBookingStatus] = useState(false);
  const [selectedTime, setSelectedTime] = useState([]);
  const [selectedCourt, setSelectedCourt] = useState([]);

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
      </ScrollView>
    </SafeAreaView>
  );
};

export default SlotScreen;

const styles = StyleSheet.create({});
