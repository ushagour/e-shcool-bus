import { StyleSheet, Image, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Button, Screen } from "../components";
import { StudentMarker } from "../components/Map";
import MapView, { Marker } from "react-native-maps";
import { getData } from "../firebase";

/// Default location or School location (EST - location)
const defaultLocation = {
  // position :
  latitude: 34.05011,
  longitude: -6.812845,
  // camera zoom :
  latitudeDelta: 0.001 * 10,
  longitudeDelta: 0.001 * 10,
};

export default function MapScreen() {
  // states :
  const [students, setStudents] = useState([]);

  // get user function:
  const getStudent = () => {
    getData("users").then(data => setStudents(data));
  };

  useEffect(() => {
    getStudent();
  }, []);

  return (
    <Screen style={styles.container}>
      {/* <Button style={styles.startButton} title='start' variant='primary' /> */}
      <MapView style={styles.map} region={defaultLocation}>
        {/* Default Location Marker (EST location) */}
        <Marker coordinate={defaultLocation}>
          <Image
            source={require("../assets/defaultPosition.png")}
            style={styles.defaultLocation}
          />
        </Marker>
        {/* Auther Student Location Markers */}

        {students.length !== 0 &&
          students.map(student => (
            <StudentMarker student={student} key={student.id} />
          ))}
      </MapView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  zoomButtonConatainer: {
    position: "absolute",
    width: "10%",
    zIndex: 100,
    top: "0%",
    right: "11%",
    alignSelf: "flex-start",
    paddingHorizontal: 5,
  },
  zoomButton: {
    width: 65,
    height: 65,
    borderRadius: 32.5,
  },
  startButton: {
    position: "absolute",
    width: "80%",
    zIndex: 100,
    bottom: "2%",
    alignSelf: "center",
  },
  map: {
    width: "100%",
    height: "100%",
  },
  defaultLocation: {
    height: 60,
    width: 60,
  },
});
