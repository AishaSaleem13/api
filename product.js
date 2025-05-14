function getSingleProduct(){

    let productId =window.location.search.split('=')[1]

    .fetch(`https://dummyjson.com/products/${productId}`)
    .then(response => response.json())
    .then(res=>{
        let parentDiv=document.getElementById('parentDiv')

        parentDiv.innerHTML+=`<div class="card" style="width: 18rem;">
    <img src=${res.thumbnail} class="card-img-top" alt="..." style="width: 100%; height:180px;">
    <div class="card-body">
      <h5 class="card-title">${res.title}</h5>
      <p class="card-text">${res.description}</p>
        <p class="card-text">${res.price}</p>
        <p class="card-text">${res.category}</p>
        <p class="card-text">${res.brand}</p>
</div>
        `
    })


}

getSingleProduct()