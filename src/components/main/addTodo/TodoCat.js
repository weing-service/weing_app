// 일정 이름 input 컴포넌트
import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Button, Modal, TextInput, Image, StyleSheet, TouchableHighlight} from "react-native";
import Slider from "react-native-slider";

// 멀티 모달 미완

const TodoCat = ({category, setCategory, color, setColor}) => {
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
  ];  // 색상 목록
  const [categories, setCategories] = useState([
    {id: 1, name: '기획', color: "#FD9F9D33"},
    {id: 2, name: '개발', color: "#F9D83E33"},
    {id: 3, name: '디자인', color: "#A0DDE033"}
  ]); // 카테고리 목록 date
  // multiple modals
  const [modalOpen, setModalOpen] = useState(false);  // 카테고리 추가 모달
  const [pickerOpen, setPickerOpen] = useState(false);  // 색상 선택 모달
  
  const [newName, setNewName] = useState("")  // 새 카테고리 이름
  const [newColor, setNewColor] = useState("#86B0BC"); // 새 카테고리 색상
  
  const modalOpener = (colorSelected) => {
    setColor(colorSelected);
    // 추가모달은 켜고 색상선택모달은 끔
    setModalOpen(true);
    setPickerOpen(false);
  }

  const pickerOpener = () => {
    // 추가모달은 끄고 색상선택모달은 켬
    setPickerOpen(true);
    setModalOpen(false);
  }
  // if category added
  const onPressAdd = () => {
    const newCats = categories.concat([{
      id: categories.length + 1,
      name: newName,
      color: newColor
    }]);
    setCategories(newCats);
    setModalOpen(false);
  }
  // if category selected
  const onPressCat = (item) => {
    setCategory(item.name);
    // 선택된 카테고리 맨앞으로 보내기
    let newCats = categories;
    newCats = newCats.filter((cat) => cat.name === item.name).concat(categories.filter((cat) => cat.name !== item.name));
    setCategories(newCats);
  }

  // 새 카테고리 추가 모달
  const AddModal = () => {
    return (
    <Modal
      animationType={"slide"}
      transparent={true}
      visible={modalOpen}
    >
      <View style={{flex: 1,backgroundColor: "black", opacity: 0.4}}>
      </View>
      <View style={{flex: 2, backgroundColor: 'white'}}>
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
            onChangeText={text => setCategory(text)}
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
            onPress={pickerOpener}
          >
            <Text style={{color: 'white', fontSize: 12, marginRight: 5}}>컬러</Text>
            <Image 
            source={require('../../../assets/main/todo/arrow_bottom.png')}
            style={{width: 7, height: 7}}
            />
          </TouchableOpacity>

        </View>
      </View>
    </Modal>);
  }
  // 새 카테고리 추가 > 컬러 선택 모달
  const ColorPicker = () => {
    return(
      <Modal
        animationType={"slide"}
        transparent={true}
        visible={pickerOpen}
      >
        <View style={{flex: 3, backgroundColor: "black", opacity: 0.4}}>
        </View>
        <View style={{flex: 1.5, backgroundColor: 'white'}}>
          <View style={pickerStyle.container}>
          <View style={pickerStyle.row}>
            <TouchableOpacity
              style={pickerStyle.color}
              onPress={() => modalOpener("#DFDD6C")}
            >
              <Image source={require("../../../assets/main/cat-colors/DFDD6C.png")} />
            </TouchableOpacity>
            <TouchableOpacity
              style={pickerStyle.color}
              onPress={() => modalOpener("#F8D941")}
            >
              <Image source={require("../../../assets/main/cat-colors/F8D941.png")} />
            </TouchableOpacity>
            <TouchableOpacity
              style={pickerStyle.color}
              onPress={() => modalOpener("#FDC453")}
            >
              <Image source={require("../../../assets/main/cat-colors/FDC453.png")} />
            </TouchableOpacity>
            <TouchableOpacity
              style={pickerStyle.color}
              onPress={() => modalOpener("#FE8D6F")}
            >
              <Image source={require("../../../assets/main/cat-colors/FE8D6F.png")} />
            </TouchableOpacity>
          </View>
          <View style={pickerStyle.row}>
            <TouchableOpacity
              style={pickerStyle.color}
              onPress={() => modalOpener("#A0DDE0")}
            >
              <Image source={require("../../../assets/main/cat-colors/A0DDE0.png")} />
            </TouchableOpacity>
            <TouchableOpacity
              style={pickerStyle.color}
              onPress={() => modalOpener("#CBD6C8")}
            >
              <Image source={require("../../../assets/main/cat-colors/CBD6C8.png")} />
            </TouchableOpacity>
            <TouchableOpacity
              style={pickerStyle.color}
              onPress={() => modalOpener("#F886A8")}
            >
              <Image source={require("../../../assets/main/cat-colors/F886A8.png")} />
            </TouchableOpacity>
            <TouchableOpacity
              style={pickerStyle.color}
              onPress={() => modalOpener("#FE7748")}
            >
              <Image source={require("../../../assets/main/cat-colors/FE7748.png")} />
            </TouchableOpacity>
          </View>
          <View style={pickerStyle.row}>
            <TouchableOpacity
              style={pickerStyle.color}
              onPress={() => modalOpener("#89B6C2")}
            >
              <Image source={require("../../../assets/main/cat-colors/89B6C2.png")} />
            </TouchableOpacity>
            <TouchableOpacity
              style={pickerStyle.color}
              onPress={() => modalOpener("#9ADBC5")}
            >
              <Image source={require("../../../assets/main/cat-colors/9ADBC5.png")} />
            </TouchableOpacity>
            <TouchableOpacity
              style={pickerStyle.color}
              onPress={() => modalOpener("#FD9F9D")}
            >
              <Image source={require("../../../assets/main/cat-colors/FD9F9D.png")} />
            </TouchableOpacity>
            <TouchableOpacity
              style={pickerStyle.color}
              onPress={() => modalOpener("#FF4141")}
            >
              <Image source={require("../../../assets/main/cat-colors/FF4141.png")} />
            </TouchableOpacity>
          </View>

          </View>
        </View>
      </Modal>
    );
  }

  // 카테고리
  const Item = ({item, onPress, style}) => {
      return (<TouchableOpacity 
        style = {[catStyles.item, style]}
        onPress={onPress}>
        <Text style={catStyles.name}>{item.name}</Text>
      </TouchableOpacity>);
  }

  const renderItem = ({item}) => {
    const backgroundColor = item.name === category?
      item.color.slice(0, 7) : item.color;

    return (
      <Item 
        item={item}
        onPress={() => onPressCat(item)}
        style={{backgroundColor}}
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
        onPress={() => setModalOpen(true)}
        >
          + 새 카테고리 추가
        </Text>
      </TouchableOpacity>
    </View>
    
    {modalOpen && <AddModal/>}
    {pickerOpen && <ColorPicker/>}
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
    width: 80,
    height: 35,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5
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

const pickerStyle = StyleSheet.create({
  container: {
    flex: 1, 
    top: 20,
    marginBottom: 80,
    justifyContent: 'center',
    alignItems: 'center'
  },
  row: {
    flex: 1, 
    flexDirection: 'row',
  },
  color: {
    margin: 10,
  }
})

export default TodoCat;