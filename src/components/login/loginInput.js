import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

const LoginInput = (props) => {
    return (
        <View>
            <TextInput
                style = {styles.input}
                placeholderTextColor = {'#999999'}
                placeholder = {props.state===0 ? '아이디 또는 이메일을 입력해주세요.' : '비밀번호를 입력해주세요.'}/>
        </View>
    )
};

const styles = StyleSheet.create({
    input: {
        width : 311,
        height : 40,
        fontSize: 13,
        paddingLeft : 20,
        borderRadius : 20,
        backgroundColor : 'white',
        marginTop : 16,
        alignSelf: 'center',
        justifyContent: 'center'
    },

});

export default LoginInput;