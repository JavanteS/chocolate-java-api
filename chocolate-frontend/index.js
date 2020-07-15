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
    div.innerHTML += `<div class="chocolate-card" id="${coco.id}">
    <img src="${coco.img_url}"/>
    <div class="container">
    <h2>${coco.title}</h2>
    <p>${coco.difficulty_level}</p>
     </div>
    </div>`

    container.appendChild(div)
}



function showCard(id){
    
   return fetch(BASE_URL+`/recipes/${id}`)
    .then(resp => resp.json)

    .then(data => {
        displayOne(data)
    })

}

function displayOne(data){
    let container = document.getElementById("chocolates-container")
    container.innerHTML = ""
    let div = document.createElement("div")
    div.innerHTML = `<div class="info-container" id="${data.id}>
    <p>${data.title}</p>
    <p>${data.difficulty_level}</p>
    <p>${data.instructions}</p>
    </div>`

    container.appendChild(div)

    
}

function fetchcategories(){
    // let cakeId = document.getElementById("cakes")
    // let chocolates = Array.from(document.querySelectorAll(".chocolate-card").children)

    fetch(BASE_URL+"/categories")
    .then(resp => resp.json())
    .then(data => displayCategories(data))
    // cake.addEventListener("click", event=> {
    //     cake = chocolates.filter

    // }
    // )
}


function make_clickable(){
    let cakeId = document.getElementById("cakes")

}

function displayCategories(data){
    let cakeId = document.getElementById("cakes")
    let container = document.getElementById("chocolates-container")
      cakeId.addEventListener("click", displayCakes)

}



document.addEventListener("DOMContentLoaded", ()=>{
    fetchChocolates()
    fetchcategories()
    
    
    function flipCard(){
        let cards = document.querySelectorAll(".chocolate-card")
        cards.forEach(card=>{
            card.addEventListener("click", function(event){
                showCard(card.querySelector("img").dataset.id)
            })
            
        })
    }
    
    
   
    
})