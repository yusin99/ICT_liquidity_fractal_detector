function findFractals(priceData) {
    const fractals = [];
  
    for (let i = 2; i < priceData.length - 2; i++) {
      const currentHigh = priceData[i].high;
      const previousHigh = priceData[i - 1].high;
      const nextHigh = priceData[i + 1].high;
      const currentLow = priceData[i].low;
      const previousLow = priceData[i - 1].low;
      const nextLow = priceData[i + 1].low;
  
      // Bullish Fractal
      if (
        currentHigh > previousHigh &&
        currentHigh > nextHigh &&
        currentLow > previousLow &&
        currentLow > nextLow
      ) {
        fractals.push({
          type: "Bullish",
          date: priceData[i].date,
          price: currentHigh,
        });
      }
  
      // Bearish Fractal
      if (
        currentHigh < previousHigh &&
        currentHigh < nextHigh &&
        currentLow < previousLow &&
        currentLow < nextLow
      ) {
        fractals.push({
          type: "Bearish",
          date: priceData[i].date,
          price: currentLow,
        });
      }
    }
  
    return fractals;
  }