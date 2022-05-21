import React, {useState} from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Modal from 'react-native-modalbox';
import { Agenda, Calendar } from "react-native-calendars";

const PlaceFind = (props) => {

    const [pressed, setPressed] = useState(false);

    return (
        <Modal
            style = {{height : 800, width : 360, marginTop: 80,borderTopLeftRadius: 10, borderTopRightRadius: 10}}
            animationType={"slide"}
            transparent={false}
            isOpen={props.open}
            entry = {'bottom'}
            swipeToClose = {true}
            swipeArea = {500}
            swipeThreshold = {0}
            position = {'bottom'}>
            <Image
                style = {{width: 32, height: 4, alignSelf : 'center', marginTop : 19}}
                source={require('../../assets/vote/2.png')}/>
            <Text
                style = {{fontSize : 15, fontWeight : 'bold',  alignSelf: 'center', marginTop : 12}}>
                {pressed ? '지도에서 위치 확인' : '주소 설정'}
            </Text>
            <Calendar />
        </Modal>
    );
};

export default PlaceFind;
