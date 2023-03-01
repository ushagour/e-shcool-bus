import { Image, StyleSheet } from "react-native";
import React from "react";
import { Marker } from "react-native-maps";

export default function DefaultMarker({defaultLocation}) {
  return (
    <Marker coordinate={defaultLocation}>
      <Image
        source={require("../../assets/defaultPosition.png")}
        style={styles.defaultLocation}
      />
    </Marker>
  );
}

const styles = StyleSheet.create({
  defaultLocation: {
    height: 60,
    width: 60,
  },
});
