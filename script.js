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