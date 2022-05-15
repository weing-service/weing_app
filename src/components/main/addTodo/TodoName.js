// 일정 이름 input 컴포넌트
import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";

const TodoName = () => {
  const [todoName, setTodoName] = useState("");
  return <View>
    <Text>일정 이름*</Text>
    <TextInput 
      placeholder="일정 이름을 입력해주세요."
      value={todoName}
    />
  </View>;
};

export default TodoName;