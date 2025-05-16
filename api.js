fetch('https://dummyjson.com/products')
//  api is fetching 
.then(res => res.json())
// response is sent 

// .then(console.log);
//  response was coming in array form so first broke it down 
.then(res=>{
    for (let index = 0; index < res.products.length; index++) {
        console.log(res.products[index])
        let products  =  res.products[index];  
        //   storing data in a variable 

          let getData=document.getElementById('getData')
    //   calling div and now making card 
getData.innerHTML+=  `
  <div class="card" style="width: 14rem;" onclick="singleCard(${products.id})">
    <img src="${products.thumbnail}" class="card-img-top" alt="Product Thumbnail" style="width: 100%; height:180px;">
    <div class="card-body">
      <h5 class="card-title">${products.title}"</h5>
      <p class="card-text">${products.description}"</p>
       <h4 class="card-price">${products.price}"</h5>
      <a href="#" class="btn btn-primary">Buy Now</a>
      <p class="warranty information">${products.warrantyInformation}"</p>
      <p class="availabilityStatus">${products.availabilityStatus}"</p>

    </div>
  </div>
`;

    }
})
.catch(err=> console.log(err))

function singleCard(id){
    window.location.href="./product.html?productdetail="+id
}