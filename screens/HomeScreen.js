import { StyleSheet, Text, View,ScrollView, Image } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.scroll}>
      <View>
        <View >
            <Image 
                style={styles.imagefire}
                source={{
                    uri:'https://cdn-icons-png.flaticon.com/128/785/785116.png'
                }}
            />
        </View>

        <View>
            <View>
                <Text>
                    Set Your Weekly Fit Goal
                </Text>
                <Image
              style={styles.imagesmallfire}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/426/426833.png',
              }}
            />
            </View>
            <Text>
                Keep Yourself Fit
            </Text>
        </View>
      </View>
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    scroll:{
        flex:1,
        backgroundColor:'#F8F8F8',
    },
    imagefire:{
        width:wp('7%'),
        height:hp('4%'),
        borderRadius:25
    },
    imagesmallfire:{
        width:wp('4%'),
        height:hp('2%'),
        borderRadius:25
    }
})