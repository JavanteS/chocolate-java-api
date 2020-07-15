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
    <p>${coco.difficulty_level}</p>
    <p>${coco.category.name}</p>
     </div>
    </div>`

    container.appendChild(div)
}


function make_clickable(){
    let cakeId = document.getElementById("cakes")
    cakeId.addEventListener("click", fetchCakes)
    let cards = document.querySelectorAll(".chocolate-card")
    cards.forEach(card=>{
        card.addEventListener("click", displayCard)})
}


function clearPage(){
  let container = document.getElementById("chocolates-container")
  container.innerHTML = ""  
}

// function showCard(id){
    
    
 
//  }

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

function fetchCakes(){
    let container = document.getElementById("chocolates-container")
    container.innerHTML = ""
    fetch(BASE_URL+"/categories")
    .then(resp => resp.json())
    .then(data => displayCakes(data))
        
   
}

function displayCakes(cakes){
    clearPage()
    let cakeContainer = document.getElementById("cakes-container")
    let div = document.createElement("div")
    
}

document.addEventListener("DOMContentLoaded", ()=>{
    fetchChocolates()
   
    
})