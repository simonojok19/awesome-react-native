import React, {useCallback, useEffect, useState} from "react";
import {FlatList, StyleSheet, Text, TouchableOpacity} from "react-native";
import PalettePreview from "../components/PalettePreview";

const Home = ({navigation, route}) => {
    const newColors = route.params ? route.params.palette : undefined;
    console.log(newColors)

    const [colors, setColors] = useState([]);
    const [isRefreshing, setRefreshing] = useState(true);

    const fetchColors = useCallback(() => {
        fetch("https://color-palette-api.kadikraman.now.sh/palettes")
            .then(response => response.json())
            .then(data => setColors(data))
            .then(() => {
                setRefreshing(false)
            })
            .catch(error => console.log(error, "error"))
    }, []);

    useEffect(() => {
        if(newColors) {
            setColors(palettes => [newColors, ...colors])
        }
    }, [newColors])

    const handleRefresh = useCallback(() => {
        setRefreshing(true)
        fetchColors();
    }, []);

    useEffect(() => {
        fetchColors();
    }, []);
    return (
        <FlatList
            refreshing={isRefreshing}
            onRefresh={handleRefresh}
            style={styles.list}
            data={colors} keyExtractor={item => item.paletteName} renderItem={({item, index}) => (
            <PalettePreview
                handlePress={() => {
                    navigation.navigate('ColorPalette', item)
                }}
                colorPalette={item}
            />
        )}
            ListHeaderComponent={<TouchableOpacity onPress={() => {navigation.navigate('ColorPaletteModal')}}>
                <Text>Launch Modal</Text>
            </TouchableOpacity>}
        />
    )
}

const styles = StyleSheet.create({
    list: {
        padding: 10,
        backgroundColor: 'white'
    }
})

export default Home
