const renderRamens = ramen => {
    let ramenMenu = document.querySelector('#ramen-menu')
    let newDiv = document.createElement('div')
    // let 
    newDiv.className = 'card'
    newDiv.dataset.id = ramen.id

    newDiv.innerHTML = `
    <img class="detail-image" src=${ramen.image} alt=${ramen.name} />
    `
    ramenMenu.append(newDiv)
}

// write your code here
window.onload = function () { 
    const url = 'http://localhost:3000/ramens'
    fetch(url)
    .then(res => res.json())
    .then(data => {
// console.log(data)
        data.forEach(renderRamens)
    })
}

