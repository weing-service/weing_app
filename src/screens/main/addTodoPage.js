// 새 일정 추가 페이지
import React, { useEffect, useMemo, useState } from "react";
import { View, Text, Modal, TouchableOpacity, Image, FlatList, StyleSheet } from "react-native";

import TodoName from "../../components/main/addTodo/TodoName";
import TodoContent from "../../components/main/addTodo/TodoContent";
import TodoDate from "../../components/main/addTodo/TodoDate";
import TodoSwitch from "../../components/main/addTodo/TodoSwitch";
import TodoCat from "../../components/main/addTodo/TodoCat";

import { Calendar } from "react-native-calendars";
import { DateToString } from "../../components/common/DateToString";
import { useNavigation } from '@react-navigation/native';

const API_URL = 'http://localhost:8080';

const AddTodoPage = () => {
  const navigation = useNavigation();
  const [title, setTitle] = useState("");
  const [info, setInfo] = useState("");
  const [startDate, setStartDate] = useState();
  const [finishDate, setFinishDate] = useState();
  const [intoCal, setIntoCal] = useState(true); // 캘린더 반영 여부
  const [category, setCategory] = useState("");
  const [color, setColor] = useState("");

  const [picker, setPicker] = useState(false);
  const [marker, setMarker] = useState({});
  const [count, setCount] = useState(0);

  // AddProjectPafe Modal과 중복 --> Refactoring 필요
  const onPressDate = (day) => {
    let newMark = {};
    if(count % 2 == 0){
        // 홀수번째 클릭이면 startDate 설정
        setStartDate(day);
        newMark[day.dateString] = {startingDay: true, dotColor: "#89B6C2", color: "#89B6C2"};
    } else {
        // 짝수번째 클릭이면 finishDate 설정
        setFinishDate(day);
        let bt = day.timestamp - startDate.timestamp;
        let btDay = bt / (1000*60*60*24);
        
        for(let i=0; i<btDay; i++){
            if(i == 0)
                newMark[startDate.dateString] = {startingDay: true, dotColor: "#89B6C2", color: "#89B6C2"};
            else
                newMark[DateToString(new Date(startDate.year, startDate.month - 1, startDate.day + i))] = {color: "#89B6C24D"}
        }
        newMark[day.dateString] = {endingDay: true, dotColor: "#89B6C2", color: "#89B6C2"};
    }
    setMarker(newMark);
    setCount(count + 1);
  }

  const pickerOpener = () => {
    setPicker(!picker);
  }

  // 일정 data POST
  const onPressComplete = () => {
    const postData = {
      project: "", // ??
      title: title,
      info: info,
      startDate: startDate,
      finishDate: finishDate,
      place: "", // ??
      category: category,
      color: color,
      intoCal: intoCal,
      _id: "" // ?? 
    };
    fetch(`${API_URL}/schedule`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postData)
    }).then(async(res) => {
      const jsonRes = await res.json();
      console.log('응답: ', jsonRes);

      navigation.navigate('MainPage');
    })
  }

  return <View style={{flex: 1}}>
    <View style={styles.topView}>
      <Text style={styles.topTitle}>새 일정 추가</Text>
      <TouchableOpacity 
          style={{position: 'absolute', right: 20, top: 55}}
          onPress={onPressComplete}
      >
          <Text style={{fontWeight: 'bold', fontSize: 15,color: '#999999'}}>완료</Text>
      </TouchableOpacity>
    </View>

    <TodoName  title={title} setTitle={setTitle}/>
    <TodoContent content={info} setInfo={setInfo}/>
    <TodoDate pickerOpener={pickerOpener} finishDate={finishDate && finishDate.dateString}/>
    <TodoSwitch intoCal={intoCal} setIntoCal={setIntoCal}/>
    <TodoCat 
      category={category} setCategory={setCategory}
      color={color} setColor={setColor}
    />

    {/* 날짜 설정 모달 */}
    <Modal 
      animationType={"slide"}
      transparent={true}
      visible={picker}
      onRequestClose={() => setPicker(false)}
    >
      <View style={{flex:1, marginTop: 350, backgroundColor:'white', borderTopLeftRadius: 20, borderTopRightRadius: 20}}>
        <View style={{flex: 1}}>
            <TouchableOpacity style={{flex: 1, alignItems:'center', paddingTop: 20}}>
                <Image 
                    style={{width: 32, height: 4}}
                    source={require('../../assets/main/modal_knob.png')}
                />
            </TouchableOpacity>
            <Text style={{flex: 1, left: 20, color: "#404855"}}>일정 시작일과 마감일을 설정해주세요.</Text>
        </View>
        <View style={{flex: 4}}>
            <Calendar
            enableSwipeMonths
            onDayPress={day => onPressDate(day)}
            markingType={'period'}
            markedDates={marker}
            />
        </View>

        <View style={{flex: 1, alignItems: 'center'}}>
            <TouchableOpacity 
                onPress={() => setPicker(false)}
            >
            <Image 
            style={{width: 156, height: 38, borderRadius: 10}}
            source={require('../../assets/main/todo/btn_select_complete.png')} />
            </TouchableOpacity>
        </View>
      </View>
    </Modal>
  </View>;
};

const styles = StyleSheet.create({
  topView: {
    paddingTop: 40,
    marginBottom: 30
  },
  topTitle: {
    top: 10,
    fontSize: 20,
    color:'#404855',
    fontWeight: 'bold',
    textAlign: "center"
  },
})

export default AddTodoPage;