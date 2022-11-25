import { View, FlatList, ListRenderItem, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface DeliPreviewInfo {
    name: string;
    distance: number;
    address: string;
    rating: number;
}

// mock datas for deli previews
const MOCKDATA: DeliPreviewInfo = {
    name: "Terry's Market",
    distance: 1,
    address: "327 North End Avenue",
    rating: 9.8
}

const PREVIEWDATA: DeliPreviewInfo[] = [
    MOCKDATA,
    MOCKDATA,
    MOCKDATA,
    MOCKDATA,
    MOCKDATA
];


/**
 * A component for deli preview info
 * @param props The deli preview info
 */
function DeliPreview(props: DeliPreviewInfo) {
    return (
        <TouchableOpacity style = {styles.deliPreviewBox} onPress = {() => alert('Pressed!')}>
            <Text style = {styles.deliPreviewText}>
                Name: {props.name} {'\n'}
                Distance: {props.distance} {'\n'}
                Address: {props.address} {'\n'}
                Rating: {props.rating}
            </Text>
        </TouchableOpacity>
    );
}

/**
 * A list of deli preview info
 */
export default function DeliPreviewList() {
    const renderItem: ListRenderItem<DeliPreviewInfo> = ({ item }) => (
        <DeliPreview 
            name = {item.name}
            distance = {item.distance}
            address = {item.address}
            rating = {item.rating}
        />
    );

    return (
        <View>
            <FlatList 
                data = {PREVIEWDATA}
                renderItem = {renderItem}
            />
        </View> 
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
