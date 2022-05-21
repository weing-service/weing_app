import React, { useState } from 'react'
import { View, Text } from 'react-native'
import Modal from 'react-native-modalbox';
import { Agenda, Calendar } from "react-native-calendars";
import DateTimePicker from '@react-native-community/datetimepicker';

const SlideModal = (props) => {

    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('time');
    const [show, setShow] = useState(false);

    return (
        <Modal
            style = {{height : '100%', width : 360, marginTop: 50,borderTopLeftRadius: 10, borderTopRightRadius: 10}}
            animationType={"slide"}
            transparent={false}
            isOpen={props.open}
            entry = {'bottom'}
            swipeToClose = {true}
            swipeArea = {500}
            swipeThreshold = {0}
            position = {'bottom'}>
            <Calendar />
        </Modal>
    );
};

export default SlideModal;