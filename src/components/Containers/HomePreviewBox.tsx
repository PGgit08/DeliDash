import { ReactNode } from 'react';
import { Text, View, StyleSheet } from 'react-native';


/**
 * A bottom container box for showing deli preview
 */
export default function HomePreviewBox({ children }: { children?: ReactNode }) {
    return (
        <View style = {styles.box}>
            { children }
        </View>
    );
}

// To change later
const styles = StyleSheet.create({
    box: {
        backgroundColor: 'black',
        width: '98%',
        height: '43%',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 25
    }
});
