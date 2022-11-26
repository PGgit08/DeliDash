import { Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DeliInfo from 'types/DeliInfo';

/**
 * A preview for an individual deli
 * @param deliInfo The deli information
 */
export default function DeliPreview({ deliInfo }: { deliInfo: DeliInfo }) {
    return (
        <TouchableOpacity style = {styles.deliPreviewBox}>
            <Text style = {styles.deliPreviewText}>
                Name: {deliInfo.name} {"\n"}
                Distance: {deliInfo.distance} {"\n"}
                Rating: {deliInfo.rating} {"\n"}
                Sells: {deliInfo.sells} {"\n"}
                Images: {deliInfo.images}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    deliPreviewBox: {
        backgroundColor: '#141414',
    },

    deliPreviewText: {
        color: 'white'
    }
});

