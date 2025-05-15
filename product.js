function getSingleProduct() {
  let productId = window.location.search.split('=')[1];

  fetch(`https://dummyjson.com/products/${productId}`)
    .then(response => response.json())
    .then(res => {
      let parentDiv = document.getElementById('parentDiv');

      let cardHTML = `
        <div class="container mt-4">
          <div class="row g-4">

            <!-- Card -->
            <div class="col-12 col-md-4">
              <div class="card h-100">
                <img src="${res.thumbnail}" class="card-img-top" alt="..." style="height:200px; object-fit: cover;">
                <div class="card-body">
                  <h5 class="card-title">${res.title}</h5>
                  <p class="card-text">${res.description}</p>
                  <p class="card-text"><strong>Price:</strong> $${res.price}</p>
                  <p class="card-text"><strong>Category:</strong> ${res.category}</p>
                  <p class="card-text"><strong>Brand:</strong> ${res.brand}</p>
                </div>
              </div>
            </div>

            <!-- Carousel -->
            <div class="col-12 col-md-8">
              <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="${res.images[0]}" class="d-block w-100" alt="Slide 1" style="height:450px; object-fit: cover;">
                  </div>
                  <div class="carousel-item">
                    <img src="${res.images[1]}" class="d-block w-100" alt="Slide 2" style="height:450px; object-fit: cover;">
                  </div>
                  <div class="carousel-item">
                    <img src="${res.images[2]}" class="d-block w-100" alt="Slide 3" style="height:450px; object-fit: cover;">
                  </div>
                </div>

                <!-- Black Buttons -->
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true" style="background-color: black; border-radius: 50%; width: 40px; height: 40px;"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true" style="background-color: black; border-radius: 50%; width: 40px; height: 40px;"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      `;

      parentDiv.innerHTML = cardHTML;
    });
}

getSingleProduct();

