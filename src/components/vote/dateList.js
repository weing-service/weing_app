// 결과 시 모달
import React from "react";
import { StyleSheet, ScrollView, View,Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

const DateList  = (props) => {
    const navigation = useNavigation();
    const getDate = (date) => {
            const week = ['일', '월', '화', '수', '목', '금', '토'];
            const day = week[new Date(date).getDay()];
            return day
        }

    const mapToComponent = () => {
            return Object.keys(props.data).map((element) => {
                return (
                    <TouchableOpacity
                        key = {element}
                        style = {{backgroundColor : props.selectedDate === element ? '#89B6C2' : '#DBDBDB',
                                    height : 26, width : 88, alignItems : 'center', justifyContent : 'center',
                                    borderRadius : 9}}
                        onPress = {() => {props.setSelectedDate(element), console.log(element)}}>
                        <Text
                            style = {{color : 'white', fontSize : 12}}>
                            {element.substring(5,6) === '0' ? element.substring(6,7)+"월 " : element.substring(5,7)+"월 "}
                            {element.substring(8,9) === '0' ? element.substring(8,9)+"일" : element.substring(8,10)+"일"
                             +' ('+getDate(element)+')'}
                        </Text>
                    </TouchableOpacity>
                    );
                });
            };

    return (
        <View>
            <View
                style = {{flexDirection : 'row', justifyContent : 'space-between'}}>
                <Text
                    style = {styles.title}>
                    가능한 날짜/시간
                </Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('VoteDate', props.data)}>
                    <Text
                        style = {{marginRight : 16, color : '#999999', fontSize : 12}}>
                        수정
                    </Text>
                </TouchableOpacity>
            </View>
            <ScrollView
                style = {{borderRadius : 9, backgroundColor : '#DBDBDB', height : 26, borderRadius : 9
                        , marginLeft : 16, marginTop: 17, marginBottom : 16}}
                horizontal = {true}>
                {mapToComponent()}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 15,
        color : '#404855',
        textAlign: 'left',
        marginLeft : 16
    },
});

export default DateList ;