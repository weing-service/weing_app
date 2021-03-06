// 공유, 알림, 프로필 버튼을 포함하는 상단바 컴포넌트
import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";

const TopBar = () => {
  return <View style={styles.view}>
  <TouchableOpacity style={styles.container}>
    <Image style={styles.image}
    source={require('../../assets/main/top/btn_profile.png')}/>
  </TouchableOpacity>
    <TouchableOpacity style={styles.container}>
      <Image style={{
        width: 18,
        height: 23,
        marginRight: 20
      }}
      source={require('../../assets/main/top/btn_alert.png')}/>
    </TouchableOpacity>
    <TouchableOpacity style={styles.container}>
      <Image style={styles.image}
      source={require('../../assets/main/top/btn_share.png')}/>
    </TouchableOpacity>
  </View>;
};

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row-reverse',
    height: 25
  },
  container: {
    top: 10
  },
  image: {
    width: 21,
    height: 22,
    marginRight: 20
  }
})

export default TopBar;