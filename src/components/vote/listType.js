// 투표 리스트 네비게이션 바
import React, {useState} from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

const ListType = (props) => {

    const navigation = useNavigation();

    return (
        <View style = {{flexDirection: 'row', borderBottomWidth : 1.5,
                        width : '50%', justifyContent: 'center', borderColor : props.clicked === true ? 'black' : 'gray'}}>
            <TouchableOpacity
                onPress={() => navigation.navigate(props.move)}>
                <Text
                    style = {{marginBottom : 17, fontWeight : 'bold', fontSize : 15, color : props.clicked === true ? 'black' : 'gray'}}>
                    {props.type}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default ListType;
