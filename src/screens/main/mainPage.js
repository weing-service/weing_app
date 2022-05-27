// 메인페이지 모든 컴포넌트를 렌더링할 화면
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Dimensions, Image, Text, TouchableOpacity } from "react-native";
import TopBar from "../../components/main/TopBar";
import ProjectBar from "../../components/main/ProjectBar";
import CalenderContainer from "../../components/main/CalendarContainer";
import AddBtn from "../../components/main/AddBtn";
import BottomNavigator from "../../components/common/bottomNavigator";
import { useNavigation } from '@react-navigation/native';
import Modal from "react-native-modalbox";

const API_URL = 'https://7dcd-14-32-12-211.jp.ngrok.io';

const MainPage = () => {
  const userId = 2243399485;
  const navigation = useNavigation();
  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState();
  const [isProject, setIsProject] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  // 현재 로그인한 사용자의 모든 프로젝트 불러오기
  useEffect(() => {
    fetch(`${API_URL}/project/user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({id: userId}),
    }).then(async (res) => {
      const jsonRes = await res.json();
      setProjects(jsonRes.data);
      return jsonRes;
    }).then(async (jsonRes) => {
      setProject(jsonRes.data[0])
    }).then(async() => {
      setIsProject(true);
    }).catch((error) => {
      console.log(error);
    })
  }, [])

  const onPressChange = (pro) => {
    setProject(pro); 
    setModalOpen(false);
  }

  return <View style={{ flex: 1}}>
    {isProject === true ? <View style={{ flex: 1}}>
      <TouchableOpacity>
        <View style={styles.topView}>
          <TopBar/>
          <ProjectBar project={project}/>
        </View>
      </TouchableOpacity>
      <CalenderContainer style={{flex: 3}} project={project}/>
      <AddBtn style={{flex: 1}} title={project.title}/>
      <View style = {styles.fixed2}>
        <BottomNavigator type = {1} modal={modalOpen} setModal={setModalOpen}/>
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
        style = {{height : 400, width : '100%',borderTopLeftRadius: 10, borderTopRightRadius: 10}}
        animationType={"slide"}
        transparent={false}
        isOpen={modalOpen}
        entry = {'bottom'}
        swipeToClose = {true}
        swipeArea = {600}
        swipeThreshold = {0}
        position = {'bottom'}
      >
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
                    {/* <Text style={modalStyle.users}>팀원: {pro.users.map((user) => (`${user.username} `))}</Text> */}
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
                    {/* <Text style={[modalStyle.users, {color: '#999999'}]}>팀원: {pro.users.map((user) => (`${user.username} `))}</Text> */}
                  </View>
                </TouchableOpacity>
                  <Image style={{width: 380, height: 1}} source={require('../../assets/main/line_divider.png')}/>
              </View>
            ))}
            <View style={{justifyContent:'center', alignItems: 'center'}}>
                <TouchableOpacity style={modalStyle.container} onPress={() => {
                  navigation.navigate('AddProjectPage')
                  setModalOpen(false)
                  } }>
                  <Image style={{flex: 1,width: 60, height: 50}} source={require('../../assets/main/btn_new_project.png')}/>
                  <View style={{flex: 6.5}}>
                    <Text style={[modalStyle.title, {color: '#404855', fontWeight: '500', top: 15}]}>새 프로젝트 추가</Text>
                  </View>
                </TouchableOpacity>
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
