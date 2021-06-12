import React, {useState, useEffect, useCallback} from "react";
import {FlatList, StyleSheet} from "react-native";
import PalettePreview from "../components/PalettePreview";

const Home = ({navigation}) => {
    const [colors, setColors] = useState([]);
    const fetchColors = useCallback(async () => {
        const results = await fetch("https://color-palette-api.kadikraman.now.sh/palettes")
        if(results.ok) {
            const palettes = await results.json;
            setColors(palettes);
        }
    }, []);

    useEffect(() => {
        fetchColors().then(r => console.log(r));
    }, []);
    return (
        <FlatList
            style={styles.list}
            data={colors} keyExtractor={item => item.padding} renderItem={({item, index}) => (
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
