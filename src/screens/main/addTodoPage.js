// 새 일정 추가 페이지
import React, { useEffect, useMemo, useState } from "react";
import { View, Text, Modal, TouchableOpacity, Image, FlatList, StyleSheet } from "react-native";

import TodoName from "../../components/main/addTodo/TodoName";
import TodoContent from "../../components/main/addTodo/TodoContent";
import TodoDate from "../../components/main/addTodo/TodoDate";
import TodoSwitch from "../../components/main/addTodo/TodoSwitch";
import TodoCat from "../../components/main/addTodo/TodoCat";

import { useNavigation } from '@react-navigation/native';
import DateModal from "../../components/common/DateModal";

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

  const [dateModal, setDateModal] = useState(false);

  const dateModalOpener = () => {
    setDateModal(!dateModal);
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
    <TodoDate pickerOpener={dateModalOpener} finishDate={finishDate && finishDate.dateString}/>
    <TodoSwitch intoCal={intoCal} setIntoCal={setIntoCal}/>
    <TodoCat 
      category={category} setCategory={setCategory}
      color={color} setColor={setColor}
    />

    {/* 날짜 설정 모달 */}
    <DateModal 
      modalInfo={"일정 시작일과 마감일을 설정해주세요"} 
      modal={dateModal} setModal={setDateModal}
      startDate={startDate}   setStartDate={setStartDate}
      finishDate={finishDate} setFinishDate={setFinishDate}
    />
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