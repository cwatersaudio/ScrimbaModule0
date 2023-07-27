
// Create an object:
let grocerycart = ["plums","pears","durian fruit","lemons","limes","yams","steak tips","lamb shank","tortillas","tuna","ham hocks"];

function makeaCart (i1, i2, i3, i4) {
  const cartItems = [i1,i2,i3,i4];
  const cart = [];

  for (let index = 0; index < cart.length; index++) {
    cart.push(grocerycart[cartItems[index]])
    
  }
}



function randInt (min, max) { 
    return Math.floor(Math.random() * (max - min)  + min);
}

function getCartContents (x, y, z, w) {
    let cartContents = [];
    cartContents.push(grocerycart[x]),
    cartContents.push(grocerycart[y]),
    cartContents.push(grocerycart[z]),
    cartContents.push(grocerycart[w])

    return cartContents;
    
}
var shopperCart = [];

var shopper = {
  firstName: "Jim",
  lastName: "Stones",
  rewardsHolder: true,
  
   cart1: randInt (0, 8),
   cart2: randInt (0, 8),
   cart3: randInt (0, 8),
   cart4: randInt (0, 8),

   shoppingCart: getCartContents(cart1,cart2,3,2)
  }

  console.log(shopper.cart1);
  console.log(shopper.cart2);
  console.log(shopper.cart3);
  console.log(shopper.cart4);
  console.log(shopper.shoppingCart);




