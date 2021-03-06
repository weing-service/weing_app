import React, {useState} from "react";
import { Button, StyleSheet, View, ImageBackground, ScrollView, Text, TouchableOpacity, Image, Checkbox } from "react-native";
import VoteInput from '../../components/vote/voteInput';
import { useNavigation } from '@react-navigation/native';
import Date from '../../components/vote/datePicker';
import SlideModal from '../../components/vote/slideModal';
import RoundCheck from '../../components/vote/roundCheck';
import BottomNavigator from '../../components/common/bottomNavigator';


const makeVote = async(data, time) => {
    await fetch("http://54.180.145.205:8080/vote/",{
        method : "POST",
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({ project_title: '도오개걸', vote_title: '기획 회의',
                               info: "기획 세부 회의", startDate: "2022-05-29",
                                endDate : "2022-05-31", deadLine: "2022-05-28",
                                intoCal: false, isCompleted: false})
    })
        .then((response) => response.json())
        .then((responseJson) => {
        console.log(responseJson);
        if (responseJson.status == 200) {
        } else {
        }
        })
        .catch((error) => {
        console.error(error);
        });
    };

const VoteMake = () => {

    const [deadlineChecked, setDeadlineChecked] = useState(false);
    const [doubleChecked, setDoubleChecked] = useState(false);
    const [anonChecked, setAnonChecked] = useState(false);
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [markedDates, setMarkedDates] = useState({});
    const [checkedDate, setCheckedDate] = useState({});
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
                    onPress={() => {makeVote(), navigation.navigate('VoteList')}}>
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
                    style = {{flexDirection : 'row', marginBottom : 10, justifyContent : 'space-between' }}>
                <Text
                    style = {styles.title3}>
                    투표 마감시간 설정
                </Text>
                <RoundCheck checked = {deadlineChecked} setChecked = {setDeadlineChecked} type = {0} open={open2} setOpen = {setOpen2}/>
                </View>
                { Object.keys(checkedDate).length === 0 ? null : (
                    <TouchableOpacity
                        style ={{backgroundColor : 'white', width : 120, height : 50, alignItems : 'center', justifyContent : 'center',
                        borderRadius:10, marginLeft: 16, marginBottom : 10}}
                        disabled = {true}>
                        <Text
                            style = {{fontSize : 15, color : '#999999', alignSelf : 'center'}}>
                            {Object.keys(checkedDate)[0]}
                        </Text>
                    </TouchableOpacity>
                )}
                <SlideModal open = {open2} setOpen = {setOpen2} markedDates = {checkedDate} setMarkedDates = {setCheckedDate} type = {0}/>
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

            <View style = {styles.fixed2}>
                <BottomNavigator type = {0}/>
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
    fixed2: {
        position: 'absolute',
        top : 690,
        width : '100%'
    },
});

export default VoteMake;