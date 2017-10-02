
let hold = false;

const DetectHold = (entities, { touches, events }) => {

	if (touches.find(x => x.type === "start"))
		hold = true;

	if (touches.find(x => x.type === "end"))
		hold = false;

	if (hold)
		events.push({ type: "hold"})

	return entities;
}

const Rotate = (entities, { events }) => {

	entities.square.angle += events.find(x => x.type === "hold") ? 0.5 : 0.01;

	return entities;
}

const Scale = (entities, { touches }) => {
	let move = touches.find(x => x.type === "move");

	if (move) {
		entities.square.scale += move.delta.pageY * 0.01;
	}

	return entities;
}

export { DetectHold, Rotate, Scale };