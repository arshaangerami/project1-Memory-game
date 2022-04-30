//acsess to my html elements with querySelectorAll
const gameCards = document.querySelectorAll('.game-card')
console.log(gameCards)

//Flip card to reveal the character image
function flipBack(){
    // console.log("hi")
    // console.log(this)
    this.classList.toggle('flip')

}

// Add eventListener to each card when I click on ech of them do flipBack function
gameCards.forEach(card => card.addEventListener('click',flipBack))
