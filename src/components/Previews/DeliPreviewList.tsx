import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import DeliInfo from 'types/DeliInfo';

/**
 * A list component for deli preview info
 * @param deliInfo The deli info
 */
export default function DeliPreviewList({ deliInfo }: { deliInfo: DeliInfo }) {
    const { id } = deliInfo;
    return (
        <TouchableOpacity style = {styles.deliPreviewBox} onPress = {() => alert('Deli ' + id + ' Pressed!')}>
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
