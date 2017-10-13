import React, { PureComponent, Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { WebGLView } from "react-native-webgl";
import REGL from "regl";
import mat4 from "gl-mat4";
import bunny from "bunny";

class ReglView extends Component {
  constructor() {
    super();
    this.state = {};
  }

  onContextCreate = gl => {
    this.setState({
      regl: REGL(gl),
      rngl: gl.getExtension("RN")
    });
  };

  render() {
    if (this.props.draw && this.state.regl && this.state.rngl) {
      this.props.draw(this.state.regl);
      this.state.rngl.endFrame();
    }

    return (
      <WebGLView
        style={this.props.style}
        onContextCreate={this.onContextCreate}
      />
    );
  }
}

class Bunny extends PureComponent {
  draw = regl => {
    regl.clear({
      depth: 1,
      color: [0, 0, 0, 1]
    });

    regl({
      vert: `
        precision mediump float;
        attribute vec3 position;
        uniform mat4 model, view, projection;
        void main() {
          gl_Position = projection * view * model * vec4(position, 1);
        }`,

      frag: `
        precision mediump float;
        void main() {
          gl_FragColor = vec4(1, 1, 1, 1);
        }`,

      // this converts the vertices of the mesh into the position attribute
      attributes: {
        position: bunny.positions
      },

      // and this converts the faces fo the mesh into elements
      elements: bunny.cells,

      uniforms: {
        model: mat4.identity([]),
        view: mat4.lookAt(
          [],
          [
            30 * Math.cos(this.props.angle),
            2.5,
            30 * Math.sin(this.props.angle)
          ],
          [0, 2.5, 0],
          [0, 1, 0]
        ),
        projection: ({ viewportWidth, viewportHeight }) =>
          mat4.perspective(
            [],
            Math.PI / 4,
            viewportWidth / viewportHeight,
            0.01,
            1000
          )
      }
    })();
  };

  render() {
    return <ReglView style={StyleSheet.absoluteFill} draw={this.draw} />;
  }
}

export { Bunny };
