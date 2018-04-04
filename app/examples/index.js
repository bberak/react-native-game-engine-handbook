import React from "react";
import GameEngineExample from "./game-engine";
import OverrideRendererExample from "./override-renderer";
import DonkeyKong from "react-native-donkey-kong";

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
			},
			{
				heading: "DonkeyKong",
				onPress: _ => mount(<DonkeyKong />)
			}
		]
	}
}

 