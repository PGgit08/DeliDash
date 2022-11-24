import 'react-native-gesture-handler';
import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from 'navigations/main-navigation';

function App() {
	return (
		<NavigationContainer>
			<MainStack/>
		</NavigationContainer>
	);
}

registerRootComponent(App);
