// 공유 버튼 포함하는 컴포넌트
import React from "react";
import { Button, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const AddBtn = () => {
  return <View style={{position: 'absolute', right: 20, bottom: 100}}>
    <TouchableOpacity 
      style={{ alignItems:"flex-end" }}
      onPress={() => {
        // 새일정 추가로 이동
      }}
    >
      <Image source={require('../../assets/main/btn_add.png')}/>
    </TouchableOpacity>
  </View>;
};

export default AddBtn;