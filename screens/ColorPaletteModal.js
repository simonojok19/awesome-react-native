import React, {useState} from 'react'
import {View, Text, TouchableOpacity, StyleSheet, TextInput} from 'react-native'

const ColorPaletteModal = () => {
    const {name, setName} = useState('');
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} value={name} onChangeText={setName}/>
            <TouchableOpacity>
                <Text>Submit</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        borderColor: 'grey',
        borderWidth: 1,
        padding: 5,
        borderRadius: 5
    },
    container: {
        padding: 5,
        backgroundColor: 'white',
        flex: 1
    }
})

export default ColorPaletteModal
