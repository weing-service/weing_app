// 투표 리스트 네비게이션 바
import React, {useState} from "react";
import { View, Text, TouchableOpacity } from "react-native";




const ListType = (props) => {
    return (
        <View style = {{flexDirection: 'row', borderBottomWidth : 1.2,
                        width : '50%', justifyContent: 'center', borderColor : props.clicked === true ? 'black' : 'gray'}}>
            <TouchableOpacity>
                <Text
                    style = {{marginBottom : 17, fontSize : 15, color : props.clicked === true ? 'black' : 'gray'}}>
                    {props.type}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default ListType;
