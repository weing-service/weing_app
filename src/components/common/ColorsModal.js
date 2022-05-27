import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, TextInput, Image, StyleSheet} from "react-native";
import Modal from "react-native-modalbox";

// 새 카테고리 추가 > 컬러 선택 모달
const ColorsModal = ({newColor, setNewColor, onPressAdd, colorsModal, setColorsModal, modalOpener, pickerOpener}) => {
return(
    <Modal
    style = {{height : 600, width : '100%',marginTop: 300,borderTopLeftRadius: 10, borderTopRightRadius: 10}}
    animationType={"slide"}
    transparent={false}
    isOpen={colorsModal}
    entry = {'bottom'}
    swipeToClose = {true}
    swipeArea = {600}
    swipeThreshold = {0}
    position = {'bottom'}>
    <View style={{flex: 1.5, backgroundColor: 'white',borderTopLeftRadius: 10, borderTopRightRadius: 10}}>
        <View style={pickerStyle.container}>
        <View style={pickerStyle.row}>
        <TouchableOpacity
            style={pickerStyle.color}
            onPress={() => {
                setNewColor("#DFDD6C")
                setColorsModal(false)
        }}
        >
            <Image source={require("../../assets/main/cat-colors/DFDD6C.png")} />
        </TouchableOpacity>
        <TouchableOpacity
            style={pickerStyle.color}
            onPress={() => {
                setNewColor("#F8D941")
                setColorsModal(false)
        }}
        >
            <Image source={require("../../assets/main/cat-colors/F8D941.png")} />
        </TouchableOpacity>
        <TouchableOpacity
            style={pickerStyle.color}
            onPress={() => {
                setNewColor("#FDC453")
                setColorsModal(false)
        }}
        >
            <Image source={require("../../assets/main/cat-colors/FDC453.png")} />
        </TouchableOpacity>
        <TouchableOpacity
            style={pickerStyle.color}
            onPress={() => {
                setNewColor("#FE8D6F")
                setColorsModal(false)
        }}
        >
            <Image source={require("../../assets/main/cat-colors/FE8D6F.png")} />
        </TouchableOpacity>
        </View>
        <View style={pickerStyle.row}>
        <TouchableOpacity
            style={pickerStyle.color}
            onPress={() => {
                setNewColor("#A0DDE0")
                setColorsModal(false)
        }}
        >
            <Image source={require("../../assets/main/cat-colors/A0DDE0.png")} />
        </TouchableOpacity>
        <TouchableOpacity
            style={pickerStyle.color}
            onPress={() => {
                setNewColor("#CBD6C8")
                setColorsModal(false)
        }}
        >
            <Image source={require("../../assets/main/cat-colors/CBD6C8.png")} />
        </TouchableOpacity>
        <TouchableOpacity
            style={pickerStyle.color}
            onPress={() => {
                setNewColor("#F886A8")
                setColorsModal(false)
        }}
        >
            <Image source={require("../../assets/main/cat-colors/F886A8.png")} />
        </TouchableOpacity>
        <TouchableOpacity
            style={pickerStyle.color}
            onPress={() => {
                setNewColor("#FE7748")
                setColorsModal(false)
        }}
        >
            <Image source={require("../../assets/main/cat-colors/FE7748.png")} />
        </TouchableOpacity>
        </View>
        <View style={pickerStyle.row}>
        <TouchableOpacity
            style={pickerStyle.color}
            onPress={() => {
                setNewColor("#89B6C2")
                setColorsModal(false)
        }}
        >
            <Image source={require("../../assets/main/cat-colors/89B6C2.png")} />
        </TouchableOpacity>
        <TouchableOpacity
            style={pickerStyle.color}
            onPress={() => {
                setNewColor("#9ADBC5")
                setColorsModal(false)
        }}
        >
            <Image source={require("../../assets/main/cat-colors/9ADBC5.png")} />
        </TouchableOpacity>
        <TouchableOpacity
            style={pickerStyle.color}
            onPress={() => {
                setNewColor("#FD9F9D")
                setColorsModal(false)
        }}
        >
            <Image source={require("../../assets/main/cat-colors/FD9F9D.png")} />
        </TouchableOpacity>
        <TouchableOpacity
            style={pickerStyle.color}
            onPress={() => {
                setNewColor("#FF4141")
                setColorsModal(false)
        }}
        >
            <Image source={require("../../assets/main/cat-colors/FF4141.png")} />
        </TouchableOpacity>
        </View>

        </View>
    </View>
    </Modal>
);
}

const pickerStyle = StyleSheet.create({
    container: {
      flex: 1, 
      top: 20,
      marginBottom:300,
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 20
    },
    row: {
      flex: 1, 
      flexDirection: 'row',
    },
    color: {
        right: 10,
        marginHorizontal: 20,
        width: 40,
        height: 40
    }
  })

export default ColorsModal;