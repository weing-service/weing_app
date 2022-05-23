// 결과 시 모달
import React, {useState} from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const TimeTouchView  = (props) => {

    const newData = [...props.data, ...props.data];
    newData.pop();
    newData.pop();
    console.log(newData.length)

    const mapToComponent = () => {
        return newData.map((element) => {
            return (
                <TouchableOpacity
                    style = {{width : 70, height : 24, marginLeft : 52, backgroundColor : 'white', borderWidth : 1, borderColor : '#89B6C2'}}
                    key = {element.index}/>
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
