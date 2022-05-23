// 투표 리스트 네비게이션 바
import React, {useState} from "react";
import { View, Text, TouchableOpacity } from "react-native";
import CircleCheckBox from 'react-native-circle-checkbox';

const RoundCheck = (props) => {


    return (
        <CircleCheckBox
            styleCheckboxContainer = {{marginRight : 16, marginBottom : 3}}
            onToggle={() => {
                if (props.type === 0) {
                props.setChecked(!props.checked), props.setOpen(true)
                } else {
                props.setChecked(!props.checked)}}
                }
            checked = {props.checked}
            outerSize = {22}
            innerSize = {10}
            outerColor = {'#C4C4C4'}
            innerColor = {'#89B6C2'}/>
    );
};

export default RoundCheck;
