import { StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { Screen, StudentInfoModal } from "../components";
import { DefaultMarker, StudentMarker } from "../components/Map";
import MapView from "react-native-maps";
import { getData } from "../firebase";
import MapViewDirections from "react-native-maps-directions";

/// Default location or School location (EST - location)
const defaultLocation = {
  // position :
  latitude: 34.05011,
  longitude: -6.812845,
  // camera zoom :
  latitudeDelta: 0.001 * 13,
  longitudeDelta: 0.001 * 13,
};

export default function MapScreen() {
  // states :
  const [students, setStudents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [studentDetails, setStudentDetails] = useState(null);

  // get user function:
  const getStudent = () => {
    getData("users").then(data => setStudents(data));
  };
  const closeModalHandler = () => setShowModal(false);
  const openModalHandler = () => setShowModal(true);

  const origin = {
    latitude: defaultLocation.latitude,
    longitude: defaultLocation.longitude,
  };
  const destination = { latitude: 34.047239, longitude: -6.797738 };
  const GOOGLE_MAPS_APIKEY = "AIzaSyBk7oowMsFGDVYrHhBE_Q7APXUIhxCHgR4";

  useEffect(() => {
    getStudent();
  }, []);

  return (
    <Screen style={styles.container}>
      {/* Begin Student Info Modal  */}
      <StudentInfoModal
        show={showModal}
        onClose={closeModalHandler}
        student={studentDetails}
      />
      {/* End Student Info Modal  */}

      <MapView
        style={styles.map}
        region={defaultLocation}
        initialRegion={defaultLocation}
        fitToElements={true}>
        {/* Default Location Marker (EST location) */}
        <DefaultMarker defaultLocation={defaultLocation} />
        {/* Begin Other Students Markers */}
        {students.length !== 0 &&
          students.map(student => (
            <StudentMarker
              student={student}
              key={student.id}
              onPress={() => {
                setStudentDetails(student);
                openModalHandler();
              }}
            />
          ))}
        {/* End Other Students Markers */}

        <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={GOOGLE_MAPS_APIKEY}
        />
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
});
