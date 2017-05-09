
var button = document.querySelector('.Mybtn');


button.addEventListener('click', function(){

  var Height = document.querySelector('#height').value

  var HeightUnits = document.querySelector('#heightunits').value
  var Weight = document.querySelector('#weight').value

  var WeightUnits = document.querySelector('#weightunits').value

  if (HeightUnits == "inches") Height /= 39.3700787;
    if (WeightUnits == "lb") Weight /= 2.20462;
   var BMI = Weight / Math.pow(Height, 2);

   document.getElementById("output").innerHTML = Math.round(BMI * 100)/100;
  if (BMI < 18.5) document.getElementById("comment").innerHTML = "Underweight";

  if (BMI >= 18.5 && BMI <= 24.9) document.getElementById("comment").innerHTML = "Normal Weight";
  if (BMI >= 25 && BMI <= 29.9) document.getElementById("comment").innerHTML = "Overweight";
if (BMI >= 30 && BMI <= 39.9) document.getElementById("comment").innerHTML = "Obese";
   if (BMI > 40) document.getElementById("comment").innerHTML = "Morbidly Obese";
   document.getElementById("comment").value = output;

})
