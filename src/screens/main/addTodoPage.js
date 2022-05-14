// 새 일정 추가 페이지
import React from "react";
import { View } from "react-native";

import TodoName from "../../components/main/addTodo/TodoName";
import TodoContent from "../../components/main/addTodo/TodoContent";
import TodoDate from "../../components/main/addTodo/TodoDate";
import TodoSwitch from "../../components/main/addTodo/TodoSwitch";
import TodoCat from "../../components/main/addTodo/TodoCat";

const addTodoPage = () => {
  return <View style={{flex: 1}}>
      <TodoName  style={{flex: 1}}/>
      <TodoContent  style={{flex: 1}}/>
      <TodoDate  style={{flex: 1}}/>
      <TodoSwitch  style={{flex: 1}}/>
      <TodoCat  style={{flex: 1}}/>
  </View>;
};

export default addTodoPage;