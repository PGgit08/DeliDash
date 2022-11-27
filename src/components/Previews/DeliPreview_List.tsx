import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import DeliInfo_Preview from 'types/DeliInfo_Preview';

/**
 * A DeliList list component for deli preview info
 * @param {DeliInfo_Preview} deliInfo The deli preview info
 */
export default function DeliPreview_List({ deliInfo }: { deliInfo: DeliInfo_Preview }) {
    const { deliID } = deliInfo.id;
    return (
        <TouchableOpacity style = {styles.deliPreviewBox} onPress = {() => alert('Deli ' + deliID + ' Pressed!')}>
            <Text style = {styles.deliPreviewText}>
                Name: {deliInfo.name} {'\n'}
                Distance: {deliInfo.distance} miles away {'\n'}
                Address: {deliInfo.address} {'\n'}
                Rating: {deliInfo.rating}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    deliPreviewBox: {
        backgroundColor: '#141414',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16
    },

    deliPreviewText: {
        color: 'white'
    }
});
