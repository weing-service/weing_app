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
import MemberModal from "../../components/common/MemberModal";

const API_URL = 'http://localhost:8080';

const AddTodoPage = (props) => {
  const navigation = useNavigation();
  const [project, setProject] = useState();
  const [title, setTitle] = useState("");
  const [info, setInfo] = useState("");
  const [startDate, setStartDate] = useState();
  const [finishDate, setFinishDate] = useState();
  const [intoCal, setIntoCal] = useState(true); // 캘린더 반영 여부
  const [category, setCategory] = useState("");
  const [color, setColor] = useState("");
  const [users, setUsers] = useState([]);     // 프로젝트에 속하는 참여자들
  const [members, setMembers] = useState([]); // 일정 참여자들

  const [dateModal, setDateModal] = useState(false);
  const [memberModal, setMemberModal] = useState(false);

  useEffect(() => {
    setProject(props.route.params);
  }, [])

  // 프로젝트에 속하는 사용자들 받아오기
  useEffect(() => {
    fetch(`${API_URL}/schedule/list`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(project),
    }).then(async (res) => {
      const jsonRes = await res.json();
      setUsers(jsonRes);
    });
  }, [project])

  const dateModalOpener = () => {
    setDateModal(!dateModal);
  }

  // 일정 data POST
  const onPressComplete = () => {
    const postData = {
      project: project,
      title: title,
      info: info,
      startDate: startDate,
      finishDate: finishDate,
      category: category,
      color: color,
      intoCal: intoCal,
      users: members
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
    <View style={{padding: 20}}>
      <TouchableOpacity 
            onPress={() => setMemberModal(true)}
            style={{top: 20}}>
            <Text style={styles.text}>참여자</Text>
            <Image 
                style={{width: 48, height: 48, top: 20}}
                source={require('../../assets/main/btn_add_grey.png')}
            />
      </TouchableOpacity>
    </View>

    {/* 날짜 설정 모달 */}
    <DateModal 
      modalInfo={"일정 시작일과 마감일을 설정해주세요"} 
      modal={dateModal} setModal={setDateModal}
      startDate={startDate}   setStartDate={setStartDate}
      finishDate={finishDate} setFinishDate={setFinishDate}
    />

    {/* 참여자 선택 모달 */}
    <MemberModal
        modal={memberModal} setModal={setMemberModal}
        users={users} setUsers={setUsers}
        members={members} setMembers={setMembers}
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