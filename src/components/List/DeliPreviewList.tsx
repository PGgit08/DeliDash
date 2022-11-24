import { View, SafeAreaView, FlatList, ListRenderItem, Text } from 'react-native';

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

// a component for a deli preview
function DeliPreview(deliPreivewInfo: DeliPreviewInfo) {
    return (
        <View>
            <Text>{deliPreivewInfo.name}</Text>
        </View>
    );
}

// a list of deli previews on the home page
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
        <SafeAreaView>
            <FlatList 
                data = {PREVIEWDATA}
                renderItem = {renderItem}
            />
        </SafeAreaView>
    );
}
