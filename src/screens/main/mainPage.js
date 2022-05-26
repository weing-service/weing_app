// 메인페이지 모든 컴포넌트를 렌더링할 화면
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import TopBar from "../../components/main/TopBar";
import ProjectBar from "../../components/main/ProjectBar";
import CalenderContainer from "../../components/main/CalendarContainer";
import AddBtn from "../../components/main/AddBtn";
import BottomNavigator from "../../components/common/bottomNavigator";

const API_URL = 'http://localhost:8080';

const MainPage = () => {
  const [project, setProject] = useState();

  // 현재 로그인한 사용자의 모든 프로젝트 불러오기
  useEffect(() => {
    fetch(`${API_URL}/project/`, {
      method: 'GET'
    }).then(async (res) => {
      let jsonRes = await res.json();
      setProject(jsonRes.data[0]);
    })
  },[])

  // setProject
  useEffect(() => {
    if(project) {
      // setTodoItems
    }
    // 만약에 없으면 새 프로젝트 생성으로 이동
  }, [project])

  return <View style={{ flex: 1}}>
    {project ? <View style={{ flex: 1}}>
      <View style={styles.topView}>
        <TopBar/>
        <ProjectBar/>
      </View>
      <CalenderContainer style={{flex: 3}} project={project}/>
      <AddBtn style={{flex: 1}}/>
      <View style = {styles.fixed2}>
        <BottomNavigator type = {1}/>
      </View>
    </View> : <View style={{backgroundColor: 'white', height: '100%', width: '100%'}}>
      <Text>프로젝트 생성하기</Text>
    </View>}
  </View>;
};

const styles = StyleSheet.create({
  topView: {
    backgroundColor: 'white',
    paddingTop: 40
  },
  noText: {

  },
  noImg: {

  },
  noStartBtn: {

  },
  fixed2: {
    position: 'absolute',
    top : Dimensions.get('window').height - 100,
    width : '100%'
  },
})

export default MainPage;
