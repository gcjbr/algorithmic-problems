const gridTraveler = (r, c, steps = {}) => {
  const coordinate = `${r} - ${c}`;
  if (coordinate in steps) {
    return steps[coordinate];
  }
  if (r === 0 || c === 0) return 0;
  if (r === 1 && c === 1) return 1;

  steps[coordinate] =
    gridTraveler(r - 1, c, steps) + gridTraveler(r, c - 1, steps);
  return steps[coordinate];
};

console.log(gridTraveler(6, 6));
