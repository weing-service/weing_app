// 공유, 알림, 프로필 버튼을 포함하는 상단바 컴포넌트
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

const TopBar = () => {
  return <View style={{flexDirection: 'row-reverse'}}>
  <TouchableOpacity>
    <Image source={require('../../assets/main/top/btn_profile.png')}/>
  </TouchableOpacity>
    <TouchableOpacity>
      <Image source={require('../../assets/main/top/btn_alert.png')}/>
    </TouchableOpacity>
    <TouchableOpacity>
      <Image source={require('../../assets/main/top/btn_share.png')}/>
    </TouchableOpacity>
  </View>;
};

export default TopBar;