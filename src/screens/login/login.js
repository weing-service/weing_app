import React from "react";
import { View, Image, ImageBackground, TextInput} from "react-native";
import LoginMethod from '../../components/login/loginMethod'

const Login = () => {
    return (
        <View>
        <ImageBackground
            style = {{width: '100%', height: '100%'}}
            source={require('../../assets/background/vote.png')}>
            <Image
                style = {{width: 70, height: 70, marginLeft : 16, marginTop: 21, marginBottom : 21}}
                source={require('../../assets/login/icon.png')}/>

        </ImageBackground>
        </View>
    )
};

export default Login;