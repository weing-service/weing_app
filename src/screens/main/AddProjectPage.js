// 새 프로젝트 생성 페이지
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Modal, ImageBackground } from "react-native";
import DateModal from "../../components/common/DateModal";
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import MemberModal from "../../components/common/MemberModal";

const API_URL = 'https://7dcd-14-32-12-211.jp.ngrok.io';

const AddProjectPage = () => {
  const navigation = useNavigation();
    // 이미지 등록 미완
  const [coverImg, setCoverImg] = useState("");
  const [profileImg, setProjectImg] = useState("");
  const [title, setTitle] = useState("");
  const [info, setInfo] = useState("");
  const [startDate, setStartDate] = useState();
  const [finishDate, setFinishDate] = useState();
  const [users, setUsers] = useState([]); // 전체 사용자
  const [members, setMembers] = useState([]); // 참여자

  const [dateModal, setDateModal] = useState(false);
  const [memberModal, setMemberModal] = useState(false);
  // 제목 입력되었는지 여부
  const [isTitle, setIsTitle] = useState(false);

  // 전체 사용자 조회 -> users에 저장
  useEffect(() => {
    fetch(`${API_URL}/user/` , {
        method: 'GET',
      }).then(async (res) => {
        const jsonRes = await res.json();
        console.log(jsonRes.allUsers);
        setUsers(jsonRes.allUsers);
      }).catch((error) => {
          console.log(error);
      })
  }, [])

    useEffect(() => {
        setStartDate(startDate);
    }, [startDate]);    
  
  // 프로젝트 생성 버튼 클릭시
  const onPressGenerate = async () => {
    const postData = {
        title: title,
        info: info,
        startDate: startDate,
        finishDate: finishDate,
        coverImg : coverImg,
        profileImg: profileImg,
        users: members
    }
    if(isTitle) {
        fetch(`${API_URL}/project/project`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData)
        }).then(async (res) => {
            const json = await res.json();
            console.log("json: " + json)
        })
    }
    navigation.navigate('MainPage')
  }

  return <View>
    <View style={styles.topView}>
        {/* {coverImg && <ImageBackground source={{uri: coverImg}} resizeMode="cover" style={{width: 100}}>

        </ImageBackground>} */}
    <Text style={{fontSize: 20, textAlign: 'center'}}>새 프로젝트 생성</Text>
    <TouchableOpacity 
        style={{position: 'absolute', right: 20, top: 55}}
        onPress={onPressGenerate}
    >
        <Text style={{fontWeight: 'bold', fontSize: 15,color: 'white'}}>생성</Text>
    </TouchableOpacity>
    <TouchableOpacity
        //onPress={pickImage}
        style={{justifyContent: 'center', alignItems: 'center', top: 60, flexDirection: 'row'}}
    >
        {coverImg? 
            <View>
                <Image source={{ uri: coverImg }}/>
            </View> : <View style={{flexDirection: 'row'}}>
            <Image 
            style={{width: 20, height: 20, marginRight: 10}}
            source={require('../../assets/main/btn_camera_bold.png')}
            />
            <Text style={{color: 'white', fontSize: 18}}>커버 이미지 등록</Text>
          </View>
        }
    </TouchableOpacity>
    <TouchableOpacity
        style={{position: 'absolute', top: 200, left: 150}}
    >
        <Image 
        style={{width: 100, height: 100}}
        source={require('../../assets/main/project_img.png')}/>
        <TouchableOpacity
            style={{left: 70, bottom: 30}}
        >
            <Image 
            style={{width: 30, height: 30}}
            source={require('../../assets/main/btn_camera.png')}
            />
        </TouchableOpacity>
    </TouchableOpacity>
    </View>
    <View>
        <View style={styles.inputView}>
            <Text style={styles.text}>프로젝트 명*</Text>
            <TextInput 
                placeholder="프로젝트 명을 입력해주세요."
                style={styles.input}
                placeholderTextColor={"#999999"}
                value={title}
                onChangeText={text => {
                    setTitle(text)
                    setIsTitle(true)
                }}
            />
        </View>
        <View style={styles.inputView}>
            <Text style={styles.text}>프로젝트 설명</Text>
            <TextInput 
                style={styles.input}
                placeholder="프로젝트 설명을 입력해주세요."
                placeholderTextColor={"#999999"}
                value={info}
                onChangeText={text => setInfo(text)}
            />
        </View>
        <View style={styles.inputView}>
            <Text style={styles.text}>프로젝트 시작일 및 마감일 설정*</Text>
            {finishDate && finishDate.dateString ? <TouchableOpacity onPress={() => setDateModal(true)}>
                <View style={{backgroundColor: 'white', width: 200, height: 50, borderRadius: 10, justifyContent: 'center', alignItems: 'center', margin: 20, marginBottom: 0}}>
                    <Text style={{color: '#999999'}}>
                    {startDate.dateString} ~ {finishDate.dateString}
                    </Text>
                </View>
            </TouchableOpacity>
            : <TouchableOpacity 
                style={{left: 20, top: 20}}
                onPress={() => setDateModal(true)}>
            <Image 
                style={{width: 80, height: 80}}
                source={require('../../assets/main/todo/btn_calendar.png')}/>
            </TouchableOpacity>}
        </View>
        <TouchableOpacity 
            onPress={() => setMemberModal(true)}
            style={{top: 20}}>
            <Text style={styles.text}>참여자</Text>
            <Image 
                style={{width: 48, height: 48, top: 20, left: 20}}
                source={require('../../assets/main/btn_add_grey.png')}
            />
        </TouchableOpacity>
    </View>

    {/* 날짜 선택 모달 */}
    <DateModal  modalInfo={"프로젝트 시작일과 마감일을 설정해주세요"}
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
        paddingTop: 50,
        backgroundColor: "#40485580",
        height: 250,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        marginBottom: 50
    },
    text: {
        fontSize: 15,
        left: 20,
        marginTop: 20
    },
    input: {
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: 10,
        height: 50,
        width: 380,
        left: 20,
        padding: 10
    }
})

export default AddProjectPage;