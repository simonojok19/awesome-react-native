import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";

const App = () => {
  return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Text style={[styles.text]}>Here are some boxes of different colors</Text>
          <View style={[styles.cyanBox]}>
              <Text style={[styles.boxText]}>Cyan: #2aa198</Text>
          </View>
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
  cyanBox: {
      backgroundColor: "#2aa198",
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center'
  },
  boxText: {
      color: "white",
      fontWeight: "bold"
  }
});

export default App