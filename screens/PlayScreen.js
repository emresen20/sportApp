import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React, {useCallback, useContext, useEffect, useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import axios from 'axios';
import Game from './components/Game';
import {AuthContext} from '../AuthContext';
import UpcomingGame from './components/UpcomingGame';

const PlayScreen = ({props}) => {
  const [option, setOption] = useState('Calendar');
  const [sport, setSport] = useState('Badminton');
  const navigation = useNavigation();
  const [games, setGames] = useState([]);
  const {userId} = useContext(AuthContext);
  const [UpcomingGames, setUpcomingGames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [user,setUser]=useState(null);

  useEffect(() => {
    fetchGames();
  }, []);

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

  console.log('games',games)
  const fetchGames = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:8000/games');
      setGames(response.data);
    } catch (error) {
      console.log('fetch games', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (userId) {
      fetchUpcomingGames();
    }
  }, [userId]);

  const fetchUpcomingGames = async () => {
    try {
      console.log('myysdyfydyfdf', userId);
      const response = await axios.get(
        `http://localhost:8000/upcoming?userId=${userId}`,
      );
      setUpcomingGames(response.data);
    } catch (error) {
      console.error('Failed to fetch upcoming games:', error);
    }
  };


  // console.log('upcomingGames', UpcomingGames);
  // useEffect(() => {
  //   fetchGames();
  // }, []);

  // console.log('games', games);

  // const fetchGames = async () => {
  //   try {
  //     const response = await axios.get('http://localhost:8000/games');
  //     setGames(response.data);
  //   } catch (error) {
  //     console.error('Failed to fetch games:', error);
  //     // Handle error
  //   }
  // };

  // // console.log('games', games);

  // useEffect(() => {
  //   if (userId) {
  //     fetchUpcomingGames();
  //   }
  // }, [userId]);
  // const fetchUpcomingGames = async () => {
  //   try {
  //     console.log('myysdyfydyfdf', userId);
  //     const response = await axios.get(
  //       `http://localhost:8000/upcoming?userId=${userId}`,
  //     );
  //     setUpcomingGames(response.data);
  //   } catch (error) {
  //     console.error('Failed to fetch upcoming games:', error);
  //   }
  // };

  // console.log(UpcomingGames);
  // // const filteredGames = games?.filter(game => game.sport === sport);

  useFocusEffect(  // bu sayfaya girildiğinde focus olur
    useCallback(()=>{
      if(userId){ //userId değişmez ise gereksiz yere triger olunmaz
        fetchGames()
      }
    },[userId])
  )
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
              {user?.user?.firstName} {user?.user?.lastName}
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
                uri: user?.user?.image,
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
        <Pressable onPress={() => navigation.navigate('Create')}>
          <Text style={{fontWeight: 'bold'}}>Create Game</Text>
        </Pressable>

        <View
          style={{flexDirection: 'row', alignItems: 'center', gap: hp('1.2')}}>
          <Pressable>
            <Text style={{fontWeight: 'bold'}}>Filter</Text>
          </Pressable>

          <Pressable>
            <Text style={{fontWeight: 'bold'}}>Sort</Text>
          </Pressable>
        </View>
      </View>
      {loading ? (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 20,
            marginVertical:200
          }}>
          <ActivityIndicator size="large" color="#12e04c" />
          <Text style={{color: 'gray'}}>Loading..</Text>
        </View>
      ) : (
        <>
          {option == 'My Sports' && (
            <FlatList
              showsVerticalScrollIndicator={false}
              data={games}
              contentContainerStyle={{paddingBottom: 200}}
              keyExtractor={item => item._id}
              renderItem={({item}) => <Game item={item} />}
            />
          )}

          {option == 'Calendar' && (
            <FlatList
              showsVerticalScrollIndicator={false}
              data={UpcomingGames}
              contentContainerStyle={{paddingBottom: 200}}
              keyExtractor={item => item._id}
              renderItem={({item}) => <UpcomingGame item={item} />}
            />
          )}
        </>
      )}
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
  createView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: hp('1.4'),
    backgroundColor: 'white',
  },
});
