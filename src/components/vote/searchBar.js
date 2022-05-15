// 검색창
import React from "react";
import { StyleSheet, TextInput, View, Text, Image,TouchableOpacity } from "react-native";

const SearchBar = (props) => {
    return (
        <View
            style = {styles.searchbar}>
            <TextInput
                styles = {{width : 250}}
                placeholder = '찾는 투표를 검색해주세요'/>
            <TouchableOpacity>
            <Image
                source={require('../../assets/search.png')}
                style = {{width : 20, height : 20, marginLeft : 135}}/>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    searchbar: {
        flexDirection : 'row',
        width : 328,
        height : 37,
        backgroundColor: 'white',
        marginTop: 15,
        alignItems: 'flex-start',
        borderRadius : 40,
        marginLeft : 16,
        paddingHorizontal: 10,
        paddingVertical: 7,
    },
});

export default SearchBar;
