// 공용 컴포넌트 - 달력
import React, { useCallback, useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, Button } from "react-native";
import { Agenda, Calendar } from "react-native-calendars";
import { StyleSheet } from "react-native";
import Slider from "react-native-slider";

const API_URL = 'http://54.180.145.205:8080';

// 렌더링을 다하고 props: project를 받기때문에 useEffect ==> 백에서 넘겨주는 데이터 수정 필요
const CommonCalendar = ({project}) => {
  // states
  const [td, setToday] = useState("2022-05-28"); // 오늘 날짜 yyyy-mm-dd
  const [todoItems, setTodoItems] = useState();  // 프로젝트 -> 그 안의 모든 일정
  const [todayTodo, setTodayTodo] = useState(); // 오늘 해야할 일
  const [markTodos, setMarkTodos] = useState({});
  const [done, setDone] = useState({});
  const [doneCount, setDoneCount] = useState(0);
  const [id, setId] = useState();

  // 프로젝트 하나 불러오기
  useEffect(() => {
    fetch(`${API_URL}/project/one`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({title: project.title}),
    }).then(async (res) => {
      const jsonRes = await res.json();
      let todos ={};
      for(let i=0; i<jsonRes.data.schedules.length; i++) {
        const dateStr = jsonRes.data.schedules[i].startDate.dateString;
        if(todos[dateStr])
          // 이미 그 날짜에 value 있으면
          todos[dateStr].push(jsonRes.data.schedules[i])
        else
          Object.assign(todos, {
            [dateStr] : new Array(jsonRes.data.schedules[i])
        });
      }

      setTodoItems(todos);
    }).then(async() => {
      setTodayTodo(todoItems["2022-05-28"])
    }).then(async() => {
      let marks = {};
      todayTodo.map(todo => {
        if(todo.startDate.dateString in marks)
          // 이미 그 날짜에 마킹되어있으면
          marks[todo.startDate.dateString].dots.push({color: todo.color})
        else
          Object.assign(marks, {
            [todo.startDate.dateString] : {dots: [{color: todo.color}]}
          });
      })
      setMarkTodos(marks);
    }).catch((error) =>{
      console.log(error);
    })
  }, [todoItems, todayTodo])

  //done handler
  useEffect(() => {
    if(done[id] === false && doneCount > 0){
      setDoneCount(doneCount - 1);
    } else if(done[id] === true && doneCount < todayTodo.length ) {
      setDoneCount(doneCount + 1);
    }
  }, [done])

  const onPressDone =(event) => {
    const id = event.nativeEvent.target;
    const obj = {
      ...done,
      [id] : !Object.keys(done).includes(id) ? !done[id] : true,
    };
    // 배열에 요소 추가되면 앞 요소 삭제되는 오류 있음
    setDone(obj);
  }

  // render todos
  const renderItem = (item, isFirst) => {
    return (
      item.intoCal && <View
        style={itemStyle.box}
      >
        <View style={itemStyle.titleContainer}>
          <Slider 
          style={{width: 0, marginRight: 20, top: -10}} 
          thumbStyle={
            {
              flex: 1,
              width: 10,
              height: 10,
              backgroundColor: '#FFFFFF',
              borderColor: item.color,
              borderWidth: 3,
            }}
          />
          <Text style={itemStyle.title}>{item.title}</Text>
          <TouchableOpacity>
            <Image 
            style={{width: 2.5, height: 16, right: 16}}
            source={require('../../assets/main/btn_menu.png')}/>
          </TouchableOpacity>
        </View>
        <Text style={itemStyle.info}>{item.info}</Text>
        <View style={{flexDirection: 'row', top: 10}}>
          <Image style={itemStyle.location} source={require("../../assets/main/btn_location.png")}/>
          <Text style={itemStyle.place}>{item.place}</Text>
        </View>
        <View style={{alignItems: 'flex-end'}}>
          <TouchableOpacity 
            style={{margin: 10}}
            onPress={(event) => {
              onPressDone(event);
              setId(event.nativeEvent.target)
            }}
          >
            { done[id] ?
              <Image 
              style={{height: 25, width: 25}}
              source={
                require('../../assets/main/todo_logo_fill.png')} /> :
              <Image 
              style={{height: 25, width: 25}}
              source={
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
    return <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
      {
        todayTodo && todayTodo.length === doneCount ?
        <Image 
          style={{top: -5, marginRight: 10, width: 25, height: 25}}
          source={
            require('../../assets/main/todo_logo_fill.png')
          }
        /> : 
        <Image 
          style={{top: -5, marginRight: 10, width: 25, height: 25}}
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
        style={{width: 220, marginRight: 10}}
        trackStyle={sliderStyle.track}
        thumbStyle={sliderStyle.thumb}
        minimumValue={0}
        maximumValue={todayTodo && todayTodo.length}
        minimumTrackTintColor="#89B6C27F"
      />
      <Text style={{color: "#999999"}}>{doneCount}/{todayTodo && todayTodo.length}</Text>
    </View>;
  };

  return (
    <View style={{ flex: 1 }}>
        <Agenda
        style={{borderTopRightRadius: 40, top: 10}}
        refreshing={true}
        items={todoItems}
        markingType={'multi-dot'}
        markedDates={markTodos}
        current={td}
        selected={td}
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
    paddingLeft: 25,
    borderRadius: 15,
    marginTop: 10,
    right: 10,
  },
  titleContainer : {
    flex: 1,
    top: 16,
    flexDirection: 'row',
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
    flex: 1,
    fontSize: 14,
    opacity: 0.8,
    top: 10
  },
  place: {
    flex: 1,
    fontSize: 14,
    opacity: 0.8,
    left: 5,
    top: 10
  },
  location: {
    top: 10,
    width: 11,
    height: 13
  }
})

const sliderStyle = StyleSheet.create({
  track: {
    height: 15,
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
