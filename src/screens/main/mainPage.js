// 메인페이지 모든 컴포넌트를 렌더링할 화면
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Dimensions, Image, Text, TouchableOpacity } from "react-native";
import TopBar from "../../components/main/TopBar";
import ProjectBar from "../../components/main/ProjectBar";
import CalenderContainer from "../../components/main/CalendarContainer";
import AddBtn from "../../components/main/AddBtn";
import BottomNavigator from "../../components/common/bottomNavigator";
import { useNavigation } from '@react-navigation/native';

const API_URL = 'http://localhost:8080';

const MainPage = () => {
  const navigation = useNavigation();
  const [project, setProject] = useState({
    _id: "628ce74004c2c463f42e905a",
    title: "도오개걸",
    info: "육조",
    users: [
        {
            _id: "62887bbbe70b757d50f04efb",
            id: 2243399485,
            username: "김민지",
            displayName: "김민지",
            provider: "kakao",
            profile_image: "http://k.kakaocdn.net/dn/c1Kyde/btrAdc6T5X2/jboB2G970cye5tiJJej3kK/img_640x640.jpg",
            thumbnail_image: "http://k.kakaocdn.net/dn/c1Kyde/btrAdc6T5X2/jboB2G970cye5tiJJej3kK/img_110x110.jpg",
            __v: 0
        },
        {
            _id: "6288798b47229a0d324fcfdb",
            id: 2247764663,
            username: "정재희",
            displayName: "정재희",
            provider: "kakao",
            profile_image: "http://k.kakaocdn.net/dn/QY3PZ/btrzxxcHXcJ/zODgLVStwiyRUncpYmdn8K/img_640x640.jpg",
            thumbnail_image: "http://k.kakaocdn.net/dn/QY3PZ/btrzxxcHXcJ/zODgLVStwiyRUncpYmdn8K/img_110x110.jpg",
            __v: 0
        }
    ],
    startDate: {year: "2022", month: "5", date: "27"},
    finishDate: {year: "2022", month: "5", date: "27"},
    coverImg: {
        _id: "628887440a1f4f33d2b2d394",
        originalFileName: "chihiro043.jpg",
        serverFileName: "43cc5513e1b2a180cc269572d39b6f42",
        savedName: "chihiro043.jpg1653114692308",
        size: 220671,
        category: "coverImg"
    },
    profileImg: {
        _id: "6288888aad0e7cd7d6e6585c",
        originalFileName: "totoro034.jpg",
        serverFileName: "f5d83996ca8a52e189d2f3c33c6a3a6c",
        savedName: "totoro034.jpg1653115018967",
        size: 192604,
        category: "profileImg"
    }
  });
  const [isProject, setIsProject] = useState(false);

  // 현재 로그인한 사용자의 모든 프로젝트 불러오기
  useEffect(() => {
    fetch(`${API_URL}/project/`, {
      method: 'GET'
    }).then(async (res) => {
      let jsonRes = await res.json();
      setProject(jsonRes.data[0]);
    })
  })

  // setProject
  useEffect(() => {
    setProject(project)
    if(project !== null) {
      // setTodoItems
      setIsProject(true);
    }
    // 만약에 없으면 새 프로젝트 생성으로 이동
  }, [project])

  useEffect(() => {
    console.log("최초렌더링: ",project)
  }, [isProject])

  return <View style={{ flex: 1}}>
    {isProject ? <View style={{ flex: 1}}>
      <TouchableOpacity>
        <View style={styles.topView}>
          <TopBar/>
          <ProjectBar project={project}/>
        </View>
      </TouchableOpacity>
      <CalenderContainer style={{flex: 3}} project={project}/>
      <AddBtn style={{flex: 1}}/>
      <View style = {styles.fixed2}>
        <BottomNavigator type = {1}/>
      </View>
    </View> 
    : <View style={styles.noView}>
      <Image 
      style={{width: 278, height: 48, bottom: 40}}
      source={require('../../assets/main/no_text.png')}/>
      <Image 
      style={{width: 157, height: 200}}
      source={require('../../assets/main/no_project.png')}/>
      <TouchableOpacity 
        style={styles.noBtn}
        onPress={() => navigation.navigate('AddProjectPage')}
      >
        <Text style={{fontSize: 20, color: 'white', textAlign: 'center', paddingTop: 15, fontWeight: '700'}}>
          시작하기
        </Text>
      </TouchableOpacity>
    </View>}
  </View>;
};

const styles = StyleSheet.create({
  topView: {
    backgroundColor: 'white',
    paddingTop: 40
  },
  noView: {
    flex: 1,
    backgroundColor: 'white', 
    justifyContent: 'center',
    alignItems: 'center'
  },
  noBtn: {
    top: 40,
    width: 162,
    height: 49,
    backgroundColor: "#89B6C2",
    borderRadius: 14
  },
  fixed2: {
    position: 'absolute',
    top : Dimensions.get('window').height - 100,
    width : '100%'
  },
})

export default MainPage;
