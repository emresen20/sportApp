import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const PlayScreen = () => {
  const [option, setOption] = useState('My Sports');
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
          <Pressable onPress={()=> setOption("Calendar")}>
            <Text
              style={{
                fontWeight: '500',
                fontSize: hp('1.8'),
                color: option == 'Calendar' ? '#12e04c' : 'white',
              }}>
              Calendar
            </Text>
          </Pressable>
          <Pressable onPress={()=> setOption("m")}>
            <Text>My Sports</Text>
          </Pressable>
          <Pressable>
            <Text>Other Sports</Text>
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
});
