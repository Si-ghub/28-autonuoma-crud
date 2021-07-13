class CarRental {
    constructor(companyName) {
        this.list = [];
        this.companyName = companyName;
    }

    intro() {
        let carsNumber = 0;
        for (let i = 0; i < this.list.length; i++) {
            const car = this.list[i];
            if (car.working === true) {
                carsNumber++
            }
        }
        console.log(`Hi, we are ${this.companyName} and we have ${carsNumber} cars available.`);
    }

    addCar(name, color, price) {
        let carObject = {
            name, color, price,
            working: true
        }
        this.list.push(carObject);
        console.log(carObject);
    }

    carPark() {
        let carPosition = 0;
        for (let i = 0; i < this.list.length; i++) {
            const car = this.list[i];
            if (car.working === true) {
                carPosition++
                console.log(`${carPosition}. ${car.name} (${car.color}) is for ${car.price}EUR/day.`);
            }
        }
    }

    updateCarPrice(index, newPrice) {
        this.list[index].price = newPrice;
        // console.log(this.list);
    }

    carAccident(index) {
        this.list[index].working = false;
        console.log(this.list);
    }

    carRepair(index) {
        this.list[index].working = true;
    }

    removeCar(index) {
        const newCarsList = [];

        for (let i = 0; i < this.list.length; i++) {
            if (i !== index) {
                newCarsList.push(this.list[i]);
            }
        }
        this.list = newCarsList;
    }
}

module.exports = CarRental;

