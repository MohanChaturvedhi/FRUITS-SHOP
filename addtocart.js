const product=[
    {
    id:0,
    image:'images/apples.jpg',
    title:'Apple',
    price:'$20'
   },
   {
    id:1,
    image:'images/apples.jpg',
    title:'Banana',
    price:'$10'
   },
   {
    id:2,
    image:'images/apples.jpg',
    title:'orange',
    price:'$12'
   },
   {
    id:3,
    image:'images/apples.jpg',
    title:'WaterMelon',
    price:'$22'
   },
   {
    id:4,
    image:'images/apples.jpg',
    title:'pineapple',
    price:'$20'
   },
   {
    id:5,
    image:'images/apples.jpg',
    title:'guava',
    price:'$8'
   },
   {
    id:6,
    image:'images/apples.jpg',
    title:'papaya',
    price:'$20'
   },

]

const categories=[...new Set(product.map((item)=>{
    return item;
}))]

let cart=document.getElementById('root')
cart.innerHTML=categories.map((item)=>{
    var {image,title,price}=item;
    return(
    `<div class="box">
       <div class="img-box">
         <img src=${image}></img>
         </div>
         <div class="left">
         <p>${title}</p>
         <h2>${price}</h2>
         <button>Add to cart</button>
         </div>
     </div> `
    )
}).join('')
