
// Create an object:
document;
let grocerycart = ["plums","pears","durian fruit","lemons","limes","yams","steak tips","lamb shank","tortillas","tuna","ham hocks"];
var cart1;
var cart2;
var cart3;
var cart4;

function makeaCart (i1, i2, i3, i4) {
  let cartItems = [i1,i2,i3,i4];
  let cart = [];

  for (let i = 0; i < 5; i++) {
    let grocery = grocerycart[i];
    cart.push(grocery);
      }
      return cart.toString();
}



function randInt (min, max) { 
    return Math.floor(Math.random() * (max - min)  + min);
}



var shopper = {
  firstName: "Jim",
  lastName: "Stones",
  
   cart1: randInt (0, 8),
   cart2: randInt (0, 8),
   cart3: randInt (0, 8),
   cart4: randInt (0, 8),

   shopperCart: makeaCart(cart1,cart2,cart3,cart4)
   
  }

  console.log(shopper.cart1);
  console.log(shopper.cart2);
  console.log(shopper.cart3);
  console.log(shopper.cart4);
  

function printCart() {
  return shopper.shopperCart;
}
