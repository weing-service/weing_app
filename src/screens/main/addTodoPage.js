// 새 일정 추가 페이지
import React, { useEffect, useMemo, useState } from "react";
import { View, Text, Modal, TouchableOpacity, Image } from "react-native";

import TodoName from "../../components/main/addTodo/TodoName";
import TodoContent from "../../components/main/addTodo/TodoContent";
import TodoDate from "../../components/main/addTodo/TodoDate";
import TodoSwitch from "../../components/main/addTodo/TodoSwitch";
import TodoCat from "../../components/main/addTodo/TodoCat";

import { Calendar } from "react-native-calendars";
import { DateToString } from "../../components/common/DateToString";
import { Picker } from "@react-native-picker/picker";
import { Switch } from "react-native";

const addTodoPage = () => {
  const [isPickerOpen, setIsPickerOpen] = useState(false);
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

  // 달력에서 선택된 날짜는 강조 -> 미완
  const marked = useMemo(() => {
    return {
      [pickedDate]: {
        selected: true,
        disableTouchEvent: true,
        selectedColor: '#89B6C2'
      }
    }
  })
  const pickerOpener = () => {
    setIsPickerOpen(!isPickerOpen);
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
    <TodoName  style={{flex: 1}}/>
    <TodoContent  style={{flex: 1}}/>
    <TodoDate  style={{flex: 1}} pickerOpener={pickerOpener}/>
    <TodoSwitch  style={{flex: 1}}/>
    <TodoCat  style={{flex: 1}}/>

    <Modal 
      animationType={"slide"}
      transparent={false}
      visible={isPickerOpen}
      onRequestClose={() => setIsPickerOpen(false)}
    >
      <Text style={{flex: 1}}>일정 날짜와 시간을 선택해주세요.</Text>
      <View style={{flex: 3}}>
        <Calendar
          enableSwipeMonths
          selected={pickedDate}
          onDayPress={day => setPickedDate(day)}
          markedDates={marked}
        />
      </View>
      <View style={{flex: 2, flexDirection: 'row'}}>
        <View style={{flex: 1}}>
          <Text>시작 시간</Text>
          <TimePicker time={"start"}/>
        </View>
        <View style={{flex: 1}}>
          <Text>종료 시간</Text>
          <TimePicker time={"end"}/>
        </View>
      </View>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <Text>반복되는 일정</Text>
        <Switch/>
      </View>
      <View style={{flex: 1, alignItems: 'center'}}>
        <TouchableOpacity onPress={pickerOpener}>
          <Image source={require('../../assets/main/todo/btn_select_complete.png')} />
        </TouchableOpacity>
      </View>
    </Modal>
  </View>;
};

export default addTodoPage;