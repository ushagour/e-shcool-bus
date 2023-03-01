import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ProfileScreen, SettingsScreen, MapScreen } from "../screens";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";
import colors from "../config/colors";

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name='Home'
          component={MapScreen}
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <MaterialCommunityIcons
                name='home'
                color={focused ? colors.primary : color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name='Profile'
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <MaterialCommunityIcons
                name='account'
                color={focused ? colors.primary : color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name='Settings'
          component={SettingsScreen}
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <FontAwesome
                name='gear'
                color={focused ? colors.primary : color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
