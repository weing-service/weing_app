// 일정 이름 input 컴포넌트
import React, { useState } from "react";
import { View, Text, Switch, StyleSheet } from "react-native";

const TodoSwitch = ({intoCal, setIntoCal}) => {
  const toggleSwitch = () => {
    setIntoCal(!intoCal);
  };

  return <View style={styles.container}>
    <Text style={styles.text}>캘린더에 반영</Text>
    <Switch
      style={styles.switch}
      onValueChange={toggleSwitch}
      value={intoCal}
      thumbColor={"#FFFFFF"}
      trackColor={{false: "#FFFFFF", true: "#89B6C2"}}
    />
  </View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  text: {
      fontSize: 15,
      left: 20,
      marginTop: 40,
      flex: 3
  },
  switch: {
    marginTop: 40,
    flex: 1,
    left: 20,
  }
})

export default TodoSwitch;