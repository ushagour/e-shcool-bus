import { Image, StyleSheet } from "react-native";
import React from "react";
import { Marker } from "react-native-maps";
import colors from "../../config/colors";

export default function StudentMarker({ student }) {
  return (
    <Marker
      coordinate={{
        latitude: student.address.location.latitude,
        longitude: student.address.location.longitude,
      }}>
      <Image source={{ uri: student.imageUrl }} style={styles.locationImage} />
    </Marker>
  );
}

const styles = StyleSheet.create({
  locationImage: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.secondary,
    
    shadowColor: colors.primary,
    shadowOffset: {
      width: 100,
      height: 100,
    },
    shadowOpacity: 0.6,
    shadowRadius: 40.0,
    // elevation: 24,
  },
});
