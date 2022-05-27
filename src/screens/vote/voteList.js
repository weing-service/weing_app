import React, {Component, useEffect, useState} from "react";
import { Image, StyleSheet, View, Text, ImageBackground, TouchableOpacity, ScrollView } from "react-native";
import ListType from '../../components/vote/listType';
import SearchBar from '../../components/vote/searchBar';
import CardContainer from '../../components/vote/cardContainer';
import { useNavigation } from '@react-navigation/native';
import BottomNavigator from '../../components/common/bottomNavigator';

const API_URL = 'http://54.180.145.205:8080';


const VoteList = (props) => {
    const userId = 2243399485;
    const [progress, setProgress] = useState([]);
    const [finished, setFinished] = useState([]);

    useEffect(() => {
        fetch(`${API_URL}/vote/doingVotes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({userId: userId, project_title: "도오개걸"}),
        }).then(async (res) => {
            const jsonRes = await res.json();
            setProgress(jsonRes.doingList);
            setFinished(jsonRes.doneList);

        }).catch((error) => {
            console.log(error);
        })
    }, [])

    const navigation = useNavigation();

    return(
        <View
            style = {{position : 'relative'}}>
            <ImageBackground
                style = {{width: '100%', height: '100%'}}
                source={require('../../assets/background/voteList.jpg')}>
            <Text style={styles.title}>
                투표
            </Text>
            <View style = {{flexDirection : 'row', marginTop : 18}}>
                <ListType type={'진행중인 투표'} clicked = {true} move = {'VoteList'}/>
                <ListType type={'완료된 투표'} clicked = {false} move = {'VoteResult'}/>
            </View>
            <SearchBar type = {0}/>
            <ScrollView
                style = {{marginBottom : 10}}>
                <CardContainer state={0} data = {progress}/>
                <CardContainer state={1} data = {finished}/>
            </ScrollView>
            <View style={styles.fixed}>
                <TouchableOpacity
                    onPress={() => {navigation.navigate('VoteMake')}} >
                    <Image
                        style = {{width: 48, height: 48}}
                        source={require('../../assets/vote/add.png')}/>
                </TouchableOpacity>
            </View>
            <View
                style = {{height : 100}}>
            </View>
            <View style = {styles.fixed2}>
                <BottomNavigator type = {0}/>
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
    fixed: {
        position: 'absolute',
        bottom: 110,
        left: 300,
        right: 0,
    },
    fixed2: {
        position: 'absolute',
        top : 690,
        width : '100%'
    },
});

export default VoteList;