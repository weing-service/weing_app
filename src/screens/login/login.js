import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground, TextInput, TouchableOpacity} from "react-native";
import LoginMethod from '../../components/login/loginMethod';
import LoginButton from '../../components/login/loginButton';
import LoginInput from '../../components/login/loginInput';
import LoginCheck from '../../components/login/loginCheck';
import RoundCheckbox from 'rn-round-checkbox';

const Login = () => {
    return (
        <View>
        <ImageBackground
            style = {{width: '100%', height: '100%'}}
            source={require('../../assets/background/login.png')}>
            <Image
                style = {{width: 120, height: 132, marginTop: 138, marginBottom : 95, alignSelf: 'center'}}
                source={require('../../assets/login/icon.png')}/>
            <LoginInput state={0}/>
            <LoginInput state={1}/>
            <View
                style = {{flexDirection: 'row', justifyContent : 'space-evenly'}}>
                <LoginCheck state={0}/>
                <LoginCheck state={1}/>
            </View>
            <LoginButton text={'로그인'}/>
            <View
                style = {{flexDirection : 'row', justifyContent : 'center', marginBottom : 5}}>
                <LoginMethod state = {0}/>
                <LoginMethod state = {1}/>
                <LoginMethod state = {2}/>
                <LoginMethod state = {3}/>
            </View>
            <View
                style={{flexDirection : 'row', justifyContent : 'center', marginTop : 16, marginBottom : 5}}>
            <Text
                style = {styles.title1}>
                계정을 잊으셨나요?
            </Text>
            <TouchableOpacity>
            <Text
                style = {styles.title2}>
                ID 찾기
            </Text>
            </TouchableOpacity>
            <Text
                style = {styles.title1}>
                또는
            </Text>
            <TouchableOpacity>
            <Text
                style = {styles.title2}>
                비밀 번호 찾기
            </Text>
            </TouchableOpacity>
            </View>
            <View
                style={{flexDirection : 'row', justifyContent : 'center', marginTop : 5}}>
            <Text
                style = {styles.title1}>
                아직 회원이 아니신가요?
            </Text>
            <TouchableOpacity>
            <Text
                style = {styles.title2}>
                회원가입>
            </Text>
            </TouchableOpacity>
            </View>
        </ImageBackground>
        </View>
    )
};

const styles = StyleSheet.create({
    title1: {
        fontSize: 13,
        color : 'white',
        marginLeft: 3
    },
    title2: {
        fontSize: 13 ,
        color : 'black',
        marginLeft: 3
    },

});

export default Login;