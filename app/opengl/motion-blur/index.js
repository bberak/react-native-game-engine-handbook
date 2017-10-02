import React, { PureComponent } from "react";
import { AppRegistry, StyleSheet, StatusBar } from "react-native";
import { GameEngine } from "react-native-game-engine";
import { Square } from "./renderers";
import { Rotate, Scale } from "./systems"

export default class MotionBlueExample extends PureComponent {
  constructor() {
    super();
  }

  render() {
    return (
      <GameEngine 
        style={styles.container} 
        systems={[Rotate, Scale]}
        entities={{ 
          square: { angle: 0, scale: 0.5, renderer: <Square />}
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