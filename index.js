const { calculatePolygonArea } = require('./src/polygon');

// Get the polygon points from command line arguments
const pointsString = process.argv[2];

if (!pointsString) {
    console.error('Please provide polygon points in the format: x1,y1;x2,y2;x3,y3;...');
    process.exit(1);
}

try {
    // Parse the input string into an array of points
    const points = pointsString.split(';').map(point => {
        const [x, y] = point.split(',').map(Number);
        if (isNaN(x) || isNaN(y)) {
            throw new Error('Invalid point format');
        }
        return [x, y];
    });

    // Calculate and display the area
    const area = calculatePolygonArea(points);
    console.log(`Area of polygon: ${area}`);
} catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
}