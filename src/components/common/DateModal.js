import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, ImageBackground } from "react-native";
import { Calendar } from "react-native-calendars";
import { DateToString } from "./DateToString";
import Modal from "react-native-modalbox"

const DateModal = ({modalInfo, modal, setModal, startDate, setStartDate, finishDate, setFinishDate}) => {
    const [marker, setMarker] = useState({});
    const [count, setCount] = useState(0);

  // 날짜 선택 캘린더 클릭시
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

    return <Modal
        style = {{height : 700, width : '100%', marginTop: 100,borderTopLeftRadius: 10, borderTopRightRadius: 10}}
        animationType={"slide"}
        transparent={false}
        isOpen={modal}
        entry = {'bottom'}
        swipeToClose = {true}
        swipeArea = {600}
        swipeThreshold = {0}
        position = {'bottom'}>
    <View style={{flex: 1.5, backgroundColor:'white', borderTopLeftRadius: 20, borderTopRightRadius: 20}}>
      <View style={{flex: 1}}>
          <TouchableOpacity style={{flex: 1, alignItems:'center', paddingTop: 20}}>
              <Image 
                  style={{width: 32, height: 4}}
                  source={require('../../assets/main/modal_knob.png')}
              />
          </TouchableOpacity>
          <Text style={{flex: 1, left: 20, color: "#404855"}}>{modalInfo}</Text>
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

      <View style={{flex: 2, alignItems: 'center'}}>
          <TouchableOpacity 
              onPress={() => setModal(false)}
          >
          <Image 
          style={{width: 156, height: 38, borderRadius: 10}}
          source={require('../../assets/main/todo/btn_select_complete.png')} />
          </TouchableOpacity>
      </View>
    </View>
  </Modal>;
}

export default DateModal;