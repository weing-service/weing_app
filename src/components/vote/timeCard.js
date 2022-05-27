import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Card } from 'react-native-elements';

const TimeCard = (props) => {

    const getDate = (date) => {
        const week = ['일', '월', '화', '수', '목', '금', '토'];
        const day = week[new Date(date).getDay()];
        return day
    }

    return (
            <TouchableOpacity
                disabled = {true}
                style = {{
                    backgroundColor :  'rgba(137, 182, 194, 0.1)',
                    width : 88, height : 26 , marginRight: 8, borderRadius: 10
                }}>
                <Text>
                    {props.data}
                </Text>
            </TouchableOpacity>
    )
};

export default TimeCard;