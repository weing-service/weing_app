import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, TextInput, Image, StyleSheet} from "react-native";
import Slider from "react-native-slider";
import Modal from "react-native-modalbox";

// 새 카테고리 추가 모달
const CategoryModal = ({newColor, newName, setNewName, onPressAdd, catModal, setCatModal, setColorsModal, pickerOpener, modalOpener}) => {
    return (
      <Modal
      style = {{height : 500, width : '100%',borderTopLeftRadius: 10, borderTopRightRadius: 10}}
      animationType={"slide"}
      transparent={false}
      isOpen={catModal}
      entry = {'bottom'}
      swipeToClose = {true}
      swipeArea = {600}
      swipeThreshold = {0}
      position = {'bottom'}>
      <View style={{flex: 2, backgroundColor: 'white',borderTopLeftRadius: 10, borderTopRightRadius: 10}}>
        <View style={modalStyle.topView}>
          <Text style={modalStyle.title}>새 카테고리 추가</Text>
          <TouchableOpacity 
            style={modalStyle.add}
            onPress={onPressAdd}
          >
            <Text style={{opacity: 0.4}}>
              추가
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{flex: 1, top: 50, left: 20, right: 20}}>
          <Text style={modalStyle.text}>카테고리 이름</Text>
          <TextInput
            defaultValue={newName}
            style={modalStyle.input}
            placeholder="카테고리 이름을 입력해주세요."
            placeholderTextColor={"#999999"}
            value={newName}
            onChangeText={text => setNewName(text)}
          />

          <TouchableOpacity
            style={{
              backgroundColor: newColor, 
              borderRadius: 20,
              marginTop: 10,
              width: 60,
              height: 22,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center'
            }}
            onPress={() => {
                setColorsModal(true);
            }}
          >
            <Text style={{color: 'white', fontSize: 12, marginRight: 5}}>컬러</Text>
            <Image 
            source={require('../../assets/main/todo/arrow_bottom.png')}
            style={{width: 7, height: 7}}
            />
          </TouchableOpacity>

        </View>
      </View>
    </Modal>);
  }

  const modalStyle = StyleSheet.create({
    topView: {
      top: 30,
    },
    title: {
      textAlign: 'center',
      fontSize: 16,
      fontWeight: 'bold'
    },
    add : {
      position: 'absolute', 
      right: 20,
      fontSize: 15
    },
    text: {
      fontSize: 15,
    },
    input: {
        backgroundColor: '#F1F1F5',
        borderRadius: 10,
        marginTop: 10,
        height: 50,
        width: 380,
        padding: 10,
    }
  })

  export default CategoryModal;