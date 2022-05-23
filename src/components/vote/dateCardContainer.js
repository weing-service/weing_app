import React, { useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import DateCard from './dateCard'

const DateCardContainer = (props) => {

    const [data] = useState(props.data);

    const mapToComponent = () => {
        return data.map((element) => {
            return (
                <DateCard key = {element.index} touch = {true} data = {element}/>
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