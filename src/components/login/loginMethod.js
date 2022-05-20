import React from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";

const LoginMethod = (props) => {

    const icons = {
        image1: require('../../assets/login/kakao.png'),
        image2: require('../../assets/login/google.png'),
        image3: require('../../assets/login/facebook.png'),
        image4: require('../../assets/login/twitter.png'),
    }

    const uri = props.state === 0 ?
                icons.image1 : props.state === 1 ?
                icons.image2 : props.state === 2 ?
                icons.image3 : icons.image4

    return (
        <TouchableOpacity>
        <Image
            style = {{width: 50, height: 50, marginRight : 10}}
            source={uri}/>
        </TouchableOpacity>
    )
};

export default LoginMethod;