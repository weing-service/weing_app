// 일정 이름 input 컴포넌트
import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Button, Modal, TextInput, Image} from "react-native";

// 멀티 모달 미완

const TodoCat = () => {
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
    {name: '기획', color: colors[0]},
    {name: '개발', color: colors[0]},
    {name: '디자인', color: colors[0]}
  ]); // 카테고리 목록 date
  const [category, setCategory] = useState({
     // 선택 된 카테고리 
    name: null,
    color: null,
  });
  // multiple modals
  const [modalOpen, setModalOpen] = useState(false);  // 카테고리 추가 모달
  const [pickerOpen, setPickerOpen] = useState(false);  // 색상 선택 모달
  
  const [newName, setNewName] = useState("")  // 새 카테고리 이름
  const [newColor, setNewColor] = useState("#86B0BC"); // 새 카테고리 색상

  useEffect(() => {
    setCategories([
      {name: '기획', color: colors[0]},
      {name: '개발', color: colors[0]},
      {name: '디자인', color: colors[0]},
    ]);
  }, []);
  
  const modalOpener = (colorSelected) => {
    setNewColor(colorSelected);
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
    const newCats = categories.push({
      name: newName,
      color: newColor
    });
    setCategories(newCats);
    setModalOpen(false);
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
    >
      <View style={{flex:1, marginTop: 300}}>
        <View>
          <Text style={{textAlign: 'center'}}>새 카테고리 추가</Text>
          <TouchableOpacity 
            style={{position: 'absolute', right: 20}}
            onPress={onPressAdd}
          >
            <Text style={{opacity: 0.4}}>
              추가
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text>카테고리 이름</Text>
          <TextInput
            placeholder="카테고리 이름을 입력해주세요."
            value={newName}
            onChange={(value) => setNewName(value)}
          />

          <TouchableOpacity
            style={{backgroundColor: newColor, borderRadius: '9px'}}
            onPress={pickerOpener}
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
      >
        <View style={{flex:1, marginTop: 600}}>
          <Text>Color Picker</Text>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <TouchableOpacity
              style={{flex: 1, margin: 10}}
              onPress={() => modalOpener("#DFDD6C")}
            >
              <Image source={require("../../../assets/main/cat-colors/DFDD6C.png")} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{flex: 1, margin: 10}}
              onPress={() => modalOpener("#F8D941")}
            >
              <Image source={require("../../../assets/main/cat-colors/F8D941.png")} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{flex: 1, margin: 10}}
              onPress={() => modalOpener("#FDC453")}
            >
              <Image source={require("../../../assets/main/cat-colors/FDC453.png")} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{flex: 1, margin: 10}}
              onPress={() => modalOpener("#FE8D6F")}
            >
              <Image source={require("../../../assets/main/cat-colors/FE8D6F.png")} />
            </TouchableOpacity>
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <TouchableOpacity
              style={{flex: 1, margin: 10}}
              onPress={() => modalOpener("#A0DDE0")}
            >
              <Image source={require("../../../assets/main/cat-colors/A0DDE0.png")} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{flex: 1, margin: 10}}
              onPress={() => modalOpener("#CBD6C8")}
            >
              <Image source={require("../../../assets/main/cat-colors/CBD6C8.png")} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{flex: 1, margin: 10}}
              onPress={() => modalOpener("#F886A8")}
            >
              <Image source={require("../../../assets/main/cat-colors/F886A8.png")} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{flex: 1, margin: 10}}
              onPress={() => modalOpener("#FE7748")}
            >
              <Image source={require("../../../assets/main/cat-colors/FE7748.png")} />
            </TouchableOpacity>
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <TouchableOpacity
              style={{flex: 1, margin: 10}}
              onPress={() => modalOpener("#89B6C2")}
            >
              <Image source={require("../../../assets/main/cat-colors/89B6C2.png")} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{flex: 1, margin: 10}}
              onPress={() => modalOpener("#9ADBC5")}
            >
              <Image source={require("../../../assets/main/cat-colors/9ADBC5.png")} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{flex: 1, margin: 10}}
              onPress={() => modalOpener("#FD9F9D")}
            >
              <Image source={require("../../../assets/main/cat-colors/FD9F9D.png")} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{flex: 1, margin: 10}}
              onPress={() => modalOpener("#FF4141")}
            >
              <Image source={require("../../../assets/main/cat-colors/FF4141.png")} />
            </TouchableOpacity>
          </View>
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
            style = {{backgroundColor: item.color}}
            onPress={onPressCat}>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        </View>
      }
    />
    <Button
      title="+ 새 카테고리 추가"
      onPress={() => setModalOpen(true)}
    /> 
    
    {modalOpen && <AddModal/>}
    {pickerOpen && <ColorPicker/>}
  </View>;
};

export default TodoCat;