function fn(input) {
  if (!Array.isArray(input) || input.length < 3) {
    throw new Error('Bad input');
  }

  for (const b of input) {
    if (!Array.isArray(b) || b.length !== 2 || 
        typeof b[0] !== 'number' || typeof b[1] !== 'number') {
      throw new Error('Bad format');
    }
  }

  let m = 0;
  const n = input.length;

  for (let i = 0; i < n; i++) {
    const j = (i + 1) % n;
    m += input[i][0] * input[j][1];
    m -= input[j][0] * input[i][1];
  }

  return Math.abs(m) / 2;
}

module.exports = { fn: fn };