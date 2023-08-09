import { Ionicons } from "@expo/vector-icons";
import { Provider } from "react-redux";
import store from "./store";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RecentExpenses from "./screens/RecentExpenses";
import AllExpenses from "./screens/AllExpenses";
import colors from "./constants/colors";
import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ManageScreen from "./screens/ManageScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName: keyof (typeof Ionicons)["glyphMap"];

          if (route.name === "Home") {
            iconName = focused ? "hourglass" : "hourglass-outline";
          } else if (route.name === "Expenses") {
            iconName = focused ? "calendar" : "calendar-outline";
          }

          return <Ionicons name={iconName!} size={24} color={color} />;
        },

        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: colors.primary100,
        tabBarStyle: {
          backgroundColor: colors.accent500,
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
        headerStyle: {
          backgroundColor: colors.accent500,
        },
        headerTintColor: "white",
        headerTitleStyle: {
          fontWeight: "600",
        },

        headerTitleAlign: "center",
        headerRight: ({ tintColor, pressColor }) => (
          <Ionicons
            style={{ marginRight: 20 }}
            name="add"
            size={24}
            color={tintColor || pressColor}
            onPress={() => navigation.navigate("ManageExpenses")}
          />
        ),
      })}
    >
      <Tab.Screen
        options={{ headerTitle: "Recent Expenses", tabBarLabel: "Recent" }}
        name="Home"
        component={RecentExpenses}
      />
      <Tab.Screen
        options={{
          headerTitle: "All Expenses",
          tabBarLabel: "Expenses",
        }}
        name="Expenses"
        component={AllExpenses}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: colors.accent500,
            },
            headerTintColor: "white",
            headerTitleStyle: {
              fontWeight: "600",
            },
            headerTitleAlign: "center",
          }}
        >
          <Stack.Screen
            name="ViewExpenses"
            component={TabNavigation}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="ManageExpenses"
            component={ManageScreen}
            options={{ presentation: "modal", animation: "slide_from_bottom" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
