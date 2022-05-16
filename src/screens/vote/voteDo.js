import React from "react";
import { StyleSheet, View, ImageBackground, ScrollView, Text } from "react-native";

const VoteDo = () => {
    return (
        <View>
            <ImageBackground
                style = {{width: '100%', height: '100%'}}
                source={require('../../assets/background/vote.png')}>
            <ScrollView>
                <Text
                    style = {styles.title}>
                    투표 생성
                </Text>
            </ScrollView>
            </ImageBackground>
        </View>
    )
};

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color : 'black',
        marginTop: 34,
        alignSelf: 'center'
    },
});

export default VoteDo;