// Function to display a popup message when a product is added to the cart
function addToCart(productId) {
  var productName = getProductById(productId);
  var message = productName + " added to cart!";
  alert(message);
}

// Dummy function to fetch the product name by its ID (replace with actual implementation)
function getProductById(productId) {
  // In a real implementation, you would fetch the product name from a database or API using the productId
  // For now, let's use a dummy list of products
  var products = [
    { id: 1, name: "Outdoor Furniture" },
    { id: 2, name: "Gardening Tools" },
    { id: 3, name: "Indoor Plants" },
    { id: 4, name: "Home Decor" },
    { id: 5, name: "Kitchen Utensils" }
  ];

  // Loop through the products array to find the matching product name
  for (var i = 0; i < products.length; i++) {
    if (products[i].id === productId) {
      return products[i].name;
    }
  }

  // Return a default value if no matching product is found
  return "Unknown Product";
}

// Function to validate and submit the contact form
function submitForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;

  if (name === "" || email === "") {
    alert("Please fill in all fields.");
  } else {
    alert("Form submitted successfully!");
    // Add code here to submit the form data to a server or perform further actions
  }
}

// Get the checkbox elements
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

// Get the total price element
const totalPriceElement = document.getElementById('totalPrice');

// Calculate the total price based on the selected checkboxes
function calculateTotalPrice() {
  let totalPrice = 0;
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      const price = parseInt(checkbox.getAttribute('data-price'));
      totalPrice += price;
    }
  });
  totalPriceElement.textContent = totalPrice;
}

// Add event listeners to checkboxes
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', calculateTotalPrice);
});
