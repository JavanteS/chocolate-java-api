const BASE_URL = "http://localhost:3000"

class Category{
    constructor(cat){
        this.id = cat.id 
        this.name = cat.name
    }

    renderCat(){
        return `
        <a id="${this.name}" href="#" data-id = "${this.id}">${this.name}</a>`
    }
}

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
     </div>
     <button id="delete" data-id="${this.id}">Delete</button>
    </div>`
    }
}

function fetchChocolates(){

    let container = document.getElementById("chocolates-container")
    let div = document.createElement("div")
    return fetch(BASE_URL+"/items")

    .then(resp => resp.json())

    .then(json => {
        json.forEach(coco =>{
            let choco = new Chocolate(coco)
            container.innerHTML += choco.renderChocolate()
            
           make_clickable() 
        })
        
        
    })
}




function make_clickable(){
    
    let link = document.querySelector(".nav-links")
    let home = document.querySelector(".logo")
    home.addEventListener("click", homePage)
    
    link.addEventListener("click", displayCats)
    

    let cards = document.querySelectorAll(".chocolate-card")
    cards.forEach(card=>{
        card.querySelector("img").addEventListener("click", displayCard)})
    
    let form = document.getElementById("recipeForm")
    form.addEventListener("click", displayForm)

    // let edits = document.querySelectorAll("#Update-item")
    // edits.forEach(edit =>{
    //     edit.addEventListener("click", editItem)
    // })

    let d = document.querySelectorAll("#delete")
     d.forEach(del => {
        del.addEventListener("click", deleteItem)
     })


    
    
}

function displayForm(){
     
     clearPage()
     
    let formPage = document.getElementById("recipe-Form")
     fetch(BASE_URL+"/categories")
     .then(resp => resp.json())
     .then(categories =>{
        let category_buttons = categories.map(category=>
            `
            <input type="radio" class="radio-coco" id="category" name="${category.name}" value="${category.id}"></input>
            <label>${category.name}</label>`
        ).join("")
        let form = `
    
        <form>
            
        <label>Category</label><br>
        
        ${category_buttons}<br>
    
        <label>Title:</label>
        <input type="text" id="title"><br>
    
        <label>Product Details:</label>
        <input type="text" id="product_details"><br>
    
        <label>Price per box:</label>
        <input type="text" id="price"><br>
    
        <label>Quanity:</label>
        <input type="text" id="quanity"><br>
    
        <label>Img-url:</label>
        <input type="text" id="img_url"><br>
    

        <input type="submit">
        </form>   `
    
        formPage.innerHTML = form
    
        document.querySelector("form").addEventListener("submit", addChocolate)

     })
}

function editItem(){

}

function deleteItem(){

    event.preventDefault()

    let id = event.target.dataset.id
    fetch(BASE_URL+"/items/"+id,{
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'

        }
    })
    .then(event.target.parentElement.remove())
}


function addChocolate(){

    event.preventDefault()

    let id = Array.from(document.querySelectorAll(".radio-coco")).find(r => r.checked).value;

    const chocolate = {
         title: document.getElementById("title").value,
         product_details:  document.getElementById("product_details").value,
         price:       document.getElementById("price").value,
         quanity:    document.getElementById("quanity").value,
         img_url: document.getElementById("img_url").value,
         category_id:   id

    }

    fetch(BASE_URL+"/items",{
        method: "POST",
        body: JSON.stringify(chocolate),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'

        }
    })

    .then(resp => resp.json())
    .then(json => {
        json.forEach(coco =>{
            let choco = new Chocolate(coco)
            let container = document.querySelector("#chocolates-container") 
            container.innerHTML += choco.renderChocolate()
            
            make_clickable()
            clearForm()
        })
        
        
    })

}

function homePage(){
    clearPage()
    clearForm()
    fetchChocolates()
}

function clearForm(){
    let fod = document.getElementById("recipe-Form")
    fod.innerHTML = ""
}


function clearPage(){
  let container = document.getElementById("chocolates-container")
  container.innerHTML = ""  
}

function clearThisPage(){
    let cakeContain = document.getElementById("cakes-container")
    cakeContain.innerHTML = ""
}

function clearLinks(){
    let links = document.getElementById("linked")
    linked.innerHTML = ""
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
         <p>$${data.price}</p>
         <p>${data.quanity} boxes in stock</p>
        
         
         `
         
     })
   
     container.appendChild(div)
}

function displayCats(){
    clearPage()
    clearForm()
    let container = document.getElementById("chocolates-container")
    fetch(BASE_URL+"/categories")
    .then(resp => resp.json())
    .then(cats =>{
        cats.forEach(cat =>{
            let catt = new Category(cat)
            container.innerHTML += catt.renderCat()
            make_clickable()

            let linkz = document.querySelectorAll("#chocolates-container > a")
            linkz.forEach(link =>{
                link.addEventListener("click", displayLinks)
            })

        }) 
    })
}


function displayLinks(){
    
    
    let container = document.getElementById("chocolates-container")
    container.innerHTML = "" 
    let cakeContainer = document.getElementById("cakes-container")
    let div = document.createElement("div")
    let id = event.target.dataset.id
    return fetch(BASE_URL+"/categories/"+id)
    .then(resp => resp.json())
    .then(data => {
            data.items.forEach(sweet => {
            
            container.innerHTML += `
            
            <div data-id="${sweet.id}" class="category">
            <h3>${sweet.title}</h3>
            <img data-id="${sweet.id}" src="${sweet.img_url}"/>
            <p>Price per box: $${sweet.price}</p>
            <p>Stock Inventory: ${sweet.quanity}</p>
            </div>`

            let classes = document.querySelectorAll(".category")
            classes.forEach(c =>{
                c.addEventListener("click", displayCard)

            })
        })
    })   
}

window.addEventListener("DOMContentLoaded", ()=>{
    fetchChocolates()
    
    
    
    
    
    
})