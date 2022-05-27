import React, {Component} from "react";
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity, ScrollView } from "react-native";
import ListType from '../../components/vote/listType';
import SearchBar from '../../components/vote/searchBar';
import VoteCard from '../../components/vote/voteCard';
import CardContainer from '../../components/vote/cardContainer';
import BottomNavigator from '../../components/common/bottomNavigator';

const VoteResult = () => {

    const data1 = [
        {
            key : '1',
            title : '개발 회의',
            info : '개발 마무리 회의 및 피드백',
            place : '강남',
            date : '5월 27일(금) 15:00 ~ 21:00',
        },
        {
            key : '2',
            title : '뒷풀이 회식',
            info : '마무리 기념 회식',
            place : '신촌',
            date : '5월 28일(토) 19:00 ~ 23:00',
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
    fixed2: {
        position: 'absolute',
        top : 690,
        width : '100%'
    },
});
export default VoteResult;