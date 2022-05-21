// 새 프로젝트 생성 페이지
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Modal } from "react-native";

const AddProjectPage = () => {
  const [coverImg, setCoverImg] = useState("");
  const [projectImg, setProjectImg] = useState("");
  const [title, setTitle] = useState("");
  const [info, setInfo] = useState("");
  const [startDate, setStartDate] = useState("");
  const [finishDate, setFinishDate] = useState("");

  useEffect(() => {
    setStartDate(new Date());
    setFinishDate(new Date());
  }, [])

  return <View>
      <View style={styles.topView}>
        <Text>새 프로젝트 생성</Text>
        <TouchableOpacity>
            <Text>커버 이미지 등록</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Image source={require('../../assets/main/project_img.png')}/>
        </TouchableOpacity>
      </View>
      <View>
          <View>
              <Text>프로젝트 명*</Text>
              <TextInput placeholder="프로젝트 명을 입력해주세요."/>
          </View>
          <View>
              <Text>프로젝트 설명</Text>
              <TextInput placeholder="프로젝트 설명을 입력해주세요."/>
          </View>
          <View>
              <Text>프로젝트 시작일 및 마감일 설정*</Text>
              <TouchableOpacity>
                <Image source={require('../../assets/main/todo/btn_calendar.png')}/>
              </TouchableOpacity>
          </View>
      </View>
  </View>;
};

const styles = StyleSheet.create({
    topView: {
        backgroundColor: "#89B6C280",
        height: 250,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20
    }
})

export default AddProjectPage;