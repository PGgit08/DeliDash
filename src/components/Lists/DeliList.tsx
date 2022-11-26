import { View, FlatList, ListRenderItem } from 'react-native';
import DeliInfo from 'types/DeliInfo';
import DeliPreviewList from 'components/Previews/DeliPreviewList';

// i love u peter // me 2 ❤❤ lets keep this lmao // yea


/**
 * A list of DeliListPreview previews
 */
export default function DeliList({ data }: { data: DeliInfo[] }) {
    const renderItem: ListRenderItem<DeliInfo> = ({ item }) => (
        <DeliPreviewList 
            deliInfo = {item}
        />
    );

    return (
        <View>
            <FlatList 
                data = {data}
                renderItem = {renderItem}
            />
        </View> 
    );
}
