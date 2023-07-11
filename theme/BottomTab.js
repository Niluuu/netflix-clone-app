import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import HomeScreen from "../screens/HomeScreen";
import DowlandsScreen from "../screens/DowlandsScreen";
import GameScreen from "../screens/GameScreen";
import Header from "./Header";
import DetailsScreen from "../screens/DetailsScreen";

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarStyle: { backgroundColor: "black" },
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ size }) => (
            <MaterialCommunityIcons name="home" color="white" size={size} />
          ),
          header: () => {
            return <Header />;
          },
          headerStyle: {
            height: 80, // Specify the height of your custom header
          },
        }}
      />
      <Tab.Screen
        name="GameScreen"
        component={GameScreen}
        options={{
          tabBarLabel: "GameScreen",
          tabBarIcon: ({ size }) => (
            <MaterialCommunityIcons
              name="gamepad-variant-outline"
              color="white"
              size={size}
            />
          ),
          header: () => {
            return <Header title={"Game Screen"} />;
          },
        }}
      />
      <Tab.Screen
        name="DetailsScreen"
        component={DetailsScreen}
        options={{
          tabBarLabel: "DetailsScreen",
          tabBarIcon: ({ size }) => (
            <MaterialCommunityIcons
              name="new-box"
              color="white"
              size={size}
            />
          ),
          header: () => {
            return <Header title={"Details"} />;
          },
        }}
      />
      <Tab.Screen
        name="DowlandsScreen"
        component={DowlandsScreen}
        options={{
          tabBarLabel: "DowlandsScreen",
          tabBarIcon: ({ size }) => (
            <MaterialCommunityIcons
              name="arrow-down-circle-outline"
              color="white"
              size={size}
            />
          ),
          header: () => {
            return <Header title={"Dowlands"} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
