import ActionSheet, { ActionSheetRef } from 'react-native-actions-sheet';
import { ReactNode, useRef } from 'react';
import { Text, View } from 'react-native';


interface Props {
    children?: ReactNode;
}


/**
 * A bottom drawer container for lists and etc.
 */
export default function BottomDrawer(props : Props) {
    const bottomDrawerRef = useRef<ActionSheetRef>(null);
    return (
        <View>
            <Text onPress = {() => bottomDrawerRef.current?.show()}>Show Deli List</Text>
            <ActionSheet ref = {bottomDrawerRef}>
                {props.children}
            </ActionSheet>
        </View>
    );
}
