import React, { Component } from "react";
import { AppRegistry, View, Modal } from "react-native";
import CloseButton from "./app/table-of-contents/closeButton";
import EStyleSheet from "react-native-extended-stylesheet";

import TableOfContents from "./app/table-of-contents";
import TouchChapter from "./app/touch-events";
import PhysicsChapter from "./app/physics";
import SensorsChapter from "./app/sensors";
import ExamplesChapter from "./app/examples";
import OpenGLChapter from "./app/opengl";

EStyleSheet.build();

export default class RNGEHandbook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sceneVisible: false,
      scene: null
    };
  }

  mountScene = scene => {
    this.setState({
      sceneVisible: true,
      scene: scene
    });
  };

  unMountScene = () => {
    this.setState({
      sceneVisible: false,
      scene: null
    });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <TableOfContents
          sceneVisible={this.state.sceneVisible}
          contents={{
            heading: "Chapters",
            items: [
              TouchChapter(this.mountScene),
              PhysicsChapter(this.mountScene),
              SensorsChapter(this.mountScene),
              OpenGLChapter(this.mountScene),
              ExamplesChapter(this.mountScene)
            ]
          }}
        />
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.sceneVisible}
          onRequestClose={_ => {}}
        >
          {this.state.scene}

          <CloseButton onPress={this.unMountScene} />
        </Modal>
      </View>
    );
  }
}

AppRegistry.registerComponent('RNGEHandbook', () => RNGEHandbook);
