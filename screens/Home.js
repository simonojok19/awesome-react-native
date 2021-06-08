import React from "react";
import {Text, TouchableOpacity, View} from "react-native";

const Home = ({navigation}) => {
    return (
        <View>
            <TouchableOpacity onPress={() => {navigation.navigate("ColorPalette")}}>
                <Text>Home Screen</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home