// 공동컴포넌트인 달력을 렌더링할 컨테이너 컴포넌트
import React from "react";
import { View } from "react-native";
import CommonCalendar from "../common/CommonCalendar";

const CalenderContainer = () => {
  return <View>
    <CommonCalendar/>
  </View>;
};

export default CalenderContainer;
