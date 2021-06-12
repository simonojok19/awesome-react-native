import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import ColorPalette from "./screens/ColorPalette";
import Home from "./screens/Home";

const RootStack = createStackNavigator()
const MainStack = createStackNavigator()

const MainStackScreen = () => {
    return (
        <MainStack.Navigator>
            <MainStack.Screen name="Home" component={Home}/>
            <MainStack.Screen name="ColorPalette" component={ColorPalette}
                              options={({route}) => ({
                                  title: route.params.paletteName
                              })}/>
        </MainStack.Navigator>
    );
}
const App = () => {
  return (
      <NavigationContainer>
          <RootStack.Navigator>
              <RootStack.Screen name="Home" component={Home} />
              <RootStack.Screen name="ColorPalette" component={ColorPalette} options={({route}) =>({
                  title: route.params.paletteName
              })}/>
          </RootStack.Navigator>
      </NavigationContainer>
  );
}
export default App
