export default function snapToGrid(x, y) {
	const snappedX = Math.round(x / 10) * 10;
	const snappedY = Math.round(y / 10) * 10;

	return [snappedX, snappedY];
}
