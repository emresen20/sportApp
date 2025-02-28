import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CreateActivity = () => {
  const navigation = useNavigation();
  const [sport, setSport] = useState('');
  const [area, setArea] = useState('');
  const [date, setDate] = useState('');
  return (
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
          <Text style={{borderColor: '#E0E0E0', borderWidth: 0.7, height: 1}} />

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
                //value={area ? area : taggedVenue}
                onChangeText={setArea}
                placeholderTextColor="gray"
                style={{marginTop: 7, fontSize: 15, color: 'black'}}
                placeholder={'Locality or venue name'}
              />
            </View>
            <AntDesign name="arrowright" size={24} color="gray" />
          </Pressable>
          <Text style={{borderColor: '#E0E0E0', borderWidth: 0.7, height: 1}} />

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
          <Text style={{borderColor: '#E0E0E0', borderWidth: 0.7, height: 1}} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateActivity;

const styles = StyleSheet.create({});
