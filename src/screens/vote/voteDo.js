import React, {useState} from "react";
import { StyleSheet, View, ImageBackground, Text, TouchableOpacity, Image, Checkbox } from "react-native";
import VoteInfo from '../../components/vote/voteInfo';
import { useNavigation } from '@react-navigation/native';
import SearchBar from '../../components/vote/searchBar';
import BottomNavigator from '../../components/common/bottomNavigator';

const VoteDo = (props) => {

    const [place, setPlace] = useState(false);
    const navigation = useNavigation();

    return (
        <View>
            <ImageBackground
                style = {{width: '100%', height: '100%'}}
                source={require('../../assets/background/vote.png')}>
            <View>
                <View
                    style = {{flexDirection: 'row', justifyContent : 'space-between'}}>
                <Text
                    style = {styles.title}>
                    시간/장소 투표
                </Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('VoteList')}>
                    <Text
                        style = {styles.title2}>
                        투표 완료
                    </Text>
                </TouchableOpacity>
                </View>
                <VoteInfo title = {'일정 이름'} data = {'기획 회의'} touch = {false}/>
                <VoteInfo title = {'일정 설명'} data = {'와이어 프레임 제작'} touch = {false}/>
                <VoteInfo title = {'가능한 날짜/시간 투표'} touch = {true}/>
                <Text
                    style = {{fontSize: 15, color : '#404855', textAlign: 'left', marginLeft : 16}}>
                    내 위치 투표
                </Text>
                <SearchBar place = {place} setPlace={setPlace}/>
                <View
                    style ={{flexDirection: 'row', alignItems : 'center', marginTop : 5}}>
                        <TouchableOpacity>
                        <Image
                            style = {{width: 11, height: 11, marginLeft : 17}}
                            source={require('../../assets/vote/place.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <Text
                            style = {{fontSize : 12, color : '#404855', marginLeft : 5}}>
                            현재 위치로 설정
                        </Text>
                        </TouchableOpacity>
                </View>
            </View>
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
    title3: {
        fontSize: 15,
        color : '#404855',
        textAlign: 'left',
        marginLeft : 16
    },
    fixed2: {
        position: 'absolute',
        top : 690,
        width : '100%'
    },
});

export default VoteDo;