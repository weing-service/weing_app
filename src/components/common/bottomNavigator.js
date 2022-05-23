import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

const BottomNavigator = (props) => {

    const navigation = useNavigation();

    const icons = {
        image1: require('../../assets/navigate/voteCheck.png'),
        image2: require('../../assets/navigate/vote.png'),
        image3: require('../../assets/navigate/mapCheck.png'),
        image4: require('../../assets/navigate/map.png'),
    }

    const uri1 = props.type === 0 ? icons.image1 : icons.image2;
    const uri2 = props.type === 2 ? icons.image3 : icons.image4;

    return (
        <View
            style = {{flexDirection : 'row', height : 104, width: '100%', justifyContent : 'space-between',
                    backgroundColor : 'white', borderTopLeftRadius: 20, borderTopRightRadius: 20, alignItems: 'flex-start'}}>
            <TouchableOpacity
                style = {{marginLeft: 46, marginTop : 10}}
                onPress={() => props.type === 0 ? null : navigation.navigate('VoteList')}>
                <Image
                    style = {{width: 23, height: 49}}
                    source={uri1}/>
            </TouchableOpacity>
            <TouchableOpacity
                style = {{backgroundColor : 'white'}}
                onPress={() => props.type === 1 ? null : navigation.navigate('MainPage')}>
                <Image
                    style = {{width: 80, height: 80}}
                    source={require('../../assets/navigate/main.png')}/>
            </TouchableOpacity>
            <TouchableOpacity
                style = {{marginRight: 46, marginTop : 10}}
                onPress={() => props.type === 2 ? null : navigation.navigate('Map')}>
                <Image
                    style = {{width: 23, height: 49}}
                    source={uri2}/>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({

});

export default BottomNavigator;