import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
  ImageBackground,
} from 'react-native';
import React, {useContext, useEffect, useLayoutEffect, useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation, useRoute} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../AuthContext';
import axios from 'axios';

const HomeScreen = () => {
  const route=useRoute();
  const {userId}=useContext(AuthContext);
  const [user,setUser]=useState(null);
  const navigation = useNavigation();
  console.log('userHGome',user)
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
                uri: user?.user?.image,
              }}
              style={styles.profileleftimage}
            />
          </Pressable>
        </View>
      ),
    });
  },[user]);

  const data = [
    {
      id: '10',
      image:
        'https://playov2.gumlet.io/v3_homescreen/marketing_journey/Tennis%20Spotlight.png',
      text: 'Learn Tennis',
      description: 'Know more',
    },
    {
      id: '11',
      image:
        'https://playov2.gumlet.io/v3_homescreen/marketing_journey/playo_spotlight_08.png',
      text: 'Up Your Game',
      description: 'Find a coach',
    },
    {
      id: '12',
      image:
        'https://playov2.gumlet.io/v3_homescreen/marketing_journey/playo_spotlight_03.png',
      text: 'Hacks to win',
      description: 'Yes, Please!',
    },
    {
      id: '13',
      image:
        'https://playov2.gumlet.io/v3_homescreen/marketing_journey/playo_spotlight_02.png',
      text: 'Spotify Playolist',
      description: 'Show more',
    },
  ];

  useEffect(()=>{
    if(userId){
      fetchUser();
    }
  },[userId])

  const fetchUser= async ()=>{
    console.log('userid',userId)
    const response = await axios.get(`http://localhost:8000/user/${userId}`);
    setUser(response.data)
  }

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
          <Text style={styles.TextCalendar}>View My Calendar</Text>
        </Pressable>
      </View>

      <View style={styles.footballcontaienerview}>
        <Pressable style={{flex: 1}}>
          <View style={styles.footbalimageview}>
            <Image
              source={{
                uri: 'https://images.pexels.com/photos/262524/pexels-photo-262524.jpeg?auto=compress&cs=tinysrgb&w=800',
              }}
              style={styles.footballimage}
            />
          </View>

          <Pressable style={styles.playpresabble}>
            <View>
              <Text style={styles.firsttextonpicture}>Play</Text>
              <Text style={styles.secondttextonpicture}>
                Find Players and join their activities
              </Text>
            </View>
          </Pressable>
        </Pressable>
        <Pressable style={{flex: 1}}>
          <View style={styles.footbalimageview}>
            <Image
              source={{
                uri: 'https://images.pexels.com/photos/3660204/pexels-photo-3660204.jpeg?auto=compress&cs=tinysrgb&w=800',
              }}
              style={styles.footballimage}
            />
          </View>

          <Pressable style={styles.playpresabble}>
            <View>
              <Text style={styles.firsttextonpicture}>Book</Text>
              <Text style={styles.secondttextonpicture}>
                Book your slots in venues nearby
              </Text>
            </View>
          </Pressable>
        </Pressable>
      </View>

      <View style={{padding: hp('1.5')}}>
        <View style={styles.groupsview}>
          <View style={styles.greencircleview}>
            <AntDesign name="addusergroup" size={24} color="green" />
          </View>

          <View>
            <Text style={{fontWeight: 'bold'}}>Groups</Text>

            <Text style={{marginTop: hp('1.2'), color: 'gray'}}>
              Connect,Compete and Discuss
            </Text>
          </View>
        </View>
      </View>

      <View style={{padding: hp('1.5')}}>
        <View style={styles.groupsview}>
          <View style={styles.yellowcircleview}>
            <Ionicons name="tennisball-outline" size={24} color="black" />
          </View>

          <View>
            <Text style={{fontWeight: 'bold'}}>Game Time Activities</Text>

            <Text style={{marginTop: hp('1.2'), color: 'gray'}}>
              555 Playo hosted games
            </Text>
          </View>
        </View>
      </View>

      <View style={{padding: hp('1.5')}}>
        <View
          style={{
            padding: hp('1'),
            backgroundColor: 'white',
            borderRadius: 10,
          }}>
          <Text style={{fontSize: hp('1.7'), fontWeight: '500'}}>
            Spotlight
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {data?.map((item, index) => (
              <ImageBackground
                key={item.id}
                source={{uri: item?.image}}
                style={styles.imageBackgroundstyle}></ImageBackground>
            ))}
          </ScrollView>
        </View>
      </View>
      
      <View   style={{ marginBottom:hp('2')}}>
        <View style={{alignItems:'center'}}>
          <Image
            style={{width: wp('30'), height:hp('8'),resizeMode: 'contain'}}
            source={{
              uri: 'https://playo-website.gumlet.io/playo-website-v2/logos-icons/new-logo-playo.png?q=50',
            }}
          />
        </View>
        <Text style={{color: 'gray', textAlign: 'center'}}>
          Your Sports community app
        </Text>
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
  nogameText: {
    marginTop: hp('0.3%'),
    color: 'gray',
  },
  viewCalendar: {
    marginTop: hp('1.5'),
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: hp('0.4%'),
  },
  TextCalendar: {
    fontSize: hp('1.9'),
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  footballimage: {
    width: wp('43'),
    height: hp('16'),
    borderRadius: 10,
  },
  playpresabble: {
    backgroundColor: 'white',
    padding: '6',
    width: wp('43'),
    borderRadius: 10,
  },
  footbalimageview: {
    borderRadius: 10,
  },
  footballcontaienerview: {
    padding: hp('1.7'),
    flexDirection: 'row',
    alignItems: 'center',
    gap: hp('1.6'),
  },
  firsttextonpicture: {
    fontSize: hp('1.7'),
    fontWeight: '500',
  },
  secondttextonpicture: {
    fontSize: hp('1.7'),
    color: 'gray',
    marginTop: hp('0.5'),
  },
  groupsview: {
    padding: hp('1.1'),
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'row',
    gap: 10,
  },
  greencircleview: {
    width: wp('13'),
    height: hp('6'),
    borderRadius: 25,
    backgroundColor: '#29AB87',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  yellowcircleview: {
    width: wp('13'),
    height: hp('6'),
    borderRadius: 25,
    backgroundColor: 'yellow',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBackgroundstyle: {
    resizeMode: 'contain',
    width: wp('51'),
    height: hp('32'),
    marginRight: 10,
    marginVertical: 15,
  },
});
