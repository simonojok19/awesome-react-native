import React from "react";
import {View, Text, SafeAreaView, StyleSheet, FlatList} from "react-native";
import ColorBox from "./components/ColorBox";
import {NavigationContainer} from "@react-navigation/native";

const App = () => {
  return (
      <NavigationContainer>
          <SafeAreaView style={styles.safeArea}>
              <FlatList data={COLORS} renderItem={
                  ({item, index}) => <ColorBox colorName={item.colorName} hexCode={item.hexCode}/>}
                        keyExtractor={item => item.colorName}
                        ListHeaderComponent={<Text>Solarized Color</Text>}
              />
          </SafeAreaView>
      </NavigationContainer>
  );
}
export default App