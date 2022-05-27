// 프로젝트 이름을 표시할 컴포넌트
import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const ProjectBar = ({project, modalOpen, setModalOpen}) => {
  const [projectInfo, setProjectInfo] = useState({
    name: project.title,
    deadline: project.finishDate
  });
  const [dday, setDday] = useState();

  useEffect(() => {
    // 디데이 계산
    const today = new Date();
    const dday = new Date(project.finishDate.year, project.finishDate.month, project.finishDate.date);
    const gap = dday.getTime() - today.getTime();
    const result = Math.ceil(gap / (1000 * 60 * 60 * 24));

    setDday(result)
  }, [projectInfo])

  return <TouchableOpacity 
  onPress={() => setModalOpen(true)}
  style={styles.container}>
    <Image style={{width: 50, height: 50}} source={require('../../assets/main/project_img.png')}/>
    <View>
      <View style={styles.projectName}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>{projectInfo.name}</Text>
        <Text style={{fontSize: 18}}> 프로젝트</Text>
      </View>
      <View style={styles.deadline}>
        <Text style={{color: '#999999', fontSize: 12, fontWeight: 'bold'}}>D-{dday}</Text>
        <Text style={{color: '#999999', fontSize: 12}}> 프로젝트 마감일</Text>
      </View>
    </View>
  </TouchableOpacity>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    left: 20,
    top: 10,
    paddingBottom: 20
  },
  projectName: {
    flexDirection: 'row',
    left: 15,
    top: 5
  },
  deadline: {
    flexDirection: 'row',
    left: 15,
    top: 10
  }
})

export default ProjectBar;
