import { ReactNode } from 'react';
import { Text, View, StyleSheet } from 'react-native';


interface Props {
    children?: ReactNode;
}


/**
 * A bottom container box for showing deli preview
 */
export default function HomePreviewBox(props: Props) {
    return (
        <View style = {styles.box}>
            { props.children }
        </View>
    );
}

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
