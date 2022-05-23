// 공용 컴포넌트 - 달력
import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, Button } from "react-native";
import { Agenda, Calendar } from "react-native-calendars";
import { StyleSheet } from "react-native";
import DateToString from "../common/DateToString";
import Slider from "react-native-slider";

// 예사 데이터들
const todos = {
  // dummies
  "2022-05-24": [
    {
      id: 1,
      title: "기획팀 스토리보드 회의",
      info: "스토리보드 추합",
      startDate: "2022-05-24",
      // finishDate 꼭 넣어야 하나..?
      category: "기획",
      intoCal: true,
      // 시간도 없음 --> 날짜랑 같이 date 형식으로 보낼것
      // cateogry 컬러
      // 프로젝트명도 같이 보낼것
      place: "강남역 할리스"
    },
    {
      id: 2,
      title: "개발팀 스터디",
      info: "스토리보드 추합",
      startDate: "2022-05-24",
      category: "개발",
      intoCal: true,
      place: "비대면 Zoom"
    },
  ],
  "2022-05-23": [
    {
      id: 3,
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
  // 오늘 날짜 가져와서 포맷대로 바꾸는 코드 *
  const today = new Date();
  const year = today.getFullYear();
  const month = ("0" + (today.getMonth() + 1)).slice(-2);
  const day = ("0" + today.getDate()).slice(-2);
  const dateString = year + "-" + month + "-" + day;

  // states
  const [todoItems, setTodoItems] = useState(todos);
  const [markTodos, setMarkTodos] = useState({});
  const [todayTodo, setTodayTodo] = useState(todos[dateString]); // 오늘 해야할 일
  const [doneCount, setDoneCount] = useState(0);

  const onPressDone =(event) => {
    console.log(event.target.isDone);
    const newTodo = todayTodo;
    newTodo.isDone = !todayTodo.isDone;
    setTodayTodo(newTodo);
    if(typeof(event.target.isDone) == undefined)
      Object.assign(event.target, {isDone: true});
    else
      event.target.isDone = !event.target.isDone;

    // done handler
    if(event.target.isDone === false && doneCount > 0){
      setDoneCount(doneCount - 1);
      console.log(doneCount);
    } else if(event.target.isDone === true && doneCount < todayTodo.length + 1) {
      setDoneCount(doneCount + 1);
      console.log(doneCount);
    }
  }

  useEffect(() => {
    const newTodo = todos[dateString];
    for(let i=0; i<newTodo.length; i++){
      Object.assign(newTodo[i], {isDone: false});
    }
    setTodayTodo(newTodo);

    todos[dateString].map((todo) => {
      if(todo.isDone){
        setDoneCount(doneCount + 1);
      }
    })
  }, [])

  // render todos
  const renderItem = (item) => {
    return (
      item.intoCal && <View
        style={itemStyle.box}
      >
        <View style={itemStyle.titleContainer}>
          <Slider 
          style={{width: 0, marginRight: 20, top: -10}} 
          thumbStyle={itemStyle.thumb}
          />
          <Text style={itemStyle.title}>{item.title}</Text>
          <TouchableOpacity>
            <Image source={require('../../assets/main/btn_menu.png')}/>
          </TouchableOpacity>
        </View>
        <Text>{item.info}</Text>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Image source={require("../../assets/main/btn_location.png")}/>
          <Text>{item.place}</Text>
        </View>
        <View style={{alignItems: 'flex-end'}}>
          <TouchableOpacity 
            style={{margin: 10}}
            onPress={(event) => onPressDone(event)}
          >
            { item.isDone ?
              <Image source={
                require('../../assets/main/todo_logo_fill.png')} /> :
              <Image source={
                require('../../assets/main/todo_logo_empty.png')
              }/>
            }
          </TouchableOpacity>
        </View>
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
      {
        todayTodo.length === doneCount ?
        <Image 
          style={{top: -5, marginRight: 10}}
          source={
            require('../../assets/main/todo_logo_fill.png')
          }
        /> : 
        <Image 
          style={{top: -5, marginRight: 10}}
          source={
            require('../../assets/main/todo_logo_empty.png')
          }
        />
      }
      <Text style={{marginRight: 10}}>오늘의 위잉</Text>
      <Slider
        value={doneCount}
        step={1}
        disabled={true}
        style={{width: 220, top: -10, marginRight: 10}}
        trackStyle={sliderStyle.track}
        thumbStyle={sliderStyle.thumb}
        minimumValue={0}
        maximumValue={todayTodo.length}
        minimumTrackTintColor="#89B6C27F"
      />
      <Text>{doneCount}/{todayTodo.length}</Text>
    </View>;
  };

  return (
    <View style={{ flex: 1, height: 800 }}>
      <Agenda
        refreshing={true}
        items={todoItems}
        markingType={'multi-dot'}
        markedDates={{
          '2022-05-24': {dots: [pd, dev]}
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

const itemStyle = StyleSheet.create({
  box: {
    flex: 1,
    backgroundColor: "white",
    margin: 5,
    padding: 10,
    borderRadius: 15,
  },
  titleContainer : {
    flex: 1,
    margin: 5,
    flexDirection: 'row'
  },
  thumb: {
    flex: 1,
    width: 10,
    height: 10,
    backgroundColor: '#FFFFFF',
    borderColor: '#FD9F9D',
    borderWidth: 3,
  },
  title: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold'
  },
  info: {

  },
  place: {

  }
})

const sliderStyle = StyleSheet.create({
  track: {
    height: 20,
    borderRadius: 10,
    backgroundColor: 'transparent',
    borderWidth: 0.2,
    borderColor: 'white',
    shadowColor: 'black',
    overflow: 'hidden',
    shadowOffset: {width: 1, height: 3},
    shadowRadius: 2,
    shadowOpacity: 0.2,
  },
  thumb: {
    width: 20,
    height: 20,
    backgroundColor: '#FFFFFF',
    borderColor: '#89B6C2',
    borderWidth: 5,
    borderRadius: 10,
    shadowColor: 'black',
  }
});

export default CommonCalendar;
