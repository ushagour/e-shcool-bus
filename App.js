import { StatusBar } from "expo-status-bar";
import { AppNavigator, AuthNavigator } from "./app/navigation";

export default function App() {
  return (
    <>
      {/* <AuthNavigator /> */}
      <AppNavigator />
      <StatusBar style='auto' />
    </>
  );
}
