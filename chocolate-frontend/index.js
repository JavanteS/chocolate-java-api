const BASE_URL = "http://localhost:3000"



function displayChocolates(){

    let container = document.getElementById("chocolates-container")
    return fetch(BASE_URL+"/recipes")

    .then(resp => resp.json())

    .then(json => {
        json.forEach(coco =>{
            displaychocolate(coco)
        })
   
    })
}

function displaychocolate(coco){
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

function flipCard(){
    let cards = document.querySelectorAll(".chocolate-card")
    cards.forEach(card=>{
        card.addEventListener("click", function(event){
            showcard(card.querySelector("img").dataset.id)
        })
        
    })
}

function showcard(card){
    
    fetch(BASE_URL+`/recipes/${card.id}`)
    .then(resp => resp.json)

    .then(data => {
        displayone(data)
    })

}

function display(data)

document.addEventListener("DOMContentLoaded", ()=>{
    displayChocolates()
    flipCard()
})