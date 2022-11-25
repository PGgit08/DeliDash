import 'react-native-gesture-handler';
import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from 'navigations/MainStack';

/**
 * The main app component
 */
function App() {
	return (
		<NavigationContainer>
			<MainStack/>
		</NavigationContainer>
	);
}

registerRootComponent(App);
