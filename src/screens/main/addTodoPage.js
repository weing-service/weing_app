// 새 일정 추가 페이지
import React, { useMemo, useState } from "react";
import { View, Text, Modal } from "react-native";

import TodoName from "../../components/main/addTodo/TodoName";
import TodoContent from "../../components/main/addTodo/TodoContent";
import TodoDate from "../../components/main/addTodo/TodoDate";
import TodoSwitch from "../../components/main/addTodo/TodoSwitch";
import TodoCat from "../../components/main/addTodo/TodoCat";
import { Calendar } from "react-native-calendars";
import {dateToString} from "../../components/common/dateToString";
import { Picker } from "@react-native-picker/picker";
import { Switch } from "react-native";

const addTodoPage = () => {
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const [pickedDate, setPickedDate] = useState(dateToString({date: new Date()}));
  
  const marked = useMemo(() => {
    return {
      selected: {
        selected: true,
        disableTouchEvent: true,
        selectedColor: 'blue'
      }
    }
  })
  const pickerOpener = () => {
    setIsPickerOpen(!isPickerOpen);
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
      style={{height: 60}}
      onRequestClose={() => setIsPickerOpen(false)}
    >
      <Text>일정 날짜와 시간을 선택해주세요.</Text>
      <View>
        <Calendar
          enableSwipeMonths
          selected={pickedDate}
          onDayPress={day => setPickedDate(day)}
          markedDates={marked}
        />
      </View>
      <View>
        <Text>시작 시간</Text>
        <Picker>
          <Picker.Item label="시작 시간" value="시작 시간" />
        </Picker>
        <Text>종료 시간</Text>
        <Picker>
          <Picker.Item label="종료 시간" value="종료 시간" />
        </Picker>
      </View>
      <View>
        <Text>반복되는 일정</Text>
        <Switch/>
      </View>
    </Modal>
  </View>;
};

export default addTodoPage;