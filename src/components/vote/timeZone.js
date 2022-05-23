// 결과 시 모달
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const TimeZone  = () => {

    const time = [
                '09:00','10:00','11:00','12:00','13:00','14:00',
                '15:00','16:00','17:00','18:00','19:00','20:00',
                '21:00','22:00','23:00','24:00']

    const mapToComponent = () => {
        return time.map((element) => {
            return (
                <Text
                    style = {{marginLeft : 16, marginBottom: 28.6, fontSize : 14, color : '#999999'}}
                    key = {element.index}>
                    {element}
                </Text>
            );
        })
    }

    return (
        <View>
            {mapToComponent()}
        </View>
    );
};

export default TimeZone ;
