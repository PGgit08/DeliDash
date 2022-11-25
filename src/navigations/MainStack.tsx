import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "screens/HomeScreen";

const Stack = createStackNavigator();

/**
 * The main navigation stack for the app
 */
export default function MainStack() {
    return (
        <Stack.Navigator screenOptions = {{headerShown: false}}>
            <Stack.Screen
                name = "Home"
                component = {HomeScreen}
            />
        </Stack.Navigator>
    );
}
