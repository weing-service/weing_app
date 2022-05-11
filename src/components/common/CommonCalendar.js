// 공용 컴포넌트 - 달력
import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { Agenda, Calendar } from "react-native-calendars";

const todos = {
    // dummies
    '2022-05-22': [
      {name: '기획팀 스토리보드', time: '13:00', content:'스토리보드 추합', place:'강남역 할리스', check: false},
      {name: '개발팀 스터디', time: '16:30', place:'비대면 Zoom'},
    ],
    '2022-05-23': [
      {name: '개발팀 스터디', time: '16:30', place:'비대면 Zoom'},
    ],
  }

const CommonCalendar = () => {
  const [todoItems, setTodoItems] = useState(todos);

  // 오늘 날짜 가져와서 포맷대로 바꾸는 코드
  const today = new Date();
  const year = today.getFullYear();
  const month = ('0' + (today.getMonth() + 1)).slice(-2);
  const day = ('0' + today.getDate()).slice(-2);
  const dateString = year + '-' + month  + '-' + day;

  // render todos
  const renderItem = (item) => {
    return <View style={{
      flex: 1,
      backgroundColor: 'white',
      margin: 5,
      padding: 10,
      borderRadius: 15,
      justifyContent: 'center',
      alignItems: 'left',
    }}>
      <Text>{item.name}</Text>
      <Text>{item.time}</Text>
      <Text>{item.place}</Text>
    </View>
  }
  // if no todos
  const renderEmpty = () => {
    return <View>
      <Text>일정을 추가해주세요</Text>
    </View>;
  }

  return <View style={{flex: 1, height: 800}}>
    <Agenda
      items={todoItems}
      markedDates={{
        // 나중에 state에서 받아와야 함
        '2022-05-22': {marked: true},
      }}
      current={dateString}
      selected={dateString}
      // todos 렌더링할 부분
      renderItem={renderItem}
      renderEmptyData={renderEmpty}
      // 손잡이 렌더링할 부분
      renderKnob={() => {
        return <Text>
          오늘의 위잉
        </Text>;
      }}
      // markingType="multi-period"
      // markedDates={{
      //   // todo dummies
      //   '2022-05-18': {marked: true, dotColor: 'red', activeOpacity: 0},
      //   '2022-05-20': {
      //     periods: [
      //       {startingDay: true, endingDay: true, color: '#5f9ea0'},
      //       {startingDay: true, endingDay: true, color: '#ffa500'},
      //       {startingDay: true, endingDay: false, color: '#f0e68c'}
      //     ]
      //   },
      //   '2022-05-21': {
      //     periods: [
      //       {color: 'transparent'},
      //       {color: 'transparent'},
      //       {startingDay: false, endingDay: true, color: '#f0e68c'}
      //     ]
      //   }
      // }}
    />
  </View>;
};

export default CommonCalendar;
