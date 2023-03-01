import { StyleSheet, View } from "react-native";
import React from "react";

export default function Center({
  children,
  horizontal = true,
  vertical = false,
}) {
  return (
    <View
      style={{
        alignItems: horizontal ? "center" : "flex-start",
        justifyContent: vertical ? "center" : "flex-start",
      }}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({});
