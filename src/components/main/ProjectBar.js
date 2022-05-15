// 프로젝트 이름을 표시할 컴포넌트
import React, { useState } from "react";
import { View, Text, Image } from "react-native";

// 데이터 예시
const project = {
  name: '도개걸육조의 프로젝트',
  deadline: new Date(2022, 5, 30)
}

const ProjectBar = () => {
  const [projectInfo, setProjectInfo] = useState(project);

  // 디데이 계산
  const getDDay = () => {
    const today = new Date();
    const dday = new Date(projectInfo.deadline.getFullYear(), projectInfo.deadline.getMonth() - 1, projectInfo.deadline.getDate());
    const gap = dday.getTime() - today.getTime();
    const result = Math.ceil(gap / (1000 * 60 * 60 * 24));
    return result;
  }

  return <View style={{flexDirection: 'row'}}>
    <Image source={require('../../assets/main/project_img.png')}/>
    <View>
      <Text>도개걸육조의 프로젝트</Text>
      <View style={{flexDirection: 'row'}}>
        <Text>D-{getDDay()}</Text>
        <Text>프로젝트 마감일</Text>
      </View>
    </View>
  </View>;
};

export default ProjectBar;
