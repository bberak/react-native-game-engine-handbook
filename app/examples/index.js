import React from "react";
import GameEngineExample from "./game-engine";
import OverrideRendererExample from "./override-renderer";

export default function (mount) {
	return {
		heading: "Examples",
		items: [
			{
				heading: "Game Engine",
				onPress: _ => mount(<GameEngineExample />)
			},
			{
				heading: "Override Renderer",
				onPress: _ => mount(<OverrideRendererExample />)
			}
		]
	}
}

 