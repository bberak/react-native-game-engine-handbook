import React, { PureComponent } from "react";
import { AppRegistry, StyleSheet, StatusBar } from "react-native";
import { GameEngine } from "react-native-game-engine";
import { Finger } from "./renderers";
import { MoveFinger } from "./systems"

export default class GameEngineExample extends PureComponent {
  constructor() {
    super();
  }

  render() {
    return (
      <GameEngine 
        style={styles.container} 
        systems={[MoveFinger]}
        entities={{ 
          1: { position: [40, 200],   renderer: <Finger />}, 
          2: { position: [100, 200], renderer: <Finger />}, 
          3: { position: [160, 200], renderer: <Finger />}, 
          4: { position: [220, 200], renderer: <Finger />}, 
          5: { position: [280, 200], renderer: <Finger />}
        }}>

        <StatusBar hidden={true} />

      </GameEngine>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  }
});