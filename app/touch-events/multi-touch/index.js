import React, { Component } from "react";
import { StatusBar } from "react-native";
import { GameEngine } from "react-native-game-engine";
import {
  SpawnWorm,
  AssignFingerToWorm,
  MoveWorm,
  ReleaseFingerFromWorm,
  RemoveWorm
} from "./systems";

export default class MultiTouch extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <GameEngine
        systems={[
          SpawnWorm,
          AssignFingerToWorm,
          MoveWorm,
          ReleaseFingerFromWorm,
          RemoveWorm
        ]}
        entities={{}}
      >
        <StatusBar hidden={true} />
      </GameEngine>
    );
  }
}
