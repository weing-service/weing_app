// 결과 시 모달
import React, {useState} from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const TimeTouchView  = (props) => {

    const array = [];
    for (let i=0; i<30;i++){
        array.push(i)
    }
    const [ time, setTime ] = useState([]);

    const mapToComponent = () => {
        return array.map((element) => {

            return (
                <TouchableOpacity
                    style = {{backgroundColor : time.includes(element) ? '#D2DFCB' : 'white',
                            marginLeft : 52,borderWidth : 1, borderColor : '#89B6C2', width : 70, height : 24,}}
                    key = {element}
                    onPress = {() => {
                        if (time.includes(element)){
                            setTime(time.filter((x) => x !== element));
                            console.log(time);
                        } else {
                            setTime([...time, element]);
                            console.log(time);
                        }}}/>
            );
        })
    }

    return (
        <View
            style = {{marginTop : 5}}>
            {mapToComponent()}
        </View>
    );
};

export default TimeTouchView ;
