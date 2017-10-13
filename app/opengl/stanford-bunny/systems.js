const Rotate = (entities, { touches }) => {
	let move = touches.find(x => x.type === "move");

	if (move)
		entities.bunny.angle += move.delta.pageX * 0.01;

	return entities;
}

export { Rotate };