import 'react-native-gesture-handler';
import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from 'navigations/MainStack';
import { AppCtxProvider } from './contexts/AppCtx';

/**
 * The main app component
 */
function App() {
	return (
		<AppCtxProvider>
			<NavigationContainer>
				<MainStack/>
			</NavigationContainer>
		</AppCtxProvider>
	);
}

registerRootComponent(App);
