// 공용 컴포넌트 - 달력
import React from "react";
import { View } from "react-native";
import { Agenda, Calendar } from "react-native-calendars";

const CommonCalendar = () => {
  // 오늘 날짜 가져와서 포맷대로 바꾸는 코드
  const today = new Date();
  const year = today.getFullYear();
  const month = ('0' + (today.getMonth() + 1)).slice(-2);
  const day = ('0' + today.getDate()).slice(-2);
  const dateString = year + '-' + month  + '-' + day;

  return <View>
    <Calendar
      current={dateString}
      onDayPress={day => {
        // 날짜 클릭되었을 때
        console.log('selected day', day);
      }}
      markingType="multi-period"
      markedDates={{
        // todo dummies
        '2022-05-18': {marked: true, dotColor: 'red', activeOpacity: 0},
        '2022-05-20': {
          periods: [
            {startingDay: true, endingDay: true, color: '#5f9ea0'},
            {startingDay: true, endingDay: true, color: '#ffa500'},
            {startingDay: true, endingDay: false, color: '#f0e68c'}
          ]
        },
        '2022-05-21': {
          periods: [
            {color: 'transparent'},
            {color: 'transparent'},
            {startingDay: false, endingDay: true, color: '#f0e68c'}
          ]
        }
      }}
    />
  </View>;
};

export default CommonCalendar;
