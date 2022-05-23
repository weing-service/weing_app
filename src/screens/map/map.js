import React, {Component} from "react";
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity, ScrollView } from "react-native";
import BottomNavigator from '../../components/common/bottomNavigator';

const Map = () => {

    return(
        <View>
            <Text>
                djflka
            </Text>
            <View style = {styles.fixed2}>
                <BottomNavigator type = {2}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    fixed2: {
        position: 'absolute',
        top : 690,
        width : '100%'
    },
});
export default Map;