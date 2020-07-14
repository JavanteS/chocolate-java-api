const BASE_URL = "http://localhost:3000"

document.addEventListener("load", ()=>{
    displayChocolates()
})

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

fun

