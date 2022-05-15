// 일정 이름 input 컴포넌트
import React from "react";
import { View, Text, Button } from "react-native";

const TodoDate = ({pickerOpener}) => {
  return <View>
    <Text>날짜 및 시간 설정*</Text>
    <Button
      title="Open Bottom Sheet"
      onPress={pickerOpener}
    />
  </View>;
};

export default TodoDate;