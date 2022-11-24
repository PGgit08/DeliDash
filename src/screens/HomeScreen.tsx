import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text>DeliDash Home Screen!</Text>
            <StatusBar style="auto" />
            <Button
                onPress = {() => alert('What\'s Up! Button Pressed.')}
                title = "Press Me!"
            />
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
