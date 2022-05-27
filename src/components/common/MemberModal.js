// 참여자 추가 모달

import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Modal, ImageBackground } from "react-native";

const MemberModal = ({ modal, setModal, users, setUsers, members, setMembers}) => {
    const onPressUser = (user) => {
      setMembers(members.concat([user]))
    }

    return <Modal 
        animationType={"slide"}
        transparent={true}
        visible={modal}
        onRequestClose={() => setModal(false)}
        >
      <TouchableOpacity 
        onPress={() => setModal(false)}
        style={{flex: 2, backgroundColor: 'black', opacity: 0.4}}>
      </TouchableOpacity>
    <View style={{flex: 1, backgroundColor:'white', borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: 20}}>
      <Text style={{color: '#404855'}}>멤버({users.length})</Text>
      {users.map((user) => (
        <TouchableOpacity 
        key={user.username}
        onPress={() => onPressUser(user)}
        style={{marginTop: 20, flexDirection: 'row', alignItems: 'center'}}>
            <Image 
            style={{height: 60, width: 60}}
            source={require('../../assets/main/btn_profile.png')}/>  
            <Text style={{color: '#404855', fontSize: 16, left: 20}}>{user.username}</Text>
        </TouchableOpacity>
      ))}

    <View style={{alignItems: 'center', top: 40}}>
          <TouchableOpacity 
              onPress={() => setModal(false)}
          >
          <Image 
          style={{width: 156, height: 38, borderRadius: 10}}
          source={require('../../assets/main/todo/btn_select_complete.png')} />
          </TouchableOpacity>
      </View>
    </View>
  </Modal>;
}

export default MemberModal;