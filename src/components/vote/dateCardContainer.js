import React, { useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import DateCard from './dateCard'

const DateCardContainer = (props) => {

    const [selectedDate, setSelectedDate] = useState(props.data[0]);

    const mapToComponent = () => {
        return props.data.map((element) => {
            return (
                <DateCard key = {element} touch = {true} data = {element}
                    selectedDate = {selectedDate} setSelectedDate = {setSelectedDate}/>
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