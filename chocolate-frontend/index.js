const BASE_URL = "http://localhost:3000"

// this array has all of the recipes
// let arrayCart = []
class Chocolate{
    constructor(coco){
        this.id = coco.id
        this.title = coco.title
        this.price = coco.price
        this.product_details = coco.product_details
        this.quanity = coco.quanity
        this.img_url = coco.img_url
        this.category = coco.category 

    }
    renderChocolate(){
    return `<div class="chocolate-card" data-id="${this.id}">
    <img data-id="${this.id}" src="${this.img_url}"/>
    <div class="container" >
    <h2>${this.title}</h2>
    <p>$${this.price}</p>
    <p data-category="${this.category.id}">${this.category.name}</p>
    <a class= "add-to-cart" href="#">Add to cart</a>
     </div>
    </div>`
    }
}
// myChocolate = new Chocolate(coco)
// myChocolate.renderChocolate()

function fetchChocolates(){

    let container = document.getElementById("chocolates-container")
    let div = document.createElement("div")
    return fetch(BASE_URL+"/items")

    .then(resp => resp.json())

    .then(json => {
        json.forEach(coco =>{
            let choco = new Chocolate(coco)
            // displayChocolates(coco)
            div.innerHTML += choco.renderChocolate()
            container.appendChild(div)
            
        })
        make_clickable()
    })
}

// function displayChocolates(coco){
//     let div = document.createElement("div")
//     let container = document.getElementById("chocolates-container")
//     div.innerHTML += `<div class="chocolate-card" data-id="${coco.id}">
//     <img data-id="${coco.id}" src="${coco.img_url}"/>
//     <div class="container" >
//     <h2>${coco.title}</h2>
//     <p>$${coco.price}</p>
//     <p data-category="${coco.category.id}">${coco.category.name}</p>
//     <a class= "add-to-cart" href="#">Add to cart</a>
//      </div>
//     </div>`

//     container.appendChild(div)
// }


function make_clickable(){
    let links = document.querySelectorAll(".nav-links")
    let home = document.querySelector(".logo")
    home.addEventListener("click", homePage)
    links.forEach(link => {
        link.addEventListener("click", displayLinks)
    })

    let cards = document.querySelectorAll(".chocolate-card")
    cards.forEach(card=>{
        card.querySelector("img").addEventListener("click", displayCard)})
    
    let form = document.getElementById("recipeForm")
    form.addEventListener("click", displayForm)

    // let add = document.querySelectorAll(".add-to-cart")

    // for(let i = 0; i < add.length; i++){
    // add[i].addEventListener("click", totalItems)
    // }
    
}

function displayForm(){
    // clearThisPage()
    // clearPage()
    let formPage = document.getElementById("recipe-Form")
    let form = `
    
    <form>

    <label>Title</label>
    <input type="text" id="title"><br>

    <label>Product Details</label>
    <input type="text" id="product_details"><br>

    <label>Price per box</label>
    <input type="text" id="price"><br>

    <label>Quanity</label>
    <input type="text" id="quanity"><br>

    <input type="submit">
    </form>   `

    formPage.innerHTML = form

    document.querySelector("form").addEventListener("submit", addChocolate)

}

function addChocolate(){
    event.preventDefault()

}

function homePage(){
    clearPage()
    clearThisPage()
    fetchChocolates()
}


function clearPage(){
  let container = document.getElementById("chocolates-container")
  container.innerHTML = ""  
}

function clearThisPage(){
    let cakeContain = document.getElementById("cakes-container")
    cakeContain.innerHTML = ""
}

function displayCard(){
    
    let id = event.target.dataset.id
    let container = document.getElementById("chocolates-container")
    let div = document.createElement("div")
    clearPage()

    fetch(BASE_URL+"/items/"+id)
     .then(resp => resp.json())
 
     .then(data => {
         div.innerHTML += `<div class="back-card">
         <h3>${data.title}</h3>
         <img data-id="${data.id}" src="${data.img_url}"/>
         <p>${data.product_details}</p>
         <p>${data.quanity}<p>
         
         `
         
     })
   
     container.appendChild(div)
}


function displayLinks(){
    clearPage()
    clearThisPage()
    let cakeContainer = document.getElementById("cakes-container")
    let div = document.createElement("div")
    let id = event.target.dataset.id
    return fetch(BASE_URL+"/categories/"+id)
    .then(resp => resp.json())
    .then(data => {
        // let cake = data.find(({e}) => e === "Cake")
            data.recipes.forEach(sweet => {
            
            div.innerHTML += `
            <div data-id="${data.id}" class="category">
            <h1>${data.name}</h1>

            <img src="${sweet.img_url}"/>
            <p>${sweet.title}</p>
            <p>${sweet.price}</p>
            </div>`

        
        cakeContainer.appendChild(div)})
    })   
}

function cartArray(){
    fetch(BASE_URL+"/items")
    .then(resp => resp.json())
    .then(items => {
        items.forEach(item =>{
            arrayCart.push(item)
        })
    })
}



// function totalItems(){
//     let nums = localStorage.getItem("totalItems")
//     nums = parseInt(nums)
//     if(nums){
//         localStorage.setItem("totalItems", nums + 1)
//         document.querySelector("#recipeForm span").textContent = nums + 1
//     }
//     else{
//         localStorage.setItem("totalItems", 1)
//         document.querySelector("#recipeForm span").textContent = 1
//     }
    
// }




document.addEventListener("DOMContentLoaded", ()=>{
    fetchChocolates()
    cartArray()
    
    
    
    
})