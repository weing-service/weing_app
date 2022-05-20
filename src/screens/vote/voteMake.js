import React, {useState} from "react";
import { StyleSheet, View, ImageBackground, ScrollView, Text, TouchableOpacity, Image, Checkbox } from "react-native";
import VoteInput from '../../components/vote/voteInput';
import { useNavigation } from '@react-navigation/native';

const VoteMake = () => {

    const navigation = useNavigation();

    return (
        <View>
            <ImageBackground
                style = {{width: '100%', height: '100%'}}
                source={require('../../assets/background/vote.png')}>
            <ScrollView>
                <View
                    style = {{flexDirection: 'row', justifyContent : 'space-between'}}>
                <Text
                    style = {styles.title}>
                    투표 생성
                </Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('VoteList')}>
                    <Text
                        style = {styles.title2}>
                        완료
                    </Text>
                </TouchableOpacity>
                </View>
                <VoteInput title = {'일정 이름*'} />
                <VoteInput title = {'일정 설명'} />
                <VoteInput title = {'투표 유형'} />
                <Text
                    style = {styles.title3}>
                    투표 받을날짜 *
                </Text>
                <TouchableOpacity>
                    <Image
                        style = {{width: 70, height: 70, marginLeft : 16, marginTop: 21, marginBottom : 21}}
                        source={require('../../assets/vote/1.png')}/>
                </TouchableOpacity>
                <View
                    style = {{flexDirection : 'row', marginBottom : 21 }}>
                <Text
                    style = {styles.title3}>
                    투표 마감시간 설정
                </Text>
                </View>
                <View
                    style = {{flexDirection : 'row', marginBottom : 21}}>
                <Text
                    style = {styles.title3}>
                    복수 선택
                </Text>
                </View>
                <View
                    style = {{flexDirection : 'row', marginBottom : 21}}>
                <Text
                    style = {styles.title3}>
                    악명 선택
                </Text>
                </View>
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
        marginBottom : 28,
        marginLeft : '39.4%'
    },
    title2: {
        fontSize: 15,
        fontWeight: 'bold',
        color : '#999999',
        marginTop: 35,
        marginBottom : 4,
        marginRight : '4%'
    },
    title3: {
        fontSize: 15,
        color : '#404855',
        textAlign: 'left',
        marginLeft : 16
    },
});

export default VoteMake;