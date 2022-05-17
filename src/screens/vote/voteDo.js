import React from "react";
import { StyleSheet, View, ImageBackground, ScrollView, Text, TouchableOpacity } from "react-native";
import VoteInput from '../../components/vote/voteInput';
import { useNavigation } from '@react-navigation/native';

const VoteDo = () => {

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
        alignSelf: 'center',
    },
    title2: {
        fontSize: 15,
        fontWeight: 'bold',
        color : '#999999',
        marginTop: 35,
        marginBottom : 4,
    },
});

export default VoteDo;