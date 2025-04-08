const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

// populate the select element with product options
const productSelect = document.getElementById("product_name");
const productOptions = products.map(product => {
  const option = document.createElement("option");
  option.value = product.id;
  option.textContent = `${product.name} (${product.averagerating})`;
  return option;
});
productOptions.forEach(option => {
  productSelect.appendChild(option);
}
);

// using localstorage to store the form data
const form = document.getElementById("feedback-form");
const product_name = document.getElementById("product_name");
const rating = document.getElementById("rating");
const installation_date = document.getElementById("installation_date");
const features = document.getElementById("features");
const comments = document.getElementById("comments");
const user_name = document.getElementById("user_name");

const feedback = {
  product_name: "",
  rating: "",
  installation_date: "",
  features: "",
  comments: "",
  user_name: ""
};
const storedFeedback = JSON.parse(localStorage.getItem("feedback"));
if (storedFeedback) {
  feedback.product_name = storedFeedback.product_name;
  feedback.rating = storedFeedback.rating;
  feedback.installation_date = storedFeedback.installation_date;
  feedback.features = storedFeedback.features;
  feedback.comments = storedFeedback.comments;
  feedback.user_name = storedFeedback.user_name;
}
product_name.value = feedback.product_name;
rating.value = feedback.rating;
installation_date.value = feedback.installation_date;
features.value = feedback.features;
comments.value = feedback.comments;
user_name.value = feedback.user_name;
// add event listener to the form
form.addEventListener("submit", function (event) {
  event.preventDefault();
  feedback.product_name = product_name.value;
  feedback.rating = rating.value;
  feedback.installation_date = installation_date.value;
  feedback.features = features.value;
  feedback.comments = comments.value;
  feedback.user_name = user_name.value;

  localStorage.setItem("feedback", JSON.stringify(feedback));
  alert("Feedback submitted successfully!");
});
