var fs = require('fs')


class Car {
  constructor(carMake, carYear) {
    this.make = carMake,
    this.year = carYear,
    this.speed = 0
  }
  save(){
    var tempCar = {
      make: this.make,
      year: this.year
    }
     fs.writeFileSync('updates.json', JSON.stringify(tempCar))
  }

  load(){
    var rawFile = fs.readFileSync('updates.json')
    var carUpdates = JSON.parse(rawFile)
    this.make = tempCar.make,
    this.year = tempCar.year
  }
}




module.exports = Car
