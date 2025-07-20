import { cart, addToCart } from "../data/cart.js";
import { products, loadProducts } from "../data/products.js";
import { formatCurrency } from "./utils/money.js";

loadProducts(renderProductsGrid); //will send a request, but it takes time so we need to wait for the response to load
// modules help with naming conflict,
let productsHTML = "";

function renderProductsGrid() {
  products.forEach((product) => {
    productsHTML += `
    <div class="product-container">
      <div class="product-image-container">
        <img class="product-image"
          src="${product.image}">
      </div>

      <div class="product-name limit-text-to-2-lines">
        ${product.name}
      </div>

      <div class="product-rating-container">
        <img class="product-rating-stars"
          src="images/ratings/rating-${product.rating.stars * 10}.png">
        <div class="product-rating-count link-primary">
          ${product.rating.count}
        </div>
      </div>

      <div class="product-price">
        $${formatCurrency(product.priceCents)}
      </div>

      <div class="product-quantity-container">
        <select>
          <option selected value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      ${product.extraInfoHTML()}
      
      <div class="product-spacer"></div>

      <div class="added-to-cart">
        <img src="images/icons/checkmark.png">
        Added
      </div>

      <button class="add-to-cart-button button-primary js-add-to-cart"
      data-product-id="${product.id}">
        Add to Cart
      </button>
    </div>
  `;
  });

  //after adding each product, we add all of this into the grid
  document.querySelector(".js-products-grid").innerHTML = productsHTML;

  function updateCartQuantity() {
    let cartQuantity = 0;

    //getting the cartQuantity by going through the cart and adding each value of quantity
    cart.forEach((cartItem) => {
      cartQuantity += cartItem.quantity;
    });
    //now we update the website by setting the html to whatever value we get
    document.querySelector(".js-cart-quantity").innerHTML = cartQuantity;
  }

  //to ensure this happens, we listen to whenever user clicks the addCart button, when thats clicked, we retrieve the id and call a function while
  //simoulensouly update the cart
  document.querySelectorAll(".js-add-to-cart").forEach((button) => {
    button.addEventListener("click", () => {
      const productId = button.dataset.productId; //retrieves the data value of product-id in the html
      ``;

      addToCart(productId); //add it to the cart
      updateCartQuantity(); //update the cart quantity
    });
  });
}

//dynamically creating a template for each product, we use the product array and take in whatever data we need ot take
