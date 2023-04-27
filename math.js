//variables for functions so it can be accessed outside of the scope

let mainContainer;
let foodNumberContainer = [];
let foodNumberContainer2 = [];
let foodNumberContainerIndex = 0;
let productNumberContainer = [];
let productNumberContainer2 = [];
let productNumberContainerIndex = 0;
let extraNumberContainer = [];
let extraNumberContainer2 = [];
let extraNumberContainerIndex = 0;
let finishButtonDiv;
let finishbuttonParagraph;
let finishButtonDivCreated = false;


let warningSign;
let warningSignDiv;
let warningSignImg;
let doneButtonForTheWarningSign;
let warningSignTextDiv;
let foodWarningSignMessage1;
let foodWarningSignMessage2;
let productWarningSignMessage1;
let productWarningSignMessage2;
let extraWarningSignMessage1;
let extraWarningSignMessage2;


let editWarningSignMessage1;
let editWarningSignMessage2;
let finishWarningSignMessage1;
let finishWarningSignMessage2;
let deleteWarningSignMessage1;
let deleteWarningSignMessage2;

// the PopUpCreated Variable turns off the functionality of other functions with an if statement when it is created because it ise set to true and the if statement only allow to run the code when this variable is set to false
let popUpCreated = false;

let popUp;
let popUpFoodId;
let popUpProductId;
let popUpExtraId;
let popUpParagraph;

let popUpDoneButtton;

let editContainer;
let exitButton;
let editContainerDoneButton;
let mainEditContainer;
let productContainer;
let extraContainer;

let foodBackground;

let AmountOfCalculationsToWorkOn = 0;






function calculationToWorkOnAmount(){
AmountOfCalculationsToWorkOn = 0;
if(foodNumberContainer.length){
AmountOfCalculationsToWorkOn++;
}

if(productNumberContainer.length){
AmountOfCalculationsToWorkOn++;
}

if(extraNumberContainer.length){
AmountOfCalculationsToWorkOn++;
}

}










