import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

const PlayScreen = ({props}) => {
  const [option, setOption] = useState('Calendar');
  const [sport, setSport] = useState('Badminton');
  const navigation= useNavigation();
  return (
    <SafeAreaView>
      <View style={{padding: 12, backgroundColor: '#223536'}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: hp('0.5'),
            }}>
            <Text
              style={{fontSize: hp('1.7'), fontWeight: '500', color: 'white'}}>
              Emre Shen
            </Text>
            <MaterialIcons
              name="keyboard-arrow-down"
              size={hp('3%')}
              color="white"
            />
          </View>

          <View
            style={{flexDirection: 'row', alignItems: 'center', gap: hp('1')}}>
            <Ionicons name="chatbox-outline" size={hp('3%')} color="white" />
            <Ionicons
              name="notifications-outline"
              size={hp('3%')}
              color="white"
            />
            <Image
              source={{
                uri: 'https://lh3.googleusercontent.com/a/ACg8ocJJo_bZya4l3sXsEq0-34iEFzIKuSthszhBrNKVfZteK7nI84BW=s576-c-no',
              }}
              style={styles.profileleftimage}
            />
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: hp('1.1'),
            marginVertical: hp('1.4'),
          }}>
          {['Calendar', 'My Sports', 'Other Sports'].map(item => (
            <Pressable key={item} onPress={() => setOption(item)}>
              <Text style={styles.categories(option, item)}>{item}</Text>
            </Pressable>
          ))}
          {/* <Pressable onPress={() => setOption('Calendar')}>
            <Text
              style={{
                fontWeight: '500',
                fontSize: hp('1.8'),
                color: option == 'Calendar' ? '#12e04c' : 'white',
              }}>
              Calendar
            </Text>
          </Pressable>
          <Pressable onPress={() => setOption('My Sports')}>
            <Text
              style={{
                fontWeight: '500',
                fontSize: hp('1.8'),
                color: option == 'My Sports' ? '#12e04c' : 'white',
              }}>
              My Sports
            </Text>
          </Pressable>
          <Pressable onPress={() => setOption('Other Sports')}>
            <Text
              style={{
                fontWeight: '500',
                fontSize: hp('1.8'),
                color: option == 'Other Sports' ? '#12e04c' : 'white',
              }}>
              Other Sports
            </Text>
          </Pressable> */}
        </View>

        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {['Badminton', 'Cricket', 'Cycling', 'Running'].map(item => (
              <Pressable
                key={item}
                style={styles.sports(sport, item)}
                onPress={() => setSport(item)}>
                <Text style={{color: 'white'}}>{item}</Text>
              </Pressable>
            ))}

            {/* <Pressable style={{
                    padding:hp('1'),
                    borderColor:'white',
                    marginRight:hp('1'),
                    borderRadius:8,
                    borderWidth: sport == 'Badminton' ?0 :1,
                    backgroundColor: sport == 'Badminton' ?'#1dbf22':"transparent"
                    }}>
                    <Text>Badminton</Text>
                </Pressable>
                <Pressable style={{
                    padding:hp('1'),
                    borderColor:'white',
                    marginRight:hp('1'),
                    borderRadius:8,
                    borderWidth: sport == 'Circket' ?0 :1,
                    backgroundColor: sport == 'Circket' ?'#1dbf22':"transparent"
                    }}>
                    <Text>Circket</Text>
                </Pressable>
                <Pressable style={{
                    padding:hp('1'),
                    borderColor:'white',
                    marginRight:hp('1'),
                    borderRadius:8,
                    borderWidth: sport == 'Cycling' ?0 :1,
                    backgroundColor: sport == 'Cycling' ?'#1dbf22':"transparent"
                    }}>
                    <Text>Cycling</Text>
                </Pressable>
                <Pressable style={{
                    padding:hp('1'),
                    borderColor:'white',
                    marginRight:hp('1'),
                    borderRadius:8,
                    borderWidth: sport == 'Running' ?0 :1,
                    backgroundColor: sport == 'Running' ?'#1dbf22':"transparent"
                    }}>
                    <Text>Running</Text>
                </Pressable>
                 */}
          </ScrollView>
        </View>
      </View>

      <View style={styles.createView}>
        <Pressable onPress={()=> navigation.navigate('Create')}>
            <Text style={{fontWeight:'bold'}}>Create Game</Text>
        </Pressable>

        <View style={{flexDirection:'row', alignItems:'center',gap:hp('1.2')}}>
            <Pressable>
                <Text style={{fontWeight:'bold'}}>Filter</Text>
            </Pressable>

            <Pressable>
                <Text style={{fontWeight:'bold'}}>Sort</Text>
            </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PlayScreen;

const styles = StyleSheet.create({
  profileleftimage: {
    height: hp('3.8%'),
    width: wp('7.7%'),
    borderRadius: hp('9%'),
  },
  sports: (selectedSport, sportName) => ({
    padding: hp('1.3'),
    borderColor: 'white',
    marginRight: hp('1'),
    borderRadius: 8,
    borderWidth: selectedSport === sportName ? 0 : 1,
    backgroundColor: selectedSport === sportName ? '#1dbf22' : 'transparent',
  }),
  categories: (selectedoption, optionName) => ({
    fontWeight: '500',
    fontSize: hp('1.8'),
    color: selectedoption == optionName ? '#12e04c' : 'white',
  }),
  createView:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding:hp('1.4'),
    backgroundColor:'white'
  }
});
