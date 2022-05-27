// 일정 이름 input 컴포넌트
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Calendar } from "react-native-calendars";
import { Modal } from "react-native-paper";

const TodoDate = ({pickerOpener, finishDateString}) => {

  return <View style={styles.input}>
      <Text style={styles.text}>날짜 및 시간 설정*</Text>
      <TouchableOpacity 
          style={{left: 20, top: 20}}
          onPress={pickerOpener}>
      {finishDateString? 
      <View style={{backgroundColor: 'white', width: 100, height: 50, borderRadius: 10, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color: '#999999'}}>
          {finishDateString}
        </Text>
      </View>
      : <Image 
          style={{width: 80, height: 80}}
          source={require('../../../assets/main/todo/btn_calendar.png')}/>}
      </TouchableOpacity>
  </View>;
  
};

const styles = StyleSheet.create({
  text: {
      fontSize: 15,
      left: 20,
      marginTop: 20
  },
  input: {
  }
})

export default TodoDate;