import React, { useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import TimeCard from './timeCard'

const TimeCardContainer = (props) => {

    const times = [
        '09:00','09:30', '10:00','10:30',
        '11:00','11:30', '12:00','12:30',
        '13:00','13:30', '14:00','14:30',
        '15:00','15:30', '16:00','16:30',
        '17:00','17:30', '18:00','18:30',
        '19:00','19:30', '20:00','20:30',
        '21:00','21:30', '22:00','22:30',
        '23:00','23:30'];

    const newTime = props.time.sort();
    console.log(newTime)

    const mapToComponent = () => {
        return props.time.sort().map((element) => {
            return (
                <TimeCard key = {element} data = {times[element]}/>
                );
            });
        };

    return (
        <ScrollView
            style = {{marginLeft : 16, marginBottom : 20}}
            horizontal = {true}>
            {mapToComponent()}
        </ScrollView>
    )
};

export default TimeCardContainer;