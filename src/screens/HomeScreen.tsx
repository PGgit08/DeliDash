import HomePreviewBox from 'components/Containers/HomePreviewBox';
import DeliPreviewList from 'components/Lists/DeliPreviewList';
import { Button, StyleSheet, Text, View } from 'react-native';

/**
 * The home screen
 */
export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <HomePreviewBox>
                <DeliPreviewList />
            </HomePreviewBox>
        </View>
    );
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'black',
		alignItems: 'center',
		justifyContent: 'flex-end'
	},
});
