// 일정 이름 input 컴포넌트
import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Button, Modal, TextInput} from "react-native";

// 멀티 모달 미완

const TodoCat = () => {
  const [categories, setCategories] = useState(); // 카테고리 목록 date
  const [category, setCategory] = useState(); // 선택 된 카테고리 
  const [newCat, setNewCat] = useState({
    name: null,
    color: null
  });
  // multiple modals
  const [modalOpen, setModalOpen] = useState(false);
  const [pickerOpen, setPickerOpen] = useState(false);

  useEffect(() => {
    setCategories([
      {id: 1, title: '기획'},
      {id: 2, title: '개발'},
      {id: 3, title: '디자인'},
    ])
  }, []);
  
  const modalOpener = () => {
    setModalOpen(!modalOpen);
  }

  const pickerOpener = () => {
    setPickerOpen(!pickerOpen);
  }

  // if category selected
  const onPressCat = (item) => {
    setCategory(item);
  }

  // 새 카테고리 추가 모달
  const AddModal = () => {
    return (
    <Modal
      animationType={"slide"}
      transparent={true}
      visible={modalOpen}
      onRequestClose={modalOpener}
    >
      <View style={{flex:1, marginTop: 300}}>
        <View>
          <Text style={{textAlign: 'center'}}>새 카테고리 추가</Text>
          <TouchableOpacity 
            style={{position: 'absolute', right: 20}}
            onPress={modalOpener}
          >
            <Text style={{opacity: 0.4}}>추가</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text>카테고리 이름</Text>
          <TextInput
            placeholder="카테고리 이름을 입력해주세요."
            value={newCat}
          />
          <TouchableOpacity
            onPress={modalOpener && pickerOpener}
          >
            <Text>컬러</Text>
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
        onRequestClose={pickerOpener}
      >
        <View style={{flex:1, marginTop: 800, backgroundColor:'#191919', opacity: 0.4}}>
          <Text>Color Picker</Text>
        </View>
      </Modal>
    );
  }

  return <View>
    <Text>카테고리 설정</Text>
    <FlatList
      horizontal
      data={categories}
      renderItem = {({item}) =>
        <View style = {{padding: 10}}>
          <TouchableOpacity 
            style = {{ borderWidth: 1, borderColor: '#626262'}}
            onPress={onPressCat}>
            <Text>{item.title}</Text>
          </TouchableOpacity>
        </View>
      }
    />
    <Button
      title="+ 새 카테고리 추가"
      onPress={modalOpener}
    /> 
    
    <AddModal/>
    <ColorPicker/>
  </View>;
};

export default TodoCat;