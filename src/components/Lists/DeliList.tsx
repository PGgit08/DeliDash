import { View, FlatList, ListRenderItem } from 'react-native';
import DeliInfo_Preview from 'types/DeliInfo_Preview';
import DeliPreview_List from 'components/Previews/DeliPreview_List';

// i love u peter // me 2 ❤❤ lets keep this lmao // yea


/**
 * A list of DeliList_Preview previews
 */
export default function DeliList({ data }: { data: DeliInfo_Preview[] }) {
    const renderItem: ListRenderItem<DeliInfo_Preview> = ({ item }) => (
        <DeliPreview_List 
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
