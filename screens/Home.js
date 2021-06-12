import React, {useState, useEffect, useCallback} from "react";
import {FlatList, StyleSheet} from "react-native";
import PalettePreview from "../components/PalettePreview";

const Home = ({navigation}) => {
    const [colors, setColors] = useState([]);
    const fetchColors = useCallback(() => {
        fetch("https://color-palette-api.kadikraman.now.sh/palettes")
            .then(response => response.json())
            .then(data => setColors(data))
            .catch(error => console.log(error, "error"))
    }, []);

    useEffect(() => {
        fetchColors();
    }, []);
    return (
        <FlatList
            style={styles.list}
            data={colors} keyExtractor={item => item.paletteName} renderItem={({item, index}) => (
            <PalettePreview
                handlePress={() => {navigation.navigate('ColorPalette', item)}}
                colorPalette={item}
            />
        )}/>
    )
}

const styles = StyleSheet.create({
    list: {
        padding: 10,
        backgroundColor: 'white'
    }
})

export default Home
