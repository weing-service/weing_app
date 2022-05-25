import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Card } from 'react-native-elements';

const DateCard = (props) => {

    const getDate = (date) => {
        const week = ['일', '월', '화', '수', '목', '금', '토'];
        const day = week[new Date(date).getDay()];
        return day
    }

    return (
            <TouchableOpacity
                onPress = {() => props.setSelectedDate(props.data)}
                style = {{
                    backgroundColor :  props.selectedDate === props.data  ? '#89B6C2' : '#F1F1F5',
                    width : 56, height : 80 , marginRight: 8, borderRadius: 10
                }}>
                <View
                    style = {{alignItems : 'center', marginTop : 6}}>
                    <Text
                        style = {{fontSize : 12,color :  props.selectedDate === props.data  ? 'white' : '#999999'}}>
                        {props.data.substring(5,6) === '0' ? props.data.substring(6,7)+"월" : props.data.substring(5,7)+"월"}
                    </Text>
                </View>
                <View
                    style = {{alignItems : 'center'}}>
                    <Text
                        style = {{fontSize : 25, color :  props.selectedDate === props.data  ? 'white' : '#999999'}}>
                        {props.data.substring(8,9) === '0' ? props.data.substring(8,9) : props.data.substring(8,10)}
                    </Text>
                </View>
                <View
                    style = {{alignItems : 'center'}}>
                    <Text
                        style = {{fontSize : 12, color : props.selectedDate === props.data  ? 'white' : '#999999'}}>
                        {getDate(props.data)}
                    </Text>
                </View>
            </TouchableOpacity>
    )
};

export default DateCard;