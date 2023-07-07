export const colorGen = (colors) => {
  const averagedArray = [];

  for (let i = 0; i < colors.length - 1; i++) {
    const averagedColors = [];

    for (let j = 0; j < colors[i].length; j++) {
      const colorA = colors[i][j];
      const colorB = colors[i + 1][j];

      averagedColors.push(calculateAverageColor(colorA, colorB));
    }

    averagedArray.push(averagedColors);
  }

  const resultArray = [];
  resultArray.push(colors[0]);
  for (let i = 0; i < averagedArray.length; i++) {
    resultArray.push(averagedArray[i]);
    resultArray.push(colors[i + 1]);
  }

  return resultArray;
};

function calculateAverageColor(colorA, colorB) {
  const [r1, g1, b1] = colorA.match(/\d+/g);
  const [r2, g2, b2] = colorB.match(/\d+/g);

  const averageR = Math.round((parseInt(r1) + parseInt(r2)) / 2);
  const averageG = Math.round((parseInt(g1) + parseInt(g2)) / 2);
  const averageB = Math.round((parseInt(b1) + parseInt(b2)) / 2);

  return `rgb(${averageR}, ${averageG}, ${averageB})`;
}
