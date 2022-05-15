// 일정 이름 input 컴포넌트
import React, { useState } from "react";
import { View, Text, Switch } from "react-native";

const TodoSwitch = () => {
  const [todoActivate, setTodoActive] = useState(true);
  const toggleSwitch = () => setTodoActive(previousState => !previousState);

  return <View>
    <Text>캘린더에 반영</Text>
    <Switch
      onValueChange={toggleSwitch}
      value={todoActivate}
    />
  </View>;
};

export default TodoSwitch;