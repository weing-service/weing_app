// 일정 이름 input 컴포넌트
import { Picker } from "@react-native-picker/picker";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { View, Text, Button, Modal, StyleSheet, Switch } from "react-native";
import { Calendar } from "react-native-calendars";
import { BottomModal, ModalTitle } from "react-native-modals";
import {dateToString} from "../../common/dateToString.js";

const TodoDate = () => {
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const [pickedDate, setPickedDate] = useState(dateToString({date: new Date()}));

  const pickerOpener = () => {
    setIsPickerOpen(!isPickerOpen);
  }

  const marked = useMemo(() => {
    return {
      selected: {
        selected: true,
        disableTouchEvent: true,
        selectedColor: 'blue'
      }
    }
  })

  return <View>
    <Text>날짜 및 시간 설정*</Text>
    <Button
          title="Open Bottom Sheet"
          onPress={pickerOpener}
    />

    <BottomModal
      visible={isPickerOpen}
      height={0.9}
      onTouchOutside={pickerOpener}
      onSwipeOut={pickerOpener}
      style={{elevation: 10}}
    >
      <Text>일정 날짜와 시간을 선택해주세요.</Text>
      <View>
        <Calendar
          enableSwipeMonths
          selected={pickedDate}
          onDayPress={day => setPickedDate(day)}
          markedDates={marked}
        />
      </View>
      <View>
        <Text>시작 시간</Text>
        <Picker>
          <Picker.Item label="시작 시간" value="시작 시간" />
        </Picker>
        <Text>종료 시간</Text>
        <Picker>
          <Picker.Item label="종료 시간" value="종료 시간" />
        </Picker>
      </View>
      <View>
        <Text>반복되는 일정</Text>
        <Switch/>
      </View>
    </BottomModal>
  </View>;
};

export default TodoDate;