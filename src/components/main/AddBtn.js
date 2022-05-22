// 공유 버튼 포함하는 컴포넌트
import React from "react";
import { Button, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

const AddBtn = () => {
  const navigation = useNavigation();
  
  return <View style={{position: 'absolute', right: 20, bottom: 100}}>
    <TouchableOpacity 
      style={{ alignItems:"flex-end" }}
      onPress={() => {
        // 새일정 추가로 이동
        navigation.navigate('AddTodoPage')
      }}
    >
      <Image source={require('../../assets/main/btn_add.png')}/>
    </TouchableOpacity>
  </View>;
};

export default AddBtn;