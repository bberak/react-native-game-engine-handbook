let rotateBy = 0.01;

const Rotate = (entities, { touches }) => {
	let move = touches.find(x => x.type === "move");

	if (move)
		rotateBy += move.delta.pageX * 0.005;

	entities.square.angle += rotateBy

	return entities;
}

const Scale = (entities, { touches }) => {
	let move = touches.find(x => x.type === "move");

	if (move)
		entities.square.scale += move.delta.pageY * 0.005;

	return entities;
}

export { Rotate, Scale };