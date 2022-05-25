// 새 프로젝트 생성 페이지
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Modal } from "react-native";
import { Calendar } from "react-native-calendars";
import { DateToString } from "../../components/common/DateToString";
import { useNavigation } from '@react-navigation/native';

const AddProjectPage = () => {
  const navigation = useNavigation();
    // 이미지 등록 미완
  const [coverImg, setCoverImg] = useState("");
  const [projectImg, setProjectImg] = useState("");
  const [title, setTitle] = useState("");
  const [info, setInfo] = useState("");
  const [startDate, setStartDate] = useState();
  const [finishDate, setFinishDate] = useState();
  const [marker, setMarker] = useState({});
  const [picker, setPicker] = useState(false);
  const [count, setCount] = useState(0);

    useEffect(() => {
        setStartDate(startDate);
    }, [startDate]);

  const onPressDate = (day) => {
    let newMark = {};
    if(count % 2 == 0){
        // 홀수번째 클릭이면 startDate 설정
        setStartDate(day);
        newMark[day.dateString] = {startingDay: true, dotColor: "#89B6C2", color: "#89B6C2"};
    } else {
        // 짝수번째 클릭이면 finishDate 설정
        setFinishDate(day);
        let bt = day.timestamp - startDate.timestamp;
        let btDay = bt / (1000*60*60*24);
        for(let i=0; i<btDay; i++){
            if(i == 0)
                newMark[startDate.dateString] = {startingDay: true, dotColor: "#89B6C2", color: "#89B6C2"};
            else
                newMark[DateToString(new Date(startDate.year, startDate.month - 1, startDate.day + i))] = {color: "#89B6C24D"}
        }
        newMark[day.dateString] = {endingDay: true, dotColor: "#89B6C2", color: "#89B6C2"};
    }
    setMarker(newMark);
    setCount(count + 1);
  }

  return <View>
    <View style={styles.topView}>
    <Text style={{fontSize: 20, textAlign: 'center'}}>새 프로젝트 생성</Text>
    <TouchableOpacity 
        style={{position: 'absolute', right: 20, top: 55}}
        onPress={() => {
            console.log({
                title: title,
                info: info,
                startDate: startDate,
                finishDate: finishDate
            })
            navigation.navigate('MainPage')
        }}
    >
        <Text style={{fontWeight: 'bold', fontSize: 15,color: 'white'}}>생성</Text>
    </TouchableOpacity>
    <TouchableOpacity
        style={{justifyContent: 'center', alignItems: 'center', top: 60, flexDirection: 'row'}}
    >
        <Image 
        style={{width: 20, height: 20, marginRight: 10}}
        source={require('../../assets/main/btn_camera_bold.png')}
        />
        <Text style={{color: 'white', fontSize: 18}}>커버 이미지 등록</Text>
    </TouchableOpacity>
    <TouchableOpacity
        style={{position: 'absolute', top: 200, left: 150}}
    >
        <Image 
        style={{width: 100, height: 100}}
        source={require('../../assets/main/project_img.png')}/>
        <TouchableOpacity
            style={{left: 70, bottom: 30}}
        >
            <Image 
            style={{width: 30, height: 30}}
            source={require('../../assets/main/btn_camera.png')}
            />
        </TouchableOpacity>
    </TouchableOpacity>
    </View>
    <View>
        <View style={styles.inputView}>
            <Text style={styles.text}>프로젝트 명*</Text>
            <TextInput 
                placeholder="프로젝트 명을 입력해주세요."
                style={styles.input}
                placeholderTextColor={"#999999"}
                value={title}
                onChangeText={text => setTitle(text)}
            />
        </View>
        <View style={styles.inputView}>
            <Text style={styles.text}>프로젝트 설명</Text>
            <TextInput 
                style={styles.input}
                placeholder="프로젝트 설명을 입력해주세요."
                placeholderTextColor={"#999999"}
                value={info}
                onChangeText={text => setInfo(text)}
            />
        </View>
        <View style={styles.inputView}>
            <Text style={styles.text}>프로젝트 시작일 및 마감일 설정*</Text>
            <TouchableOpacity 
                style={{left: 20, top: 20}}
                onPress={() => setPicker(true)}>
            <Image 
                style={{width: 80, height: 80}}
                source={require('../../assets/main/todo/btn_calendar.png')}/>
            </TouchableOpacity>
        </View>
    </View>

    <Modal 
      animationType={"slide"}
      transparent={true}
      visible={picker}
      onRequestClose={() => setIsPickerOpen(false)}
    >
        <View style={{flex: 1, backgroundColor: 'black', opacity: 0.4}}>
        </View>
      <View style={{flex: 1.5, backgroundColor:'white', borderTopLeftRadius: 20, borderTopRightRadius: 20}}>
        <View style={{flex: 1}}>
            <TouchableOpacity style={{flex: 1, alignItems:'center', paddingTop: 20}}>
                <Image 
                    style={{width: 32, height: 4}}
                    source={require('../../assets/main/modal_knob.png')}
                />
            </TouchableOpacity>
            <Text style={{flex: 1, left: 20, color: "#404855"}}>프로젝트 시작일과 마감일을 설정해주세요.</Text>
        </View>
        <View style={{flex: 4}}>
            <Calendar
            enableSwipeMonths
            //selected={pickedDate}
            onDayPress={day => onPressDate(day)}
            markingType={'period'}
            markedDates={marker}
            />
        </View>

        <View style={{flex: 1, alignItems: 'center'}}>
            <TouchableOpacity 
                onPress={() => setPicker(false)}
            >
            <Image 
            style={{width: 156, height: 38, borderRadius: 10}}
            source={require('../../assets/main/todo/btn_select_complete.png')} />
            </TouchableOpacity>
        </View>
      </View>
    </Modal>
  </View>;
};

const styles = StyleSheet.create({
    topView: {
        paddingTop: 50,
        backgroundColor: "#40485580",
        height: 250,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        marginBottom: 50
    },
    text: {
        fontSize: 15,
        left: 20,
        marginTop: 20
    },
    input: {
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: 10,
        height: 50,
        width: 380,
        left: 20,
        padding: 10
    }
})

export default AddProjectPage;