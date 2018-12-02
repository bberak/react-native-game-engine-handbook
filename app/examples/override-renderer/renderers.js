import React, { PureComponent } from "react";
import { StyleSheet, View, Text } from "react-native";
import { GLView } from "expo";
import REGL from "regl";
import mat4 from "gl-mat4";
import bunny from "bunny";
import _ from "lodash";

class ReglView extends PureComponent {
  constructor() {
    super();
    this.state = {};
  }

  onContextCreate = gl => {
    const regl = REGL(gl);
    const rngl = gl.getExtension("RN");

    this.setState({
      frame: props => {

        regl.clear({
          depth: 1,
          color: [0, 0, 0, 1]
        });

        if (this.props.children)
          this.props.children.forEach(entity => entity.renderer(regl)(entity));

        gl.endFrameEXP();
      }
    });
  };

  render() {
    if (this.state.frame) this.state.frame(this.props);

    return (
      <GLView
        style={this.props.style}
        onContextCreate={this.onContextCreate}
      />
    );
  }
}

const WebglRenderer = (state, screen) => {
  return (
    <ReglView key={"WebglRenderer"} style={StyleSheet.absoluteFill}>
      {Object.keys(state)
        .filter(key => state[key].renderer)
        .map(key => state[key])}
    </ReglView>
  );
};

const Bunny = _.memoize(regl => {
  return regl({
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

    // and this converts the faces of the mesh into elements
    elements: bunny.cells,

    uniforms: {
      model: mat4.identity([]),
      view: (_, { angle }) => {
        return mat4.lookAt(
          [],
          [30 * Math.cos(angle), 2.5, 30 * Math.sin(angle)],
          [0, 2.5, 0],
          [0, 1, 0]
        );
      },
      projection: ({ viewportWidth, viewportHeight }) =>
        mat4.perspective(
          [],
          Math.PI / 4,
          viewportWidth / viewportHeight,
          0.01,
          1000
        )
    }
  });
});

export { Bunny, WebglRenderer };
