// 메인페이지 모든 컴포넌트를 렌더링할 화면
import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import TopBar from "../../components/main/TopBar";
import ProjectBar from "../../components/main/ProjectBar";
import CalenderContainer from "../../components/main/CalendarContainer";
import AddBtn from "../../components/main/AddBtn";
import BottomNavigator from "../../components/common/bottomNavigator";

const MainPage = () => {
  return <View style={{ flex: 1}}>
    <View style={styles.topView}>
      <TopBar/>
      <ProjectBar/>
    </View>
    <CalenderContainer style={{flex: 3}}/>
    <AddBtn style={{flex: 1}}/>
    <View style = {styles.fixed2}>
      <BottomNavigator type = {1}/>
    </View>
  </View>;
};

const styles = StyleSheet.create({
  topView: {
    backgroundColor: 'white',
    paddingTop: 40
  },
  fixed2: {
    position: 'absolute',
    top : Dimensions.get('window').height - 100,
    width : '100%'
  },
})

export default MainPage;
