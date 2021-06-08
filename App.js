import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import ColorBox from "./components/ColorBox";

const App = () => {
  return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Text style={[styles.text]}>Here are some boxes of different colors</Text>
            <ColorBox colorName="Cyan" hexCode="#2aa198"/>
            <ColorBox colorName="Blue" hexCode="#268bd2"/>
            <ColorBox colorName="Magenta" hexCode="#d33682"/>
            <ColorBox colorName="Orange" hexCode="#cb4b16"/>
        </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 40
  },
  container: {
      paddingHorizontal: 10,
      paddingTop: 40
  },
  box: {
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10
  },
  cyanBox: {
      backgroundColor: "#2aa198",
  },
  blueBox: {
      backgroundColor: "#268bd2"
  },
  magentaBox: {
      backgroundColor: "#d33682"
  },
  orangeBox: {
      backgroundColor: '#cb4b16'
  },
  boxText: {
      color: "white",
      fontWeight: "bold"
  }
});

export default App