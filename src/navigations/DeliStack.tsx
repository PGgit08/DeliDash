import { createStackNavigator } from "@react-navigation/stack";
import DeliPreviewList from "components/Lists/DeliPreviewList";

const Stack = createStackNavigator();

/**
 * The stack for navigating through deli info
 */
export default function DeliStack() {
    return (
        <Stack.Navigator screenOptions = {{headerShown: false}}>
            <Stack.Screen
                name = "DeliPreviewList"
                component = {DeliPreviewList}
            />
        </Stack.Navigator>
    );
}
