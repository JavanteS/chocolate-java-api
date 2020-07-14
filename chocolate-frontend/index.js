const BASE_URL = "http://localhost:3000"

document.addEventListener("load", ()=>{
    displayChocolates()
})

function displayChocolates(){
    return fetch(BASE_URL+"/recipes")

    .then(resp => resp.json())

    .then(json => console.log(json))
}

