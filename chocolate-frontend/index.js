const BASE_URL = "http://localhost:3000"

// this array has all of the recipes
let arrayCart = []


function fetchChocolates(){

    let container = document.getElementById("chocolates-container")
    return fetch(BASE_URL+"/recipes")

    .then(resp => resp.json())

    .then(json => {
        json.forEach(coco =>{
            displayChocolates(coco)
            make_clickable()
        })
    })
}

function displayChocolates(coco){
    let div = document.createElement("div")
    let container = document.getElementById("chocolates-container")
    div.innerHTML += `<div class="chocolate-card" data-id="${coco.id}">
    <img data-id="${coco.id}" src="${coco.img_url}"/>
    <div class="container" >
    <h2>${coco.title}</h2>
    <p>$${coco.price}</p>
    <p data-category="${coco.category.id}">${coco.category.name}</p>
    <a class= "add-to-cart" href="#">Add to cart</a>
     </div>
    </div>`

    container.appendChild(div)
}


function make_clickable(){
    let links = document.querySelectorAll(".nav-links")
    let home = document.querySelector(".logo")
    //  let singles = docmuent.querySelectorAll(".category")
    // singles.forEach(single=>{
    //     single.addEventListener("click", displayCard)
    // })
    // single.addEventListener("click", displayCard)
    home.addEventListener("click", homePage)
    links.forEach(link => {
        link.addEventListener("click", displayLinks)
    })

    let cards = document.querySelectorAll(".chocolate-card")
    cards.forEach(card=>{
        card.querySelector("img").addEventListener("click", displayCard)})
    
    let form = document.getElementById("recipeForm")
    form.addEventListener("click", displayForm)

    let add = document.querySelectorAll(".add-to-cart")

    for(let i = 0; i < add.length; i++){
    add[i].addEventListener("click", totalItems)
    }
    
}

function displayForm(){
    clearThisPage()
    clearPage()

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

    fetch(BASE_URL+"/recipes/"+id)
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
    fetch(BASE_URL+"/recipes")
    .then(resp => resp.json())
    .then(items => {
        items.forEach(item =>{
            arrayCart.push(item)
        })
    })
}



function totalItems(){
    let nums = localStorage.getItem("totalItems")
    num = parseInt(nums)
    if(nums){
        localStorage.setItem("totalItems", nums + 1)
    }
    
}




document.addEventListener("DOMContentLoaded", ()=>{
    fetchChocolates()
    cartArray()
    
    
    
    
})