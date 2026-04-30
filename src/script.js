const form = document.getElementById("productForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // clear previous errors
  document.getElementById("nameError").textContent = "";
  document.getElementById("descError").textContent = "";
  document.getElementById("catError").textContent = "";
  document.getElementById("priceError").textContent = "";

  const name = e.target.name.value.trim();
  const description = e.target.description.value.trim();
  const category = e.target.category.value;
  const price = e.target.price.value;
  const isPublish = e.target.isPublish.checked;

  let isValid = true;

  // Name validation
  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required";
    isValid = false;
  }

  // Description validation
  if (description.length < 10) {
    document.getElementById("descError").textContent =
      "Minimum 10 characters required";
    isValid = false;
  }

  // Category validation
  if (category === "") {
    document.getElementById("catError").textContent =
      "Please select a category";
    isValid = false;
  }

  // Price validation
  if (price === "" || price <= 0) {
    document.getElementById("priceError").textContent = "Enter a valid price";
    isValid = false;
  }

  if (!isValid) return;

  const product = {
    name,
    description,
    category,
    price,
    isPublish,
  };

  console.log(product);
  alert("Form submitted successfully!");
});
