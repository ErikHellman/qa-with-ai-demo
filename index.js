const { calculatePolygonArea } = require('./src/polygon');

// Example usage
const triangle = [[0, 0], [1, 0], [0, 1]];
console.log(`Area of triangle: ${calculatePolygonArea(triangle)}`);

const square = [[0, 0], [1, 0], [1, 1], [0, 1]];
console.log(`Area of square: ${calculatePolygonArea(square)}`);

const pentagon = [[0, 0], [2, 0], [2, 2], [1, 3], [0, 2]];
console.log(`Area of pentagon: ${calculatePolygonArea(pentagon)}`);