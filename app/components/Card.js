import { StyleSheet, View } from "react-native";
import React from "react";

export default function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "#f4f4f4",
    marginVertical:10,
    //ios
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    //android
    elevation: 2,
  },
});
