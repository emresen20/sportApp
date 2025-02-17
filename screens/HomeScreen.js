import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: '',
      headerLeft: () => (
        <View>
          <Text style={{marginLeft: hp('2%')}}>Emre Shen</Text>
        </View>
      ),
      headerRight: () => (
        <View style={styles.leftheader}>
          <Icon name="chatbox-outline" size={hp('3%')} color="black" />
          <Icon name="notifications-outline" size={hp('3%')} color="black" />

          <Pressable>
            <Image
              source={{
                uri: 'https://lh3.googleusercontent.com/a/ACg8ocJJo_bZya4l3sXsEq0-34iEFzIKuSthszhBrNKVfZteK7nI84BW=s576-c-no',
              }}
              style={styles.profileleftimage}
            />
          </Pressable>
        </View>
      ),
    });
  });

  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.fitview}>
        <View>
          <Image
            style={styles.imagefire}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/785/785116.png',
            }}
          />
        </View>

        <View>
          <View style={styles.weeklyfitview}>
            <Text>Set Your Weekly Fit Goal</Text>
            <Image
              style={styles.imagesmallfire}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/426/426833.png',
              }}
            />
          </View>
          <Text style={styles.keeptext}>Keep Yourself Fit</Text>
        </View>
      </View>

      <View>
        <View>
          <Text> Gear Up Your Game</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  imagefire: {
    width: wp('7%'),
    height: hp('4%'),
    borderRadius: 25,
  },
  imagesmallfire: {
    width: wp('5%'),
    height: hp('2%'),
    borderRadius: 25,
  },
  fitview: {
    padding: hp('1.8%'),
    backgroundColor: 'white',
    margin: hp('1.8%'),
    borderRadius: hp('1.8%'),
    flexDirection: 'row',
    alignItems: 'center',
    gap: hp('2%'),
  },
  leftheader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: hp('1.5%'),
    marginRight: hp('1.5%'),
  },
  profileleftimage: {
    height: hp('3.8%'),
    width: wp('7.7%'),
    borderRadius: hp('9%'),
  },
  weeklyfitview: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: hp('0.3%'),
  },
  keeptext: {
    marginTop: hp('0.5%'),
    color: 'gray',
  },
});
