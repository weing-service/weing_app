// 결과 시 모달
import React from "react";
import { StyleSheet, ScrollView, Text, TouchableOpacity } from "react-native";

const DateList  = (props) => {

    const mapToComponent = () => {
            return Object.keys(props.data2).map((element) => {
                return (
                    <TouchableOpacity key = {element} touch = {true} data = {element}
                        selectedDate = {props.selectedDate} setSelectedDate = {props.setSelectedDate}/>
                    );
                });
            };

    return (
        <ScrollView
            style = {{borderRadius : 9, backgroundColor : '#DBDBDB'}}
            horizontal = {true}>


        </ScrollView>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 15,
        color : '#404855',
        textAlign: 'left',
        marginLeft : 16
    },
});

export default DateList ;