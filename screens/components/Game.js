import {View, Text, Pressable, Image} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';

const Game = ({item}) => {
  return (
    <Pressable
      style={{
        marginVertical: 10,
        marginHorizontal: 14,
        padding: 14,
        backgroundColor: 'white',
        borderRadius: 10,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text>Regular</Text>
        <Feather name="bookmark" size={24} color="black" />
      </View>

      <View style={{marginTop: 10}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={{width: 56, height: 56, borderRadius: 28}}
              source={{uri: item?.adminUrl}}
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: -7,
              }}>
              {item?.players
                ?.filter(c => c?.name !== item?.adminName)
                .map((player, index) => (
                  <Image
                    key={index} // Adding a key prop is important for mapping in React
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 22,
                      marginLeft: -7,
                    }}
                    source={{uri: player?.imageUrl}}
                  />
                ))}
            </View>
          </View>

          <View>
            <Text>
              . {item?.players?.length}/{item?.totalPlayers} Going
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default Game;
