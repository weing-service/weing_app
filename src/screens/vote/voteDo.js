import React, {useState, useEffect} from "react";
import { StyleSheet, View, ImageBackground, Text, TouchableOpacity, Image, Checkbox } from "react-native";
import VoteInfo from '../../components/vote/voteInfo';
import { useNavigation } from '@react-navigation/native';
import SearchBar from '../../components/vote/searchBar';
import BottomNavigator from '../../components/common/bottomNavigator';
import DateList from '../../components/vote/dateList';
import AsyncStorage from '@react-native-async-storage/async-storage';

const userId = 2243399485;

const doVote = async(data, time) => {
    await fetch("http://54.180.145.205:8080/vote/result",{
        method : "POST",
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({ project_title: data.project, vote_title: data.title,
                               user_id: userId , vote_count : 1, vote_time : time, place : '강남역' })
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


const handleDayPress = (start, end) => {
    const object = {};
    object[start] = [];
    for (let i=0;i<end.substring(8,10)-start.substring(8,10)-1;i++){
        const day = [moment(start).add(i+1, 'days').format("YYYY-MM-DD")];
        object[day] = [];
    }
    object[end] = [];
    return object
  }

const storeData = async (data) => {
    try {
        const value = JSON.stringify(data)
        console.log(value)
        await AsyncStorage.setItem('key', '1')
    } catch (error) {
        console.log(error);
    }
}

const callData = async () => {
    try {
        await AsyncStorage.getItem('key').then((value) => {
            const rvalue = JSON.parse(value)
            return rvalue
        })
    } catch (error) {
        console.log(error);
    }
}

const VoteDo = (props) => {

    const [place, setPlace] = useState(false);
    const navigation = useNavigation();
    const [userInfo, setUserInfo] = useState(props.route.params);

    let getData;
    if (props.route.params.title){
        getData = handleDayPress(props.route.params.startDate, props.route.params.endDate);
    } else {
        getData = props.route.params
    }


    const [selectedDate, setSelectedDate] = useState(Object.keys(getData)[0]);
    const length = Object.values(getData).map((x)=>x.length).reduce((x,y) => x+y);

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
                    시간/장소 투표
                </Text>
                <TouchableOpacity
                    onPress={() => {doVote(userInfo, getData), navigation.navigate('VoteList', 1)}}>
                    <Text
                        style = {styles.title2}>
                        투표 완료
                    </Text>
                </TouchableOpacity>
                </View>
                <VoteInfo title = {'일정 이름'} text = {userInfo.title } touch = {false}/>
                <VoteInfo title = {'일정 설명'} text = {userInfo.info} touch = {false}/>
                {length === 0 ?
                (
                    <VoteInfo title = {'가능한 날짜/시간 투표'} data = {getData} touch = {true}/>
                ) : (
                    <DateList data = {getData} selectedDate = {selectedDate} setSelectedDate = {setSelectedDate}/>
                )}
                <Text
                    style = {{fontSize: 15, color : '#404855', textAlign: 'left', marginLeft : 16}}>
                    내 위치 투표
                </Text>
                <SearchBar place = {place} setPlace={setPlace}/>
                <View
                    style ={{flexDirection: 'row', alignItems : 'center', marginTop : 5}}>
                        <TouchableOpacity>
                        <Image
                            style = {{width: 11, height: 11, marginLeft : 17}}
                            source={require('../../assets/vote/place.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <Text
                            style = {{fontSize : 12, color : '#404855', marginLeft : 5}}>
                            현재 위치로 설정
                        </Text>
                        </TouchableOpacity>
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
        marginLeft : '32%'
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

export default VoteDo;