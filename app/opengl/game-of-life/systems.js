const Rotate = (entities, { time }) => {
	entities.bunny.angle = time.current * 0.001

	return entities;
}

export { Rotate };