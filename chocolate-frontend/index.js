const BASE_URL = "http://localhost:3000"



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
    <p>Level: ${coco.difficulty_level}</p>
    <p data-category="${coco.category.id}">${coco.category.name}</p>
     </div>
    </div>`

    container.appendChild(div)
}


function make_clickable(){
    // let cakeId = document.getElementById("cakes")
    // cakeId.addEventListener("click", displayCakes)
    let links = document.querySelectorAll(".nav-links")
    links.forEach(link => {
        link.addEventListener("click", displayLinks)
    })

    let cards = document.querySelectorAll(".chocolate-card")
    cards.forEach(card=>{
        card.addEventListener("click", displayCard)})
}


function clearPage(){
  let container = document.getElementById("chocolates-container")
  container.innerHTML = ""  
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
         <p>${data.difficulty_level}</p>
         <p>${data.instructions}<p>
         `
         
     })
   
     container.appendChild(div)
}


function displayLinks(){
    clearPage()
    let cakeContainer = document.getElementById("cakes-container")
    let div = document.createElement("div")
    let id = event.target.dataset.id
    return fetch(BASE_URL+"/categories/"+id)
    .then(resp => resp.json())
    .then(data => {
        // let cake = data.find(({e}) => e === "Cake")
            data.recipes.forEach(sweet => {
            
            div.innerHTML += `<h1>${data.name}</h1>
       
            <p>${sweet.title}</p>
            <img src="${sweet.img_url}"/>`

        
        cakeContainer.appendChild(div)})
    })
        
        
    
    
}

document.addEventListener("DOMContentLoaded", ()=>{
    fetchChocolates()
   
    
})