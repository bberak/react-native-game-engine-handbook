import React from "react";
import RigidBodies from "./rigid-bodies";

export default function (mount) {
	return {
		heading: "Physics",
		items: [
			{
				heading: "Rigid Bodies",
				onPress: _ => mount(<RigidBodies />)
			}
		]
	}
}

 