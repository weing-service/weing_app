import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import RoundCheckbox from 'rn-round-checkbox';

const LoginCheck = (props) => {
    return (
        <View
            style = {{flexDirection : 'row', marginTop : 13}}>
        <RoundCheckbox
          size={16}
          iconColor = {'white'}
          backgroundColor = {'#404855'}
          borderColor = {'white'}/>
        <Text
            style = {{marginLeft : 10, fontSize: 13, color : 'white'}}>
            {props.state === 0 ? '자동로그인' : '아이디 저장'}
        </Text>
        </View>
    )
};

export default LoginCheck;