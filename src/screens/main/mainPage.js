// 메인페이지 모든 컴포넌트를 렌더링할 화면
import React from "react";
import { View } from "react-native";
import TopBar from "../../components/main/TopBar";
import ProjectBar from "../../components/main/ProjectBar";
import CalenderContainer from "../../components/main/CalendarContainer";
import AddBtn from "../../components/main/AddBtn";

const MainPage = () => {
  return <View style={{ flex: 1, marginTop: 40}}>
    <TopBar style={{flex: 1}}/>
    <ProjectBar style={{flex: 1}}/>
    <CalenderContainer style={{flex: 3}}/>
    <AddBtn style={{flex: 1}}/>
  </View>;
};

export default MainPage;
