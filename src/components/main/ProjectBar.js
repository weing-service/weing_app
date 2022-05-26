// 프로젝트 이름을 표시할 컴포넌트
import React, { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

// 데이터 예시
const project = {
  name: '도개걸육조',
  deadline: new Date(2022, 5, 30)
};

const ProjectBar = () => {
  const [projectInfo, setProjectInfo] = useState({
    name: '도개걸육조',
    deadline: new Date(2022, 5, 30)
  });

  // 디데이 계산
  const getDDay = () => {
    const today = new Date();
    const dday = new Date(projectInfo.deadline.getFullYear(), projectInfo.deadline.getMonth() - 1, projectInfo.deadline.getDate());
    const gap = dday.getTime() - today.getTime();
    const result = Math.ceil(gap / (1000 * 60 * 60 * 24));
    return result;
  }

  return <View style={styles.container}>
    <Image style={{width: 50, height: 50}} source={require('../../assets/main/project_img.png')}/>
    <View>
      <View style={styles.projectName}>
        <Text style={{fontSize: '18px', fontWeight: 'bold'}}>{projectInfo.name}</Text>
        <Text style={{fontSize: '18px'}}> 프로젝트</Text>
      </View>
      <View style={styles.deadline}>
        <Text style={{color: '#999999', fontSize: '12px', fontWeight: 'bold'}}>D-{getDDay()}</Text>
        <Text style={{color: '#999999', fontSize: '12px'}}> 프로젝트 마감일</Text>
      </View>
    </View>
  </View>;
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
