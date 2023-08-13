async function getCoffeeAndMuffin() {
    const coffeePromise = fetchCoffee(); // Imagine fetchCoffee returns a promise
    const muffinPromise = fetchMuffin(); // Imagine fetchMuffin returns a promise
  
    const coffee = await coffeePromise;
    const muffin = await muffinPromise;
  
    console.log(`Enjoy your ${coffee} and ${muffin}!`);
  }
  
  getCoffeeAndMuffin();
  console.log("Placing orders...");
  