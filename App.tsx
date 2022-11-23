import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

const App = () => {
	return (
		<View style={styles.container}>
			<Text>Hello World!</Text>
			<Button
				onPress = {() => alert('What\'s Up! Button Pressed.')}
				title = "Press Me!"
			/>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default App;
