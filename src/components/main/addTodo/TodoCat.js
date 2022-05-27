// 일정 이름 input 컴포넌트
import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, TextInput, Image, StyleSheet} from "react-native";
import Slider from "react-native-slider";

const TodoCat = ({
  categories, setCategories, 
  category, setCategory,
  color, setColor,
  catModal, setCatModal,
  colorsModal, setColorsModal,
  newName, setNewName,
  newColor, setNewColor,
  pickerOpener, modalOpener,
  onPressAdd, onPressCat}) => {
  const colors = [
    {
      id: 1,
      src: "../../../assets/main/cat-colors/DFDD6C.png"
    },
    {
      id: 2,
      src: "../../../assets/main/cat-colors/F8D941.png"
    },
    {
      id: 3,
      src: "../../../assets/main/cat-colors/FDC453.png"
    },
    {
      id: 4,
      src: "../../../assets/main/cat-colors/FE8D6F.png"
    },
    {
      id: 5,
      src: "../../../assets/main/cat-colors/A0DDE0.png"
    },
    {
      id: 6,
      src: "../../../assets/main/cat-colors/CBD6C8.png"
    },
    {
      id: 7,
      src: "../../../assets/main/cat-colors/F886A8.png"
    },
    {
      id: 8,
      src: "../../../assets/main/cat-colors/FE7748.png"
    },
    {
      id: 9,
      src: "../../../assets/main/cat-colors/89B6C2.png"
    },
    {
      id: 10,
      src: "../../../assets/main/cat-colors/9ADBC5.png"
    },
    {
      id: 11,
      src: "../../../assets/main/cat-colors/FD9F9D.png"
    },
    {
      id: 12,
      src: "../../../assets/main/cat-colors/FF4141.png"
    }
  ];  // 색상 목록리 목록 date

  // 카테고리
  const Item = ({item, onPress, style}) => {
      return (<TouchableOpacity 
        style = {[catStyles.item, style]}
        onPress={onPress}>
        <Slider 
        style={{width: 0, marginRight: 20}} 
        thumbStyle={
          {
            width: 10,
            height: 10,
            backgroundColor: '#FFFFFF',
            borderColor: item.color.slice(0, 7),
            borderWidth: 3,
          }}
        />
        <Text style={catStyles.name}>{item.name}</Text>
      </TouchableOpacity>);
  }

  const renderItem = ({item}) => {
    const style = item.name === category?
    {
      height: 15,
      borderRadius: 10,
      backgroundColor: item.color,
      borderWidth: 0.2,
      borderColor: 'white',
      shadowColor: 'black',
      overflow: 'hidden',
      shadowOffset: {width: 2, height: 3},
      shadowRadius: 2,
      shadowOpacity: 0.2,
      borderRadius: 10,
      top: 20,
      height: 35,
      padding: 10,
      paddingHorizontal: 20,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 5,
      flexDirection: 'row',
    } : {
      backgroundColor: item.color
    };

    return (
      <Item 
        item={item}
        onPress={() => onPressCat(item)}
        style={style}
      />
    );
  };

  return <View>
    <Text style={styles.text}>카테고리 설정</Text>
    <View style={styles.constainer}>
      <View style={styles.catView}>
        <FlatList
          horizontal
          data={categories}
          style={styles.cats}
          renderItem = {renderItem}
          keyExtractor={item => item.id}
          extraData={category}
        />
      </View>
      <TouchableOpacity>
        <Text
        style={styles.button}
        onPress={() => setCatModal(true)}
        >
          + 새 카테고리 추가
        </Text>
      </TouchableOpacity>
    </View>
  </View>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    left: 20,
    top: 20,
    marginBottom: 20
  },
  constainer: {
    left: 20,
    top: 20,
    alignItems: 'flex-start',
    borderRadius: 10,
    backgroundColor: 'white',
    height: 120,
  },
  catView: {
    width: '100%',
    height: '60%',
    left: 20
  },
  button: {
    color: '#89B6C2',
    height: '40%',
    top: 10,
    bottom: 10,
    fontSize: 15,
    left: 20
  },
});

const catStyles = StyleSheet.create({
  item: {
    borderRadius: 10,
    top: 20,
    height: 35,
    padding: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    flexDirection: 'row',
  },
  name: {
  },
  thumb: {
    flex: 1,
    width: 10,
    height: 10,
    backgroundColor: '#FFFFFF',
    borderColor: '#FD9F9D',
    borderWidth: 3,
  },
});

export default TodoCat;