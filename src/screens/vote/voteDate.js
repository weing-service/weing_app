import React, {useState} from "react";
import { StyleSheet, View, ImageBackground, ScrollView, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
import BottomNavigator from '../../components/common/bottomNavigator';

const VoteDo = () => {

    const navigation = useNavigation();

    const data = ['2022-05-15','2022-05-16','2022-05-17','2022-05-18','2022-05-19','2022-05-20','2022-05-21','2022-05-22'];

    const mapToComponent = () => {
          return data.map((element) => {
            return (
                <VoteCard
                    key = {element.key} data = {element} style = {projectInfo[props.state]}/>
            );
          });
        };


    return (
        <View>
            <ImageBackground
                style = {{width: '100%', height: '100%'}}
                source={require('../../assets/background/vote.png')}>
                <View
                    style = {{width : '100%', height : 264, backgroundColor : 'white', borderBottomLeftRadius : 10, borderBottomRightRadius : 10}}>
                    <View
                        style = {{flexDirection: 'row', justifyContent : 'space-between'}}>
                        <Text
                            style = {styles.title}>
                            날짜/시간 선택
                        </Text>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('VoteDo')}>
                            <Text
                                style = {styles.title2}>
                                완료
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View
                        style = {{width : '90%', borderTopWidth : 1, alignSelf : 'center', borderColor : '#DBDBDB'}}>
                    </View>
                    <Text
                        style = {{color : '#404855', marginLeft : 16, marginTop : 12}}>
                        날짜 선택
                    </Text>
                </View>
                <TouchableOpacity
                    onPress={() => navigation.navigate('VoteDo')}>
                    <Text
                        style = {{marginTop : 50, marginLeft : 50}}>
                        투표 완료
                    </Text>
                </TouchableOpacity>
            <View style = {styles.fixed2}>
                <BottomNavigator type = {0}/>
            </View>
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
        marginLeft : '32%'
    },
    title2: {
        fontSize: 15,
        fontWeight: 'bold',
        color : '#999999',
        marginTop: 35,
        marginBottom : 4,
        marginRight : '4%'
    },
    fixed2: {
        position: 'absolute',
        top : 690,
        width : '100%'
    },
});

export default VoteDo;