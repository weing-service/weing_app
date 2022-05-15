// 투표 리스트 카드뷰
import React, { useState } from "react";
import { Text, View, StyleSheet} from "react-native";
import { useNavigation } from '@react-navigation/native';
import VoteCard from './voteCard'

const info = [
        {
            header : '현재 진행 중인 투표',
            buttonTitle : '투표하기',
            color : '#89B6C2',
            navigate : 'VoteDo'
        },
        {
            header : '완료한 투표',
            buttonTitle : '재투표하기',
            color : '#DBDBDB',
            navigate : 'VoteDo'
        },
        {
            header : '완료된 투표',
            buttonTitle : '결과보기',
            color : '#A5BC99'
        }
    ]

const CardContainer = (props) => {

    const [projectInfo] = useState(info);
    const [data] = useState(props.data);

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
            <Text style = {styles.title}>
                {projectInfo[props.state].header}
            </Text>
            {mapToComponent()}
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        marginLeft : 16,
        marginTop : 11,
        fontSize : 15,
    },
    container: {
        width : 328,
        height : 123,
        borderRadius : 20
    }
});

export default CardContainer;
