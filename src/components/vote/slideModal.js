import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import Modal from 'react-native-modalbox';
import { Agenda, Calendar } from "react-native-calendars";
import moment from 'moment';

const SlideModal = (props) => {

    const getMiddleDays = (startDate, start, end) => {
        const object = {};
        const color = { color : 'rgba(137, 182, 194, 0.1)'}
        for (let i=0; i<end-start-1; i++){
            const day = [moment(startDate).add(i+1, 'days').format('YYYY-MM-DD')];
            object[day] = color;
        }
        return object
    }

    const handleDayPress = (day) => {
        if (props.type === 0) {
            props.setMarkedDates({
            [day.dateString] : {
            color : '#89B6C2'
            }
            })
        } else if (Object.keys(props.markedDates).length===0) {
            props.setMarkedDates({
            [day.dateString]: {
            startingDay: true,color: '#89B6C2'
            }})
        } else if (Object.keys(props.markedDates).length===1) {
            const startDate = parseInt(Object.keys(props.markedDates)[0].substring(8,10));
            const endDate = parseInt(day.dateString.substring(8,10));
            const object = getMiddleDays(Object.keys(props.markedDates)[0], startDate, endDate);
            props.setMarkedDates({
            ...props.markedDates,
            ...object,
            [day.dateString]: {
            endingDay: true,color: '#89B6C2'
            }})
        }
      }

    return (
        <Modal
            style = {{height : 700, width : 360, marginTop: 100,borderTopLeftRadius: 10, borderTopRightRadius: 10}}
            animationType={"slide"}
            transparent={false}
            isOpen={props.open}
            entry = {'bottom'}
            swipeToClose = {true}
            swipeArea = {600}
            swipeThreshold = {0}
            position = {'bottom'}>
            <Image
                style = {{width: 32, height: 4, alignSelf : 'center', marginTop : 19}}
                source={require('../../assets/vote/2.png')}/>
            <Text
                style = {{fontSize : 12,  alignSelf: 'flex-start', marginLeft: 16, marginTop : 12}}>
                투표할 날짜와 시간을 선택해주세요.
            </Text>
            <View
                style = {{alignSelf : 'center', width: '90%', borderWidth : 0.5, borderColor : '#EDEDED', marginTop : 5}}>
            </View>
            <Calendar
                markingType={'period'}
                markedDates={props.markedDates}
                onDayPress = {handleDayPress}/>
            <TouchableOpacity
                style = {{width : 168, height : 38, borderRadius: 10, backgroundColor : '#89B6C2',
                          alignSelf:'center', alignItems: 'center', paddingTop : 7,  marginTop : 38}}
                          onPress={() => props.setOpen(!props.open)}>
                <Text
                    style = {{fontSize : 15, color : 'white'}}>
                    선택완료
                </Text>
            </TouchableOpacity>
        </Modal>
    );
};

export default SlideModal;