//variables for functions
let foodNumberContainer = [];
let foodNumberContainerIndex = 0;
let foodNumberObject;

function finishButtonFunction(){

let calculationPerIndex = [];
let finalCalculation = 0;

//makes the calculation for the page when you press the finish button
for(let index = 0; index < foodNumberContainerIndex; index++){
calculationPerIndex[index] = foodNumberContainer[index].price / foodNumberContainer[index].amountPerPrice * foodNumberContainer[index].daysPerMonth * foodNumberContainer[index].foodPerDay;
finalCalculation = finalCalculation + calculationPerIndex[index];
}
alert(finalCalculation);
}

function addButtonFunction() {
//get the input from the html
let nameFood = document.getElementById('nameFood');
let priceFood = document.getElementById('priceFood');
let amountPerPrice = document.getElementById('AmountPerPrice');
let daysPerMonth = document.getElementById('daysPerMonth');
let foodPerDay = document.getElementById('foodPerDay');


//remove the characters from the input given by the user
let nameFoodValue = nameFood.value;
let priceFoodValue = /[0-9]+/.exec(priceFood.value);
let amountPerPriceValue = /[0-9]+/.exec(amountPerPrice.value);
let daysPerMonthValue = /[0-9]+/.exec(daysPerMonth.value);
let foodPerDayValue = /[0-9]+/.exec(foodPerDay.value);




//container made for the calculation
foodNumberContainer[foodNumberContainerIndex] = {name: nameFoodValue, price: priceFoodValue,amountPerPrice: amountPerPriceValue,daysPerMonth: daysPerMonthValue,foodPerDay: foodPerDayValue};



alert(foodNumberContainer[foodNumberContainerIndex].name + ' was added!.');


//this works as a index so the value is not being repeated 
foodNumberContainerIndex += 1;

}

function editButtonFunction() {
alert('this works!');
}


function deleteButtonFunction(){
alert('this works!');
}



//event listener to click the buttons

let finishButton = document.getElementById('finishButton');
let addButton = document.getElementById('addButton');
let editButton = document.getElementById('editButton');
let deleteButton = document.getElementById('deleteButton');

finishButton.addEventListener('click', finishButtonFunction);
addButton.addEventListener('click',addButtonFunction);
editButton.addEventListener('click',editButtonFunction);
deleteButton.addEventListener('click',deleteButtonFunction);
