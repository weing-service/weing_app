// 공동컴포넌트인 달력을 렌더링할 컨테이너 컴포넌트
import React from "react";
import { View } from "react-native";
import CommonCalendar from "../common/CommonCalendar";

const CalenderContainer = ({project}) => {
  return <View style={{flex: 1}}>
    <CommonCalendar style={{flex: 1}} project={project}/>
  </View>;
};

export default CalenderContainer;
