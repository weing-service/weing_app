import React, {Component} from "react";
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity, ScrollView } from "react-native";
import ListType from '../../components/vote/listType';
import SearchBar from '../../components/vote/searchBar';
import VoteCard from '../../components/vote/voteCard';
import CardContainer from '../../components/vote/cardContainer';

const VoteResult = () => {

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

    return(
        <View>
            <ImageBackground
                style = {{width: '100%', height: '100%'}}
                source={require('../../assets/background/voteResult.png')}>
            <Text style={styles.title}>
                투표
            </Text>
            <View style = {{flexDirection : 'row', marginTop : 18}}>
                <ListType type={'진행중인 투표'} clicked = {false}  move = {'VoteList'}/>
                <ListType type={'완료된 투표'} clicked = {true} move = {'VoteResult'}/>
            </View>
            <SearchBar type={0}/>
            <ScrollView>
                <CardContainer state={2} data = {data1}/>
            </ScrollView>
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
export default VoteResult;