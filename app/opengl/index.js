import React from "react";
import MotionBlurExample from "./motion-blur";

export default function (mount) {
	return {
		heading: "OpenGL",
		items: [
			{
				heading: "Motion Blur",
				onPress: _ => mount(<MotionBlurExample />)
			}
		]
	}
}

 