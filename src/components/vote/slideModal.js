import React, { useState } from 'react'
import { View, Text } from 'react-native'
import DatePicker from 'react-native-date-picker'
import Modal from 'react-native-modalbox';

const SlideModal = (props) => {

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
        </Modal>
    );
};

export default SlideModal;