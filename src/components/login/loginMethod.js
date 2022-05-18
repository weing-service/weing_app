import React from "react";
import { View, Image, TouchableOpacity } from "react-native";

const LoginMethod = (props) => {

    const icons = ['../../assets/login/kakao.png', '../../assets/login/google.png', '../../assets/login/facebook.png', '../../assets/login/twitter.png'];
    const uri = icons[props.state]
    console.log(uri)
    return (
        <TouchableOpacity>
        </TouchableOpacity>
    )
};

export default LoginMethod;