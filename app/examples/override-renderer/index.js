import React, { PureComponent } from "react";
import { AppRegistry, StyleSheet, StatusBar } from "react-native";
import { GameEngine } from "react-native-game-engine";
import { WebglRenderer, Bunny } from "./renderers";
import { Rotate } from "./systems";

export default class OverrideRendererExample extends PureComponent {
  constructor() {
    super();
  }

  render() {
    return (
      <GameEngine
        style={styles.container}
        systems={[Rotate]}
        renderer={WebglRenderer}
        entities={{
          bunny: { angle: 0, renderer: Bunny },
        }}
      >
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
