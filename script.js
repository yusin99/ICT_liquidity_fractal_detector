function findFractals(priceData) {
    const fractals = [];
  
    for (let i = 2; i < priceData.length - 2; i++) {
      const currentBar = priceData[i];
      const previousBar = priceData[i - 1];
      const nextBar = priceData[i + 1];
  
      // Bullish Fractal
      if (
        currentBar.high > previousBar.high &&
        currentBar.high > nextBar.high &&
        currentBar.low > previousBar.low &&
        currentBar.low > nextBar.low
      ) {
        fractals.push({
          type: "Bullish",
          date: currentBar.date,
          price: currentBar.high,
        });
      }
  
      // Bearish Fractal
      if (
        currentBar.high < previousBar.high &&
        currentBar.high < nextBar.high &&
        currentBar.low < previousBar.low &&
        currentBar.low < nextBar.low
      ) {
        fractals.push({
          type: "Bearish",
          date: currentBar.date,
          price: currentBar.low,
        });
      }
    }
  
    return fractals;
  }

  function areFractalsInRange(currentFractal, prevFractal1, prevFractal2) {
    // Define a range based on the two previous fractals
    const rangeLow = Math.min(prevFractal1.low, prevFractal2.low);
    const rangeHigh = Math.max(prevFractal1.high, prevFractal2.high);
  
    // Check if the current fractal's high and low are within the range
    if (
      currentFractal.low >= rangeLow &&
      currentFractal.high <= rangeHigh
    ) {
      return true; // The current fractal is within the range
    }
  
    return false; // The current fractal is outside the range
  }