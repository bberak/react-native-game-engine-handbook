import React from "react";
import GameEngineExample from "./game-engine";

export default function (mount) {
	return {
		heading: "Examples",
		items: [
			{
				heading: "Game Engine",
				onPress: _ => mount(<GameEngineExample />)
			}
		]
	}
}

 