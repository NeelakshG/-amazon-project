export let cart;

loadFromStorage();

//check to see if local data is saved, if not we generate a cart ourselves
export function loadFromStorage() {
  cart = JSON.parse(localStorage.getItem("cart"));

  if (!cart) {
    cart = [
      {
        productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity: 2,
        deliveryOptionId: "1",
      },
      {
        productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
        quantity: 1,
        deliveryOptionId: "2",
      },
    ];
  }
}

//make a method that saves the cart into local storage
function saveToStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

//anytime user clicks add to cart, this method is called
export function addToCart(productId) {
  let matchingItem;

  //go through each item in the cart
  
  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      //if the productId from the cart is equal to the product ID of the cartItem we send over
      matchingItem = cartItem;
      //we send over the object of that individual item
    }
  });

  if (matchingItem) { //if matchingItem already exists, we update the quanitity
    matchingItem.quantity += 1;
  } else {
    //otherwise we add a new element to the array 
    cart.push({
      productId: productId,
      quantity: 1,
      deliveryOptionId: "1",
    });
  }

  //whatver update we  make, save it to local storage
  saveToStorage();
}

export function removeFromCart(productId) {
  const newCart = []; //have a new array that will store everything we need

  cart.forEach((cartItem) => {
    //add everything in the cart that isn't the item we want to delete
    if (cartItem.productId !== productId) {
      newCart.push(cartItem); //push it into the new array
    }
  });

  //save this new array into cart
  cart = newCart;
  //save it into storage
  saveToStorage();
}

export function updateDeliveryOption(productId, deliveryOptionId) {
  let matchingItem;
//go through each item in teh cart
  cart.forEach((cartItem) => {
    //we look for the item we want
    if (productId === cartItem.productId) {
      matchingItem = cartItem; //this new varibale points to the cartItem in the array
    }
  });

  matchingItem.deliveryOptionId = deliveryOptionId; //change the delieveryOption with the new one

  //save to local storage
  saveToStorage();
}
