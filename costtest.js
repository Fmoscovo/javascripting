function monitorCount(rows, columns) {
  return rows * columns;
};

function costOfMonitors(rows, columns) {
  return monitorCount(rows, columns) * 200;
};

const totalCost = costOfMonitors(5, 4);

console.log(totalCost);  // 4000




const plantNeedsWater = (day) => day === 'Wednesday' ? true: false; 

console.log(plantNeedsWater('Tuesday'));