import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Modal } from "react-native";

export default function StudentInfoModal({ show, onClose }) {
  return (
    <Modal
      animationType='slide'
      visible={show}
      onRequestClose={() => {
        onClose();
      }}>
      <View>
        <Text>StudentInfoModal</Text>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({});
