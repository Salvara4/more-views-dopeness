var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var Car = require('./car_class')

app.use(bodyParser.urlencoded({extended:false}))

app.set('view engine', 'ejs');


app.get('/', function(request, response){
  response.render('welcome')
})

app.post('/car-stats', function(request, response){
  let carSpecs = request.body
  let newMake = request.body.make
  let newYear = request.body.year
  let lights = request.body.lights
  let newCar = new Car(newMake, newYear)
  newCar.save()
  response.render('status', {'car': newCar})
})




app.listen ('3000', function(){
  console.log("Listening on port 3000!")
})
