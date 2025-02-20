import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  FlatList,
} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import VenueCard from './components/VenueCard';

const BookScreen = () => {
  const venues = [
    {
      name: '147 One Four Seven Snooker, Billiards and Pool Sports Academy',
      rating: 4,
      deferLink: 'https://playo.page.link/ry8TT',
      fullLink:
        'https://playo.co/venue/?venueId=4ec5b58f-d58f-4ce1-8c84-2caa63007ecc',
      avgRating: 4,
      image:'https://playo.gumlet.io/147ONEFOURSEVENSNOOKERBILLIARDSANDPOOLSPORTSACADEMY/1.png?w=700&format=webp&q=30&overlay=https://playo-website.gumlet.io/playo-website-v2/logos-icons/playo-logo.png&overlay_width_pct=0.2&overlay_height_pct=1&overlay_position=bottomright',
      ratingCount: 3,
      lat: 12.9341796,
      adress:'5, Bhuvanappa Layout, Kaveri Layout, Suddagunte Palya, Bengaluru, Karnataka 560029',
      lng: 77.6101537,
      icon: 'https://maps.google.com/mapfiles/kml/paddle/4-lv.png',
      filter_by: ['Pool', 'Snooker'],
      info: '\n    <h3>147 One Four Seven Snooker, Billiards and Pool Sports Academy</h3>\n    <strong>Ratings:</strong> 4 [3]<br/>\n    <strong>Sports:</strong> Pool, Snooker<br/>\n    <strong>Phone:</strong> 81059 00199<br/>\n    <a href="https://playo.page.link/ry8TT" target="_blank">https://playo.page.link/ry8TT</a><br/>\n    ',
    },
    {
      name: '33intact Clinics - Indiranagar',
      rating: 5,
      deferLink: 'https://z34v4.app.goo.gl/gNe3',
      fullLink:
        'https://playo.co/venue/?venueId=81bd286d-77b5-4fc2-adf0-26bd159ab965',
      lat: 12.97738637037637,
      lng: 77.64410844836385,
      avgRating: 5,
      image:'https://playo.gumlet.io/AADUKALAMMULTISPORTSFACILITYANDTRAININGACADEMY/33intactClinicsIndiranagar1663162050263.jpeg?w=700&format=webp&q=30&overlay=https://playo-website.gumlet.io/playo-website-v2/logos-icons/playo-logo.png&overlay_width_pct=0.2&overlay_height_pct=1&overlay_position=bottomright',
      ratingCount: 7,
      adress:'277, Ground Floor, 1st Main Rd, HAL 2nd Stage, Indiranagar, Bengaluru, Karnataka - 560038',
      icon: 'https://maps.google.com/mapfiles/kml/paddle/5-lv.png',
      filter_by: [
        'Consultancy',
        'Physiotherapy',
        'Reflexology',
        'Sports Massage',
      ],
      info: '\n    <h3>33intact Clinics - Indiranagar</h3>\n    <strong>Ratings:</strong> 5 [7]<br/>\n    <strong>Sports:</strong> Consultancy, Physiotherapy, Reflexology, Sports Massage<br/>\n    <strong>Phone:</strong> 9206660840<br/>\n    <a href="https://z34v4.app.goo.gl/gNe3" target="_blank">https://z34v4.app.goo.gl/gNe3</a><br/>\n    ',
    },
    {
      avgRating: 3.55,
      name: '4S Shuttle Smash Sports Studio - Managed by Flick Sport Center',
      ratingCount: 337,
      deferLink: 'https://z34v4.app.goo.gl/q1nf',
      fullLink:
        'https://playo.co/venue/?venueId=cdbc6917-01b2-4ee1-81ef-cbeeda5b6eeb',
      lat: 12.901148,
      lng: 77.597311,
      adress:'New No: 165/14, Doresanipalya, Landmark Behind Kalyani Magnum Software Park, Rose Garden Rd, Krishnaraju Layout, Amalodbhavi Nagar, Pand, Bengaluru, Karnataka 560076',
      image:'https://playo.gumlet.io/4SSHUTTLESMASHSPORTSSTUDIO/4sshuttlesmashsportsstudio5.jpg?w=700&format=webp&q=30&overlay=https://playo-website.gumlet.io/playo-website-v2/logos-icons/playo-logo.png&overlay_width_pct=0.2&overlay_height_pct=1&overlay_position=bottomright',
      rating: 3,
      icon: 'https://maps.google.com/mapfiles/kml/paddle/3-lv.png',
      filter_by: ['Badminton'],
      info: '\n    <h3>4S Shuttle Smash Sports Studio - Managed by Flick Sport Center</h3>\n    <strong>Ratings:</strong> 3.55 [337]<br/>\n    <strong>Sports:</strong> Badminton<br/>\n    <strong>Phone:</strong> 9743504189<br/>\n    <a href="https://z34v4.app.goo.gl/q1nf" target="_blank">https://z34v4.app.goo.gl/q1nf</a><br/>\n    ',
    },
    {
      avgRating: 4.89,
      name: '7 Eleven Badminton Academy',
      ratingCount: 9,
      fullLink:
        'https://playo.co/venue?venueId=06d5685e-0abf-4a84-a8cc-bf7fa940ae25',
      deferLink: 'https://z34v4.app.goo.gl/X5tg',
      lat: 12.7016928,
      lng: 77.8472922,
      adress:'524/2,525/1b, Near Hp Petrol Bunk, Royakottai Road, Karapalli, Hosur-635109',
      image:'https://playo.gumlet.io/7ELEVENBADMINTONACADEMY20230112124743905590/7ElevenBadmintonAcademy1673527526517.jpg?w=700&format=webp&q=30&overlay=https://playo-website.gumlet.io/playo-website-v2/logos-icons/playo-logo.png&overlay_width_pct=0.2&overlay_height_pct=1&overlay_position=bottomright',
      rating: 4,
      icon: 'https://maps.google.com/mapfiles/kml/paddle/4-lv.png',
      filter_by: ['Badminton'],
      info: '\n    <h3>7 Eleven Badminton Academy</h3>\n    <strong>Ratings:</strong> 4.89 [9]<br/>\n    <strong>Sports:</strong> Badminton<br/>\n    <strong>Phone:</strong> 9894771017<br/>\n    <a href="https://z34v4.app.goo.gl/X5tg" target="_blank">https://z34v4.app.goo.gl/X5tg</a><br/>\n    ',
    },
    {
      ratingCount: 82,
      avgRating: 4.05,
      name: '91 Sporting Co. Badminton Arena - Scholars Sports Arena',
      fullLink:
        'https://playo.co/venue?venueId=f596daa9-5b6c-46c4-847c-b64767d5b3fc',
      deferLink: 'https://z34v4.app.goo.gl/5zoj',
      adress:'Google Plus Code: 2JQ3+7R; Address: #1, Sy No 28/3, (RKB Estate), V. Nagenahalli Main Road (Near Kanaka Nagar), R.T. Nagar Post, Bangalore',
      lat: 13.038189,
      lng: 77.604562,
      image:'https://playo.gumlet.io/VKMATCHPOINTRTNAGAR20200201082734053724/91SportingCoBadmintonArenaScholarsSportsArena1692089657817.jpg?w=700&format=webp&q=30&overlay=https://playo-website.gumlet.io/playo-website-v2/logos-icons/playo-logo.png&overlay_width_pct=0.2&overlay_height_pct=1&overlay_position=bottomright',
      rating: 4,
      icon: 'https://maps.google.com/mapfiles/kml/paddle/4-lv.png',
      filter_by: ['Badminton', 'Table Tennis'],
      info: '\n    <h3>91 Sporting Co. Badminton Arena - Scholars Sports Arena</h3>\n    <strong>Ratings:</strong> 4.05 [82]<br/>\n    <strong>Sports:</strong> Badminton, Table Tennis<br/>\n    <strong>Phone:</strong> 9611667891<br/>\n    <a href="https://z34v4.app.goo.gl/5zoj" target="_blank">https://z34v4.app.goo.gl/5zoj</a><br/>\n    ',
    },
  ];
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#f5f5f5'}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 12,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
          <Text style={{fontSize: 16, fontWeight: '500'}}>Emre Shen</Text>
          <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
          }}>
          <Ionicons name="chatbox-outline" size={24} color="black" />
          <Ionicons name="notifications-outline" size={24} color="black" />

          <View>
            <Image
              style={{width: 30, height: 30, borderRadius: 15}}
              source={{
                uri: 'https://lh3.googleusercontent.com/a/ACg8ocJJo_bZya4l3sXsEq0-34iEFzIKuSthszhBrNKVfZteK7nI84BW=s576-c-no',
              }}
            />
          </View>
        </View>
      </View>

      <View
        style={{
          marginHorizontal: 12,
          backgroundColor: '#E8E8E8',
          padding: 12,
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderRadius: 20,
          alignItems: 'center',
        }}>
        <TextInput placeholder="Search for Venues" />
        <Ionicons name="search" size={24} color="gray" />
      </View>

      <Pressable
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 10,
          padding: 13,
        }}>
        {['Sports & Availabilty', 'Favorites', 'Offers'].map(item => (
          <View
            style={{
              padding: 10,
              borderRadius: 10,
              borderColor: '#E0E0E0',
              borderWidth: 2,
            }}
            key={item}>
            <Text>{item}</Text>
          </View>
        ))}
      </Pressable>
      <FlatList
        data={venues}
        renderItem={({item}) => <VenueCard item={item} 
        contentContainerStyle={{paddingBottom:20}}
        showVerticalScrollIndicator={false}
        />}
      />
    </SafeAreaView>
  );
};

export default BookScreen;

const styles = StyleSheet.create({});
