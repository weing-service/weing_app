// 결과 시 모달
import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

const VoteInfo  = (props) => {

    const navigation = useNavigation();

    return (
        <View>
        <Text
            style = {styles.title}>
            {props.title}
        </Text>
        <TouchableOpacity
            style = {{
                marginTop: 18,
                marginBottom : 20,
                alignSelf: 'center',
                height : 48,
                width : 328,
                backgroundColor : props.touch ? '#89B6C2' : 'rgba(137, 182, 194, 0.1)',
                borderRadius : 10,
                borderWidth : 1,
                borderColor : 'rgba(137, 182, 194, 0.5)',
                padding : 13,
            }}
            disabled = {!props.touch ? true : false}
            onPress={() => navigation.navigate('VoteDate')}>
            <Text
                style = {{
                    fontSize: 15,
                    color : !props.touch ? '#89B6C2' : '#FFFFFF',
                    alignSelf : !props.data ? 'center' : 'flex-start'}}>
                {!props.data ? '날짜/시간 선택 >' : props.data }
            </Text>
        </TouchableOpacity>
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

export default VoteInfo ;
