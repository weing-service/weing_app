// 투표 리스트 네비게이션 바
import React, {useState, useEffect} from "react";
import { View, ImageBackground } from "react-native";
import { useNavigation } from '@react-navigation/native';

const Loading = (props) => {
    const [authLoaded, setAuthLoaded] = useState(false);
    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
          setAuthLoaded(true);
        }, 3000);
    }, []);

    useEffect(() => {
        if (authLoaded) {
          navigation.replace('Login');
        }
    }, [authLoaded, navigation]);


    return (
        <ImageBackground
            source={require("./assets/start.png")}
            style={{width:"100%",height:"100%"}}>
        </ImageBackground>
    );
};

export default Loading;
