
// Create an object:
let groceryCart = ["plums","pears","durian fruit","lemons","limes","yams","steak tips","lamb shank","tortillas","tuna","ham hocks"];
var cart1;
var cart2;
var cart3;
var cart4;

const shopperName = document.getElementById("shopperEl");
const shopButton = document.getElementById("cartGen");
const cartEl = document.getElementById("cart-contents");


shopButton.addEventListener('click', () => {    
  makeCart();
  cartEl.innerHTML =  printCart();
});
var shopper = {
  firstName: "Jim",
  lastName: "Stones",

   shopperCart: []
  }
shopperName.innerHTML = `${shopper.firstName} ${shopper.lastName}`;
function makeCart () { //altered this function to not recieve any parameters
  let cartItems = [];
  for (i=0; i < 4; i++) {  //creates the random cart indexes
    cartItems[i] = randInt(0,8);
    cartItems[i] = groceryCart[cartItems[i]]; //is this insane?
    console.log(cartItems[i])
  }

  for (let k = 0; k < cartItems.length; k++) { 
    shopper.shopperCart[k] = cartItems[k];
}
}


function randInt (min, max) { 
    return Math.floor(Math.random() * (max - min)  + min);
}


function printCart() {
  printedCart = [];
  for (i=0; i< shopper.shopperCart.length ; i++) { //reworked this so there'd be a space in the array items
    printedCart[i]= " " + shopper.shopperCart[i]
  }
  return (printedCart)
  console.log(shopper.shopperCart)
}

makeCart();
printCart();
