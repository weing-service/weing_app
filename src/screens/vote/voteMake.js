import React, {useState} from "react";
import { Button, StyleSheet, View, ImageBackground, ScrollView, Text, TouchableOpacity, Image, Checkbox } from "react-native";
import VoteInput from '../../components/vote/voteInput';
import { useNavigation } from '@react-navigation/native';
import CircleCheckBox from 'react-native-circle-checkbox';
import Date from '../../components/vote/datePicker';
import SlideModal from '../../components/vote/slideModal';
import RoundCheck from '../../components/vote/roundCheck';
import DatePicker from '../../components/vote/datePicker';

const VoteMake = () => {

    const [deadlineChecked, setDeadlineChecked] = useState(false);
    const [doubleChecked, setDoubleChecked] = useState(false);
    const [anonChecked, setAnonChecked] = useState(false);
    const [open, setOpen] = useState(false);
    const [markedDates, setMarkedDates] = useState({});
    const navigation = useNavigation();

    return (
        <View>
            <ImageBackground
                style = {{width: '100%', height: '100%'}}
                source={require('../../assets/background/vote.png')}>
            <View>
                <View
                    style = {{flexDirection: 'row', justifyContent : 'space-between'}}>
                <Text
                    style = {styles.title}>
                    투표 생성
                </Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('VoteList')}>
                    <Text
                        style = {styles.title2}>
                        완료
                    </Text>
                </TouchableOpacity>
                </View>
                <VoteInput title = {'일정 이름*'} />
                <VoteInput title = {'일정 설명'} />
                <VoteInput title = {'투표 유형'} />
                <Text
                    style = {styles.title3}>
                    투표 받을날짜 *
                </Text>
                { Object.keys(markedDates).length === 0 ? (
                    <TouchableOpacity
                        onPress={() => setOpen(!open)} >
                        <Image
                            style = {{width: 70, height: 70, marginLeft : 16, marginTop: 21, marginBottom : 21}}
                            source={require('../../assets/vote/1.png')}/>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity
                        style ={{backgroundColor : 'white', width : 120, height : 50, alignItems : 'center', justifyContent : 'center',
                        borderRadius:10, marginLeft: 16, marginTop: 21, marginBottom : 21}}
                        disabled = {true}>
                        <Text
                            style = {{fontSize : 15, color : '#999999', alignSelf : 'center'}}>
                            {Object.keys(markedDates)[0].substring(5,10)}~{Object.keys(markedDates)[Object.keys(markedDates).length-1].substring(5,10)}
                        </Text>
                    </TouchableOpacity>
                )}
                <SlideModal open = {open} setOpen = {setOpen} markedDates = {markedDates} setMarkedDates = {setMarkedDates}/>
                <View
                    style = {{flexDirection : 'row', marginBottom : 21, justifyContent : 'space-between' }}>
                <Text
                    style = {styles.title3}>
                    투표 마감시간 설정
                </Text>
                <RoundCheck checked = {deadlineChecked} setChecked = {setDeadlineChecked}/>
                </View>
                <View
                    style = {{flexDirection : 'row', marginBottom : 21, alignItems: 'center', justifyContent : 'space-between'}}>
                <Text
                    style = {styles.title3}>
                    복수 선택
                </Text>
                <RoundCheck checked = {doubleChecked} setChecked = {setDoubleChecked}/>
                </View>
                <View
                    style = {{flexDirection : 'row', marginBottom : 21, justifyContent : 'space-between'}}>
                <Text
                    style = {styles.title3}>
                    익명 선택
                </Text>
                <RoundCheck checked = {anonChecked} setChecked = {setAnonChecked}/>
                </View>
            </View>
            </ImageBackground>
        </View>
    )
};

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color : 'black',
        marginTop: 34,
        marginBottom : 28,
        marginLeft : '39.4%'
    },
    title2: {
        fontSize: 15,
        fontWeight: 'bold',
        color : '#999999',
        marginTop: 35,
        marginBottom : 4,
        marginRight : '4%'
    },
    title3: {
        fontSize: 15,
        color : '#404855',
        textAlign: 'left',
        marginLeft : 16
    },
});

export default VoteMake;