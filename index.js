const { fn: fn } = require('./src/fn');

const m = process.argv[2];

if (!m) {
    process.exit(1);
}

try {
    const n = m.split(';').map(b => {
        const [x, y] = b.split(',').map(Number);
        if (isNaN(x) || isNaN(y)) {
            throw new Error('Bad arguments');
        }
        return [x, y];
    });

    const x = fn(n);
    console.log(`Result: ${x}`);
} catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
}