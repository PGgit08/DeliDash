import HomePreviewBox from 'components/Containers/HomePreviewBox';
import DeliPreviewList from 'components/Lists/DeliPreviewList';
import DeliStack from 'navigations/DeliStack';
import { Button, StyleSheet, Text, View } from 'react-native';

/**
 * The home screen
 */
export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <HomePreviewBox>
                <DeliStack/>
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
