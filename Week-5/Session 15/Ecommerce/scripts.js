let productViews = new WeakMap();
let cartItems = new WeakSet();

// Function to increment the number of times a product page is viewed
function incrementProductViews(productId) {
  if (!productViews.has(productId)) {
    productViews.set(productId, 1);
  } else {
    productViews.set(productId, productViews.get(productId) + 1);
  }
}

// Function to add a product to the cart
function addToCart(productId) {
  if (cartItems.has(productId)) {
    return "Product already in cart";
  } else {
    cartItems.add(productId);
    return "Product added to cart";
  }
}
