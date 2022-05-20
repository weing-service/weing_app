// 결과 시 모달
import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Modal, Text } from "react-native";

const ModalResult  = (props) => {

    return (
            <View>
            <Modal
            animationType="slide"
            transparent={true}
            visible={props.modalVisible}>
            <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Text style={styles.modalText}>투표 결과</Text>
                <Text style={styles.resultText}>일정 이름</Text>
                <TouchableOpacity
                    style={styles.button1}>
                    <Text style={styles.textStyle1}>{props.data.title}</Text>
                </TouchableOpacity>
                <Text style={styles.resultText}>일정 설명</Text>
                <TouchableOpacity
                    style={styles.button1}>
                    <Text style={styles.textStyle1}>{props.data.title}</Text>
                </TouchableOpacity>
                <Text style={styles.resultText}>날짜/시간 투표 결과</Text>
                <TouchableOpacity
                    style={styles.button2}>
                    <Text style={styles.textStyle2}>{props.data.deadline.toLocaleDateString('en-Us')}</Text>
                </TouchableOpacity>
                <Text style={styles.resultText}>장소 투표 결과</Text>
                <TouchableOpacity
                    style={styles.button1}>
                    <Text style={styles.textStyle1}>{props.data.title}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={styles.button}
                onPress={() => props.setModalVisible(!props.modalVisible)}>
                    <Text style={styles.textStyle}>캘린더에 연동하기</Text>
                </TouchableOpacity>
            </View>
            </View>
            </Modal>
            </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor : 'rgba(25, 25, 25, 0.1)'
    },
    modalView: {
        margin: 15,
        height : 528,
        width : 328,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
        borderColor : 'gray'
    },
    button: {
        borderRadius: 15,
        padding: 10,
        backgroundColor : '#89B6C2',
        width : 189,
        height : 46
    },
    button1: {
        borderRadius: 15,
        padding: 10,
        backgroundColor : 'rgba(137, 182, 194, 0.1)',
        borderColor : 'rgba(137, 182, 194, 0.5)',
        borderWidth : 1,
        width : 296,
        height : 48,
        marginBottom : 25
    },
    button2: {
        borderRadius: 10,
        padding : 3,
        backgroundColor : 'rgba(137, 182, 194, 0.1)',
        borderColor : 'rgba(137, 182, 194, 0.5)',
        borderWidth : 1,
        width : 169,
        height : 26,
        alignSelf : 'flex-start',
        marginBottom : 25
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 15
    },
    textStyle1: {
        color: '#89B6C2',
        textAlign: 'left',
        fontSize : 15
    },
    textStyle2: {
        color: '#89B6C2',
        textAlign: 'left',
        justifyContent : 'center',
        fontSize: 12
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontWeight : 'bold',
        fontSize : 22
    },
    resultText: {
        marginBottom : 13,
        alignSelf : 'flex-start',
        fontSize : 16
    }
});

export default ModalResult;
