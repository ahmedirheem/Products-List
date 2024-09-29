const products = [
  { name: "Headphone", category: "Electronics", img: "electronic4.jpg", price: 100 },
  { name: "Bag", category: "Bags", img: "bag3.jpg", price: 25 },
  { name: "T-Shirt", category: "Clothes", img: "clothes1.jpg", price: 40 },
  { name: "Drone Camera", category: "Electronics", img: "electronic1.jpg", price: 700 },
  { name: "Bag", category: "Bags", img: "bag1.jpg", price: 30 },
  { name: "Men Shoes", category: "Shoes", img: "shoes1.jpg", price: 50 },
  { name: "Jeans", category: "Clothes", img: "clothes2.jpg", price: 50 },
  { name: "O'clock", category: "Electronics", img: "electronic6.jpg", price: 60 },
  { name: "Women Shoes", category: "Shoes", img: "shoes3.jpg", price: 60 },
  { name: "Bag", category: "Bags", img: "bag2.jpg", price: 40 },
  { name: "Watch", category: "Electronics", img: "electronic5.jpg", price: 40 },
  { name: "Jacket", category: "Clothes", img: "clothes3.jpg", price: 80 },
  { name: "Baby Shoes", category: "Shoes", img: "shoes2.jpg", price: 30 },
  { name: "Camera", category: "Electronics", img: "electronic2.jpg", price: 300 },
  { name: "Sport Shoes", category: "Shoes", img: "shoes4.jpg", price: 70 },
  { name: "Microphone", category: "Electronics", img: "electronic3.jpg", price: 90 },
  { name: "Hoodie", category: "Clothes", img: "clothes4.jpg", price: 25 },
  { name: "Bag", category: "Bags", img: "bag4.jpg", price: 50 },
];

const displayProducts = (productsDisplayed) => {
  const productDisplay = document.getElementById("products-list");
  productDisplay.innerHTML = "";

  productsDisplayed.forEach(product => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    productCard.innerHTML = `
      <img src="assets/${product.img}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>Category: ${product.category}</p>
      <p>Price: $${product.price}</p>
    `;

    productDisplay.appendChild(productCard)
  });
}

// Initial Display
displayProducts(products);

// Filter Functionality
const filterButtons = document.querySelectorAll(".category-btn");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {

    filterButtons.forEach(btn => btn.classList.remove("active"))

    button.classList.add("active");
    const category = button.getAttribute("data-category");

    if(category === "All"){
      displayProducts(products);
    }else{
      const filteredProducts = products.filter(product => product.category === category);
      displayProducts(filteredProducts);
    }
  })
})
