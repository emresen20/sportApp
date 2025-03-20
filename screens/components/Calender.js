import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import moment from 'moment';
import Date from './Date';
import { useNavigation } from '@react-navigation/native';

const Calender = ({onSelectDate, selected, selectedSport, setSelectedTime}) => {

  const [dates, setDates] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [currentMonth, setCurrentMonth] = useState();
  const navigation=useNavigation();

  const getCurrentMonth = () => {
    const month = moment(dates[0])
      .add(scrollPosition / 60, 'days')
      .format('MMMM');
    setCurrentMonth(month);
  };

  const getDates = () => {
    const _dates = [];
    for (let i = 0; i < 10; i++) {
      const date = moment().add(i, 'days').format('YYYY-MM-DD'); // Formatlı tarih
      _dates.push(date);
    }
    setDates(_dates); // React state'ini güncelle
  };

  useEffect(() => {
    getDates();
  }, []);

  useEffect(() => {
    getCurrentMonth();
  }, [scrollPosition]);

  console.log('dfa', dates);

  return (
    <>
      <View style={styles.centered}>
        <Text style={styles.title}>{currentMonth}</Text>
        <Text>{selectedSport}</Text>
      </View>

      <View style={styles.dateSection}>
        <View style={styles.scroll}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            onScroll={e => setScrollPosition(e.nativeEvent.contentOffset.x)}>
            {dates?.map((date, index) => (
              <Date
                key={index}
                date={date}
                setSelectedTime={setSelectedTime}
                onSelectDate={onSelectDate}
                selected={selected}
              />
            ))}
          </ScrollView>
        </View>
      </View>
    </>
  );
};

export default Calender;

const styles = StyleSheet.create({
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    marginTop: 6,

    fontWeight: '600',
  },
  dateSection: {
    width: '100%',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
