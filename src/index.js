const ramenMenu = document.querySelector('#ramen-menu')

ramenMenu.addEventListener('click', handleClick)

function handleClick(e){
    if (e.target.className === 'detail-image'){
        displayRamenInfo(e)
    }
}

function displayRamenInfo(e){
    const ramenId = e.path[0].id
    const ramenImage = e.path[0].src
    const ramenImageName = e.path[0].alt
    const ramenRestaurant = e.srcElement.name



    let index = ramenId
    const ramenDetail = document.querySelector('#ramen-detail')
    console.log(e)
    ramenDetail.innerHTML = `
     <img class="detail-image" src=${ramenImage} alt=${ramenImageName} />
     <h2 class="name">${ramenImageName}</h2>   
     <h3 class="restaurant">${ramenRestaurant}</h3>  
   `
}




const renderRamens = ramen => {
    let ramenMenu = document.querySelector('#ramen-menu')
    let newDiv = document.createElement('div')
    // let 
    newDiv.className = 'card'
    newDiv.dataset.id = ramen.id

    newDiv.innerHTML = `
    <img class="detail-image" src=${ramen.image} alt=${ramen.name} id=${ramen.id} name = ${ramen.restaurant} />
    `
    ramenMenu.append(newDiv)

    // let detailImage = document.querySelector('.detail-image')
    // detailImage.addEventListener('click', showDetails)

    // function showDetails(){
    //     console.log('yoooooo')
    // }
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

