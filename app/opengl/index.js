import React from "react";
import MotionBlurExample from "./motion-blur";
import ReglExmaple from "./regl"

export default function (mount) {
	return {
		heading: "OpenGL",
		items: [
			{
				heading: "Motion Blur",
				onPress: _ => mount(<MotionBlurExample />)
			},
			{
				heading: "Regl",
				onPress: _ => mount(<ReglExmaple />)
			}
		]
	}
}

 