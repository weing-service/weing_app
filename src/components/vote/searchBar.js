// 검색창
import React from "react";
import { StyleSheet, TextInput, View, Text, Image,TouchableOpacity } from "react-native";

const SearchBar = (props) => {
    return (
        <View
            style = {{
                flexDirection : 'row',
                width : 328,
                height : 40,
                backgroundColor: 'white',
                marginTop: 15,
                justifyContent: 'space-between',
                borderRadius : props.type === 0 ? 18.5 : 9,
                marginLeft : 16,
                paddingHorizontal: 10,
                paddingVertical: 8,
                paddingLeft: 15,
                marginBottom : 3 }}>
            <TextInput
                styles = {{width : 250}}
                placeholder = {props.type === 0 ? '찾는 투표를 검색해주세요' : '위치 검색하기'}/>
            <TouchableOpacity>
            <Image
                source={require('../../assets/vote/search.png')}
                style = {{width : 20, height : 20}}/>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    searchbar: {

    },
});

export default SearchBar;
