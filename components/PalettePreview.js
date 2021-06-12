import React from "react";
import {TouchableOpacity, Text, StyleSheet} from "react-native";

const PalettePreview = ({handlePress, colorPalette}) => {
    return (
        <TouchableOpacity onPress={handlePress}>
            <Text style={styles.text}>{colorPalette.paletteName}</Text>
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
