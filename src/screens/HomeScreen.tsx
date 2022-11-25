import BottomDrawer from 'components/Containers/BottomDrawer';
import DeliPreviewList from 'components/Lists/DeliPreviewList';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

/**
 * The home screen
 */
export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <BottomDrawer>
                <DeliPreviewList/>
            </BottomDrawer>
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
