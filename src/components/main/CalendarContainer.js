// 공동컴포넌트인 달력을 렌더링할 컨테이너 컴포넌트
import React from "react";
import { View } from "react-native";
import CommonCalendar from "../common/commonCalendar";

const CalenderContainer = () => {
  return <View style={{flex: 1}}>
    <CommonCalendar style={{flex: 1}}/>
  </View>;
};

export default CalenderContainer;
