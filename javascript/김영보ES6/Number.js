// EPSILON: 미세한 값

const total = 0.1 + 0.2; // 0.30000000000000004 (부동소수점) IEEE 754
console.log(total === 0.3); // false

console.log(0 / (0 + Number.EPSILON)) // NaN 방지


Number.isFinite(1.34123); // true
Number.NaN(NaN); // true