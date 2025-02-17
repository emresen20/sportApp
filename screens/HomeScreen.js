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

      <View style={styles.getView}>
        <View style={styles.gearView}>
          <Text style={styles.gearText}> Gear Up For Your Game</Text>
        </View>

        <View style={styles.badmintonView}>
          <Text style={{fontSize: hp('1.9%')}}>Badminton Activity</Text>

          <Pressable style={styles.pressableview}>
            <Text style={{textAlign: 'center'}}>View</Text>
          </Pressable>
        </View>

        <Text style={styles.nogameText}>You have no Games Today</Text>

        <Pressable style={styles.viewCalendar}>
            <Text style={styles.TextCalendar}>
                View My Calendar
            </Text>
        </Pressable>
      </View>

      <View style={styles.footballcontaienerview}>
        <Pressable style={{flex:1}}>
            <View style={styles.footbalimageview}>
                <Image 
                source={{uri:'https://images.pexels.com/photos/262524/pexels-photo-262524.jpeg?auto=compress&cs=tinysrgb&w=800'}}
                style={styles.footballimage}
                 />
            </View>

            <Pressable style={styles.playpresabble}>
                <View>
                    <Text style={styles.firsttextonpicture}>Play</Text>
                    <Text style={styles.secondttextonpicture}>Find Players and join their activities</Text>
                </View>
            </Pressable>
        </Pressable>
        <Pressable style={{flex:1}}>
            <View style={styles.footbalimageview}>
                <Image 
                source={{uri:'https://images.pexels.com/photos/3660204/pexels-photo-3660204.jpeg?auto=compress&cs=tinysrgb&w=800'}}
                style={styles.footballimage}
                 />
            </View>

            <Pressable style={styles.playpresabble}>
                <View>
                    <Text style={styles.firsttextonpicture}>Book</Text>
                    <Text style={styles.secondttextonpicture}>Book your slots in venues nearby</Text>
                </View>
            </Pressable>
        </Pressable>
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
    margin: hp('1.6%'),
    borderRadius: hp('1.8%'),
    flexDirection: 'row',
    alignItems: 'center',
    gap: hp('2%'),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.25,
    shadowRadius: 2,
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
  gearText: {
    color: '#484848',
    fontSize: hp('1.8%'),
  },
  getView: {
    backgroundColor: 'white',
    padding: hp('1.8%'),
    margin: hp('1.6%'),
    borderRadius: hp('2%'),
  },
  gearView: {
    paddingHorizontal: hp('1.3%'),
    backgroundColor: '#E0E0E0',
    paddingVertical: hp('0.3%'),
    borderRadius: 4,
    width: wp('50%'),
    marginVertical: 5,
  },
  badmintonView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  pressableview: {
    padding: '2.4%',
    backgroundColor: 'white',
    borderRadius: 7,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    width: wp('18%'),
  },
  nogameText:{
    marginTop:hp('0.3%'),
    color:'gray'
  },
  viewCalendar:{
    marginTop:hp('1.5'),
    marginLeft:'auto',
    marginRight:'auto',
    marginBottom:hp('0.4%')
  },
  TextCalendar:{
    fontSize:hp('1.9'),
    fontWeight:"600",
    textDecorationLine:'underline'
  },
  footballimage:{
    width:wp('43'),
    height:hp('16'),
    borderRadius:10
  },
  playpresabble:{
    backgroundColor:'white',
    padding:('6'),
    width:wp('43'),
    borderRadius:10

  },
  footbalimageview:{
    borderRadius:10
  },
  footballcontaienerview:{
    padding:hp('1.7'),
    flexDirection:'row',
    alignItems:'center',
    gap:hp('1.6')
  },
  firsttextonpicture:{
    fontSize:hp('1.7'),
    fontWeight:'500'
  },
  secondttextonpicture:{
    fontSize:hp('1.7'),
    color:'gray',
    marginTop:hp('0.5')
  }
});
