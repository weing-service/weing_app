import React, { useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import DateCard from './dateCard'

const DateCardContainer = (props) => {

    const mapToComponent = () => {
        return Object.keys(props.data2).map((element) => {
            return (
                <DateCard key = {element} touch = {true} data = {element}
                    selectedDate = {props.selectedDate} setSelectedDate = {props.setSelectedDate}/>
                );
            });
        };

    return (
        <ScrollView
            style = {{marginLeft : 16, marginTop : 30}}
            horizontal = {true}>
            {mapToComponent()}
        </ScrollView>
    )
};

export default DateCardContainer;