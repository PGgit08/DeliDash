import HomePreviewBox from 'components/Containers/HomePreviewBox';
import DeliList from 'components/Lists/DeliList';
import DeliPreview from 'components/Previews/DeliPreview';
import { Button, StyleSheet, Text, View } from 'react-native';
import DeliInfo from 'types/DeliInfo';


// deli mock data for now
const MOCK_DELIDATA: DeliInfo = {
    name: "Terry's Market",
    distance: 1,
    address: "327 North End Avenue",
    rating: 9.8,
    sells: ["Medicine", "Snacks"],
    images: ["img1", "img2"],
    id: 0 // id is 0 for now, it gets changed later
}

// deli mock data for now
const MOCK_DELILIST: DeliInfo[] = [
    {...MOCK_DELIDATA, id: 1},
    {...MOCK_DELIDATA, id: 2},
    {...MOCK_DELIDATA, id: 3},
    {...MOCK_DELIDATA, id: 4},
    {...MOCK_DELIDATA, id: 5}
]; 


/**
 * The home screen
 */
export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <HomePreviewBox>
                <DeliList data = {MOCK_DELILIST} />
                {/* <DeliPreview deliInfo = {MOCK_DELIDATA}/> */}
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
