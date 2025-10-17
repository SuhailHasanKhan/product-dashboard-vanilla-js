// Coding Project 2

const apiLink = "https://www.course-api.com/javascript-store-products";

function fetchProductsThen() {
    
    fetch(apiLink)
      .then((res) => res.json())
      .then((data) => {
        data.forEach((product) => {
            console.log("Product Name: ", product.fields.name);
        });
      })
      .catch((err) => {
        console.error("The following error has occured:", err.message);
      });
}