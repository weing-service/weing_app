// 메인페이지 모든 컴포넌트를 렌더링할 화면
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Dimensions, Image, Text, TouchableOpacity, Modal } from "react-native";
import TopBar from "../../components/main/TopBar";
import ProjectBar from "../../components/main/ProjectBar";
import CalenderContainer from "../../components/main/CalendarContainer";
import AddBtn from "../../components/main/AddBtn";
import BottomNavigator from "../../components/common/bottomNavigator";
import { useNavigation } from '@react-navigation/native';

const API_URL = 'http://localhost:8080';

const MainPage = () => {
  const navigation = useNavigation();
  const [projects, setProjects] = useState([{
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
  }, {
    _id: "628ce74004c2c463f42e905a",
    title: "zz",
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
  }])
  const [project, setProject] = useState(projects[0]);
  const [isProject, setIsProject] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  // 현재 로그인한 사용자의 모든 프로젝트 불러오기
  useEffect(() => {
    fetch(`${API_URL}/project/`, {
      method: 'GET'
    }).then(async (res) => {
      let jsonRes = await res.json();
      setProjects(jsonRes.data);
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

  const onPressChange = (pro) => {
    setProject(pro); 
    setModalOpen(false);
  }

  return <View style={{ flex: 1}}>
    {isProject ? <View style={{ flex: 1}}>
      <TouchableOpacity>
        <View style={styles.topView}>
          <TopBar/>
          <ProjectBar project={project} modalOpen={modalOpen} setModalOpen={setModalOpen}/>
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

    {/* 프로젝트 선택 모달 */}
    <Modal
      animationType={"slide"}
      transparent={true}
      visible={modalOpen}
    >
      <TouchableOpacity 
      onPress={() => (setModalOpen(false))}
      style={{flex: 2,backgroundColor: "black", opacity: 0.4}}>
      </TouchableOpacity>
      <View style={{flex: 1.5, backgroundColor:'#F8F8FA', borderTopLeftRadius: 20}}>
        <View style={{flex: 1}}>
            <TouchableOpacity style={{alignItems:'center', paddingTop: 20, marginBottom: 20}}>
                <Image 
                    style={{width: 32, height: 4}}
                    source={require('../../assets/main/modal_knob.png')}
                />
            </TouchableOpacity>

            {projects.map((pro) => (
              pro === projects[0] ?
              <View style={{justifyContent:'center', alignItems: 'center'}}>
                <TouchableOpacity style={[modalStyle.container, {backgroundColor: 'white'}]}>
                  <Image style={{flex: 1,width: 60, height: 50}} source={require('../../assets/main/project_img.png')}/>
                  <View style={{flex: 6}}>
                    <Text style={[{color: '#89B6C2'}, modalStyle.title]}>{pro.title}</Text>
                    <Text style={modalStyle.users}>팀원: {pro.users.map((user) => (`${user.username} `))}</Text>
                  </View>
                  <Image style={{width: 30, height: 30}} source={require('../../assets/main/btn_check.png')}/>
                </TouchableOpacity>
                  <Image style={{width: 380, height: 1}} source={require('../../assets/main/line_divider.png')}/>
              </View>
              : 
              <View style={{justifyContent:'center', alignItems: 'center'}}>
                <TouchableOpacity style={modalStyle.container} onPress={(pro) => onPressChange(pro)}>
                  <Image style={{flex: 1,width: 60, height: 50}} source={require('../../assets/main/project_img.png')}/>
                  <View style={{flex: 6.5}}>
                    <Text style={[{color: '#404855'}, modalStyle.title]}>{pro.title}</Text>
                    <Text style={[modalStyle.users, {color: '#999999'}]}>팀원: {pro.users.map((user) => (`${user.username} `))}</Text>
                  </View>
                </TouchableOpacity>
                  <Image style={{width: 380, height: 1}} source={require('../../assets/main/line_divider.png')}/>
              </View>
            ))}
            <View style={{justifyContent:'center', alignItems: 'center'}}>
                <TouchableOpacity style={modalStyle.container} onPress={() => navigation.navigate('AddProjectPage') }>
                  <Image style={{flex: 1,width: 60, height: 50}} source={require('../../assets/main/project_img.png')}/>
                  <View style={{flex: 6.5}}>
                    <Text style={[modalStyle.title, {color: '#404855', fontWeight: '500', top: 15}]}>새 프로젝트 추가</Text>
                  </View>
                </TouchableOpacity>
                  <Image style={{flex: 1, width: 380, height: 1}} source={require('../../assets/main/line_divider.png')}/>
              </View>
        </View>
      </View>
    </Modal>
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

const modalStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 20,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    flex: 1,
    fontSize: 16,
    fontWeight: '700',
    left: 20
  },
  users: {
    flex: 1,
    left: 20,
    color: '#404855'
  }
})

export default MainPage;
