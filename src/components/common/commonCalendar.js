// 공용 컴포넌트 - 달력
import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import { Agenda, Calendar } from "react-native-calendars";
import * as Progress from 'react-native-progress';

// 예사 데이터들
const todos = {
  // dummies
  "2022-05-22": [
    {
      title: "기획팀 스토리보드",
      info: "스토리보드 추합",
      startDate: "2022-05-22",
      // finishDate 꼭 넣어야 하나..?
      category: "기획",
      intoCal: true,
      // db에 장소 안들어가있음
      // 시간도 없음
      place: "강남역 할리스"
    },
    {
      title: "개발팀 스터디",
      info: "스토리보드 추합",
      startDate: "2022-05-22",
      category: "개발",
      intoCal: false,
      place: "비대면 Zoom"
    },
  ],
  "2022-05-23": [
    {
      title: "디자인팀",
      info: "스토리보드",
      startDate: "2022-05-23",
      // finishDate 꼭 넣어야 하나..?
      category: "디자인",
      intoCal: true,
      // db에 장소 안들어가있음
      place: "강남역 할리스"
    },
  ],
};

// colors for dots
const categories = [pd, dev, design];
const pd = {key: '기획', color: '#FD9F9D'};
const dev = {key: '개발', color: '#F9D83E', };
const design = {key: '디자인', color: '#A0DDE0', };

const CommonCalendar = () => {
  const [todoItems, setTodoItems] = useState(todos);
  const [markTodos, setMarkTodos] = useState({});

  // useEffect(() => {
  //   setTodoItems(todos);
  //   // for marked dates
  //   // markedDates={{
  //   //   // 나중에 state에서 받아와야 함
  //   //   "2022-05-22": {dots: [pd, dev, design]},
  //   // }}
  //   const marks = {};
  //   todoItems.map((todo) => {
  //     const date = todo.startDate;
  //     const mark = {};
  //     mark[date] = {dots: []}
  //     categories.map((category) => {
  //       if(todo.category === category.key){
  //         mark.date.dots.push(category);
  //       }
  //     });
  //     marks.push(mark);
  //   });
  //   setMarkTodos(marks);
  // }, []);

  // 오늘 날짜 가져와서 포맷대로 바꾸는 코드 *
  const today = new Date();
  const year = today.getFullYear();
  const month = ("0" + (today.getMonth() + 1)).slice(-2);
  const day = ("0" + today.getDate()).slice(-2);
  const dateString = year + "-" + month + "-" + day;

  // render todos
  const renderItem = (item) => {
    return (
      item.intoCal && <View
        style={{
          flex: 1,
          backgroundColor: "white",
          margin: 5,
          padding: 10,
          borderRadius: 15,
          justifyContent: "center",
          alignItems: "left",
        }}
      >
        <Text>{item.title}</Text>
        <Text>{item.info}</Text>
        <Text>{item.place}</Text>
      </View>
    );
  };
  // if no todos
  const renderEmpty = () => {
    return (
      <View>
        <Text>일정을 추가해주세요</Text>
      </View>
    );
  };
  // 오늘의 위잉
  const renderKnob = () => {
    return <View style={{ flex: 1, flexDirection: 'row'}}>
      <Image source={require('../../assets/main/todo_logo_empty.png')}/>
      <Text>오늘의 위잉</Text>
      <Progress.Bar width={200} />
      <Text>0/0</Text>
    </View>;
  };

  return (
    <View style={{ flex: 1, height: 800 }}>
      <Agenda
        refreshing={true}
        items={todoItems}
        markingType={'multi-dot'}
        markedDates={{
          '2022-05-22': {dots: [pd, dev]}
        }}
        current={dateString}
        selected={dateString}
        // todos 렌더링할 부분
        renderItem={renderItem}
        renderEmptyData={renderEmpty}
        // 손잡이 렌더링할 부분
        renderKnob={renderKnob}
        showOnlySelectedDayItems
        theme={{
          selectedDotColor: '#89B6C2',
          dotColor: '#89B6C2',
          agendaTodayColor: '#89B6C2',
          todayTextColor:'#89B6C2',
          agendaDayTextColor: '#89B6C2',
          selectedDayBackgroundColor: '#89B6C2',
        }}
      />
    </View>
  );
};

export default CommonCalendar;
