const Rotate = (entities, { touches }) => {
	let move = touches.find(x => x.type === "move");

	if (move){
		entities.bunny.yaw += move.delta.pageX * 0.01;
		entities.bunny.pitch += move.delta.pageY * 0.01;
	}

	return entities;
}

export { Rotate };