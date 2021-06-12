import React from "react";
import {TouchableOpacity, Text, StyleSheet, FlatList} from "react-native";

const PalettePreview = ({handlePress, colorPalette}) => {
    return (
        <TouchableOpacity onPress={handlePress}>
            <Text style={styles.text}>{colorPalette.paletteName}</Text>
            <FlatList
                horizontal={true}
                data={colorPalette.colors.slice(0, 5)}
                keyExtractor={item => item.colorName}
                renderItem={({item}) => <Text>{item.colorName}</Text>}
            />
        </TouchableOpacity>
    )
}
export default PalettePreview;

const styles = StyleSheet.create({
    text: {
        fontWeight: 'bold',
        fontSize: 18
    }
})
