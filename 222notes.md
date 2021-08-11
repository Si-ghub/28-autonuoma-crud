**Destytojo sprendimas**

```js
class CarRental {
  constructor(companyName) {
    this.companyName = companyName;
    this.list = [];
  }

  intro() {
    let count = 0;
    for (const car of this.list) {
      if (!car.isBroken) {
        count++;
      }
    }
    console.log(
      `Hi, we are ${this.companyName} and we have ${count} cars available.`
    );
  }

  addCar(model, color, price) {
    this.list.push({
      model,
      color,
      price,
      isBroken: false,
    });
  }

  carPark() {
    let number = 0;
    for (const car of this.list) {
      const { model, color, price, isBroken } = car;
      if (!isBroken) {
        console.log(`${++number}. ${model} (${color}) is for ${price}EUR/day.`);
      }
    }
  }

  updateCarPrice(carIndex, newPrice) {
    this.list[carIndex].price = newPrice;
  }

  carAccident(carIndex) {
    this.list[carIndex].isBroken = true;
  }

  carRepair(carIndex) {
    this.list[carIndex].isBroken = false;
  }

  removeCar(carIndex) {
    const newList = [];

    for (let i = 0; i < this.list.length; i++) {
      if (i !== carIndex) {
        newList.push(this.list[i]);
      }
    }

    this.list = newList;
  }
}
```
