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
import CategoryModal from "../../components/common/CateogryModal";
import ColorsModal from "../../components/common/ColorsModal";

const API_URL = 'http://54.180.145.205:8080';

const AddTodoPage = (props) => {
  const navigation = useNavigation();
  const [project, setProject] = useState(props.route.params);
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
  const [catModal, setCatModal] = useState(false);  // 카테고리 추가 모달
  const [colorsModal, setColorsModal] = useState(false);  // 색상 선택 모달
  
  const [categories, setCategories] = useState([
    {id: 1, name: '기획', color: "#FD9F9D33"},
    {id: 2, name: '개발', color: "#F9D83E33"},
    {id: 3, name: '디자인', color: "#A0DDE033"}
  ]); // 카테고
  const [newName, setNewName] = useState("")  // 새 카테고리 이름
  const [newColor, setNewColor] = useState("#86B0BC"); // 새 카테고리 색상
  
  const modalOpener = (colorSelected) => {
    setNewColor(colorSelected);
    // 추가모달은 켜고 색상선택모달은 끔
    setCatModal(true);
    setColorsModal(false);
  }

  const pickerOpener = () => {
    // 추가모달은 끄고 색상선택모달은 켬
    setCatModal(false);
    setColorsModal(true);
  }

  const dateModalOpener = () => {
    setDateModal(!dateModal);
  }

  // 프로젝트에 속하는 사용자들 받아오기
  useEffect(() => {
    console.log(props.route.params)
    fetch(`${API_URL}/schedule/list`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({project: project}),
    }).then(async (res) => {
      const jsonRes = await res.json();
      console.log("앱: ",jsonRes);
      setUsers(jsonRes);
    }).catch((error) => {
      console.log(error)
    })
  }, [project])

  // if category added
  const onPressAdd = () => {
    const newCat ={
      id: categories.length + 1,
      name: newName,
      color: `${newColor}33`
    };
    setCategory(newCat.name)
    let newCats = categories.concat([newCat]);
    newCats = newCats.filter((cat) => cat.name === newName).concat(categories.filter((cat) => cat.name !== newName));
    setCategories(newCats);
    setCatModal(false);
  }

  // if category selected
  const onPressCat = (item) => {
    setCategory(item.name);
    setColor(item.color.slice(0, 7));
    // 선택된 카테고리 맨앞으로 보내기
    let newCats = categories;
    newCats = newCats.filter((cat) => cat.name === item.name).concat(categories.filter((cat) => cat.name !== item.name));
    setCategories(newCats);
  }

  // 일정 data POST
  const onPressComplete = () => {
    const postData = {
      project: project,
      title: title,
      info: info,
      startDate: startDate,
      finishDate: finishDate,
      place: '비대면 zoom',
      category: category,
      color: color,
      intoCal: intoCal,
      users: users
    };
    console.log(postData)
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
    }).catch((error) => {
      console.log(error);
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
      categories={categories} setCategories={setCategories}
      category={category} setCategory={setCategory}
      color={color} setColor={setColor}
      catModal={catModal} setCatModal={setCatModal}
      colorsModal={colorsModal} setColorsModal={setColorsModal}
      newName={newName} setNewName={setNewName}
      newColor={newColor} setNewColor={setNewColor}
      pickerOpener={pickerOpener} modalOpener={modalOpener}
      onPressAdd={onPressAdd} onPressCat={onPressCat}
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

    {/* 카테고리 추가 모달 */}
    <CategoryModal 
    newColor={newColor}
    newName={newName} setNewName={setNewName}
    onPressAdd={onPressAdd} 
    catModal={catModal} setCatModal={setCatModal} 
    colorsModal={colorsModal} setColorsModal={setColorsModal} 
    pickerOpener={pickerOpener} modalOpener={modalOpener}/>

    {/* 카테고리 색상 설정 모달 */}
    <ColorsModal 
    newColor={newColor} setNewColor={setNewColor}
    onPressAdd={onPressAdd} 
    colorsModal={colorsModal} setColorsModal={setColorsModal} 
    catModal={catModal} setCatModal={setCatModal}
    modalOpener={modalOpener} pickerOpener={pickerOpener}/>
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