// 참여자 추가 모달

import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Modal from "react-native-modalbox"

const MemberModal = ({ modal, setModal, users, setUsers, members, setMembers}) => {
    const onPressUser = (user) => {
      setMembers(members.concat([user]))
    }

    return <Modal
    style = {{height : 300, width : '100%', marginTop: 200,borderTopLeftRadius: 10, borderTopRightRadius: 10}}
    animationType={"slide"}
    transparent={false}
    isOpen={modal}
    entry = {'bottom'}
    swipeToClose = {true}
    swipeArea = {600}
    swipeThreshold = {0}
    position = {'bottom'}>
    <View style={{backgroundColor:'white', borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: 20}}>
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