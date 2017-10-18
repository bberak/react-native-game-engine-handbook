import React from "react";
import MotionBlurExample from "./motion-blur";
import StanfordBunnyExmaple from "./stanford-bunny";
import GameOfLifeExample from "./game-of-life";
import OverrideRendererExample from "../examples/override-renderer";

export default function (mount) {
	return {
		heading: "OpenGL",
		items: [
			{
				heading: "Motion Blur",
				onPress: _ => mount(<MotionBlurExample />)
			},
			{
				heading: "Stanford Bunny",
				onPress: _ => mount(<StanfordBunnyExmaple />)
			},
			{
				heading: "Game of Life",
				onPress: _ => mount(<GameOfLifeExample />)
			},
			{
				heading: "OpenGL Renderer",
				onPress: _ => mount(<OverrideRendererExample />)
			}
		]
	}
}

 