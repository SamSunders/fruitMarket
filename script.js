function Fruit (name, price, quantity) {
	this.name = name;
	this.price = price;
	this.quantity = 0;
	};

function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}

//// The Random Number is only returning integers, not decimals.

var price = randomNumber(0.5,9.99);
console.log(price);
// var apples = new Fruit ("apples", randomNumber(0.5,9.99), 0);
// var bananas = new Fruit ("bananas", randomNumber(0.5,9.99), 0);
// var pears = new Fruit ("pears", randomNumber(0.5,9.99), 0);
// var oranges = new Fruit ("oranges", randomNumber(0.5,9.99), 0);
// var kiwi = {price: 8, quantity: 0};
var apples = {price: randomNumber(0.5, 9.99), quantity: 0};
var bananas = {price: randomNumber(0.5, 9.99), quantity: 0};
var oranges = {price: randomNumber(0.5, 9.99), quantity: 0};
var pears = {price: randomNumber(0.5, 9.99), quantity: 0};


$(document).ready(function(){
	//console.log("This is the price: " ,price);
	var testNum = 5;
	//console.log("TEST NUM 1: " , testNum);
$("[name='submitButtonApple']").on('click', function() {
			apples.quantity++;
			$(".appleQuantity").html("Apple Quantity: " + apples.quantity);
			});

$("[name='submitButtonOranges']").on('click', function() {
			oranges.quantity++;
			$(".orangesQuantity").html("Orange Quantity: " + oranges.quantity);
			});

$("[name='submitButtonPear']").on('click', function() {
			pears.quantity++;
			$(".pearQuantity").html("Pear Quantity: " + pears.quantity);
			});

$("[name='submitButtonBanana']").on('click', function() {
			bananas.quantity++;
			$(".bananaQuantity").html("Banana Quantity: " + bananas.quantity);
			});

var totalCash = 100;
/*var inventory = [];*/
//console.log("TEST NUM 2: " , testNum);

/*var currentPrice = priceGenerator();
*/
var totalSpent;


/*var fruits = ["apples", "bananas", "pears", "oranges"];
console.log(apples.price);
console.log(fruits.length);*/
/*var cash = 100;
var fruitSelected=apples;*/
function buyFruit(fruitSelected){
		cash -= applePrice;
		appleQuantity++;
		spentOnApples += applePrice;
		};


//console.log("TEST NUM 3: " , testNum);
setInterval(function(){
	//writePrice(priceGenerator(randomNumber(0.5, 9.99)));
	writePrice();
	apples.price = priceGenerator(apples);
	oranges.price = priceGenerator(oranges);
	pears.price= priceGenerator(pears);
	bananas.price = priceGenerator(bananas);
	console.log("This is the apple: " ,apples.price);
	console.log("This is the price var: " , price)

}, 2000);


function writePrice() {
	$(".applePriceC").html("Current Price: " + apples.price);
	$(".orangePriceC").html("Current Price: " + oranges.price);
	$(".pearPriceC").html("Current Price: " + pears.price);
	$(".bananaPriceC").html("Current Price: " + bananas.price);

}
priceGenerator(apples);
console.log("this is apples.price" , apples.price);
priceGenerator(apples);
console.log("this is apples.price" , apples.price);
priceGenerator(apples);

//console.log("TEST NUM 4: " , testNum);
function priceGenerator (fruit) {
		var num = randomNumber(0,1);
		console.log(price);
		if (num == 0){
			fruit.price = fruit.price + 0.5;
		} else {
			fruit.price = fruit.price - 0.5;
		} 
		if (fruit.price < 0.50) {
			fruit.price = 0.50;
			return fruit.price;
		} else if (fruit.price > 9.99) {
			fruit.price = 9.99;
			return fruit.price;
		} else {
			//console.log(price);
			console.log(fruit.price);
			return fruit.price;	

	};
	//console.log(price);

};
});

//console.log("TEST NUM 5: " , testNum);
//priceGenerator(kiwi);
//priceGenerator(testNum);

// var changePrices = function(){
// for(var i = 0; i<fruits.length; i++){
// 	fruits[i] += upOrDown;
// }
// }

// var upOrDown = function(){
// 	//go up or down .50
// 	if (randomNumber(0,1) > .5){
// 		return .5;
// 	} else {
// 		return -.5;
// 	}
// }
