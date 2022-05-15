import React from "react";
import { View,StyleSheet,Text,TouchableOpacity } from "react-native";
import { Card } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const VoteCard = (props) => {

    const navigation = useNavigation();

    return (
        <View>
            <Card
                containerStyle = {styles.container}>
                <TouchableOpacity
                    style = {{ width: 71, height: 20, borderRadius : 20, backgroundColor : props.style.color, marginLeft : 7}}
                    disabled={true}>
                <Text
                    style = {{fontSize : 10, color : 'white', alignSelf : 'center', fontWeight : 'bold', marginTop : 2 }}>
                    시간+장소
                </Text>
                </TouchableOpacity>
                <Text
                    style = {{fontSize : 17, fontWeight : 'bold', marginTop : 10, marginBottom : 10, marginLeft : 9}}>
                    {props.data.title}
                </Text>
                <View
                    style = {{flexDirection: "row", alignItems : 'center', justifyContent: 'space-between'}}>
                    <Text
                        style = {{marginLeft : 9, color : '#999999', fontSize: 12}}>
                        {props.data.deadline.toLocaleDateString('en-Us')}
                    </Text>
                    <TouchableOpacity
                        style = {{ width: 112, height: 32, borderRadius : 10, backgroundColor : props.style.color}}
                        onPress={() => navigation.navigate(props.style.navigate)}>
                        <Text
                            style = {{color: 'white', fontSize : 13, fontWeight : 'bold', alignSelf : 'center', marginTop : 6}}>
                            {props.style.buttonTitle}
                        </Text>
                    </TouchableOpacity>
                </View>
            </Card>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width : 328,
        height : 123,
        borderRadius : 20
    }
});

export default VoteCard;