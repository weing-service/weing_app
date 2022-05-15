// 일정 이름 input 컴포넌트
import { Picker } from "@react-native-picker/picker";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { View, Text, Button, Modal, StyleSheet, Switch, Platform } from "react-native";
import { Calendar } from "react-native-calendars";
import { BottomModal, ModalTitle } from "react-native-modals";
import {dateToString} from "../../common/dateToString.js";

const TodoDate = ({pickerOpener}) => {
  return <View>
    <Text>날짜 및 시간 설정*</Text>
    <Button
          title="Open Bottom Sheet"
          onPress={pickerOpener}
    />
  </View>;
};

export default TodoDate;