// 투표 리스트 네비게이션 바
import React, {useState} from "react";
import { View, Text, TouchableOpacity } from "react-native";
import CircleCheckBox from 'react-native-circle-checkbox';

const RoundCheck = (props) => {


    return (
        <CircleCheckBox
            styleCheckboxContainer = {{marginRight : 16, marginBottom : 3}}
            onToggle={() => props.setDoubleChecked(!props.doubleChecked)}
            checked = {props.doubleChecked}
            outerSize = {22}
            innerSize = {10}
            outerColor = {'#C4C4C4'}
            innerColor = {'#89B6C2'}/>
    );
};

export default RoundCheck;
