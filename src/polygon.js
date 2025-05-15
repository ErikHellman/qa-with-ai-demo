/**
 * Calculates the area of a polygon using the Shoelace formula.
 * @param {Array<Array<number>>} polygon - Array of points, where each point is [x, y]
 * @returns {number} The area of the polygon
 */
function calculatePolygonArea(polygon) {
  if (!Array.isArray(polygon) || polygon.length < 3) {
    throw new Error('Polygon must be an array with at least 3 points');
  }

  // Validate each point is a proper [x, y] coordinate
  for (const point of polygon) {
    if (!Array.isArray(point) || point.length !== 2 || 
        typeof point[0] !== 'number' || typeof point[1] !== 'number') {
      throw new Error('Each point must be an array of two numbers [x, y]');
    }
  }

  // Implementation of the Shoelace formula (Gauss's area formula)
  let area = 0;
  const n = polygon.length;

  for (let i = 0; i < n; i++) {
    const j = (i + 1) % n;
    area += polygon[i][0] * polygon[j][1];
    area -= polygon[j][0] * polygon[i][1];
  }

  // Take the absolute value and divide by 2
  return Math.abs(area) / 2;
}

module.exports = { calculatePolygonArea };