import React from "react";
import {FlatList, SafeAreaView, StyleSheet, Text} from "react-native";
import ColorBox from "../components/ColorBox";

const ColorPalette = ({route}) => {
    const {colors, paletteName} = route.params
    return (
        <FlatList data={colors} renderItem={
            ({item, index}) => <ColorBox key={index} colorName={item.colorName} hexCode={item.hexCode}/>}
                  keyExtractor={item => item.colorName}
        />
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 40,
        backgroundColor: 'white'
    },
    container: {
        paddingHorizontal: 10,
        paddingTop: 40
    },
    box: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 1,
        elevation: 10,
    }
});

export default ColorPalette
