// 일정 설명 input 컴포넌트
import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";

const TodoContent = () => {
  const [todoContent, setTodoContent] = useState("");

  return <View>
    <Text>일정 설명</Text>
    <TextInput
      placeholder="일정 설명을 입력해주세요."
      value={todoContent}
    />
  </View>;
};

export default TodoContent;