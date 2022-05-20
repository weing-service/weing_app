import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

const LoginButton = (props) => {

    const navigation = useNavigation();

    return (
        <View>
        <TouchableOpacity
            style = {styles.button}
            onPress={() => navigation.navigate('VoteList')}>
            <Text
                style = {styles.title}>
                {props.text}
            </Text>
        </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        color : 'white',
        alignSelf: 'center',
    },
    button: {
        width : 311,
        height : 40,
        borderRadius : 20,
        backgroundColor : '#89B6C2',
        marginTop: 28,
        marginBottom : 16,
        alignSelf: 'center',
        justifyContent: 'center'
    },

});

export default LoginButton;