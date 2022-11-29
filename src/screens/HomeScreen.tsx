import HomePreviewBox from 'components/Containers/HomePreviewBox';
import { StyleSheet, View } from 'react-native';
import DeliList from 'components/Lists/DeliList';
import { MOCK_DELILIST } from 'src/mock';
import DeliPreview from 'components/Previews/DeliPreview';


/**
 * The Home Screen
 */
export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <HomePreviewBox>
                <DeliList data = {MOCK_DELILIST} />
                {/* <DeliPreview deliInfo = {MOCK_DELILIST}/> */}
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
