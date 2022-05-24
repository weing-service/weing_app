// 일정 설명 input 컴포넌트
import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const TodoContent = ({info, setInfo}) => {
  return <View >
    <Text style={styles.text}>일정 설명</Text>
    <TextInput 
        placeholder="일정 설명을 입력해주세요."
        style={styles.input}
        placeholderTextColor={"#999999"}
        value={info}
        onChange={value => setInfo(value)}
    />
  </View>;
};

const styles = StyleSheet.create({
  text: {
      fontSize: 15,
      left: 20,
      marginTop: 20
  },
  input: {
      backgroundColor: 'white',
      borderRadius: 10,
      marginTop: 10,
      height: 50,
      width: 380,
      left: 20,
      padding: 10
  }
})

export default TodoContent;