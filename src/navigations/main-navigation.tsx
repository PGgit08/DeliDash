import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "screens/HomeScreen";

const Stack = createStackNavigator();

// export the main stack navigation for the app
export default function MainStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name = "Home"
                component = {HomeScreen}
            />
        </Stack.Navigator>
    );
}
