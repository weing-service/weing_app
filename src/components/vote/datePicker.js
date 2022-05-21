import React, { useState } from 'react'
import { View, Button } from 'react-native'
import DatePicker from 'react-native-date-picker'

const Date = (props) => {
    const [date, setDate] = useState(new Date());

    return (
        <View>
            <Button title="Open" onPress={() => setOpen(true)} />
            <DatePicker
                modal
                open={props.open}
                date={date}
                onConfirm={(date) => {
                props.setOpen(false)
                setDate(date)
                }}
                onCancel={() => {
                setOpen(false)
                }}
                />
        </View>
    );
};

export default Date;