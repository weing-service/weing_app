import React, {useState} from "react";
import { View, Text, TouchableOpacity } from "react-native";
import RoundCheckbox from 'rn-round-checkbox';

const LoginCheck = (props) => {

    const [checked, setChecked] = useState(false);
    return (
        <View
            style = {{flexDirection : 'row', marginTop : 13}}>
        <TouchableOpacity
            onPress={() => setChecked(!checked)}>
            <RoundCheckbox
              size={16}
              iconColor = {'white'}
              checked = {checked}
              backgroundColor = {'#404855'}
              borderColor = {'white'}/>
        </TouchableOpacity>
        <Text
            style = {{marginLeft : 10, fontSize: 13, color : 'white'}}>
            {props.state === 0 ? '자동로그인' : '아이디 저장'}
        </Text>
        </View>
    )
};

export default LoginCheck;