function finishButtonFunction(){
calculationToWorkOnAmount();
if(!popUpCreated)
{
if(AmountOfCalculationsToWorkOn == 0)
{

popUpCreated = true;

warningSign = document.createElement('div');
warningSign.setAttribute('class',"warningSign2");

mainContainer = document.getElementById('mainContainer');
mainContainer.appendChild(warningSign);




warningSignDiv = document.createElement('div');
warningSignDiv.setAttribute('class', 'warningSignDiv');
warningSign.appendChild(warningSignDiv);

warningSignImg = document.createElement('img');
warningSignImg.setAttribute('src',"images/warningIcon.png");
warningSignDiv.appendChild(warningSignImg);



warningSignTextDiv = document.createElement('div');
warningSignTextDiv.setAttribute('class', 'warningSignTextDiv');
warningSignDiv.appendChild(warningSignTextDiv);

finishWarningSignMessage1 = document.createElement('h2');
finishWarningSignMessage1.innerHTML = "Invalid operation:";
warningSignTextDiv.appendChild(finishWarningSignMessage1);

finishWarningSignMessage2 = document.createElement('p');
finishWarningSignMessage2.innerHTML = "You need add some calculation values before pressing the finish button";
warningSignTextDiv.appendChild(finishWarningSignMessage2);




doneButtonForTheWarningSign = document.createElement('button');
doneButtonForTheWarningSign.innerHTML = 'Done'
doneButtonForTheWarningSign.setAttribute('id', 'warningSingButton');
warningSign.appendChild(doneButtonForTheWarningSign);


function doneButtonForTheWarningSignFunction(){
popUpCreated = false;
warningSign.parentElement.removeChild(warningSign);
}

doneButtonForTheWarningSign.addEventListener('click', doneButtonForTheWarningSignFunction)

}


else{
let calculationPerIndex = [];
let finalCalculation = 0;
let finalCalculation1 = 0;
let finalCalculation2 = 0;
let finalCalculation3 = 0;

//makes the calculation for the page when you press the finish button
for(let index = 0; index < foodNumberContainerIndex; index++){
calculationPerIndex[index] = +foodNumberContainer[index].price / +foodNumberContainer[index].amountPerPrice * +foodNumberContainer[index].daysPerMonth * +foodNumberContainer[index].foodPerDay;
finalCalculation1 = finalCalculation1 + calculationPerIndex[index];
}

for(let index = 0; index < productNumberContainerIndex; index++){
finalCalculation2 = finalCalculation2 + +productNumberContainer[index].price;
}

for(let index = 0; index < extraNumberContainerIndex; index++){
finalCalculation3 = finalCalculation3 + +extraNumberContainer[index].price;
}


finalCalculation = finalCalculation + finalCalculation1 + finalCalculation2 + finalCalculation3;

//checks if the button is created so it doesn't make the same div twice

if(!finishButtonDivCreated)
{
finishButtonDiv = document.createElement('div');
finishButtonDiv.setAttribute('id', 'finishButtonDiv');

htmlHeader.appendChild(finishButtonDiv);

finishbuttonParagraph = document.createElement('p');
finishbuttonParagraph.innerHTML = "Result: " + finalCalculation.toFixed(2) + '$';

finishButtonDiv.appendChild(finishbuttonParagraph);



//this is the checker for the div, so it doesn't create twice
finishButtonDivCreated = true;
}

else{
//it just edits the paragraph that it's inside the div when someone press the finish button twice
finishbuttonParagraph.innerHTML = "Result: " + finalCalculation.toFixed(2) + '$';
}



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



if(priceFoodValue && amountPerPriceValue && daysPerMonthValue && foodPerDayValue)
{

//container made for the calculation
foodNumberContainer[foodNumberContainerIndex] = {name: nameFoodValue, price: priceFoodValue,amountPerPrice: amountPerPriceValue,daysPerMonth: daysPerMonthValue,foodPerDay: foodPerDayValue};






// pop up sign that shows that the products/foods/ were added to the calculation
popUp = document.createElement('div');
popUp.setAttribute('class', 'popUp');
popUp.setAttribute('id', 'foodPopUp');


popUpParagraph = document.createElement('p');
if(foodNumberContainer[foodNumberContainerIndex].name)
{
popUpParagraph.innerHTML = foodNumberContainer[foodNumberContainerIndex].name + ' was added!.';
}
else{
popUpParagraph.innerHTML =  'it was added!.';
}

popUpDoneButtton = document.createElement('button');
popUpDoneButtton.textContent = 'DONE';
popUpDoneButtton.setAttribute('id', 'popUpDoneButtton');






function popUpDoneButttonFunction(){
//this is set back to false when you close the div
popUpCreated = false;
popUpFoodId = document.getElementById('foodPopUp');
popUpFoodId.parentElement.removeChild(popUpFoodId);
}

// this prevents other elements from functioning
popUpCreated = true;

mainContainer = document.getElementById('mainContainer');

mainContainer.appendChild(popUp);
popUp.appendChild(popUpParagraph);
popUp.appendChild(popUpDoneButtton);

popUpDoneButtton.addEventListener('click', popUpDoneButttonFunction);







//this works as a index so the value is not being repeated 
foodNumberContainerIndex += 1;


}
else
{

popUpCreated = true;

warningSign = document.createElement('div');
warningSign.setAttribute('class',"warningSign2");
warningSign.setAttribute('id','foodWarningSign');



mainContainer = document.getElementById('mainContainer');
mainContainer.appendChild(warningSign);


warningSignDiv = document.createElement('div');
warningSignDiv.setAttribute('class', 'warningSignDiv');
warningSign.appendChild(warningSignDiv);

warningSignImg = document.createElement('img');
warningSignImg.setAttribute('src',"images/warningIcon.png");
warningSignDiv.appendChild(warningSignImg);

warningSignTextDiv = document.createElement('div');
warningSignTextDiv.setAttribute('class', 'warningSignTextDiv');
warningSignDiv.appendChild(warningSignTextDiv);

foodWarningSignMessage1 = document.createElement('h2');
foodWarningSignMessage1.innerHTML = "YOU HAVEN'T FILLED THIS WITH PROPER INFORMATION";
warningSignTextDiv.appendChild(foodWarningSignMessage1);

foodWarningSignMessage2 = document.createElement('p');
foodWarningSignMessage2.innerHTML = "Don't forget to put a value in one of those input containers!";
warningSignTextDiv.appendChild(foodWarningSignMessage2);


doneButtonForTheWarningSign = document.createElement('button');
doneButtonForTheWarningSign.innerHTML = 'Done'
doneButtonForTheWarningSign.setAttribute('id', 'warningSingButton');
warningSign.appendChild(doneButtonForTheWarningSign);

function doneButtonForTheWarningSignFunction(){
popUpCreated = false;
warningSign.parentElement.removeChild(warningSign);
}


doneButtonForTheWarningSign.addEventListener('click', doneButtonForTheWarningSignFunction)


}

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



if(priceProductValue)
{

//container made for the calculation
productNumberContainer[productNumberContainerIndex] = {name: productNameValue, price: priceProductValue};



// pop up sign that shows that the products/foods/ were added to the calculation

popUp = document.createElement('div');
popUp.setAttribute('class', 'popUp');
popUp.setAttribute('id', 'productPopUp');


popUpParagraph = document.createElement('p');
if(productNumberContainer[productNumberContainerIndex].name)
{
popUpParagraph.innerHTML = productNumberContainer[productNumberContainerIndex].name + ' was added!.';
}
else{
popUpParagraph.innerHTML = "it was added!.";
}

popUpDoneButtton = document.createElement('button');
popUpDoneButtton.textContent = 'DONE';
popUpDoneButtton.setAttribute('id', 'popUpDoneButtton');






function popUpDoneButttonFunction(){
//this is set back to false when you close the div
popUpCreated = false;
popUpProductId = document.getElementById('productPopUp');
popUpProductId.parentElement.removeChild(popUpProductId);
}

// this prevents other elements from functioning
popUpCreated = true;

mainContainer = document.getElementById('mainContainer');

mainContainer.appendChild(popUp);
popUp.appendChild(popUpParagraph);
popUp.appendChild(popUpDoneButtton);

popUpDoneButtton.addEventListener('click', popUpDoneButttonFunction);





//this works as a index so the value is not being repeated 
productNumberContainerIndex += 1;


}
else
{

popUpCreated = true;

warningSign = document.createElement('div');
warningSign.setAttribute('class',"warningSign2");



mainContainer = document.getElementById('mainContainer');
mainContainer.appendChild(warningSign);


warningSignDiv = document.createElement('div');
warningSignDiv.setAttribute('class', 'warningSignDiv');
warningSign.appendChild(warningSignDiv);

warningSignImg = document.createElement('img');
warningSignImg.setAttribute('src',"images/warningIcon.png");
warningSignDiv.appendChild(warningSignImg);

warningSignTextDiv = document.createElement('div');
warningSignTextDiv.setAttribute('class', 'warningSignTextDiv');
warningSignDiv.appendChild(warningSignTextDiv);

productWarningSignMessage1 = document.createElement('h2');
productWarningSignMessage1.innerHTML = "YOU HAVEN'T FILLED THIS WITH PROPER INFORMATION";
warningSignTextDiv.appendChild(productWarningSignMessage1);

productWarningSignMessage2 = document.createElement('p');
productWarningSignMessage2.innerHTML = "Don't forget to put a value in one of those input containers!";
warningSignTextDiv.appendChild(productWarningSignMessage2);


doneButtonForTheWarningSign = document.createElement('button');
doneButtonForTheWarningSign.innerHTML = 'Done'
doneButtonForTheWarningSign.setAttribute('id', 'warningSingButton');
warningSign.appendChild(doneButtonForTheWarningSign);

function doneButtonForTheWarningSignFunction(){
popUpCreated = false;
warningSign.parentElement.removeChild(warningSign);
}


doneButtonForTheWarningSign.addEventListener('click', doneButtonForTheWarningSignFunction)




}




	}

}









function addButtonFunction3() {
if(!popUpCreated)
	{

//get the input from the html
let extraMoney = document.getElementById('extraMoney');


//remove the characters from the input given by the user
let extraMoneyValue = /[0-9]+/.exec(extraMoney.value);



if(extraMoneyValue)
{

//container made for the calculation
extraNumberContainer[extraNumberContainerIndex] = {price: extraMoneyValue};





// pop up sign that shows that the products/foods/ were added to the calculation

popUp = document.createElement('div');
popUp.setAttribute('class', 'popUp');
popUp.setAttribute('id', 'extraPopUp');


popUpParagraph = document.createElement('p');
popUpParagraph.innerHTML = extraNumberContainer[extraNumberContainerIndex].price + ' was added!.';

popUpDoneButtton = document.createElement('button');
popUpDoneButtton.textContent = 'DONE';
popUpDoneButtton.setAttribute('id', 'popUpDoneButtton');






function popUpDoneButttonFunction(){
//this is set back to false when you close the div
popUpCreated = false;
popUpExtraId = document.getElementById('extraPopUp');
popUpExtraId.parentElement.removeChild(popUpExtraId);
}

// this prevents other elements from functioning
popUpCreated = true;

mainContainer = document.getElementById('mainContainer');

mainContainer.appendChild(popUp);
popUp.appendChild(popUpParagraph);
popUp.appendChild(popUpDoneButtton);

popUpDoneButtton.addEventListener('click', popUpDoneButttonFunction);


//this works as a index so the value is not being repeated 
extraNumberContainerIndex += 1;


}
else
{

popUpCreated = true;

warningSign = document.createElement('div');
warningSign.setAttribute('class',"warningSign2");



mainContainer = document.getElementById('mainContainer');
mainContainer.appendChild(warningSign);


warningSignDiv = document.createElement('div');
warningSignDiv.setAttribute('class', 'warningSignDiv');
warningSign.appendChild(warningSignDiv);

warningSignImg = document.createElement('img');
warningSignImg.setAttribute('src',"images/warningIcon.png");
warningSignDiv.appendChild(warningSignImg);

warningSignTextDiv = document.createElement('div');
warningSignTextDiv.setAttribute('class', 'warningSignTextDiv');
warningSignDiv.appendChild(warningSignTextDiv);

extraWarningSignMessage1 = document.createElement('h2');
extraWarningSignMessage1.innerHTML = "YOU HAVEN'T FILLED THIS WITH PROPER INFORMATION";
warningSignTextDiv.appendChild(extraWarningSignMessage1);

extraWarningSignMessage2 = document.createElement('p');
extraWarningSignMessage2.innerHTML = "Don't forget to put  a value in the only input container!";
warningSignTextDiv.appendChild(extraWarningSignMessage2);


doneButtonForTheWarningSign = document.createElement('button');
doneButtonForTheWarningSign.innerHTML = 'Done'
doneButtonForTheWarningSign.setAttribute('id', 'warningSingButton');
warningSign.appendChild(doneButtonForTheWarningSign);

function doneButtonForTheWarningSignFunction(){
popUpCreated = false;
warningSign.parentElement.removeChild(warningSign);
}


doneButtonForTheWarningSign.addEventListener('click', doneButtonForTheWarningSignFunction)


}


	}	



}



























function editButtonFunction() {
calculationToWorkOnAmount();
if(!popUpCreated)
{
if(AmountOfCalculationsToWorkOn == 0)
{

popUpCreated = true;

warningSign = document.createElement('div');
warningSign.setAttribute('class',"warningSign2");



mainContainer = document.getElementById('mainContainer');
mainContainer.appendChild(warningSign);


warningSignDiv = document.createElement('div');
warningSignDiv.setAttribute('class', 'warningSignDiv');
warningSign.appendChild(warningSignDiv);

warningSignImg = document.createElement('img');
warningSignImg.setAttribute('src',"images/warningIcon.png");
warningSignDiv.appendChild(warningSignImg);

warningSignTextDiv = document.createElement('div');
warningSignTextDiv.setAttribute('class', 'warningSignTextDiv');
warningSignDiv.appendChild(warningSignTextDiv);

editWarningSignMessage1 = document.createElement('h2');
editWarningSignMessage1.innerHTML = "Invalid operation:";
warningSignTextDiv.appendChild(editWarningSignMessage1);

editWarningSignMessage2 = document.createElement('p');
editWarningSignMessage2.innerHTML = "you need to add some information value in order to edit information";

warningSignTextDiv.appendChild(editWarningSignMessage2);


doneButtonForTheWarningSign = document.createElement('button');
doneButtonForTheWarningSign.innerHTML = 'Done'
doneButtonForTheWarningSign.setAttribute('id', 'warningSingButton');
warningSign.appendChild(doneButtonForTheWarningSign);

function doneButtonForTheWarningSignFunction(){
popUpCreated = false;
warningSign.parentElement.removeChild(warningSign);
}


doneButtonForTheWarningSign.addEventListener('click', doneButtonForTheWarningSignFunction)



}
else
{
popUpCreated = true;
mainContainer = document.getElementById('mainContainer');

editContainer = document.createElement('div');
editContainer.setAttribute('id','editContainer');
editContainer.setAttribute('class','extraContainer');

buttonContainer = document.createElement('div');
buttonContainer.setAttribute('id','buttonContainer');



exitButton = document.createElement('button');
exitButton.setAttribute('id','exitButton');
exitButton.textContent = 'exit';

gridContainerForTheEditContainer = document.createElement('div');
gridContainerForTheEditContainer.setAttribute('id','gridContainer');


mainEditContainer = document.createElement('div');
mainEditContainer.setAttribute('id','mainEditContainer');



editContainerDoneButton = document.createElement('button');
editContainerDoneButton.setAttribute('id','editContainerDoneButton');
editContainerDoneButton.textContent = 'Done';




mainContainer.appendChild(editContainer);
editContainer.appendChild(buttonContainer);
buttonContainer.appendChild(exitButton);
buttonContainer.appendChild(editContainerDoneButton);
editContainer.appendChild(gridContainerForTheEditContainer);
gridContainerForTheEditContainer.appendChild(mainEditContainer);



function exitButtonFunction() {
editContainer.parentElement.removeChild(editContainer);
popUpCreated = false;
}



function popUpDoneButttonFunction() {
for(let index = 0; index < foodNumberContainer.length; index++)
{

foodNumberContainer2[index] ={name:'' , price: '',amountPerPrice:'',daysPerMonth: '',foodPerDay: ''};
	if(document.getElementById('foodN' + index).value)
{
foodNumberContainer2[index].name =document.getElementById('foodN' + index).value;
}
else
{
foodNumberContainer2[index].name =document.getElementById('foodN' + index).placeholder;
}


if(document.getElementById('foodP' + index).value)
{
foodNumberContainer2[index].price =document.getElementById('foodP' + index).value;
}
else
{
foodNumberContainer2[index].price =document.getElementById('foodP' + index).placeholder;
}


if(document.getElementById('foodAPP' + index).value)
{
foodNumberContainer2[index].amountPerPrice =document.getElementById('foodAPP' + index).value;
}
else
{
foodNumberContainer2[index].amountPerPrice =document.getElementById('foodAPP' + index).placeholder;
}


if(document.getElementById('foodDPM' + index).value)
{
foodNumberContainer2[index].foodPerDay =document.getElementById('foodDPM' + index).value;
}
else
{
foodNumberContainer2[index].foodPerDay =document.getElementById('foodDPM' + index).placeholder;
}


if(document.getElementById('foodFPD' + index).value)
{
foodNumberContainer2[index].daysPerMonth =document.getElementById('foodFPD' + index).value;
}
else
{
foodNumberContainer2[index].daysPerMonth =document.getElementById('foodFPD' + index).placeholder;
}


}



for(let index = 0; index < productNumberContainer.length; index++)
{

productNumberContainer2[index] ={name:'' , price: ''};
	if(document.getElementById('productN' + index).value)
{
productNumberContainer2[index].name =document.getElementById('productN' + index).value;
}
else
{
productNumberContainer2[index].name =document.getElementById('productN' + index).placeholder;
}


if(document.getElementById('productP' + index).value)
{
productNumberContainer2[index].price =document.getElementById('productP' + index).value;
}
else
{
productNumberContainer2[index].price =document.getElementById('productP' + index).placeholder;
}



}



for(let index = 0; index < extraNumberContainer.length; index++)
{

extraNumberContainer2[index] ={price: ''};
if(document.getElementById('extraP' + index).value)
{
extraNumberContainer2[index].price =document.getElementById('extraP' + index).value;
}
else
{
extraNumberContainer2[index].price =document.getElementById('extraP' + index).placeholder;
}



}




foodNumberContainer = foodNumberContainer2
foodNumberContainer2 = [];


productNumberContainer = productNumberContainer2
productNumberContainer2 = [];


extraNumberContainer = extraNumberContainer2
extraNumberContainer2 = [];

popUpCreated = false;
editContainer.parentElement.removeChild(editContainer);

}





// loop for food container items so it appears on the div created when you press the edit icon 

for(let index = 0;index < foodNumberContainer.length; index++)
{

//the background div was made so all the items can be distinguished from one food to the other 
foodBackground = document.createElement('div');
foodBackground.setAttribute('class','foodBackground');



editFoodNameText = 	document.createElement('p');
editFoodNameText.textContent = 'Name: ';


editFoodName = document.createElement('input');
editFoodName.setAttribute('placeholder', foodNumberContainer[index].name);
editFoodName.setAttribute('id','foodN' + index );
//all the id's in this for loop is made so the program can replace the array with the value of the placeholder changed when they press the done button 


editFoodPriceText = 	document.createElement('p');
editFoodPriceText.textContent = 'Price: ';


editFoodPrice = document.createElement('input');
editFoodPrice.setAttribute('placeholder', foodNumberContainer[index].price);
editFoodPrice.setAttribute('id','foodP' + index );



editFoodAmountPerPriceText = document.createElement('p');
editFoodAmountPerPriceText.textContent = 'Amount Per Price: ';


editFoodAmountPerPrice = document.createElement('input');
editFoodAmountPerPrice.setAttribute('placeholder', foodNumberContainer[index].amountPerPrice);
editFoodAmountPerPrice.setAttribute('id','foodAPP' + index);


editFoodDaysPerMonthText = document.createElement('p');
editFoodDaysPerMonthText.textContent = 'Days Per Month: ';


editFoodDaysPerMonth = document.createElement('input');
editFoodDaysPerMonth.setAttribute('placeholder', foodNumberContainer[index].daysPerMonth);
editFoodDaysPerMonth.setAttribute('id','foodDPM' + index);

editFoodFoodPerDayText = document.createElement('p');
editFoodFoodPerDayText.textContent = 'Food Per Day: ';


editFoodFoodPerDay = document.createElement('input');
editFoodFoodPerDay.setAttribute('placeholder', foodNumberContainer[index].foodPerDay);
editFoodFoodPerDay.setAttribute('id','foodFPD' + index);


mainEditContainer.appendChild(foodBackground);
foodBackground.appendChild(editFoodNameText);
foodBackground.appendChild(editFoodName);
foodBackground.appendChild(editFoodPriceText);
foodBackground.appendChild(editFoodPrice);
foodBackground.appendChild(editFoodAmountPerPriceText);
foodBackground.appendChild(editFoodAmountPerPrice);
foodBackground.appendChild(editFoodDaysPerMonthText);
foodBackground.appendChild(editFoodDaysPerMonth);
foodBackground.appendChild(editFoodFoodPerDayText);
foodBackground.appendChild(editFoodFoodPerDay);
}







// loop for product container items so it appears on the div created when you press the edit icon 

for(let index = 0;index < productNumberContainer.length; index++)
{

//the background div was made so all the items can be distinguished from one food to the other 
productBackground = document.createElement('div');
productBackground.setAttribute('class','productBackground');



editProductNameText = 	document.createElement('p');
editProductNameText.textContent = 'Name: ';


editProductName = document.createElement('input');
editProductName.setAttribute('placeholder', productNumberContainer[index].name);
editProductName.setAttribute('id','productN' + index );
//all the id's in this for loop is made so the program can replace the array with the value of the placeholder changed when they press the done button 


editProductPriceText = 	document.createElement('p');
editProductPriceText.textContent = 'Price: ';


editProductPrice = document.createElement('input');
editProductPrice.setAttribute('placeholder', productNumberContainer[index].price);
editProductPrice.setAttribute('id','productP' + index );



mainEditContainer.appendChild(productBackground);
productBackground.appendChild(editProductNameText);
productBackground.appendChild(editProductName);
productBackground.appendChild(editProductPriceText);
productBackground.appendChild(editProductPrice);
}



for(let index = 0;index < extraNumberContainer.length; index++)
{

//the background div was made so all the items can be distinguished from one food to the other 
extraBackground = document.createElement('div');
extraBackground.setAttribute('class','extraBackground');





editExtraPriceText = 	document.createElement('p');
editExtraPriceText.textContent = 'Extra: ';


editExtraPrice = document.createElement('input');
editExtraPrice.setAttribute('placeholder', extraNumberContainer[index].price);
editExtraPrice.setAttribute('id','extraP' + index );
//all the id's in this for loop is made so the program can replace the array with the value of the placeholder changed when they press the done button 


mainEditContainer.appendChild(extraBackground);
extraBackground.appendChild(editExtraPriceText);
extraBackground.appendChild(editExtraPrice);
}

exitButton.addEventListener('click', exitButtonFunction);
editContainerDoneButton.addEventListener('click', popUpDoneButttonFunction)

}
}

}

















function deleteButtonFunction(){
calculationToWorkOnAmount();
if(!popUpCreated)
{
if(AmountOfCalculationsToWorkOn == 0)
{


popUpCreated = true;

warningSign = document.createElement('div');
warningSign.setAttribute('class',"warningSign2");



mainContainer = document.getElementById('mainContainer');
mainContainer.appendChild(warningSign);


warningSignDiv = document.createElement('div');
warningSignDiv.setAttribute('class', 'warningSignDiv');
warningSign.appendChild(warningSignDiv);

warningSignImg = document.createElement('img');
warningSignImg.setAttribute('src',"images/warningIcon.png");
warningSignDiv.appendChild(warningSignImg);

warningSignTextDiv = document.createElement('div');
warningSignTextDiv.setAttribute('class', 'warningSignTextDiv');
warningSignDiv.appendChild(warningSignTextDiv);

deleteWarningSignMessage1 = document.createElement('h2');
deleteWarningSignMessage1.innerHTML = "Invalid operation:";
warningSignTextDiv.appendChild(deleteWarningSignMessage1);

deleteWarningSignMessage2 = document.createElement('p');
deleteWarningSignMessage2.innerHTML = "you need to add some information value in order to delete information";

warningSignTextDiv.appendChild(deleteWarningSignMessage2);


doneButtonForTheWarningSign = document.createElement('button');
doneButtonForTheWarningSign.innerHTML = 'Done'
doneButtonForTheWarningSign.setAttribute('id', 'warningSingButton');
warningSign.appendChild(doneButtonForTheWarningSign);

function doneButtonForTheWarningSignFunction(){
popUpCreated = false;
warningSign.parentElement.removeChild(warningSign);
}


doneButtonForTheWarningSign.addEventListener('click', doneButtonForTheWarningSignFunction)

}
else
{



deleteDiv = document.createElement('div');
deleteDiv.setAttribute('id','deleteDiv');
mainContainer.appendChild(deleteDiv);

closeButton = document.createElement('button');
closeButton.setAttribute('id','closeButtonForDeleteDiv');
closeButton.innerHTML = 'Done'
deleteDiv.appendChild(closeButton);

if(foodNumberContainer.length)
{textFood = document.createElement('h1');
textFood.setAttribute('id',"redText");
textFood.innerHTML = "Delete Food: ";
deleteDiv.appendChild(textFood);

optionFoodDiv = document.createElement('div');
optionFoodDiv.setAttribute("id","optionFoodDiv");
deleteDiv.appendChild(optionFoodDiv);

selectFood = document.createElement('select');
selectFood.setAttribute("id","selectFood");
optionFoodDiv.appendChild(selectFood);

deleteFoodButton = document.createElement('button');
deleteFoodButton.innerHTML = 'delete';
optionFoodDiv.appendChild(deleteFoodButton);
}





	

if(productNumberContainer.length){

textProduct = document.createElement('h1');
textProduct.setAttribute('id',"yellowText");
textProduct.innerHTML = "Delete Product: ";
deleteDiv.appendChild(textProduct);

optionProductDiv = document.createElement('div');
optionProductDiv.setAttribute("id","optionProductDiv");
deleteDiv.appendChild(optionProductDiv);

selectProduct = document.createElement('select');
selectProduct.setAttribute("id","SelectProduct");
optionProductDiv.appendChild(selectProduct);

deleteProductButton = document.createElement('button');
deleteProductButton.innerHTML = 'delete';
optionProductDiv.appendChild(deleteProductButton);


}









if(extraNumberContainer.length)
{


textExtra = document.createElement('h1');
textExtra.setAttribute('id',"greenText");
textExtra.innerHTML = "Delete Extra Amount of Money: ";
deleteDiv.appendChild(textExtra);


optionExtraDiv = document.createElement('div');
optionExtraDiv.setAttribute("id","optionExtraDiv");
deleteDiv.appendChild(optionExtraDiv);

selectExtra = document.createElement('select');
selectExtra.setAttribute("id","selectExtra");
optionExtraDiv.appendChild(selectExtra);


deleteExtraButton = document.createElement('button');
deleteExtraButton.innerHTML = 'delete';
optionExtraDiv.appendChild(deleteExtraButton);


}
	
for(let index = 0; index < foodNumberContainer.length; index++)
{
foodOption = document.createElement('option');
foodOption.setAttribute('value', 'f' + index);
foodOption.setAttribute('id', 'f' + index);
foodOption.innerHTML = foodNumberContainer[index].name;
 
selectFood.appendChild(foodOption);

}


for(let index = 0; index < productNumberContainer.length; index++)
{
productOption = document.createElement('option');
productOption.setAttribute('value', 'p' + index);
productOption.setAttribute('id', 'p' + index);
productOption.innerHTML = productNumberContainer[index].name;
 
selectProduct.appendChild(productOption);

}


for(let index = 0; index < extraNumberContainer.length; index++)
{
extraOption = document.createElement('option');
extraOption.setAttribute('value', 'e' + index);
extraOption.setAttribute('id', 'e' + index);
extraOption.innerHTML = extraNumberContainer[index].price;
 
selectExtra.appendChild(extraOption);

}

function closeButtonForDeleteDivFunction(){
deleteDiv.parentElement.removeChild(deleteDiv);
}




function deleteFoodButtonFunction(){
for(let index =0;index < foodNumberContainer.length; index++)
{
if(selectFood.value == 'f' + index)
{
foodNumberContainer.splice(index, 1);
document.getElementById('f' + index).parentElement.removeChild(document.getElementById('f' + index));
}

}

foodNumberContainerIndex = foodNumberContainer.length ;


if(!foodNumberContainer.length)
{
textFood.parentElement.removeChild(textFood);
optionFoodDiv.parentElement.removeChild(optionFoodDiv);
}

}



function deleteProductButtonFunction(){
for(let index =0;index < productNumberContainer.length; index++)
{
if(selectProduct.value == 'p' + index)
{
productNumberContainer.splice(index, 1);
document.getElementById('p' + index).parentElement.removeChild(document.getElementById('p' + index));
}

}



productNumberContainerIndex = productNumberContainer.length;


if(!productNumberContainer.length)
{
textProduct.parentElement.removeChild(textProduct);
optionProductDiv.parentElement.removeChild(optionProductDiv);
}

}


function deleteExtraButtonFunction(){
for(let index =0;index < extraNumberContainer.length; index++)
{
if(selectExtra.value == 'e' + index)
{
extraNumberContainer.splice(index, 1);
document.getElementById('e' + index).parentElement.removeChild(document.getElementById('e' + index));
}

}


extraNumberContainerIndex = extraNumberContainer.length;


if(!extraNumberContainer.length)
{
textExtra.parentElement.removeChild(textExtra);
optionExtraDiv.parentElement.removeChild(optionExtraDiv);
}

}






closeButton.addEventListener('click',closeButtonForDeleteDivFunction);

if(foodNumberContainer.length)
{
deleteFoodButton.addEventListener('click', deleteFoodButtonFunction);
}

if(productNumberContainer.length)
{
deleteProductButton.addEventListener('click', deleteProductButtonFunction);
}

if(extraNumberContainer.length)
{
deleteExtraButton.addEventListener('click', deleteExtraButtonFunction);
}

}



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
