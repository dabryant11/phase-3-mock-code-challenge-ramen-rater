// write your code here
function getRamens(){ 
    const url = 'http://localhost:3000/ramens'
    fetch(url)
    .then(res => res.json())
    .then(data => {

        data.forEach(renderRamens)
    })
}

function renderRamens = ramen => {
    let ramenMenu = document.querySelector('#ramen-menu')
    let newDiv = document.createElement('div')
    // let 
    // newDiv.className = 'card'
    // newDiv.dataset.id = ramen.id

    newDiv.innerHTML = `
    <img class="detail-image" src=${ramen.image} alt=${ramen.name} />
    <h2 class="name">${ramen.name}</h2>
    <h3 class="restaurant">${ramen.restaurant}</h3>
    `
    ramenMenu.append(newDiv)
}




function displayAllRamens(ramens){
    ramens.forEach(ramen => {
        renderRamens(ramen)
    })
}