import React, {useState} from "react";
import { StyleSheet, View, ImageBackground, ScrollView, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';


const VoteDo = () => {

    const navigation = useNavigation();
    return (
        <View>
            <ImageBackground
                style = {{width: '100%', height: '100%'}}
                source={require('../../assets/background/vote.png')}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('VoteDo')}>
                    <Text
                        style = {{marginTop : 50, marginLeft : 50}}>
                        투표 완료
                    </Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    )
};

export default VoteDo;