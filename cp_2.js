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

async function fetchProductsAsync() {
    try {
        let res = await fetch(apiLink);
        let details = await res.json();
        displayProducts(details);
    } catch (error) {
        handleError(error);
    }
}

function displayProducts(products) {
    let prodContainer = document.getElementById("product-container");
    let fiveProducts = products.slice(0, 5);
    fiveProducts.forEach((p) => {
        let { name, price, image } = p.fields;
        let imgLink = image && image[0] && image[0].url ? image[0].url : "";
        let listing = document.createElement("div");
        listing.className = "product-listing";
        let img = document.createElement("img");
        img.src = imgLink;
        img.alt = name;

        let prodTitle = document.createElement("div");
        prodTitle.className = "product-title";
        prodTitle.textContent = name;

        let prodPrice = document.createElement("div");
        prodPrice.className = "product-price";
        prodPrice.textContent = `$${price}`;

        listing.appendChild(img);
        listing.appendChild(prodTitle);
        listing.appendChild(prodPrice);
        prodContainer.appendChild(listing);

    });
}

function handleError(error) {
    console.error(`ERROR 404: ${error.message}`);
}



fetchProductsAsync();