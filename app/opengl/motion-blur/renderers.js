import React, { PureComponent } from "react";
import { StyleSheet, View } from "react-native";
import { Surface } from "gl-react-expo";
import { Node, Shaders, GLSL, Uniform, NearestCopy } from "gl-react";

const shaders = Shaders.create({
  MotionBlur: {
    frag: GLSL`
      precision highp float;
      varying vec2 uv;
      uniform sampler2D children, backbuffer;
      uniform float persistence;
      void main () {
        gl_FragColor = vec4(mix(
          texture2D(children, uv),
          texture2D(backbuffer, uv),
          persistence
        ).rgb, 1.0);
      }`
  },
  HelloGL: {
    frag: GLSL`
      precision highp float;
      varying vec2 uv;
      uniform float blue;
      void main() {
        gl_FragColor = vec4(uv.x, uv.y, blue, 1.0);
      }`
  },
  Rotate: {
    frag: GLSL`
      precision highp float;
      varying vec2 uv;
      uniform float angle, scale;
      uniform sampler2D children;
      void main() {
        mat2 rotation = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
        vec2 p = (uv - vec2(0.5)) * rotation / scale + vec2(0.5);
        gl_FragColor =
          p.x < 0.0 || p.x > 1.0 || p.y < 0.0 || p.y > 1.0
          ? vec4(0.0)
          : texture2D(children, p);
      }`
  }
});

const MotionBlur = ({ children, persistence }: *) => (
  <NearestCopy>
    <Node
      shader={shaders.MotionBlur}
      backbuffering
      uniforms={{ children, backbuffer: Uniform.Backbuffer, persistence }}
    />
  </NearestCopy>
);

class HelloGL extends PureComponent {
  props: {
    blue: number
  };
  render() {
    const { blue } = this.props;
    return <Node shader={shaders.HelloGL} uniforms={{ blue }} />;
  }
}

class Rotate extends PureComponent {
  props: {
    scale: number,
    angle: number,
    children: any
  };
  render() {
    const { angle, scale, children } = this.props;
    return (
      <Node shader={shaders.Rotate} uniforms={{ scale, angle, children }} />
    );
  }
}

class Square extends PureComponent {
  render() {
    let size = Math.min(this.props.screen.width, this.props.screen.height)
    return (
      <View style={css.container}>
        <Surface style={{ width: size, height: size }}>
          <MotionBlur persistence={0.76}>
            <Rotate scale={this.props.scale} angle={this.props.angle}>
              <HelloGL blue={0.5} />
            </Rotate>
          </MotionBlur>
        </Surface>
      </View>
    );
  }
}

const css = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000" 
  }
})

export { Square };
