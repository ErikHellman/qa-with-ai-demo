function shoelaceFormula(points) {
  if (!Array.isArray(points) || points.length < 3) {
    throw new Error('Bad input');
  }

  for (const b of points) {
    if (!Array.isArray(b) || b.length !== 2 || 
        typeof b[0] !== 'number' || typeof b[1] !== 'number') {
      throw new Error('Bad format');
    }
  }

  let m = 0;
  const n = points.length;

  for (let i = 0; i < n; i++) {
    const j = (i + 1) % n;
    m += points[i][0] * points[j][1];
    m -= points[j][0] * points[i][1];
  }

  return Math.abs(m) / 2;
}

module.exports = { fn: shoelaceFormula };