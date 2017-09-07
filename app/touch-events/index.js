import React from "react";
import SingleTouch from "./single-touch"
import MultiTouch from "./multi-touch"

export default function (mount) {
	return {
		heading: "Touch Events",
		items: [
			{
				heading: "Single Touch",
				onPress: _ => mount(<SingleTouch />)
			},
			{
				heading: "Multi Touch",
				onPress: _ => mount(<MultiTouch />)
			}
		]
	}
}

 