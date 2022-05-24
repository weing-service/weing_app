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
import { Picker } from "@react-native-picker/picker";
import { Switch } from "react-native";
import { useNavigation } from '@react-navigation/native';

const AddTodoPage = () => {
  const navigation = useNavigation();
  const [title, setTitle] = useState("");
  const [info, setInfo] = useState("");
  const [startDate, setStartDate] = useState();
  const [finishDate, setFinishDate] = useState();
  const [intoCal, setIntoCal] = useState(true); // 캘린더 반영 여부
  const [category, setCategory] = useState();

  const [picker, setPicker] = useState(false);
  const [marker, setMarker] = useState({});
  const [count, setCount] = useState(0);

  const [pickedDate, setPickedDate] = useState();
  const [pickStartT, setPickStartT] = useState(); // 시작 시간
  const [pickEndT, setPickEndT] = useState();     // 종료 시간

  useEffect(() => {
    const today = new Date();
    setPickedDate(DateToString(today));
    const time = {
      hour: today.getHours.toString(),
      min: today.getMinutes.toString(),
      apm: today.getHours < 12? "am" : "pm"
    };
    setPickStartT(time);
    setPickEndT(time);
  }, [])

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

  // Time Picker Component
  const TimePicker = (time) => {
    let hours = [];
    for(let i=1; i<=12; i++){
      hours.push(i.toString());
    }
    let minutes = [];
    for(let i=0; i<= 59; i++){
      minutes.push(i.toString());
    }
    const amOrPm = ['AM', 'PM'];

    return(
      <View style={{flex: 1, flexDirection: 'row'}}>
        <Picker 
          selectedValue={time == "start" ? pickStartT.hour:pickEndT.hour} 
          onValueChange={(itemValue, itemIndex) => time == "start" ? 
            setPickStartT({hour: itemValue, min: time.min, apm: time.apm}) :
            setPickEndT({hour: itemValue, min: time.min, apm: time.apm})}
          style={{flex: 1}} 
          itemStyle={{fontSize: 14}}
        >
        {
          // Hour Picker
          hours.map((hour, key) => (
              <Picker.Item label={hour} value={hour} />
          ))
        }
        </Picker>
        <Picker 
          selectedValue={time == "start" ? pickStartT.min:pickEndT.min} 
          onValueChange={(itemValue, itemIndex) => time == "start" ? 
            setPickStartT({hour: time.hour, min: itemValue, apm: time.apm}) : 
            setPickEndT({hour: time.hour, min: itemValue, apm: time.apm})}
          style={{flex: 1}} 
          itemStyle={{fontSize: 14}}
        >
        {
          // Minutes Picker
          minutes.map((minute, key) => (
              <Picker.Item label={minute} value={minute} />
          ))
        }
        </Picker>
        <Picker 
          selectedValue={time == "start" ? pickStartT.apm:pickEndT.apm}
          onValueChange={(itemValue, itemIndex) => time == "start" ?
            setPickStartT({hour: time.hour, min: time.min, apm: itemValue}) :
            setPickEndT({hour: time.hour, min: time.min, apm: itemValue})}
          style={{flex: 1}} 
          itemStyle={{width: 80, fontSize: 14}}
        >
          <Picker.Item label="AM" value="am"/>
          <Picker.Item label="PM" value="pm"/>
        </Picker>
      </View>
    );
  }

  return <View style={{flex: 1}}>
    <View style={styles.topView}>
      <Text style={styles.topTitle}>새 일정 추가</Text>
      <TouchableOpacity 
          style={{position: 'absolute', right: 20, top: 55}}
          onPress={() => navigation.navigate('MainPage')}
      >
          <Text style={{fontWeight: 'bold', fontSize: 15,color: '#999999'}}>완료</Text>
      </TouchableOpacity>
    </View>

    <TodoName  title={title} setTitle={setTitle}/>
    <TodoContent content={info} setInfo={setInfo}/>
    <TodoDate pickerOpener={pickerOpener}/>
    <TodoSwitch intoCal={intoCal} setIntoCal={setIntoCal}/>
    <TodoCat category={category} setCategory={setCategory}/>

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
            //selected={pickedDate}
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