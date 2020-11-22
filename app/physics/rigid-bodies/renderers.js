import React, { Component, PureComponent } from "react";
import { StyleSheet, View, ART, Dimensions } from "react-native";
import Svg, { Path, Rect } from "react-native-svg";
import { Vector } from "matter-js";
import Animated from "react-native-reanimated";

const Box = (props) => {
  const width = props.size[0];
    const height = props.size[1];
    const x = props.body.position.x - width / 2;
    const y = props.body.position.y - height / 2;
    const angle = props.body.angle;

    return (
      <Animated.View
        style={
          {
            position: "absolute",
            left: x,
            top: y,
            width: width,
            height: height,
            transform: [{ rotate: angle + "rad" }],
            backgroundColor: props.color || "pink"
          }
        }
      />
    );
}

export {
  Box
};
