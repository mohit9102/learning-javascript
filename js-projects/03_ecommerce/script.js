document.addEventListener(`DOMContentLoaded`,  () => {
  

  // creating array of product with key like id, name, price
  const products = [
    {id: 1, name: "product 1", price: 29.99 },
    {id: 2, name: "product 2", price: 19.99 },
    {id: 3, name: "product 3", price: 59.99 }

  ];
  
  // create the cart to add the prduct in the cart
  let cart = [];
  

  // grabing the element after the dom loadded
  const productList = document.getElementById("product-list");
  const cartItems = document.getElementById("cart-items");
  const emptyCartMessage = document.getElementById("empty-cart");
  const cartTotalMessage = document.getElementById("cart-total");
  const checkOutBtn = document.getElementById("checkout-btn");
  const totalPriceDisplay = document.getElementById("total-price");


  /// Randering or Displaying the product data  on the product listener conatiner
  products.forEach(product => {
    const productDiv = document.createElement('div')
     productDiv.classList.add('product')
     productDiv.innerHTML = `
     <span>${product.name} - $${product.price.toFixed(2)}</span>
     <button data-id = "${product.id}"> Add to cart</button>
     `;
    productList.appendChild(productDiv);

  });
  
  // add the event listener each of the button we have so that we add to cart the product
  productList.addEventListener('click', (e)=>{
    // console.log("clicked");
    if(e.target.tagName === 'BUTTON'){
          // console.log("clicked");
          const productId = parseInt(e.target.getAttribute('data-id'));
          const product = products.find(p => p.id === productId)

          addToCart(product)
         

    }

  });

  function addToCart(product){
    cart.push(product);
    saveItems();
    renderCart();
    
  }

  
 
  function renderCart(){
    cartItems.innerText = "";
    let totalPrice = 0;

    if(cart.length > 0){
        emptyCartMessage.classList.add("hidden")
        cartTotalMessage.classList.remove("hidden");
        cart.forEach((item, index) => {
          totalPrice += item.price;
          const cartItem = document.createElement("div");
          cartItem.classList.add('product')
          cartItem.innerHTML = `<span>${item.name} - $${item.price}</span>
          <button data-id =" ${item.id}">Remove</button>`;
          cartItems.appendChild(cartItem)
          totalPriceDisplay.textContent = `${totalPrice}`;
        });
    }
    else{
      emptyCartMessage.classList.remove("hidden");
      totalPriceDisplay.textContent = `0.00`;
    }
  }
 
  ///Removing the item from cart
  cartItems.addEventListener('click', (e) => {
    if(e.target.tagName === "BUTTON"){
      // console.log('remove');
      const RI = parseInt(e.target.getAttribute("data-id"))
      const index = cart.findIndex(item => item.id == RI);
      removeFromCart(index);
      
    }
  })

  function removeFromCart(index){

    if(index !== -1){
      cart.splice(index,1)
      renderCart();
    }
  }

  // saving items or product on the local storage
  function saveItems(){
    localStorage.setItem('cart', JSON.stringify(cart))
  }
   // Loading cart from localStorage
  function loadCartFromLocalStorage() {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      cart = JSON.parse(savedCart);  // Parse the string back into an array
      renderCart();
    }
  }


  checkOutBtn.addEventListener('click', () => {
    cart.length = 0;
    alert("Checkout Succesfully");
    renderCart();
  })
  loadCartFromLocalStorage()

});























































// document.addEventListener("DOMContentLoaded", () => {
//   const products = [
//     { id: 1, name: "Product 1", price: 29.99 },
//     { id: 2, name: "Product 2", price: 19.99 },
//     { id: 3, name: "Product 3", price: 59.999 },
//   ];

//   const cart = [];

//   const productList = document.getElementById("product-list");
//   const cartItems = document.getElementById("cart-items");
//   const emptyCartMessage = document.getElementById("empty-cart");
//   const cartTotalMessage = document.getElementById("cart-total");
//   const totalPriceDisplay = document.getElementById("total-price");
//   const checkOutBtn = document.getElementById("checkout-btn");

//   products.forEach((product) => {
//     const productDiv = document.createElement("div");
//     productDiv.classList.add("product");
//     productDiv.innerHTML = `
//     <span>${product.name} - $${product.price.toFixed(2)}</span>
//     <button data-id="${product.id}">Add to cart</button>
//     `;
//     productList.appendChild(productDiv);
//   });

//   productList.addEventListener("click", (e) => {
//     if (e.target.tagName === "BUTTON") {
//       const productId = parseInt(e.target.getAttribute("data-id"));
//       const product = products.find((p) => p.id === productId);
//       addToCart(product);
//     }
//   });

//   function addToCart(product) {
//     cart.push(product);
//     renderCart();
//   }

//   function renderCart() {
//     cartItems.innerText = "";
//     let totalPrice = 0;

//     if (cart.length > 0) {
//       emptyCartMessage.classList.add("hidden");
//       cartTotalMessage.classList.remove("hidden");
//       cart.forEach((item, index) => {
//         totalPrice += item.price;
//         const cartItem = document.createElement("div");
//         cartItem.innerHTML = `
//         ${item.name} - $${item.price.toFixed(2)}
//         `;
//         cartItems.appendChild(cartItem);
//         totalPriceDisplay.textContent = `${totalPrice.toFixed(2)}`;
//       });
//     } else {
//       emptyCartMessage.classList.remove("hidden");
//       totalPriceDisplay.textContent = `$0.00`;
//     }
//   }

//   checkOutBtn.addEventListener("click", () => {
//     cart.length = 0;
//     alert("Checkout successfully");
//     renderCart();
//   });
// });
