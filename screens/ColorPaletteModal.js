import React, {useState, useCallback} from 'react'
import {View, Text, TouchableOpacity, StyleSheet, TextInput, Alert} from 'react-native'

const ColorPaletteModal = ({navigation}) => {
    const [name, setName] = useState('');

    const handleSubmit = useCallback(() => {
        if (!name){
            Alert.alert("Please enter a palette name")
        } else {
            navigation.navigate('Home')
        }
    }, [name]);
    return (
        <View style={styles.container}>
            <Text style={styles.name}>Name of the palette</Text>
            <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="Palette name"/>
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        borderColor: 'grey',
        borderWidth: 1,
        padding: 5,
        borderRadius: 5,
        marginBottom: 40
    },
    container: {
        padding: 10,
        backgroundColor: 'white',
        flex: 1
    },
    button: {
        height: 40,
        backgroundColor: 'teal',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    },
    name: {
        marginBottom: 10
    }
})

export default ColorPaletteModal
