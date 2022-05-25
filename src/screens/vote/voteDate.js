import React, {useState} from "react";
import { StyleSheet, View, ImageBackground, ScrollView, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
import BottomNavigator from '../../components/common/bottomNavigator';
import DateCardContainer from '../../components/vote/dateCardContainer';
import TimeZone from '../../components/vote/timeZone';
import TimeTouchView from '../../components/vote/timeTouchView';

const VoteDo = (props) => {

    const navigation = useNavigation();
    const time = [
                '09:00','10:00','11:00','12:00','13:00','14:00',
                '15:00','16:00','17:00','18:00','19:00','20:00',
                '21:00','22:00','23:00','24:00']

    const data2 = props.route.params

    const [selectedDate, setSelectedDate] = useState(Object.keys(data2)[0]);

    const [data3, setData] = useState(props.route.params);
    const [times, setTime] = useState(data2[selectedDate]);

    return (
        <View>
            <ImageBackground
                style = {{width: '100%', height: '100%'}}
                source={require('../../assets/background/vote.png')}>
                <View
                    style = {{width : '100%', height : 264, backgroundColor : 'white', borderBottomLeftRadius : 10, borderBottomRightRadius : 10}}>
                    <View
                        style = {{flexDirection: 'row', justifyContent : 'space-between'}}>
                        <Text
                            style = {styles.title}>
                            날짜/시간 선택
                        </Text>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('VoteDo', data3)}>
                            <Text
                                style = {styles.title2}>
                                완료
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View
                        style = {{width : '90%', borderTopWidth : 1, alignSelf : 'center', borderColor : '#DBDBDB'}}>
                    </View>
                    <Text
                        style = {{color : '#404855', marginLeft : 16, marginTop : 12}}>
                        날짜 선택
                    </Text>
                    <DateCardContainer selectedDate = {selectedDate} setSelectedDate = {setSelectedDate}
                                        data2 = {data2}/>
                </View>
                <View
                    style = {{flexDirection : 'row', marginTop : 36, justifyContent : 'space-between'}}>
                    <Text
                        style = {{marginLeft : 16, fontSize : 15}}>
                        시간 선택
                    </Text>
                    <Text
                        style = {{marginRight : 16, fontSize : 12, color : '#999999'}}>
                        가능한 시간대를 모두 드래그하세요.
                    </Text>
                </View>
                <ScrollView
                    style = {{marginTop : 22}}>
                    <View
                        style = {{flexDirection : 'row'}}>
                        <TimeZone />
                        <TimeTouchView selectedDate = {selectedDate} data3 = {data3} setData = {setData}/>
                    </View>
                </ScrollView>
                <View
                    style = {{height : 100}}>
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
    fixed2: {
        position: 'absolute',
        top : 690,
        width : '100%'
    },
});

export default VoteDo;