// 결과 시 모달
import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

const VoteInput  = (props) => {
    return (
        <View>
        <Text
            style = {styles.title}>
            {props.title}
        </Text>
        <TextInput
            style = {styles.box}
            placeholder = {(props.title === '일정 이름*' ? '일정 이름을 입력해주세요.' : props.title === '투표 유형' ? '시간+장소 투표' : '일정 설명을 입력해주세요.')}
            editable = {props.title !== '투표 유형' ? true : false}/>
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
    box: {
        fontSize: 13,
        color : '#999999',
        marginTop: 18,
        marginBottom : 20,
        alignSelf: 'center',
        height : 48,
        width : 328,
        backgroundColor : 'white',
        borderRadius : 10,
        padding : 10
    },
});

export default VoteInput;
