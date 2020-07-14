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
    div.innerHTML += `<div class="chocolate-card">
    <h2>${coco.title}</h2>
    <img src="${coco.img_url}"/>
    <p>${coco.difficulty_level}</p>
    </div>`

    container.appendChild(div)
}

function flipCard(){
    let cards = document.querySelectorAll(".chocolate-card")
    cards.forEach(card=>{
        card.addEventListener("click", function(event){
            showcard(card)
        })
        
    })
}

function showcard(card){

    



}

document.addEventListener("DOMContentLoaded", ()=>{
    displayChocolates()
})