// 결과 시 모달
import React, {useState} from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const TimeTouchView  = (props) => {

    const array = [];
    for (let i=0; i<30;i++){
        array.push(i)
    }

    console.log(props.data3)

    const mapToComponent = () => {
        return array.map((element) => {
            return (
                <TouchableOpacity
                    style = {{backgroundColor : props.data3[props.selectedDate].includes(element) ? '#D2DFCB':'white',
                            marginLeft : 52,borderWidth : 1, borderColor : '#89B6C2', width : 70, height : 24,}}
                    key = {element}
                    onPress = {() => {
                        if (props.data3[props.selectedDate].includes(element)){
                            props.setData({...props.data3, [props.selectedDate] : props.data3[props.selectedDate].filter((x) => x!==element)})
                        } else {
                            props.setData({...props.data3, [props.selectedDate] : [...props.data3[props.selectedDate], element]});
                        }}}/>
            );
        })
    }

    return (
        <View
            style = {{marginTop : 5}}>
            {mapToComponent()}
        </View>
    );
};

export default TimeTouchView ;
