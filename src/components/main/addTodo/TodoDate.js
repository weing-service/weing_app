// 일정 이름 input 컴포넌트
import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { ModalTitle } from "react-native-modals";
import { BottomModal } from "react-native-modals";

const TodoDate = () => {
  const [isPickerOpen, setIsPickerOpen] = useState(false);

  return <View>
    <Text>날짜 및 시간 설정*</Text>
    <Button
          title="Open Bottom Sheet"
          onPress={() => setIsPickerOpen(true)}
    />
    {/* <BottomModal
      visible={isPickerOpen}
    >
      <ModalTitle title="Bottom Modal"/>
    </BottomModal> */}
  </View>;
};

export default TodoDate;