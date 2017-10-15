import React, { PureComponent } from "react";
import { AppRegistry, StyleSheet, StatusBar } from "react-native";
import { GameEngine } from "react-native-game-engine";
import { GameOfLife } from "./renderers";

export default class GameOfLifeExample extends PureComponent {
  constructor() {
    super();
  }

  render() {
    return (
      <GameEngine 
        style={styles.container} 
        entities={{ 
          gol: { renderer: <GameOfLife /> }
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