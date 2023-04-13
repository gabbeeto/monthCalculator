//variables for functions so it can be accessed outside of the scope


let foodNumberContainer = [];
let foodNumberContainerIndex = 0;
let productNumberContainer = [];
let productNumberContainerIndex = 0;
let extraNumberContainer = [];
let extraNumberContainerIndex = 0;
let finishButtonDiv;
let finishbuttonParagraph;
let finishButtonDivCreated = false;
let popUpCreated = false;
let popUp;
let popUpFoodId;
let popUpProductId;
let popUpExtraId;
let popUpParagraph;

let popUpDoneButtton;

function finishButtonFunction(){
if(!popUpCreated)
{

let calculationPerIndex = [];
let finalCalculation = 0;
let finalCalculation1 = 0;
let finalCalculation2 = 0;
let finalCalculation3 = 0;

//makes the calculation for the page when you press the finish button
for(let index = 0; index < foodNumberContainerIndex; index++){
calculationPerIndex[index] = Number(foodNumberContainer[index].price) / Number(foodNumberContainer[index].amountPerPrice) * Number(foodNumberContainer[index].daysPerMonth) * Number(foodNumberContainer[index].foodPerDay);
finalCalculation1 = finalCalculation1 + calculationPerIndex[index];
}


for(let index = 0; index < productNumberContainerIndex; index++){
finalCalculation2 = finalCalculation2 + Number(productNumberContainer[index].price);
}


for(let index = 0; index < extraNumberContainerIndex; index++){
finalCalculation3 = finalCalculation3 + Number(extraNumberContainer[index].price);
}


finalCalculation = Number(finalCalculation) + Number(finalCalculation1) + Number(finalCalculation2) + Number(finalCalculation3);

//checks if the button is created so it doesn't make the same div twice

if(!finishButtonDivCreated)
{
finishButtonDiv = document.createElement('div');
finishButtonDiv.setAttribute('id', 'finishButtonDiv');

htmlHeader.appendChild(finishButtonDiv);

finishbuttonParagraph = document.createElement('p');
finishbuttonParagraph.innerHTML = "Result: " + Math.floor(finalCalculation) + '$';

finishButtonDiv.appendChild(finishbuttonParagraph);



//this is the checker for the div, so it doesn't create twice
finishButtonDivCreated = true;
}

else{
//it just edits the paragraph that it's inside the div when someone press the finish button twice
finishbuttonParagraph.innerHTML = "Result: " + Math.floor(finalCalculation) + '$';
}



}
}









function addButtonFunction() {
if(!popUpCreated)
{

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




popUp = document.createElement('div');
popUp.setAttribute('class', 'popUp');
popUp.setAttribute('id', 'foodPopUp');


popUpParagraph = document.createElement('p');
popUpParagraph.innerHTML = foodNumberContainer[foodNumberContainerIndex].name + ' was added!.';

popUpDoneButtton = document.createElement('button');
popUpDoneButtton.textContent = 'DONE';
popUpDoneButtton.setAttribute('id', 'popUpDoneButtton');






function popUpDoneButttonFunction(){
popUpCreated = false;
popUpFoodId = document.getElementById('foodPopUp');
popUpFoodId.parentElement.removeChild(popUpFoodId);
}


popUpCreated = true;

mainContainer = document.getElementById('mainContainer');

mainContainer.appendChild(popUp);
popUp.appendChild(popUpParagraph);
popUp.appendChild(popUpDoneButtton);

popUpDoneButtton.addEventListener('click', popUpDoneButttonFunction);







//this works as a index so the value is not being repeated 
foodNumberContainerIndex += 1;


}

}











function addButtonFunction2() {
if(!popUpCreated)	
	{

//get the input from the html
let productName = document.getElementById('productName');
let priceProduct = document.getElementById('productPrice');


//remove the characters from the input given by the user
let productNameValue = productName.value;
let priceProductValue = /[0-9]+/.exec(priceProduct.value);




//container made for the calculation
productNumberContainer[productNumberContainerIndex] = {name: productNameValue, price: priceProductValue};







popUp = document.createElement('div');
popUp.setAttribute('class', 'popUp');
popUp.setAttribute('id', 'productPopUp');


popUpParagraph = document.createElement('p');
popUpParagraph.innerHTML = productNumberContainer[productNumberContainerIndex].name + ' was added!.';

popUpDoneButtton = document.createElement('button');
popUpDoneButtton.textContent = 'DONE';
popUpDoneButtton.setAttribute('id', 'popUpDoneButtton');






function popUpDoneButttonFunction(){
popUpCreated = false;
popUpProductId = document.getElementById('productPopUp');
popUpProductId.parentElement.removeChild(popUpProductId);
}


popUpCreated = true;

mainContainer = document.getElementById('mainContainer');

mainContainer.appendChild(popUp);
popUp.appendChild(popUpParagraph);
popUp.appendChild(popUpDoneButtton);

popUpDoneButtton.addEventListener('click', popUpDoneButttonFunction);





//this works as a index so the value is not being repeated 
productNumberContainerIndex += 1;


	}

}









function addButtonFunction3() {
	{

//get the input from the html
let extraMoney = document.getElementById('extraMoney');


//remove the characters from the input given by the user
let extraMoneyValue = /[0-9]+/.exec(extraMoney.value);




//container made for the calculation
extraNumberContainer[extraNumberContainerIndex] = {price: extraMoneyValue};







popUp = document.createElement('div');
popUp.setAttribute('class', 'popUp');
popUp.setAttribute('id', 'extraPopUp');


popUpParagraph = document.createElement('p');
popUpParagraph.innerHTML = extraNumberContainer[extraNumberContainerIndex].price + ' was added!.';

popUpDoneButtton = document.createElement('button');
popUpDoneButtton.textContent = 'DONE';
popUpDoneButtton.setAttribute('id', 'popUpDoneButtton');






function popUpDoneButttonFunction(){
popUpCreated = false;
popUpExtraId = document.getElementById('extraPopUp');
popUpExtraId.parentElement.removeChild(popUpExtraId);
}


popUpCreated = true;

mainContainer = document.getElementById('mainContainer');

mainContainer.appendChild(popUp);
popUp.appendChild(popUpParagraph);
popUp.appendChild(popUpDoneButtton);

popUpDoneButtton.addEventListener('click', popUpDoneButttonFunction);


//this works as a index so the value is not being repeated 
extraNumberContainerIndex += 1;



	}	



}









function editButtonFunction() {
if(!popUpCreated)
{

alert('this works!');
}

}


function deleteButtonFunction(){
if(!popUpCreated)
{
alert('this works!');
}
}








//event listener to click the buttons

let finishButton = document.getElementById('finishButton');
let addButton = document.getElementById('addButton');
let addButton2 = document.getElementById('addButton2');
let addButton3 = document.getElementById('addButton3');
let editButton = document.getElementById('editButton');
let deleteButton = document.getElementById('deleteButton');
let htmlHeader = document.getElementById('header');

finishButton.addEventListener('click', finishButtonFunction);
addButton.addEventListener('click',addButtonFunction);
addButton2.addEventListener('click',addButtonFunction2);
addButton3.addEventListener('click',addButtonFunction3);
editButton.addEventListener('click',editButtonFunction);
deleteButton.addEventListener('click',deleteButtonFunction);
