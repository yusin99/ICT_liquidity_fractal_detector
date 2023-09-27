function findBearishFractals(priceData) {
    const bearishFractals = [];
  
    for (let i = 2; i < priceData.length - 2; i++) {
      const currentHigh = priceData[i].high;
      const previousHigh1 = priceData[i - 1].high;
      const previousHigh2 = priceData[i - 2].high;
      const nextHigh1 = priceData[i + 1].high;
      const nextHigh2 = priceData[i + 2].high;
  
      if (
        currentHigh > previousHigh2 &&
        currentHigh > previousHigh1 &&
        currentHigh > nextHigh1 &&
        currentHigh > nextHigh2
      ) {
        bearishFractals.push({
          date: priceData[i].date,
          high: currentHigh,
        });
      }
    }
  
    return bearishFractals;
  }
  
  // Function to identify bullish fractals
  function findBullishFractals(priceData) {
    const bullishFractals = [];
  
    for (let i = 2; i < priceData.length - 2; i++) {
      const currentLow = priceData[i].low;
      const previousLow1 = priceData[i - 1].low;
      const previousLow2 = priceData[i - 2].low;
      const nextLow1 = priceData[i + 1].low;
      const nextLow2 = priceData[i + 2].low;
  
      if (
        currentLow < previousLow2 &&
        currentLow < previousLow1 &&
        currentLow < nextLow1 &&
        currentLow < nextLow2
      ) {
        bullishFractals.push({
          date: priceData[i].date,
          low: currentLow,
        });
      }
    }
  
    return bullishFractals;
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