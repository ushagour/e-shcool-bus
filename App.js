import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import getData from "./app/firebase/getData";

export default function App() {
  useEffect(() => {
    getData("users").then(data => {
      console.log(data);
    });
  }, []);

  return (
    <View style={styles.container}>
      {/* {users.map(user => (
        <Text key={user.id}>{user.name}</Text>
      ))} */}
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
