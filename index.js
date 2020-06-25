/***** Beginning of Starter Code ****/

const playerContainer = document.querySelector(".player-container")

// render one player to the DOM
function renderPlayer(player) {
  // create an element for the outer div
  const playerDiv = document.createElement("div")

  // set attributes on the outer div
  playerDiv.className = "player"
  playerDiv.dataset.number = player.number

  // use innerHTML to create any child elements of the div
  playerDiv.innerHTML = `
    <h3>${player.name} (<em>${player.nickname}</em>)</h3>
    <img src="${player.photo}" alt="${player.name}">
    <p class="likes"><span>${player.likes}</span> likes</p>
    <button class="like-button">❤️</button>
  `

  // append the element to the container
  playerContainer.append(playerDiv)
}

// for each player in the array, render to the DOM
PLAYERS.forEach(renderPlayer)

/***** End of Starter Code ****/




/***** Deliverable 1 *****/
let head = document.querySelector("h1#header")
head.addEventListener('click',function(e) {
  if (head.style.color === "red") {
    head.style.color = "black"
  } else {
    head.style.color = "red"
  }
})



/***** Deliverable 2 *****/
button = document.getElementById("button1")
button.addEventListener('click',function(e){
  e.preventDefault()
 let formS = document.getElementById('new-player-form')
 const playerDiv = document.createElement("div")
  // set attributes on the outer div
  playerDiv.className = "player"
  playerDiv.dataset.number = formS.number.value
  let likes = 0;
  // use innerHTML to create any child elements of the div
  playerDiv.innerHTML = `
    <h3>${formS.name.value} (<em>${formS.nickname.value}</em>)</h3>
    <img src="${formS.photo.value}" alt="${formS.name.value}">
    <p class="likes"><span>${likes}</span>  likes</p>
    <button class="like-button">❤️</button>
  `

  // append the element to the container
  playerContainer.append(playerDiv)
  formS.reset();
})



//


players = document.getElementById('players')
players.addEventListener('click', function(e){
  if(e.target.textContent === "❤️"){
  button = e.target
  const scoreSpan = button.parentNode.querySelector("span")
  scoreSpan.textContent = parseInt(scoreSpan.textContent) + 1
  }
  })
/***** Deliverable 3 *****/
