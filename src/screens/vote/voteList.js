import React, {Component} from "react";
import { Image, StyleSheet, View, Text, ImageBackground, TouchableOpacity, ScrollView } from "react-native";
import ListType from '../../components/vote/listType';
import SearchBar from '../../components/vote/searchBar';
import CardContainer from '../../components/vote/cardContainer';
import { useNavigation } from '@react-navigation/native';

const VoteList = () => {

    const navigation = useNavigation();
    const data1 = [
        {
            key : '1',
            title : '기획 회의',
            deadline : new Date(),
        },
        {
            key : '2',
            title : '기획 회의',
            deadline : new Date(),
        },
        {
            key : '3',
            title : '기획 회의',
            deadline : new Date(),
        }
    ]

    const data2 = [
        {
            key : '1',
            title : '기획 회의',
            deadline : new Date(),
        },
        {
            key : '2',
            title : '기획 회의',
            deadline : new Date(),
        },
        {
            key : '3',
            title : '기획 회의',
            deadline : new Date(),
        }
    ]
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
            <SearchBar/>
            <ScrollView>
                <CardContainer state={0} data = {data1}/>
                <CardContainer state={1} data = {data2}/>
            </ScrollView>
            <View style={styles.fixed}>
                <TouchableOpacity
                    onPress={() => {navigation.navigate('VoteMake')}} >
                    <Image
                        style = {{width: 48, height: 48}}
                        source={require('../../assets/vote/add.png')}/>
                </TouchableOpacity>
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
        bottom: 80,
        left: 300,
        right: 0,
    }
});

export default VoteList;