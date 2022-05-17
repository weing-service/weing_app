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
            placeholder = {(props.title === '일정 이름*' ? '일정 이름을 입력해주세요.' : '일정 설명을 입력해주세요.')}
            disabled = {true}/>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 15,
        color : '#404855',
        fontWeight : 'bold',
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
