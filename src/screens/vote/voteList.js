import React, {Component} from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import ListType from '../../components/vote/listType';

const voteList = () => {
    return(
        <View>
            <ImageBackground
                style = {{width: '100%', height: '100%'}}
                source={require('../../assets/background/voteList.jpg')}>
            <Text style={styles.title}>
                투표
            </Text>
            <View style = {{flexDirection : 'row', marginTop : 18}}>
                <ListType type={'진행중인 투표'} clicked = {true}/>
                <ListType type={'완료된 투표'} clicked = {false}/>
            </View>
            </ImageBackground>
        </View>
    );
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

export default voteList;